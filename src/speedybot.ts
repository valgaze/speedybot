import { CONSTANTS, mainRequester } from "./index";
import {
  CoreMakerequest,
  Destination,
  ENVELOPES,
  EventTypes,
  Message,
  MessageResponse,
  Message_Details,
  File_Details,
  Room_Details,
  SelfData,
  SpeedyFile,
  SpeedyFileUtils,
  StubbedRes,
  Submit_Details,
  ToMessage,
} from "./types";

import { AttachedData, $Magic, SpeedyError, Webhook } from "./types";

import {
  AbbreviatedSpeedyCard,
  HeaderConfig,
  SpeedyCard,
  checkers,
} from "./cards";

import { Middleware, MessageTypes } from "./types";

// props Nick to camel case
export class SpeedyBot<S extends string = string> {
  /**
   * @hidden
   */
  private middlewares: Array<Middleware<any>> = [];

  /**
   * @hidden
   */
  private topMiddleware: Middleware | null = null;

  /**
   * @hidden
   */
  private fallbackText = "Your client does not support Adaptive Cards";

  /**
   * @hidden
   */
  private errorHandler!: (e: SpeedyError) => void | unknown;

  constructor(
    private _token: string = "",
    private makeRequest: CoreMakerequest = mainRequester
  ) {}

  /**
   * @hidden
   */
  private secrets: Record<S, string | number> = {} as Record<
    S,
    string | number
  >;
  // private _secrets: Record<string, string | number> = {};

  addSecret(key: S, value: string | number) {
    this.secrets[key] = value;
  }

  addSecrets(payload: { [key: string]: string | number }) {
    Object.entries(payload).forEach(([k, v]) => this.addSecret(k as S, v));
  }

  getSecret(key: S): string | number | undefined {
    return this.secrets[key];
  }

  /**
   * @hidden
   */
  public API = {
    messages: "https://webexapis.com/v1/messages",
    attachments: "https://webexapis.com/v1/attachment/actions",
    user: {
      self: "https://webexapis.com/v1/people/me",
      getPersonDetails: "https://webexapis.com/v1/people",
    },
    rooms: "https://webexapis.com/v1/rooms",
    roomDetails: "https://webexapis.com/v1/rooms",
    webhooks: "https://webexapis.com/v1/webhooks",
  };

  /**
   * Sets the token to transact with APIs (needed to send messages, receive webhooks, files, etc)
   * @param token
   *
   * @returns
   */
  setToken(token: string): this {
    this._token = token;
    return this;
  }

  getToken(): string {
    return this._token;
  }

  setFallbackText(t: string) {
    this.fallbackText = t;
  }

  insertStepToFront(middleware: Middleware): void {
    if (this.topMiddleware) {
      this.middlewares.unshift(this.topMiddleware);
    }
    this.topMiddleware = middleware;
  }

  pickRandom<P>(list: P[]): P;
  pickRandom<P>(min: number, max: number): number;
  pickRandom<P>(listOrMin: P[] | number, max?: number): P | number;
  pickRandom<P>(listOrMin: P[] | number, max?: number): P | number {
    if (Array.isArray(listOrMin)) {
      const items = listOrMin as P[];
      return items[Math.floor(Math.random() * items.length)];
    } else {
      const min = listOrMin as number;
      return Math.floor(Math.random() * (max! - min + 1)) + min;
    }
  }

  /**
   * Core part of SpeedyBot Listener, it MUST return `$.next` (continues chain) or `$.end`
   *
   * The $ parameter's `$.send` and `$.reply` methods will be autobound to incoming message
   *
   * ```ts
   * const Bot = new SpeedyBot();
   * Bot.addStep(async ($) => {
   *  await Bot.sendTo($.author.email, "my message");
   *  const parentMessageID = $.id;
   *  await Bot.replyTo(parentMessageID, $.author.email, "my great reply message");
   *  await $.send("Hello the right person");
   *  await $.reply("Reply to the right message");
   *  return $.next;
   * });
   *
   * ```
   *
   */
  addStep<T = AttachedData>(middleware: Middleware<T>): void {
    this.middlewares.push(middleware);
  }

  addStepSequence<T = AttachedData>(middlewares: Middleware<T>[]): void {
    this.middlewares.push(...middlewares);
  }

  public regex(reg: RegExp, cb: Middleware) {
    this.addStep(async ($) => {
      if ($.text) {
        if (reg instanceof RegExp) {
          const matched = reg.test($.text.toLowerCase());
          if (matched) {
            return await cb($);
          }
        }
      }
      return $.next;
    });
  }

