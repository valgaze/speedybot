/**
 * 
███████╗██████╗ ███████╗███████╗██████╗ ██╗   ██╗██████╗  ██████╗ ████████╗
██╔════╝██╔══██╗██╔════╝██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗██╔═══██╗╚══██╔══╝
███████╗██████╔╝█████╗  █████╗  ██║  ██║ ╚████╔╝ ██████╔╝██║   ██║   ██║   
╚════██║██╔═══╝ ██╔══╝  ██╔══╝  ██║  ██║  ╚██╔╝  ██╔══██╗██║   ██║   ██║   
███████║██║     ███████╗███████╗██████╔╝   ██║   ██████╔╝╚██████╔╝   ██║   
╚══════╝╚═╝     ╚══════╝╚══════╝╚═════╝    ╚═╝   ╚═════╝  ╚═════╝    ╚═╝
* 
**/


import {
    FrameworkInst,
    BotHandler,
    ToMessage,
    BotInst,
    Trigger,
    WebhookHandler,
    Message
  } from "./framework";
  import { ValidatewebhookUrl, pickRandom, snippet } from "./helpers";
  import { placeholder, chipLabel, chipConfigLabel, ChipConfig, ascii_art, SpeedyCard, $} from "./";
  // TODO: make peer dependency or option to "pass-in" as parameter
  import Botframework from "webex-node-bot-framework";
  import BotWebhook from "webex-node-bot-framework/webhook";
  
  /**
   * Minimal config to get up and running. If you need a token...
   * Create new bot: https://developer.webex.com/my-apps/new/bot
   * Get an existing bot's token (tap "regenerate"): https://developer.webex.com/my-apps
   *
   * Leave webhookUrl blank to use websockets
   */
  export interface SpeedybotConfig {
    token: string;
    webhookUrl?: string;
  }
  
  export class Speedybot {
    frameworkRef!: FrameworkInst;
    initialized = false;
  
    // Chat/framework handler mappings
    Magickeywords = {
      "<@help>": "help",
      "<@catchall>": /(.*?)/,
      "<@nomatch>": '__INTERNAL__'
    };
  
    MagicFrameworkkeywords = {
      "<@submit>": "attachmentAction",
      "<@spawn>": "spawn",
      "<@despawn>": "despawn",
      "<@fileupload>": "files",
    };
  
    chips: { label: string; handler: null | Function }[] = [];
  
    WebhookKeyword = "<@webhook>";
  
    constructor(config: SpeedybotConfig) {
      const inst: FrameworkInst = new Botframework(config);
      this.frameworkRef = inst;
    }
  
    send(payload: ToMessage) {
      this.frameworkRef.webex.messages.create(payload);
    }
  
    // Send card is a bit tricky in the <@webhook> case since we don't have any
    // existing room binding
    // For now, just make 2 different methods
    sendCardToRoom(
      roomId,
      cardPayload: any,
      fallbackText = "Your client does not appear to support rendering adaptive cards"
    ) {
      const card = {
        roomId,
        markdown: fallbackText,
        attachments: [
          {
            contentType: "application/vnd.microsoft.card.adaptive",
            content: cardPayload,
          },
        ],
      };
      this.frameworkRef.webex.messages.create(card);
    }
  
    sendCardToPerson(
      email,
      cardPayload: any,
      fallbackText = "Your client does not appear to support rendering adaptive cards"
    ) {
      const card = {
        toPersonEmail: email,
        markdown: fallbackText,
        attachments: [
          {
            contentType: "application/vnd.microsoft.card.adaptive",
            content: cardPayload,
          },
        ],
      };
      this.frameworkRef.webex.messages.create(card);
    }
  
    async start(): Promise<FrameworkInst> {
      const inst = this.frameworkRef;
      return new Promise(async (resolve, reject) => {
        try {
          await inst.start();
          inst.on("initialized", () => {
            this.initialized = true;
            return resolve(inst);
          });
        } catch (e) {
          reject(e);
        }
      });
    }
  
    addHandler(botHandler: BotHandler) {
      // https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js#L1663
      const frameworkRef = this.frameworkRef;
      const registerHandler = (
        keyword: string | RegExp,
        handler,
        helpText,
        preference = 0
      ) => {
        frameworkRef.hears(keyword, handler, helpText, preference);
      };
      const registerFrameworkHandler = (eventName: string, handler) => {
        frameworkRef.on(eventName, handler);
      };
  
      const { keyword, handler } = botHandler;
      let trigger = keyword;
      if (trigger instanceof Array) {
        trigger.forEach((alias) => {
          const newHandler = {
            ...botHandler,
            keyword: alias,
          };
          this.addHandler(newHandler);
        });
      } else {
        if (typeof keyword === "string") {
          const specialFramework = this.MagicFrameworkkeywords[keyword];
          if (specialFramework) {
            return registerFrameworkHandler(specialFramework, handler);
          }
          trigger = this.Magickeywords[keyword] || keyword;
        }
        const { helpText, preference } = botHandler;
        return registerHandler(
          trigger as string | RegExp,
          handler,
          helpText,
          preference
        );
      }
    }

    registerHandlersWithHelp(
      handlers: BotHandler[],
      helpHandler?: (handlers: BotHandler[]) => BotHandler
    ) {
      let submitter: BotHandler | null = null
      let catchall_er: BotHandler | null = null
      let noMatch_er: BotHandler | null = null
      let helper: BotHandler | null = null
      let healthcheck_er: BotHandler | null = null
      const magicKeywords = ['<@spawn>', '<@despawn>', '<@fileupload>',]
      const tidyHandlers = handlers.filter((botHandler: BotHandler) => {
        const { keyword } = botHandler

        if (typeof keyword === 'string') {
          if (keyword === '<@submit>') {
            submitter = botHandler
            return false
          }

          if (keyword === '<@catchall>') {
            catchall_er = botHandler
            return false
          }

          if (keyword === '<@nomatch>') {
            noMatch_er = botHandler
            return false
          }

          if (keyword === '<@help>' || keyword === 'help') {
            helper = botHandler
            return false
          }

          if (keyword === '<@healthcheck>' || keyword === 'healthcheck') {
            healthcheck_er = botHandler
            return false
          }
 
          if (magicKeywords.includes(keyword)) {
            this.addHandler(botHandler)
            return false
          }

          return true
        } else {
          return true // special keywords should be a string
        }
      })

      // "chips" handler
      const rootChipHandler = async (bot: BotInst, trigger: Trigger) => {
        const getData = async <T extends unknown = any>(key: string): Promise<T | null> => {
          return new Promise(async (resolve) => {
            try {
              const res = await bot.recall(key);
              resolve(res);
            } catch (e) {
              resolve(null);
            }
          });
        };

        // HACK: pass the button-tap value through the handler system
        const sendMsg = (trigger: Trigger) => {
          const payload = {
            roomId: trigger.attachmentAction.roomId,
            personId: trigger.person.id,
            text: trigger.attachmentAction.inputs.chip_action,
          }
            bot.framework.onMessageCreated(payload as Message);
        }


        // Vanish "card" element on tap
        const { disappearOnTap } = await getData<ChipConfig>(chipConfigLabel) || { disappearOnTap: false }
        if (disappearOnTap) {
            const msgId = trigger.attachmentAction.messageId
            await bot.censor(msgId as string)
        }

        const registeredChips = (await getData(chipLabel)) || [];
        const { chip_action } = trigger.attachmentAction
          ? trigger.attachmentAction.inputs
          : { chip_action: "" };


        if (!registeredChips.length) {
            return sendMsg(trigger)
        }

        // Check for stashed handlers associated with a chip
        for (const chip of registeredChips) {
          const { label, handler, keyword } = chip;
          if (chip_action === label || chip_action === keyword) {
            if (typeof handler === "function") {
              handler.call(this, bot, trigger);
            } else {
              sendMsg(trigger)
            }
          }
        }
      }

      const Speedybot = this
      const rootHandlers: BotHandler[] = [
      {
        keyword: '<@catchall>',
        async handler(bot, trigger) {
          const $bot = $(bot)

          // todo: opt flag to disable this?

          // if the user enters "$clear"
          if (trigger.text === '$clear') {
            return $bot.clearScreen()
          }

          // check if $prompt input is expected
          const promptActive = await $bot.promptActive()
          // if the user enters "$exit"
          if (trigger.text === '$exit') {
            if (promptActive) {
              // return $bot.deactivatePrompt()
              return $bot.promptActive(false)
            }
          }

          // help is special, don't run catchall & nomatch
          if (trigger.text === 'help' || trigger.text === 'healthcheck') {
            return
          }

          if (promptActive) {
            // fetch active prompts
            const promptObj = await $bot.getPrompt()
            if (promptObj) {

              const res = trigger.text
              const { success, validate = (val) => true, retry} = promptObj
              const isValid = await validate(res)

              if (isValid) {
                await $bot.endPrompt()
                success(bot, trigger, res)
              } else {
                // Ideas:
                // - Tell user they can use the "$exit" keyword to bail out
                // - Maybe re-run the initial prompt?
                if (typeof retry === 'string') {
                  return bot.say(retry)
                } else if(Array.isArray(retry)) {
                  return $bot.sendRandom(retry)
                }
              }
            }
          } else {
            // if user has a custom catchall, run it here 1st
            if (catchall_er && catchall_er.handler && !Speedybot.isChip(trigger)) {
              const {handler} = catchall_er
              handler(bot, trigger)
            }

            if (noMatch_er) {
              $bot.matchInvokeHandlers(tidyHandlers, trigger, noMatch_er)
            } else {
              $bot.matchInvokeHandlers(tidyHandlers, trigger)
            }

          }
        },
        helpText: '_internal'
      },
      {
        keyword: '<@submit>',
        handler(bot, trigger) {
          if (!Speedybot.isChip(trigger)) {
            return submitter?.handler(bot, trigger)
          } else {
            return rootChipHandler(bot, trigger);
          }
        },
        helpText: '_internal'
      }]

      if (!helper) {
        helper = this.defaultHelpHandler(tidyHandlers)
        this.addHandler(helper)
      } else {
        const { handler } = helper
        this.addHandler({
          keyword: 'help',
          handler,
          helpText: '_internal_Help_function'
        })
      }

      if (!healthcheck_er) {
          healthcheck_er = this.defaultHealthcheck()        
      }
      this.addHandler(healthcheck_er)

      rootHandlers.forEach(handler => {
        this.addHandler(handler)
      })
    }

    isChip(trigger: Trigger) {
      return trigger?.attachmentAction?.inputs
      ? Boolean(trigger.attachmentAction.inputs.chip_action)
      : false;
    }
  
  
    loadHandlers(...handlers: unknown[]) {
      return this.registerHandlersWithHelp(this.flatten(...handlers));
    }
  
    // Take unknown number of args, lists, etc
    flatten(...handlers: unknown[]): BotHandler[] {
      return Array.prototype.concat.call([], ...handlers);
    }
  
    defaultHelpHandler(handlerList: BotHandler[]) {
      return {
        keyword: 'help',
        handler(bot: BotInst, trigger: Trigger) {
          const text = handlerList
            .map((handler) => {
              const { keyword } = handler;
              let label = keyword;
              if (keyword instanceof Array) {
                label = keyword[0];
              }
              return `${label}: ${handler.helpText}`;
            })
            .join("\n\n");
  
          const cardJSON = {
            $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
            type: "AdaptiveCard",
            version: "1.0",
            body: [
              {
                type: "TextBlock",
                size: "Medium",
                weight: "Bolder",
                text: "Commands available to you",
              },
              {
                type: "RichTextBlock",
                inlines: [
                  {
                    type: "TextRun",
                    text: text,
                  },
                ],
              },
            ],
          };
          return bot.sendCard(
            cardJSON,
            `Your client doesn't support rendering adpative cards. Help data: ${text}`
          );
        },
        helpText: `Get help info`,
      };
    }
  
    public snippet(data: object | string): string {
      return snippet(data);
    }

    defaultHealthcheck() {
      return {
        keyword: ["healthcheck"],
        handler(bot, trigger) {
          // Pick a random response for healthcheck
          const choices = [
            `At the tone, the time will be ${new Date()}`,
            `${new Date()}, healthcheck is GOOD`,
            `Health Status: Good (${new Date()})`,
          ];
          bot.say(pickRandom(choices));
  
          // Adapative Card: https://developer.webex.com/docs/api/guides/cards
          const cardPayload = new SpeedyCard()
            .setTitle("System is 👍")
            .setSubtitle("If you see this card, everything is working")
            .setImage("https://raw.githubusercontent.com/valgaze/speedybot/master/docs/assets/chocolate_chip_cookies.png") // Cookie image courtesy of Daniel Lopez: https://unsplash.com/photos/aT7CE57EZL8 & https://unsplash.com/@soydanielwolf
            .setUrl(
              pickRandom([
                "https://www.youtube.com/watch?v=3GwjfUFyY6M",
                "https://www.youtube.com/watch?v=d-diB65scQU",
              ]),
              "Take a moment to celebrate"
            )
            .setTable([
              [`Bot's Date`, new Date().toDateString()],
              ["Bot's Uptime", `${String(process.uptime()).substring(0, 25)}s`],
            ]);
          return bot.sendCard(
            cardPayload.render(),
            "Your client does not currently support Adaptive Cards :("
          );
        },
        helpText:
          "Test the health of your bot. Otherwise there may be an issue with your tunnel, server, or network)",
      };
    }
  
    webhook() {
      return BotWebhook(this.frameworkRef);
    }
  }
  
  /**
   * SpeedybotWebhook
   * With express requires body-parser
   *
   * ex. app.post('/mywebhook', SpeedybotWebhook(config, handlers))
   * @param config: SpeedybotConfig
   * @param handlers: Bothandler[]
   * @returns Promise<unknown>
   */
  export const SpeedybotWebhook = (
    config: SpeedybotConfig,
    handlers: (BotHandler | WebhookHandler)[],
    app?: any
  ) => {
    const { webhookUrl = "" } = config;
    ValidatewebhookUrl(webhookUrl);
    if (config.token === placeholder) {
      throw new Error(
        `Placeholder detected under 'token' in config.json! See here for instructions: https://github.com/valgaze/speedybot-starter/blob/master/quickstart.md Exiting...`
      );
    }
    const speedybot = new Speedybot(config);
    const webhookHandlers: WebhookHandler[] = [];
    const standardHandlers = handlers.filter((handler) => {
      const { keyword } = handler;
      if (typeof keyword === "string") {
        const isWebhook = keyword.includes(speedybot.WebhookKeyword);
        if (isWebhook) {
          webhookHandlers.push(handler as WebhookHandler);
          return false;
        } else {
          return true;
        }
      } else {
        return true; // regex | (string|regex)[]
      }
    });
  
    speedybot.loadHandlers(standardHandlers);
    speedybot.start();
  
    // TODO: support other route handler schemas-- koa, hapi, sails, etc
    if (app) {
      webhookHandlers.forEach((webhook) => {
        const { method = "post", route, handler } = webhook;
        app[method](route, async (req, res) => {
          return handler.call(speedybot, req, res);
        });
      });
    }
  
    // Main webhook specifically for incoming chat webhooks
    return async (req, res) => {
      return speedybot.webhook()(req);
    };
    /**
     * Maybe in future, grab the route from webhookUrl in config
     * ex.
     *  const config = { webhookUrl: 'https://hostname123.net/mywebhookroute' }
     *  app.use(SpeedybotWebhook(config, handlerList)) // <-- checks for /mywebhookroute & Handles
     *
     * Or maybe validate
     * app.post('/mywebhookroute_bongo', SpeedybotWebhook(config, handlerList)) // <-- compare webhookUrl & req.originalUrl
     * Make sure it matches req.originalUrl
     * ex. app.use(SpeedybotWebhook(config, handlerList))
     * // Use /webhookFun without specifying like app.post('/webhookFun', SpeedybotWebhook(config, handlerList))
     *
     */
  };
  
  /**
   * Speedytunnel: You likely don't need/want this, just leave webhookUrl blank
   * and you can use websockets
   * @param app: express app instance
   * @param port: port to tunnel
   * @param tunnel: nGrok boot that returns Promise<string>
   * @param config: token
   * @param handlers: list of handlers
   * @param rest: a series of handlers (separated by commas), a list of handlers, or a combination of both
   */
  export interface miniNgrok {
    port?: string | number;
    addr?: string | number;
  }
  export type tunnlerFunc = (config: miniNgrok) => Promise<string>;
  
  export const Speedytunnel = async (
    app: any,
    port: string | number,
    tunneler: tunnlerFunc,
    config: SpeedybotConfig,
    handlers: BotHandler[]
  ) => {
    const tunnelUrl = await tunneler({ port });
    const webhookRoute = "speedywebhook";
    const { token, webhookUrl = "" } = config;
    if (webhookUrl) {
      console.log(
        `WARNING: webhookUrl ('${webhookUrl}' detected in config, igoring and booting with tunnel ${tunnelUrl}`
      );
    }
    const speedyConfig = {
      token,
      webhookUrl: `${tunnelUrl}/${webhookRoute}`,
    };
    app.post(`/${webhookRoute}`, SpeedybotWebhook(speedyConfig, handlers));
  };
  
  /**
   *
   * @param config: Speedybot Config
   * @param handlerList: list of botHandlers
   * @returns Framework instance
   */
  export const Launch = async (
    config: SpeedybotConfig,
    handlerList: BotHandler[]
  ) => {
    if (config.token === placeholder) {
      throw new Error(
        `Placeholder detected in config.json! See here for instructions: https://github.com/valgaze/speedybot/blob/master/quickstart.md Exiting...`
      );
    }
    ascii_art();
    const speedybot = new Speedybot(config);
    // Filterout webhooks
    const tidyHandlerList = handlerList.filter(
      ({ keyword }) =>
        !(typeof keyword === "string" && keyword === speedybot.WebhookKeyword)
    );
    speedybot.loadHandlers(tidyHandlerList);
    const frameworkRef = await speedybot.start();
    return frameworkRef;
  };
  
  export const speedybotKoa = () => {
    return (ctx) => {
      // do some koa middle ware stuff
    };
  };
  