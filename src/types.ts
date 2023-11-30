import { SpeedyCard, AbbreviatedSpeedyCard } from "./cards";

export type SpeedyConfig = Partial<{
  allowedEmails: string[];
}>;
// errors
export type SpeedyError = {
  e: unknown;
  message: string;
  status?: string | number;
  roomId?: string; // RoomId to send a handler to user if necessary, ex `Bot.sendTo(roomId, "there was a bad, bad error")
};

// Messages: text, files, form submissions (attachment actions)
export type Card = {
  // handle raw spec
  type: string;
  body: unknown[];
  actions?: any[];
  $schema: string;
  version: string;
};
export type Message = string | number | Card | SpeedyCard;

export type SpeedyFile = {
  url: string;
  name: string;
  extension: string;
  contentType: string;
};

export type SpeedyFileUtils = SpeedyFile & {
  getData<T = unknown>(): Promise<T>;
};

// $Magic, main parameter, others
export type MessageTypes = "card" | "file" | "text";

interface commonData {
  next: boolean;
  end: boolean;
  messageType: "card" | "file" | "text";
  id: string; // Message id

  /**
   * Author details
   * 
   * ```
   
    domain: string; (@bongo.co)
    email: string; (joe@bongo.com)
    id: string; (abcdefghijk123456789)
    org: string; (lmnopqrstuv)
    name: string;
    type: "person" | "bot" | "appuser";
    profilePic: string;

    ```
   * 
   * 
   */
  author: {
    domain: string;
    email: string;
    id: string;
    org: string;
    name: string;
    type: "person" | "bot" | "appuser";
    profilePic: string;
  };
  msg: {
    parentId?: string;
    roomId: string;
    roomType: string;
    mentionedPeople: string[];
  };
  ctx: {
    [key: string]: string | number | boolean;
  };
}

export type EventTypes = "text" | "file" | "card";

export type AttachedData = {
  [key: string]: boolean | number | string | Record<string, any> | AttachedData;
};

interface CardData<T> extends commonData {
  // messageType: "card";
  messageType: MessageTypes;
  data?: T;
  file?: SpeedyFileUtils; // not included w/ submissions
  text?: string; // not included w/ submissions
}

interface TextData<T> extends commonData {
  // messageType: "text";
  messageType: MessageTypes;
  data?: T; // not included w/ text
  file?: SpeedyFileUtils; // not included w/ text
  text: string;
}

interface FileData<T> extends commonData {
  // messageType: "file";
  messageType: MessageTypes;
  data?: T; // not included w/ file
  file: SpeedyFileUtils; // guaranteed
  text?: string; // not guaranteed
}

export type IncomingItem<T> = TextData<T> | FileData<T> | CardData<T>;

export type Destination =
  | { roomId: string }
  | { toPersonEmail: string }
  | { toPersonId: string };

export type NestedData = string | number | boolean | AttachedData;

export type $Magic<T = AttachedData> = {
  buildDataSnippet(data: any, type?: string): string;
  debug(): DebugInfo;
  send(m: Message): Promise<MessageResponse>;
  reply(message: string): Promise<MessageResponse>;
  clearScreen(c?: number): Promise<MessageResponse>;
  fillTemplate(
    utterances: string[],
    template: { [key: string]: string | number }
  ): string;
  buildDMLink(target: string, label: string): string;
  card(config?: Partial<AbbreviatedSpeedyCard>): SpeedyCard;
  edit(m: MessageResponse, e: string): Promise<MessageResponse>;
  pickRandom<P>(list: P[]): P;
  pickRandom<P>(min: number, max: number): number;
  pickRandom<P>(listOrMin: P[] | number, max?: number): P | number;
  sendFile: <T = unknown>(
    data: T,
    fileExtension: string
  ) => Promise<MessageResponse>;
  getFile(
    url: string,
    opts?: { responseType?: "arraybuffer" | "json" }
  ): Promise<{
    getData<T = unknown>(): Promise<T>;
    url: string;
    name: string;
    extension: string;
    contentType: string;
  }>;
  thread(
    threadData: [string | SpeedyCard, ...string[]] & {
      length: 1 | 2 | 3 | 4 | 5 | 6;
    }
  );
  buildLink(destinationURL: string, label?: string, noBold?: boolean): string;
} & IncomingItem<T>;

export type Middleware<T = AttachedData> = (
  $: $Magic<T>
) => boolean | Promise<boolean>;

// message payloads

export type MessageResponse = {
  id: string;
  roomId: string;
  roomType: string; // "direct" | "group";
  text: string;
  markdown?: string;
  html?: string;
  personId: string;
  personEmail: string;
  created: string;
  updated?: string;
  files?: string[];
};

export type DebugInfo = {
  messageType: string;
  messageId: string;
  text: string;
  hasFile: boolean;
  data?: unknown;
  author: {
    id: string;
    name: string;
    email: string;
  };
  msg: {
    parentId?: string;
    roomId: string;
    roomType: string;
    mentionedPeople: string[];
  };
};