  /**
   * Shorthand-handler for files w/ image types
   *
   * For use w/ vision + text prompting systems
   * @param cb
   *
   *
   * @param formats
   */
  public onCamera(cb: Middleware, formats: string[] = []) {
    this.addStep(async ($) => {
      if ($.file) {
        const { extension } = $.file;
        const photos = ["png", "jpg", "jpeg", ...formats];
        if (photos.includes(extension)) {
          return await cb($);
        }
      }
      return $.next;
    });
  }

  public exact(keyword: string, cb: Middleware) {
    this.insertStepToFront(async ($) => {
      if (typeof keyword === "string") {
        if ($.text === keyword) {
          return await cb($);
        }
      }
      return $.next;
    });
  }

  public contains(keyword: string | string[], cb: Middleware) {
    // should do a checkStrings option
    this.addStep(async ($) => {
      if (typeof keyword === "string") {
        if ($.text?.toLowerCase().includes(keyword.toLowerCase())) {
          return await cb($);
        }
      } else if (Array.isArray(keyword)) {
        for (const item of keyword) {
          if ($.text?.toLowerCase().includes(item.toLowerCase())) {
            return await cb($);
          }
        }
      }
      return $.next;
    });
  }

  private onReject(e: SpeedyError): void {
    if (this.errorHandler) {
      this.errorHandler(e);
    }
  }

  public captureError(func: (e: SpeedyError) => void | unknown) {
    this.errorHandler = func;
  }

