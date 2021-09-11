import { FrameworkInst,  BotHandler, ToMessage, BotInst, Trigger } from './framework'
import { ValidatewebhookUrl, pickRandom } from './helpers'
import { placeholder, ascii_art } from './'
// TODO: make peer dependency
import Botframework from 'webex-node-bot-framework'
import BotWebhook from 'webex-node-bot-framework/webhook'


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
        '<@help>': ['help'],
        '<@catchall>': /(.*?)/,
    }

    MagicFrameworkkeywords = {
        '<@submit>': 'attachmentAction',
        '<@spawn>': 'spawn',
        '<@despawn>': 'despawn',
        '<@fileupload>': 'files',
    }

    constructor(config: SpeedybotConfig) {
        const inst:FrameworkInst = new Botframework(config);
        this.frameworkRef = inst;
    }

    sendMessage(payload: ToMessage) {
        this.frameworkRef.webex.messages.create(payload)
    }

    _send(payload: ToMessage) {
        this.frameworkRef.webex.messages.create(payload)
    }

    async start():Promise<FrameworkInst> {
        const inst = this.frameworkRef
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
        })
    }

    addHandler(botHandler: BotHandler) {
        // https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js#L1663
        const frameworkRef = this.frameworkRef;
        const registerHandler = (keyword: string | RegExp, handler, helpText, preference = 0) => {
            frameworkRef.hears(keyword, handler, helpText, preference)
        }
        const registerFrameworkHandler = (eventName: string, handler) => {
            frameworkRef.on(eventName, handler);
        }
    
        const { keyword, handler } = botHandler
        let trigger = keyword
        if (trigger instanceof Array) {
            trigger.forEach((alias) => {
                const newHandler = {
                    ...botHandler,
                    keyword: alias
                }
                this.addHandler(newHandler)
            })
        } else {
            if (typeof keyword === 'string') {
                const specialFramework = this.MagicFrameworkkeywords[keyword]
                if (specialFramework) {
                    return registerFrameworkHandler(specialFramework, handler)
                }
                trigger = this.Magickeywords[keyword] || keyword
            }
            const { helpText, preference } = botHandler
            return registerHandler(trigger as string | RegExp, handler, helpText, preference)
        }
    }

    registerHandlersWithHelp(handlers: BotHandler[], helpHandler?: (handlers: BotHandler[]) => BotHandler) {
        let addHelp = true
        let addHealthcheck = true
        handlers.forEach((botHandler) => {
            const { keyword } = botHandler
            this.addHandler(botHandler)
            if (keyword === '<@help>') {
                addHelp = false;
            }
            if (keyword === '<@healthcheck>') {
                addHealthcheck = false
            }
        })

        if (addHelp) {
            const helpDefault = helpHandler ? helpHandler(handlers) : this.defaultHelpHandler(handlers)
            // add help handler
            this.addHandler(helpDefault)
        }
        if (addHealthcheck) {
            this.addHandler(this.defaultHealthcheck())
        }
    }

    loadHandlers(...handlers: unknown[]) {
        return this.registerHandlersWithHelp(this.flatten(...handlers))
    }

    // Take unknown number of args, lists, etc 
    flatten(...handlers: unknown[]): BotHandler[] {
        return Array.prototype.concat.call([], ...handlers)
    }

    defaultHelpHandler(handlerList: BotHandler[]) {
        return {
            keyword: ['help', 'helpme', '?'],
            handler(bot: BotInst, trigger: Trigger) {
                const text = handlerList.map(handler => {
                    const { keyword } = handler;
                    let label = keyword
                    if (keyword instanceof Array) {
                        label = keyword[0]
                    }
                    return `${label}: ${handler.helpText}`
    
                }).join('\n\n')

                const cardJSON = {
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                    "type": "AdaptiveCard",
                    "version": "1.0",
                    "body": [
                        {
                            "type": "TextBlock",
                            "size": "Medium",
                            "weight": "Bolder",
                            "text": "Available Handlers"
                        },
                        {
                            "type": "RichTextBlock",
                            "inlines": [
                                {
                                    "type": "TextRun",
                                    "text": text
                                }
                            ]
                        }
                    ],
                }
                return bot.sendCard(cardJSON, `Your client doesn't support rendering adpative cards. Help data: ${text}`);
            },
            helpText: `Get help info`
        }
    }
    defaultHealthcheck() {
       return {
            keyword: ['healthcheck'],
            handler(bot, trigger) {
                // Pick a random response for healthcheck
                const choices = [`At the tone, the time will be ${new Date}`, `${new Date}, healthcheck is GOOD`, `Health Status: Good (${new Date()})`]
                bot.say(pickRandom(choices))
        
                // Adapative Card: https://developer.webex.com/docs/api/guides/cards
                // Card with n buttons, each emits "chip_action" with their label value
                const cardPayload = {
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                    "type": "AdaptiveCard",
                    "version": "1.0",
                    "body": [{
                        "type": "TextBlock",
                        "size": "Medium",
                        "weight": "Bolder",
                        "text": "System is 👍"
                    }, {
                        "type": "RichTextBlock",
                        "inlines": [{
                            "type": "TextRun",
                            "text": "If you see this card, everything is working"
                        }]
                    }, {
                        "type": "Image",
                        "url": "https://i.imgur.com/SW78JRd.jpg",
                        "horizontalAlignment": "Center",
                        "size": "large"
                    }, {
                        "type": "Input.Text",
                        "id": "inputData",
                        "placeholder": "What's on your mind?"
                    }],
                    "actions": [{
                        "type": "Action.OpenUrl",
                        "title": "Take a moment to celebrate",
                        "url": "https://www.youtube.com/watch?v=3GwjfUFyY6M",
                        "style": "positive"
                    }, {
                        "type": "Action.Submit",
                        "title": "Submit",
                        "data": {
                            "cardType": "inputForm"
                        }
                    }]
                }
                return bot.sendCard(cardPayload, 'Your client does not currently support Adaptive Cards :(')
            },
            helpText: 'Test the health of your bot. Otherwise there may be an issue with your tunnel, server, or network)'
        }
    }

    webhook() {
        return BotWebhook(this.frameworkRef)
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
export const SpeedybotWebhook = (config: SpeedybotConfig, handlers: BotHandler[]) => {
    const { webhookUrl = ''} = config;
    ValidatewebhookUrl(webhookUrl)
    const speedybot = new Speedybot(config)
    speedybot.loadHandlers(handlers)
    speedybot.start()
    return async (req, res) => {
        return speedybot.webhook()(req)
    }
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
}


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

export const Speedytunnel = async (app: any, port: string | number, tunneler:tunnlerFunc, config: SpeedybotConfig, handlers: BotHandler[]) => {
    const tunnelUrl = await tunneler({port})
    const webhookRoute = 'speedywebhook'
    const { token, webhookUrl = '' } = config;
    if (webhookUrl) {
        console.log(`WARNING: webhookUrl ('${webhookUrl}' detected in config, igoring and booting with tunnel ${tunnelUrl}`)
    }
    const speedyConfig = {
        token,
        webhookUrl: `${tunnelUrl}/${webhookRoute}`
    }
    app.post(`/${webhookRoute}`, SpeedybotWebhook(speedyConfig, handlers))
}

export type launchType = 'websockets' | 'express_tunnel'

/**
 * Convenience launcher to use websockets or tunneling (via nGrok)
 * 
 * > Add dependencies
 * ```sh
 * npm i speedyhelper express body-parser
 * ```
 * 
 * ## Websockets sample
 ```sh
    const { devLauncher } = require('speedybot')
    const config = {
        token: `aaa-bbb-ccc-ddd`
    }
    const handlers = [
    {
        keyword: ['hello', 'hey', 'yo', 'watsup', 'hola'],
        handler(bot, trigger) {
            const reply = 'Heya how\'s it going ' + trigger.person.displayName + '?'
            bot.say(reply)
        },
        helpText: 'A handler that greets the user'
        }
    ]

    devLauncher('websockets', config, handlers)
```
 * 
 * ```
 * 
 * ## Express + tunnel sample

 ```js
    const { devLauncher } = require('speedybot')
    const { nGrokTunnel } = require('speedyhelper')
    const express = require('express')
    const bodyParser = require('body-parser')
    const app = express()
    const port = process.env.PORT || 8000
    app.use(bodyParser.json());
    app.post('/ping', (req, res) => res.send('pong!'))
    const config = {
        token: 'aaa-bbb-ccc-ddd'
    }

    const handlers = [
        {
            keyword: ['hello', 'hey', 'yo', 'watsup', 'hola'],
            handler(bot, trigger) {
                const reply = `Heya how's it going ${trigger.person.displayName}?`
                bot.say(reply)
            },
            helpText: `A handler that greets the user`
        }
    ]


    // Launch tunnel service (via nGroK) for webhooks
    devLauncher('express_tunnel', config, handlers, app, nGrokTunnel, port)

    app.listen(port, () => {
        console.log(`Listening + tunneled on port ${port}`)
    })
 ```
 * 
 * @param type 
 * @param config 
 * @param handlerList 
 * @param expressApp 
 * @param tunneler 
 * @param port 
 * @returns 
 */
export const devLauncher = async (type:launchType, config: SpeedybotConfig, handlerList: BotHandler[], expressApp?:any, tunneler?:tunnlerFunc, port?: number | string) => {
if (type === 'websockets' || !type) {
        // launch with websockets
        const speedybot = new Speedybot(config);
		speedybot.loadHandlers(handlerList)
		const frameworkRef = await speedybot.start()
        return frameworkRef
    } else if (type === 'express_tunnel') {
        Speedytunnel(expressApp, port as number, tunneler as tunnlerFunc, config, handlerList)
        return true
    }
}

/**
 * 
 * @param config: Speedybot Config
 * @param handlerList: list of botHandlers
 * @returns Framework instance
 */
export const Launch = async (config: SpeedybotConfig, handlerList: BotHandler[]) => {
    if (config.token === placeholder) {
        throw new Error(`Placeholder detected in config.json! See here for instructions: https://github.com/valgaze/speedybot/blob/master/quickstart.md Exiting...`)
	}
    ascii_art()
    const speedybot = new Speedybot(config);
    speedybot.loadHandlers(handlerList)
    const frameworkRef = await speedybot.start()
    return frameworkRef
}

export const speedybotKoa = () => {
   return (ctx) => {
       // do some koa middle ware stuff
   } 
}