// Pass to create message
export type ToMessage = {
  roomId?: string;
  parentId?: string;
  toPersonId?: string;
  toPersonEmail?: string;
  text?: string;
  markdown?: string;
  files?: string[];
  attachments?: {
    contentType?: string;
    content?: unknown; // rendered card
  }[];
};

// Webhooks
export interface Webhook {
  id: string;
  name: string;
  targetUrl: string;
  resource: string;
  event: string;
  orgId: string;
  createdBy: string;
  appId: string;
  ownedBy: string;
  status: string;
  created: string;
  secret?: string;
}

// Card submissions
export type Submit_Details<T = object> = {
  id: string;
  type: string;
  messageId: string;
  inputs: T;
  personId: string;
  personEmail: string; // tweaking official webhook spec
  roomId: string;
  created: Date | string;
};

export type AA_Details = {
  id: string;
  type: string;
  messageId: string;
  inputs: any;
  personId: string;
  roomId: string;
  created: Date | string;
};

// Get Self data from token
export type SelfData = {
  id: string;
  emails: string[];
  phoneNumbers: any[];
  displayName: string;
  nickName: string;
  userName: string;
  avatar: string;
  orgId: string;
  created: Date;
  status: string;
  type: "person" | "bot" | "appuser"; // appuser = https://developer.webex.com/docs/guest-issuer
  firstName: string;
  lastName: string;
  lastModified: Date;
  lastActivity: string;
};

// <Partial> only partializes 1 level down
/**
 * <DeepPartial> Utility type
 * Add a secret to your Speedybot bot instance. Note bot tokens are special are are still set by {@link setToken}
 * **Note:** Once you add a secret it is accessible on the instance so be careful
 *
 *
 * ## Example
 *
 * ```ts
 *
 * import { DeepPartial, Speedybot } from 'speedybot'
 *
 * // 1) Initialize your bot w/ its token
 * const Bot = new Speedybot('__REPLACE__ME__');
 *
 * // 2) Export your bot
 * export default CultureBot;
 *
 * // 3) Add middleware "steps" to validate + process incoming messages
 *
 * // Retry logic if file not working
 * const specialValue = `bingo12345678`
 *
 * type DataPayload = {
 *    specialValue: string;
 *    message?: string;
 * }
 *
 * Bot.addStep<DataPayload>>(async $ => {
 *  if ($.data) {
 *       if ($.data.specialValue === specialValue) {
 *          await $.send(`Welcome! you said ${$.data.mesage}`)
 *       } else {
 *          await $.send(`Welcome!`)
 *       }
 *       $.end
 *   } else {
 *      const data: DataPayload = {
 *          specialValue,
 *      }
 *      $.send($.card().addTitle('Please make a submission').addTextArea())
 *
 *    }
 * })
 *
 * ```
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ENVELOPES = MessageEnvelope | AA_Envelope;
export type AA_Envelope = {
  id: string;
  name: string;
  targetUrl: string;
  resource: "attachmentActions";
  event: string;
  orgId: string;
  createdBy: string;
  appId: string;
  ownedBy: string;
  status: string;
  created: Date | string;
  actorId: string;
  data: {
    id: string;
    type: string;
    messageId: string;
    personId: string;
    roomId: string;
    created: Date | string;
  };
};
// Messages, text
export type MessageEnvelope = {
  id: string;
  name: string;
  targetUrl: string;
  resource: "messages";
  event: string;
  orgId: string;
  createdBy: string;
  appId: string;
  ownedBy: string;
  status: string;
  created: Date | string;
  actorId: string;
  data: Message_Details;
};

// File submissions (can optionally include text)
export type File_Details = Message_Details & { files: string[] } & {
  text?: string;
};

// Text submissions
export type Message_Details = {
  id: string;
  roomId: string;
  roomType: string;
  text: string;
  personId: string;
  personEmail: string;
  html?: string;
  mentionedPeople?: string[];
  created: Date | string;
  files?: string[];
  parentId?: string;
};

// Make Request
export type RequestOps = {
  "content-type"?: string;
  method?: "POST" | "PUT" | "GET" | "DELETE" | "HEAD" | "PATCH";
  headers?: any;
  raw?: boolean;
  [key: string]: any;
};
export type CoreMakerequest<T = unknown> = (
  url: string,
  body: any,
  opts: RequestOps
) => Promise<T> | T;

export type StubbedRes<T = unknown> = {
  headers: {
    get(q: string): string;
  };
  arrayBuffer<T = any>(): Promise<T>;
  text(): Promise<string>;
  json(): Promise<T>;
};

// Room
export type Room_Details = {
  id: string;
  title: string;
  type: string;
  isLocked: boolean;
  lastActivity: string;
  creatorId: string;
  created: string;
  ownerId: string;
  isPublic: boolean;
  isReadOnly: boolean;
};