  /**
   * Main workhorse that takes in a webhook and passes it through provided flows
   *
   * ```ts
   * import
   *
   * ```
   * @param env
   * @param startingCtx
   * @returns
   */
  async runMiddleware(
    env: ENVELOPES,
    startingCtx: { [key: string]: string | number } = {}
  ): Promise<boolean> {
    const { roomId } = env.data;
    const botInst = this;
    try {
      const messageType = this.detectType(env);
      let roomType = "";
      if ("roomType" in env.data) {
        roomType = env.data.roomType;
      }
      // retrieve message + author details
      const { details, author: authorData } = await this.buildDetails(
        messageType,
        env
      );

      const [authorEmail] = authorData.emails;
      const [, authorDomain] = authorEmail.toLowerCase().split("@");

      // Flick these on as needed for middlewares
      let filePayload: SpeedyFileUtils | undefined = undefined;
      let attachedData: AttachedData | undefined = undefined;
      let textData: string | undefined;
      let mentionedPeople: string[] = [];
      let messageId = "";
      let parentIdVal;

      // Don't handle messages sent from bot itself
      // currently NOT blocking other bots, could be cool if they had own protocol to transact
      const proceed = await this.checkAuthor(authorData);
      if (!proceed) {
        return false; // no self-referential
      }

      if (messageType === "card") {
        const { inputs, messageId: id } = details as Submit_Details;
        attachedData = inputs as AttachedData;
        messageId = id;

        // no room type on attachmentActions :(
        const roomData = await this.getRoom(roomId);
        roomType = roomData.type;

        // But if it's a chip, attach to text & bail
        const chipToken = CONSTANTS.CHIP_LABEL;
        const isChip = inputs[chipToken];
        if (isChip) {
          textData = inputs[chipToken];
          attachedData = undefined;
        }

        const isDelete =
          inputs[CONSTANTS.submitToken] === CONSTANTS.action_delete;
        if (isDelete) {
          await this.deleteMessage(id);
          return true;
        }
      }

      if (messageType === "text" || messageType === "file") {
        const {
          parentId,
          id,
          roomType: roomType_val,
          text = textData,
          files,
          mentionedPeople: mentionedPeople_val = [],
        } = details as File_Details | Message_Details;
        parentIdVal = parentId;
        mentionedPeople = mentionedPeople_val;
        attachedData = undefined;
        messageId = id;
        roomType = roomType_val;
        textData = text ?? "";
        textData =
          roomType === "group"
            ? textData.split(" ").slice(1).join(" ") || ""
            : textData;

        if (files && files.length) {
          const [targetUrl] = files; // Only support for single files for now
          try {
            let fileData: SpeedyFile = await this.peekFile(targetUrl);
            filePayload = {
              ...fileData,
              async getData<T = unknown>() {
                const { data } = await botInst.getFile(targetUrl);
                return data as T;
              },
            };
          } catch (e) {
            const err = {
              message: "There was an issue obtaining file data",
              error: e,
              e,
              roomId,
            };
            this.onReject(err);
            return false;
          }
        }
      }

      // type AttachedData = Record<string, any>;

      const $Magic: $Magic = {
        next: true,
        end: false,
        messageType,
        id: messageId,
        author: {
          domain: authorDomain,
          email: authorEmail,
          id: authorData.id,
          org: authorData.orgId,
          name: authorData.displayName,
          type: authorData.type,
          profilePic: authorData.avatar,
        },
        text: textData,
        msg: {
          parentId: parentIdVal,
          roomId,
          roomType,
          mentionedPeople: mentionedPeople.slice(1), // strip @-mention of bot itself
        },
        file: filePayload,
        data: attachedData,
        ctx: startingCtx,
        buildDMLink(target: string, label: string): string {
          const url = `webexteams://im?email=${target}`;
          return this.buildLink(url, label ?? url);
        },
        debug() {
          return {
            messageType: this.messageType,
            text: this.text ?? "",
            data: this.data,
            messageId: this.id,
            author: {
              id: this.author.id,
              name: this.author.name,
              email: this.author.email,
            },
            hasFile: !!this.file,
            msg: {
              parentId: this.msg.parentId,
              roomId: this.msg.roomId,
              roomType: this.msg.roomType,
              mentionedPeople: this.msg.mentionedPeople,
            },
          };
        },
        async thread(
          threadData: [string | SpeedyCard, ...string[]] & {
            length: 1 | 2 | 3 | 4 | 5 | 6;
          }
        ) {
          let [root, ...messages] = threadData;
          const maxEntries = Math.min(messages.length, 5);
          const { id: parentId, roomId } = await this.send(root);
          for (let i = 0; i < maxEntries; i++) {
            const msg = messages[i];
            let msgObj: ToMessage = {
              parentId,
            };

            if (typeof msg === "string") {
              msgObj["markdown"] = msg;
              msgObj["text"] = msg;
              msgObj["roomId"] = roomId;
            }

            await botInst._send(msgObj);
          }
          return true;

          // type Thread = [root: string | SpeedyCard, ...messages: Array<string | SpeedyCard>] & { length: 1 | 2 | 3 | 4   5};
        },

        send(msg: Message) {
          return botInst.sendTo(roomId, msg);
        },
        reply(msg: string) {
          return botInst.replyTo(roomId, messageId, msg);
        },
        edit(messageObj: MessageResponse, msg: string) {
          return botInst.editMessage(messageObj.roomId, messageObj.id, msg);
        },
        card(config?: Partial<AbbreviatedSpeedyCard>) {
          return botInst.card(config);
        },
        buildLink(target: string, label?: string, noBold = false) {
          let link = `[${label || target}](${target})`;
          if (!noBold) {
            link = `**${link}**`;
          }
          return link;
        },
        buildDataSnippet(data: any, type = "json"): string {
          const msg = `
\`\`\`${type}
${type === "json" ? JSON.stringify(data, null, 2) : data}
\`\`\``;
          return msg;
        },
        pickRandom: <T>(listOrMin: T[] | number, max?: number): T | number => {
          if (Array.isArray(listOrMin)) {
            const items = listOrMin as T[];
            return items[Math.floor(Math.random() * items.length)];
          } else {
            const min = listOrMin as number;
            return Math.floor(Math.random() * (max! - min + 1)) + min;
          }
        },
        async sendFile<T = unknown>(data: T, fileExtension: string) {
          return botInst.sendFileTo(roomId, data, fileExtension);
        },
        async getFile(
          url: string,
          opts?: { responseType?: "arraybuffer" | "json" }
        ) {
          const fileData: SpeedyFile = await botInst.peekFile(url);
          const filePayload = {
            ...fileData,
            async getData<T = unknown>() {
              const { data } = await botInst.getFile(url);
              return data as T;
            },
          };
          return filePayload;
        },
        fillTemplate(
          utterances: string[],
          template: { [key: string]: string | number }
        ) {
          let payload;
          if (typeof utterances !== "string") {
            payload = this.pickRandom(utterances) || "";
          } else {
            payload = utterances;
          }

          const replacer: any = (
            utterance: string,
            target: string,
            replacement: string
          ) => {
            if (!utterance.includes(`$[${target}]`)) {
              return utterance;
            }

            return replacer(
              utterance.replace(`$[${target}]`, replacement),
              target,
              replacement
            );
          };

          for (const key in template) {
            const val = template[key];
            payload = replacer(payload, key, val);
          }

          return payload;
        },
        async clearScreen(repeatCount = 50) {
          const newLine = "\n";
          const repeatClamp = repeatCount > 7000 ? 5000 : repeatCount; // 7439 char limit
          const clearScreen = `${newLine.repeat(repeatClamp)}`;
          const requestOptions = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${botInst.getToken()}`,
              "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
              roomId,
              text: clearScreen,
              markdown: clearScreen,
            }),
          };
          const res = await botInst.makeRequest(
            botInst.API.messages,
            {},
            { rawInit: requestOptions }
          );
          return res as MessageResponse;
        },
      };

      if (this.topMiddleware) {
        const result = await this.topMiddleware($Magic);
        if (result === false || !result) {
          return false;
        }
      }

      for (const middleware of this.middlewares) {
        const result = await middleware($Magic);
        if (!result) {
          break;
        }
      }
    } catch (e) {
      const defaultMessage = `There was a catastrophic error ${e}`;
      let payload: SpeedyError = {
        message: defaultMessage,
        status: "00000",
        e,
      };
      if (typeof e === "object" && e !== null) {
        const { message = defaultMessage, status = "00000" } = e as Partial<{
          message: string;
          status: string;
        }>;
        payload = { message, status, roomId, e };
      }
      this.onReject(payload);
    }

    return true;
  }

  /**
   * @hidden
   */
  private resolveDestination(
    candidate: string | { personId: string }
  ): { toPersonEmail: string } | { roomId: string } | { toPersonId: string } {
    let target!: Destination;
    if (typeof candidate === "string") {
      if (checkers.isEmail(candidate)) {
        target = { toPersonEmail: candidate };
      } else {
        target = { roomId: candidate };
      }
    } else if (typeof candidate === "object" && "personId" in candidate) {
      target = { toPersonId: candidate.personId };
    }
    return target;
  }

  /**
   *
   * Send a message to a room, email, or personId
   *
   * ```ts
   *
   * import { SpeedyBot } from 'speedybot'
   * // 1) Initialize your bot w/ config
   * const Bot = new SpeedyBot({ token: '__REPLACE__ME__'});
   *
   * Bot.sendTo('targetEmail@account.com', '**here is a message**')
   * Bot.sendTo('aaa-bbb-ccc-ddd-eee-fff', '**Here is a message to a room**')
   * Bot.sendTo({toPersonId: 'xxxyyyzzz', '**here is a message**')
   *
   *
   * ```
   *
   *
   */
  async sendTo(
    emailOrRoomId: string | { personId: string },
    message: Message
  ): Promise<MessageResponse> {
    const target = this.resolveDestination(emailOrRoomId);
    if (typeof message === "string") {
      const payload = {
        ...target,
        markdown: message,
      };
      return this._send(payload);
    } else if (typeof message === "object") {
      const payload: ToMessage = {
        ...target,
        markdown: this.fallbackText,
        text: this.fallbackText,
        attachments: [
          {
            contentType: "application/vnd.microsoft.card.adaptive",
            content:
              "build" in message && typeof message.build === "function"
                ? message.build()
                : message,
          },
        ],
      };
      return this._send(payload);
    }
    throw new Error("Invalid message passed to sendTo");
  }

  /**
   * @hidden
   */
  public async _send(payload: ToMessage): Promise<MessageResponse> {
    const res = (await this.makeRequest(this.API.messages, payload, {
      method: "POST",
      token: this.getToken(),
    })) as StubbedRes<MessageResponse>;
    const json = await res.json();
    return json;
  }

  public async validateToken(token: string) {
    let valid = false;
    try {
      const res = await this.getSelf(token);
      if (res.id) {
        valid = true;
      }
    } catch (e) {
      valid = false;
    }
    return valid;
  }

  /**
   *
   * Convenience helper that creates a SpeedyCard
   *
   * ![cards](media://demo_sendcard.gif)
   *
   * ```ts
   * import { SpeedyBot } from 'speedybot-mini'
   * // 1) Initialize your bot w/ config
   * const CultureBot = new SpeedyBot('tokenPlaceholder');
   *
   * // 2) Export your bot
   * export default CultureBot;
   *
   * // 3) Do whatever you want!
   *
   * CultureBot.contains(["hi", "hey"],
   *  async ($bot, msg) => {
   *   const cardData = $bot.card({
   *     title: "SpeedyBot Hub",
   *     subTitle: "Sign the paperwork",
   *     chips: ["ping", "pong", "hi",],
   *     image: "https://github.com/valgaze/speedybot-mini/raw/deploy/docs/assets/logo.png?raw=true",
   *     url: "https://github.com/valgaze/speedybot-mini"
   *   });
   *   $bot.send(cardData);
   *  })
   *
   * ```
   */
  card(
    config?: Partial<AbbreviatedSpeedyCard & { label: string }>
  ): SpeedyCard {
    const card = new SpeedyCard();
    const {
      title = "",
      subTitle = "",
      image = "",
      data = {},
      chips = [],
      table = [],
      choices = [],
      backgroundImage = "",
    } = config ?? {};

    if (backgroundImage) {
      card.setBackgroundImage;
    }
    if (title) {
      card.addTitle(title);
    }

    if (subTitle) {
      card.addSubtitle(subTitle);
    }

    if (image) {
      card.setBackgroundImage(image);
    }

    if (Object.keys(data).length) {
      card.attachData(data);
    }

    if (chips.length) {
      card.addChips(chips);
    }

    if (choices.length) {
      card.addPickerDropdown(choices);
    }

    if (table) {
      if (Array.isArray(table) && table.length) {
        card.addTable(table);
      } else {
        if (Object.entries(table).length) {
          card.addTable(table);
        }
      }
    }
    return card;
  }

  public stashCard(
    secret: string | number,
    message?: string,
    unwrapLabel = CONSTANTS.unwrapLabel,
    destroyLabel = CONSTANTS.destroyLabel
  ): SpeedyCard {
    return this.card({ title: message || "Info" })
      .addDeleteButton(destroyLabel)
      .addSubcard(this.card().addSubtitle(String(secret)), unwrapLabel);
  }

  public errorCard(title: string, message: string) {
    return this.card().addBlock(
      this.card().addTitle(title).addSubtitle(message),
      { backgroundColor: "Attention" }
    );
  }

  public successCard(title: string, message: string) {
    return this.card().addBlock(
      this.card().addTitle(title).addSubtitle(message),
      { backgroundColor: "Good" }
    );
  }

  /**
   * Edit a message
   */
  public async editMessage(
    roomId: string,
    messageId: string,
    message: string
  ): Promise<MessageResponse> {
    const url = `https://webexapis.com/v1/messages/${messageId}`;
    const editPayload = {
      roomId,
      markdown: message,
    };

    const res = (await this.makeRequest(url, editPayload, {
      token: this.getToken(),
      method: "PUT",
    })) as StubbedRes<MessageResponse>;

    const json: MessageResponse = await res.json();
    return json;
  }

  public async replyTo(
    param1: MessageResponse | string,
    param2: string | undefined,
    param3?: string
  ): Promise<MessageResponse> {
    let roomId: string;
    let messageId: string;
    let msg: string;

    if (typeof param1 === "object") {
      // Handle the overload when param1 is an object (MessageResponse)
      roomId = param1.roomId; // Use the roomId from param1
      messageId = param1.id; // Use the messageId from param1
      msg = param2 || ""; // Use param2 as the message, default to an empty string if not provided
    } else {
      // Handle the overload when param1 is a string
      roomId = param1; // Use param1 as the roomId
      messageId = param2 || ""; // Use param2 as the messageId, default to an empty string if not provided
      msg = param3 || ""; // Use param3 as the message, default to an empty string if not provided
    }

    const payload: ToMessage = {
      markdown: msg,
      text: msg,
      parentId: messageId,
      roomId,
    };
    return this._send(payload);
  }

  private detectType(envelope: ENVELOPES): MessageTypes {
    let type: EventTypes = "text";
    if (envelope.resource === "messages") {
      if ("files" in envelope.data && envelope.data.files?.length) {
        const { files = [] } = envelope.data;
        if (files.length) {
          type = "file";
        }
      }
    } else if (envelope.resource === "attachmentActions") {
      type = "card";
    }
    return type;
  }

  public async deleteMessage(msgId: string) {
    const url = `${this.API.messages}/${msgId}`;
    const res = await this.makeRequest(
      url,
      {},
      {
        token: this.getToken(),
        method: "DELETE",
      }
    );
    return res;
  }

  public async deleteWebhook(webhookId: string) {
    const url = `${this.API.webhooks}/${webhookId}`;
    await this.makeRequest(
      url,
      {},
      {
        token: this.getToken(),
        method: "DELETE",
      }
    );
    return;
  }

  async getWebhooks(): Promise<{ items: Webhook[] }> {
    const url = `${this.API.webhooks}`;
    const res = (await this.makeRequest(
      url,
      {},
      {
        method: "GET",
        token: this.getToken(),
      }
    )) as StubbedRes<{ items: Webhook[] }>;
    const json = await res.json();
    return json;
  }

  async fetchWebhooks(): Promise<
    {
      id: string;
      name: string;
      resource: string;
      targetUrl: string;
    }[]
  > {
    const webhooks = (await this.getWebhooks()) || [];
    const list = webhooks.items.map((webhook) => {
      const { id, name, resource, targetUrl } = webhook;
      return {
        id,
        name,
        resource,
        targetUrl,
      };
    });
    return list;
  }

  Setup(url, secret) {
    return Promise.all([
      this.createFirehose(url, secret),
      this.createAttachmentActionsWebhook(url, secret),
    ]).catch((e) => {
      throw e;
    });
  }

  async getRecentRooms(
    limit = 100
  ): Promise<{ type: string; title: string; id: string }[]> {
    const url = `${this.API.rooms}?max=${limit}&sortBy=lastactivity`;
    const res = (await this.makeRequest(
      url,
      {},
      {
        method: "GET",
        token: this.getToken(),
      }
    )) as StubbedRes<{ items: Room_Details[] }>;
    const json = await res.json();
    return json.items.map((item) => {
      const { type, title, id } = item;
      return {
        type,
        title,
        id,
      };
    });
  }

  /**
   * @hidden
   */
  public async createAttachmentActionsWebhook(url, secret?) {
    const payload: {
      resource: string;
      event: string;
      targetUrl: string;
      name: string;
      secret?: string;
    } = {
      resource: "attachmentActions",
      event: "created",
      targetUrl: url,
      name: `${new Date().toISOString()}_attachmentActions`,
    };
    if (secret) {
      payload.secret = secret;
    }
    return this.createWebhook(payload);
  }

  /**
   * @hidden
   */
  public async createFirehose(url, secret) {
    const payload: {
      resource: string;
      event: string;
      targetUrl: string;
      name: string;
      secret?: string;
    } = {
      resource: "messages",
      event: "created",
      targetUrl: url,
      name: `${new Date().toISOString()}_firehose`,
    };
    if (secret) {
      payload.secret = secret;
    }
    return this.createWebhook(payload);
  }

  async createWebhook(payload: {
    resource: string;
    event: string;
    targetUrl: string;
    name: string;
    secret?: string;
  }) {
    const url = `${this.API.webhooks}`;
    const res = (await this.makeRequest(url, payload, {
      method: "POST",
      token: this.getToken(),
    })) as StubbedRes<Webhook>;
    const json = await res.json();
    return json as Webhook;
  }

  private async checkAuthor(authorObj: SelfData): Promise<boolean> {
    const data = await this.getSelf();
    const { id } = data;
    return id !== authorObj.id;
  }

  public async getSelf(token?: string): Promise<SelfData> {
    const url = this.API?.user?.self;
    const res = (await this.makeRequest(
      url,
      {},
      {
        method: "GET",
        token: token ?? this.getToken(),
      }
    )) as Response;
    const json = (await res.json()) as SelfData;
    return json;
  }

  public async whoAmI(): Promise<SelfData & { webhooks: Webhook[] }> {
    const selfData = await this.getSelf();
    const { items: webhooks } = await this.getWebhooks();
    return {
      ...selfData,
      webhooks,
    };
  }

  // Incoming webhook details

  /**
   * @hidden
   */
  private async buildDetails(
    type: "card" | "text" | "file",
    envelope: ENVELOPES
  ): Promise<{
    author: SelfData;
    details: Message_Details | File_Details | Submit_Details;
  }> {
    const [author, data] = await Promise.all([
      this.getPerson(envelope.data.personId),
      this.getData(type, envelope),
    ]);
    return {
      author,
      details: data,
    };
  }

  public async getPerson(personId: string): Promise<SelfData> {
    const url = `${this.API.user.getPersonDetails}/${personId}`;
    const res = (await this.makeRequest(
      url,
      {},
      {
        method: "GET",
        token: this.getToken(),
      }
    )) as StubbedRes<SelfData>;
    const json = await res.json();
    return json;
  }

  public async getRoom(roomId: string): Promise<Room_Details> {
    const url = `${this.API.roomDetails}/${roomId}`.replace(" ", "");
    const res = (await this.makeRequest(
      url,
      {},
      {
        method: "GET",
        token: this.getToken(),
      }
    )) as StubbedRes<Room_Details>;
    const json = await res.json();
    return json;
  }

  /**
   * @hidden
   */
  private async getData(
    type: EventTypes,
    envelope: ENVELOPES
  ): Promise<Message_Details | Submit_Details | File_Details> {
    let url = this.API.messages;
    if (type === "card") {
      url = this.API.attachments;
    }
    const { data } = envelope;
    const { id } = data;
    url = `${url}/${id}`;
    const res = (await this.makeRequest(
      url,
      {},
      {
        method: "GET",
        token: this.getToken(),
      }
    )) as Response;
    const json = await res.json();
    if (type === "card") {
      return json as Submit_Details;
    }
    if (type === "text") {
      return json as Message_Details;
    }
    if (type === "file") {
      return json as File_Details;
    }
    return json as Message_Details | Submit_Details | File_Details;
  }

  private generateFileName() {
    return `${this.rando()}_${this.rando()}`;
  }

  /**
   * Generate a random string of 11 characters (letters + numbers)
   */
  public rando(): string {
    return Math.random().toString(36).slice(2);
  }

  /**
   * @hidden
   */
  private handleExtension(input = "") {
    const hasDot = input.indexOf(".") > -1;
    let fileName = "";
    const [prefix, ext] = input.split(".");
    if (hasDot) {
      if (!prefix || prefix === "*") {
        // '.json' case, generate prefix
        fileName = `${this.generateFileName()}.${ext}`;
      } else {
        // 'a.json' case, pass through
        fileName = input;
      }
    } else {
      // 'json' case, generate prefix, add .
      fileName = `${this.generateFileName()}.${prefix}`;
    }
    return fileName;
  }

  /**
   *
   * Send a file to a destination-- a downloadable file will be generated
   *
   * At minimum, provide the file data & desired file extension
   *
   * ```ts
   *
   * import { SpeedyBot } from 'speedybot'
   * const Bot = new SpeedyBot('__REPLACE__ME__')
   * const myData = { a: 1, b: 2, c: [1,2,3,'hello', 'bonjour']}
   * $bot.sendFileTo('target@email.com', myData, 'json')
   *
   * ```
   */
  public async sendFileTo(
    destination: string | { personId: string },
    data: any,
    extensionOrFileName: string,
    textLabel: string = "",
    contentType: string | null = null
  ) {
    const target = this.resolveDestination(destination);

    if (!extensionOrFileName) {
      throw new Error(
        `$(bot).sendDataAsFile: Missing filename/extension parameter, ex "myfile.png" or "*.png"`
      );
    }
    let finalContentType: string | null = contentType;
    if (!finalContentType) {
      finalContentType = this.guessContentType(extensionOrFileName);
      if (!finalContentType) {
        throw new Error(
          `$(bot).sendDataAsFile: Missing 'content-type' parameter, ex "image/png"`
        );
      }
    }
    const fullFileName = this.handleExtension(extensionOrFileName);
    const formData = new FormData();

    const isJSON =
      data && typeof data === "object" && finalContentType.includes("json");
    formData.append(
      "files",
      new Blob([isJSON ? JSON.stringify(data, null, 2) : data], {
        type: finalContentType,
      }),
      fullFileName
    );

    const [entry] = Object.entries(target);
    const [finalDestination, v] = entry;
    formData.append(finalDestination, v); // ex, toPersonEmail, a@a.com
    formData.append("text", textLabel);
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
      body: formData,
    };
    const res = (await this.makeRequest(
      this.API.messages,
      {},
      { rawInit: requestOptions }
    )) as Response;
    const json = await res.json();
    return json as MessageResponse;
  }

  /**
   * Get a (secured) file's contents, probably would use this for examining uploaded files
   * like JSON, excel (xlsx), etc
   *
   * ```ts
   *
   * import { SpeedyBot } from 'speedybot'
   *
   * const Bot = new SpeedyBot('__REPLACE__ME__')
   * Bot.on('file', $ => {
   *    const fileData = Bot.getFile($.details.urls)
   *
   * })
   * // 1) Initialize your bot w/ config
   * const CultureBot = new SpeedyBot(config);
   *
   * // 2) Export your bot
   * export default CultureBot;
   *
   * // 3) Do whatever you want!
   *
   * CultureBot.contains(["hi", "hey"],
   *  async ($bot, msg) => {
   *   const [fileUrl] = trigger.message.files || []
   *   const fileData = await $bot.getFile(fileUrl, {
   *     responseType: 'arraybuffer',
   *   })
   *   const { fileName, extension, type } = fileData
   *   $bot.say(
   *     `The file you uploaded (${fileName}), is a ${extension} file of type ${type}`
   *   )
   *    // with fileData.data you have access to an arrayBuffer with the raw bytes of that file
   * })
   *
   * ```
   * */
  public async getFile(
    url: string,
    opts: {
      responseType?: "arraybuffer" | "json";
    } = {}
  ): Promise<SpeedyFile & { data: unknown }> {
    const res = (await this.makeRequest(
      url,
      {},
      {
        method: "GET",
        token: this.getToken(),
      }
    )) as StubbedRes;
    const {
      contentType: type,
      name: fileName,
      extension,
    } = this.extractFiledata(res as StubbedRes);

    // data could be binary if user needs it
    const shouldProbablyBeArrayBuffer =
      (!type.includes("json") && !type.includes("text")) ||
      type.includes("image");
    let data: ArrayBuffer | string | {} | object = res;
    if (opts.responseType === "arraybuffer" || shouldProbablyBeArrayBuffer) {
      try {
        data = await res.arrayBuffer();
      } catch (e) {
        // failed, fallback
        data = {};
      }
    } else {
      try {
        if (type.includes("json")) {
          data = (await res.json()) as object;
        } else {
          // should we not presume text?
          data = await res.text();
        }
      } catch (e) {
        data = {};
      }
    }
    const payload = {
      url: url,
      name: fileName,
      extension,
      contentType: type,
      data,
    };
    return payload;
  }

  private extractFiledata(res: StubbedRes) {
    const type = res.headers.get("content-type");
    const contentDispo = res.headers.get("content-disposition");
    const fileName = contentDispo
      ?.split(";")[1]
      .split("=")[1]
      .replace(/\"/g, "");
    const extension = fileName.split(".").pop() || "";

    return { contentType: type, extension, name: fileName };
  }

  public async peekFile(url: string): Promise<Omit<SpeedyFile, "data">> {
    const res = await this.makeRequest(
      url,
      {},
      {
        method: "HEAD",
        token: this.getToken(),
      }
    );
    return { url, ...this.extractFiledata(res as StubbedRes) };
  }

  /**
   * @hidden
   */
  private guessContentType(extensionOrFileName: string) {
    // Most users probably won't know/care about content-types, attempt to guess it from
    // file-extension if explicit content-type isn't
    const hasDot = extensionOrFileName.indexOf(".") > -1;
    let extension = "";
    const pieces = extensionOrFileName.split(".");
    const hasMultipleDots = pieces.length > 2; // Little trick: if only one dot, there should only be 2 elements
    const [prefix, ext] = pieces;
    if (hasDot) {
      // ".png"
      // "a.png"
      // "*.png"
      if (!prefix || prefix === "*") {
        extension = ext;
      }
      // a.b.c.png
      if (hasMultipleDots) {
        // last piece will be extension
        extension = pieces.pop() as string;
      }
    } else {
      // "png"
      extension = prefix;
    }

    const mapping: { [key: string]: string } = {
      doc: "application/msword",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ppt: "application/vnd.ms-powerpoint",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      pdf: "application/pdf",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      bmp: "image/bmp",
      gif: "image/gif",
      png: "image/png",
      txt: "text/plain",
      csv: "text/csv",
      html: "text/html",
      json: "application/json",
      "*": "application/octet-stream", // #gbogh
      mp3: "audio/mpeg",
      mp4: "video/mp4",
      mpeg: "video/mpeg",
      mpkg: "application/vnd.apple.installer+xml",
      vf: "application/json", // voiceflow
    };
    const res = mapping[extension] || null;
    return res;
  }

  fuzzyMatch(candidate: string, options: string[]): boolean {
    const lowerCaseCandidate = candidate.toLowerCase();
    return options.some((option) =>
      option.toLowerCase().includes(lowerCaseCandidate)
    );
  }

  /**
   * Convert a list of pairs into an object for secrets consumption.
   * @param arr - The list of pairs to convert.
   * @returns The converted object.
   * @example
   * ```typescript
   * const input: string[] = ['secret1=value1', 'secret2=value2', 'secret3=value3'];
   * const output = convertToHash(input);
   * console.log(output);
   * // Output:
   * // {
   * //   secret1: 'value1',
   * //   secret2: 'value2',
   * //   secret3: 'value3'
   * // }
   * ```
   */
  public convertToHash(arr: string[]): { [key: string]: string } {
    return arr.reduce((hash, item) => {
      const [key, value] = item.split("=");
      hash[key] = value;
      return hash;
    }, {});
  }

  public appCard(
    appName: string,
    logoUrl: string,
    config: Omit<HeaderConfig, "iconURL"> = {}
  ) {
    return this.card().addHeader(appName, { iconURL: logoUrl, ...config });
  }
}
