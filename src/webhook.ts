import axios, { AxiosError} from 'axios'

import { SpeedyCard } from "./cards"
import { ToMessage, Message } from './framework'
import { checkers } from "./helpers"
import { SpeedybotConfig } from './speedybot'

export const finale = () => `
Server(less) Time: ${new Date().toString()}
*
* ╔═╗ ╔═╗ ╔═╗ ╔═╗ ╔╦╗ ╦ ╦ ╔╗  ╔═╗ ╔╦╗
* ╚═╗ ╠═╝ ║╣  ║╣   ║║ ╚╦╝ ╠╩╗ ║ ║  ║
* ╚═╝ ╩   ╚═╝ ╚═╝ ═╩╝  ╩  ╚═╝ ╚═╝  ╩ HUB
*
* Setup Instructions (make your own bot): https://github.com/valgaze/speedybot-hub
* `

export type IncomingHookHandler< R=any, S=any> = (
    $handlerBot: HookBot, 
    request: R,
    response?: S
  ) => Promise<any | void> | void
  
  export type IncomingWebhook = {
    method?: string
    handler: IncomingHookHandler
    validate?<R=any>(
      request: R,
    ): { proceed: boolean } | Promise<{ proceed: boolean }>    
  }


  export type AbbreviatedSpeedyCard = {
    title: string
    subTitle: string
    image: string
    url: string
    urlLabel: string
    data: { [key: string]: any }
    chips: (string | { label: string; keyword?: string })[]
    table: string[][] | { [key: string]: string }
    choices: (string | number)[]
    backgroundImage: string
  }

  export class HookBot {
    // Environment variables available to Speedybot-hub
    private fallbackText =
      'Sorry, it appears your client does not support rendering Adaptive Cards, see here for more info: https://developer.webex.com/docs/api/guides/cards'
    private token = ''
    private API = {
        getMessageDetails: 'https://webexapis.com/v1/messages',
        getAttachmentDetails: 'https://webexapis.com/v1/attachment/actions',
        getMembershipDetails: 'https://webexapis.com/v1/memberships',
        getPersonDetails: 'https://webexapis.com/v1/people',
        sendMessage: 'https://webexapis.com/v1/messages',
        createWebhook: 'https://webexapis.com/v1/webhooks',
        deleteWebhook: `https://webexapis.com/v1/webhooks`,
        getWebhooks: 'https://webexapis.com/v1/webhooks',
        getSelf: 'https://webexapis.com/v1/people/me',
        deleteMessage: 'https://webexapis.com/v1/messages',
      }
  
    constructor(public config: {token: string}) {
      this.token = config.token
    }

    private async makeRequest(payload: ToMessage): Promise<Message | { name: string, message: string}> {
        const headers = {
			Authorization: `Bearer ${this.token}`,
		}
        // HACK: couldn't get try/catch won't catch axios 400 error
        // todo: swap out w/ fetch/isomorphic-fetch
        let res
        res = await axios.post(this.API.sendMessage, payload, { headers }).catch((e: Error | AxiosError) => {
            if (axios.isAxiosError(e))  {
                const { name, message } = e
                return {
                    name,
                    message
                }
              } else {
                const { name, message } = e
                return {
                    name,
                    message
                }
              }
            
        }) 
        return res
    }

     /**
     *
     * Send a 1-1/DM message to a user based on their email or personId
     *
     * You can send a string or a card
     *
     * ```ts
     * {
     *  keyword: 'biscotti',
     *  async handler($bot, trigger) {
     *
     *  $bot.dm('username@domain.com', 'Here is a secret message')
     *
     *  $bot.dm('aaa-bbb-ccc-ddd-eee', $bot.card({title:'biscotti', subTitle:'Is it biscotti or biscotto?', chips:['biscotti','biscotto']}))
     *
     *  }
     * }
     * ```
     *
     */
      public async dm(
        personIdOrEmail: string,
        message: string | SpeedyCard | string[],
        fallback?: string,
        roomIdOveride?:string
      ): Promise<Message> {
        const payload: ToMessage = {
          text: this.fallbackText,
        }
        if (checkers.isEmail(personIdOrEmail)) {
          payload['toPersonEmail'] = personIdOrEmail
        } else {
          payload['toPersonId'] = personIdOrEmail
        }
    
        if (roomIdOveride) {
          delete payload['toPersonEmail']
          delete payload['toPersonId']
          payload['roomId'] = roomIdOveride
        }
  
        if (typeof message === 'string') {
          payload['markdown'] = message
          payload['text'] = message
        }
    
        const isCard = checkers.isCard(message)
    
        if (isCard) {
          if (fallback) {
            payload['text'] = fallback
          }
          const cardPayload = [
            {
              contentType: 'application/vnd.microsoft.card.adaptive',
              content:
                typeof message !== 'string' &&
                'render' in message &&
                typeof message.render === 'function'
                  ? message.render()
                  : message,
            },
          ]
          payload['attachments'] = cardPayload
        }
    
        const res = await this.makeRequest(payload)
        return res as Message
      }
  
      public async sendRoom(roomId: string, content: string | SpeedyCard | string[]) {
        return this.dm('_override_', content, 'It appears your client does not support Adaptive Cards', roomId)
      }
  
     /**
     *
     * Convenience helper that creates a SpeedyCard
     *
     * ![cards](media://demo_sendcard.gif)
     *
     *
     * ```ts
     * {
     *  keyword: 'bingo',
     *  async handler($bot, trigger) {
     *   const cardData = $bot.card({
     *     title: "Speedybot Hub",
     *     subTitle: "Sign the paperwork",
     *     chips: ["ping", "pong", "hi", "files"],
     *     image: "https://i.imgur.com/LybLW7J.gif",
     *     url: "https://github.com/valgaze/speedybot-hub"
     *   });
     *   $bot.send(cardData);
     *
     *  }
     * }
     *
     * ```
     */
      card(
        config: Partial<AbbreviatedSpeedyCard & { label: string }> = {}
      ): SpeedyCard {
        const card = new SpeedyCard()
        const {
          title = '',
          subTitle = '',
          image = '',
          url = '',
        //   urlLabel = '',
          data = {},
          chips = [],
          table = [],
        //   choices = [],
        //   backgroundImage = '',
        } = config
    
        // if (backgroundImage) {
        //   card.setBackgroundImage(backgroundImage)
        // }
        if (title) {
          card.setTitle(title)
        }
    
        if (subTitle) {
          card.setSubtitle(subTitle)
        }
    
        if (image) {
          card.setImage(image)
        }
    
        if (url) {
          card.setUrl(url)
        }
    
        // if (urlLabel) {
        //   card.setUrlLabel(urlLabel)
        // }
    
        if (Object.keys(data).length) {
          card.setData(data)
        }
    
        if (chips.length) {
          card.setChips(chips)
        }
    
        // if (choices.length) {
        //   card.setChoices(choices)
        // }
    
        if (table) {
          if (Array.isArray(table) && table.length) {
            card.setTable(table)
          } else {
            // if (Object.entries(table).length) {
            //   card.setTable(table)
            // }
          }
        }
        return card
      }
  }

  export type Hooks = {
    [key: string]: IncomingWebhook
  }


  /**
   * 
   * Middleware "router" for all requests
   * @param hooks
   * @param config 
   * @returns 
   */
  export const SpeedyGuard = (
    hooks: Hooks,
    config: SpeedybotConfig
  ): any | void => {
    // todo: genericize all this junk
    return async (request, response, next) => {
        const { path } = request // todo: genericize for v8 isolates, fetch, etc
        if (path in hooks) {
          try {
            const ref = hooks[path as keyof typeof hooks]
            const { method } = ref
            if (method?.toLowerCase() !== request?.method?.toLowerCase() ) {
                return response.status(400).send(`Error: Expected method '${method}', got '${request.method}'`)
            }
            if ('validate' in ref && typeof ref.validate === 'function') {
              const { proceed } = await ref.validate(request)
              if (proceed) {
                const $hookBot = new HookBot({token: config.token})  
                return await ref.handler($hookBot, request, response)
              } else {
                return response.status(400).send('Validation failed')
              }
            }
            const $hookBot = new HookBot({token:config.token})  
            ref.handler($hookBot, request)
            response.status(200).send(finale())
        } catch(e) {
            console.log('(Error): ', e)
            response.status(400).send('Internal Service Error')
        }
        } else {
            next()
        }
    }
  }