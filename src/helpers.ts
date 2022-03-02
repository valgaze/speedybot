import axios, { Method, AxiosRequestConfig, AxiosResponse } from 'axios'
import { createReadStream, unlink } from 'fs'
import { SpeedyCard, chipLabel, chipConfigLabel, $promptActiveKey, $prompts } from './index'
import { BotInst, Trigger, ToMessage, Message, BotHandler, Membership } from './framework'
import { log, loud } from './logger'
import { resolve } from 'path'
import FormData from 'form-data'

/**
* @param list 
* Pick an item from the list
**/
export const pickRandom = (list) => list[Math.floor(Math.random() * list.length)]


/**
 * Make sure webhookUrl exists and has an ending path
 * @param webhookUrl 
 * 
 * 
 * @returns boolean | throws 
 */
export const ValidatewebhookUrl = (webhookUrl: string) => {
    // if no webhookUrl specified
    if (!webhookUrl) {
        throw new Error(`Error: Missing 'webhookUrl' in config`)
    }

    // check if ending route, throw if not present
    // ex. good: https://123-456-789.ngrok.io/webhookroute
    // ex. bad: https://123-456-789.ngrok.io/
    // ex. bad: https://123-456-789.ngrok.io
    const candidate = new URL(webhookUrl)
    if (candidate.pathname === '/') {
        loud(`
It looks like your config's webhookUrl does not end with a route

Ex. (expresjs) If your server's route handler looks like this:

const config = {
    "webhookUrl": "${webhookUrl}",
    "token": "aaa-bbb-ccc"
}

app.post('my_webhook', SpeedybotWebhook(config, handlerList))

Change config.webhookUrl to ${webhookUrl}${webhookUrl.slice(-1) === '/' ? 'my_webhook' : '/my_webhook'}

See here for more details: https://github.com/valgaze/speedybot/blob/master/docs/how-to.md#deploy`)
        const errMsg = `Error: webhookUrl in should end with a path, ex ${webhookUrl}${webhookUrl.slice(-1) === '/' ? 'my_webhook' : '/my_webhook'}`
        throw new Error(errMsg)
    } else {
        return true
    }
}

/**
 *
 * Randomly selects a phrase & fill in template
 *
 * ```ts
 *
 * // ie from an external template file
 * const payload = {
 *  phrases: ['Hey there, how it going, $[name]?', 'Hi $[name], here's your $[mint]']
 *  template: {
 * 		name: 'Joe',
 *  	flavor: 'mint'
 *  }
 * }
 *
 * fillTemplate(payload.phrases, payload.template)
 *
 * ```
 *
 * @param phrases: array of phrases []string
 * ```ts
 *  ['Howdy, you are $[name] and you like $[flavor]', '$[name], here is $[flavor]']
 * ```
 * @param template: mappings to phrases object
 *
 * ```js
 * {
 *   name: 'Joe',
 *   flavor: 'mint'
 * }
 *```
 *
 *
 */

 export const fillTemplate = (utterances: string | string[], template:  { [key: string]: any }): string => {
	let payload: string;
	if (typeof utterances != "string") {
		payload = pickRandom(utterances) || "";
	} else {
		payload = utterances
	}
	const replacer = (
		utterance: string,
		target: string,
		replacement: string
	): string => {
		if (!utterance.includes(`$[${target}]`)) {
			return utterance
		} else {
			return replacer(
				utterance.replace(`$[${target}]`, replacement),
				target,
				replacement
			)
		}
	}

	for (let key in template) {
		const val = template[key]
		payload = replacer(payload, key, val)
	}
	return payload
}


export const snippet = (data: string | object, dataType='json'): string => {
    const msg = `
\`\`\`${dataType}
${dataType === 'json' ? JSON.stringify(data, null, 2) : data}
\`\`\``
    return msg
}


export const htmlSnippet = (data: string | object): string => {
    return snippet(data, 'html')
}

// Alias store/recall
export class Storage {
	static async get(bot, key:string) {
		let res = null
		try {
			res = await bot.recall(key)
		} catch(e) {

		}
		return res
	}
	
	static async save(bot, key:string, val: any) {
		return bot.store(key, val)
	}

	static async delete(bot, key) {
		return bot.forget(key)
	}
}


export class Locker<T=unknown> {
	public state = new Map()
	constructor() {}

	exists(key:string) {
		return this.state.has(key)
	}

	save<T=unknown>(key: string, value: T): T {
		this.state.set(key, value)
		return value
	}

	get(key: string) {
		return this.state.get(key)
	}

	delete(key: string) {
		return this.state.delete(key)
	}

	snapShot() {
		return JSON.parse(JSON.stringify(this.state))
	}
}

export const globoStore = <T = unknown>() => new Locker<T>();


// Get uploaded files
export interface SpeedyFileData<T=any> {
	data: T;
	extension: string;
	fileName: string;
	type: string;
	markdownSnippet: string;
}


export const extractFileData = (contentDisposition: string): { fileName: string, extension: string }  => {
	// header >> 'content-disposition': 'attachment; filename="a.json"',      
	const fileName = contentDisposition.split(';')[1].split('=')[1].replace(/\"/g, '')
	const extension = fileName.split('.').pop() || ''
	return {
		fileName,
		extension
	}
}


export type retryFunc = (bot: BotInst, trigger: Trigger, result?: string | number) => void | Promise<any>;
export interface PromptConfig {
	prompt?: string;
	retry: string | string[] | retryFunc;
	validate?: (val: string | number) => boolean | Promise<boolean>;
	success: (bot: BotInst, trigger: Trigger, result?: string | number) => void | Promise<any>;
}

export class $Botutils {
	public token:string
	public botRef: BotInst;
	public request: (payload: any) => Promise<any>;
	public ContextKey = '_context_'
	// https://developer.webex.com/docs/basics
	public supportedExtensions = ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'pdf', 'jpg', 'jpeg', 'bmp', 'gif', 'png']
	
	private API = {
        messages: 'https://webexapis.com/v1/messages',
	}
	constructor(botRef: BotInst | any){
		this.botRef = botRef
		this.token = botRef.framework.options.token
		this.request = axios
		if (!this.botRef.framework._$storage) {
			this.botRef.framework._$storage = globoStore()
		}
	}


	globalSave<T=any>(key: string, val: T): T {
		return this.botRef.framework._$storage.save<T>(key, val)
	}

	globalGet<T=any>(key: string): T {
		return this.botRef.framework._$storage.get(key)
	}

	globalDelete(key: string) {
		return this.botRef.framework._$storage.delete(key)
	}

	globalExists(key: string) {
		return this.botRef.framework._$storage.exists(key)
	}
	
	/**
	 * Take user data and validate their responses-- don't give up until the uer completes the task or they type "$exit"
	 * @param label: string
	 * @param config: PromptConfig
	 * 
	 * $bot.prompt has (1) retry (list of message to encourage the user to try again), (2) success (handler when validation passes), (3) validate (function that accepts the user-provided value as a parameter)

	 * ex. Here's a prompt that wants the user to provide a number whose digits add up to 6
	 
	```ts
	 	import { BotHandler, $ } from 'speedybot'
		export const handlers: BotHandler[] = [
			{
				keyword: 'promptme',
				handler(bot) {
					const $bot = $(bot)
					bot.say('Sending you a prompt...')
					$bot.prompt('Enter a number whose digits that add up to 6 (ex 51, 60, 33, 501, etc)', {
						retry: [`Sorry, doesn't add up to 6`, `Whoops that value doesn't work try again`, `That value doesn't work`, `Type $exit to abandon this`],
						async success(bot, trigger, answer) {
							bot.say('You did it!!! Good job! <3 <3')
							bot.say(JSON.stringify(answer))
							// Ex. Submit data to a 3rd-party service/integration
							const res = await $bot.post('https://jsonplaceholder.typicode.com/posts', { data: { title: 'my special value that adds to 6', userValue: answer } })
							$(bot).sendSnippet(res.data, 'Posted response to https://jsonplaceholder.typicode.com/posts')
						},
						validate(val=0) {
							// Make sure digits add to 6
							const sum = String(val).split('')
							.map(Number)
							.reduce(function (a, b) {
								return a + b;
							}, 0)
							if (sum === 6) {
								return true
							} else {
								return false
							}
						}
					})
				},
				helpText: 'x'
		}]
		```
	 *
	 */
	async prompt(label: string, config: PromptConfig) {
		let { prompt } = config
		if (!prompt && label) {
			prompt = label
		}
		await this.promptActive(true)
		await this.savePrompts({...config, prompt})
		this.botRef.say(prompt)
	}

	async promptActive(flag?: boolean): Promise<boolean> {
		if (flag !== undefined) {
			return this.saveData<boolean>($promptActiveKey, flag)
		} else {
			return await this.getData<boolean>($promptActiveKey) as boolean
		} 
	}

	async endPrompt() {
		return Promise.all([this.promptActive(false), this.deleteData($prompts)])
	}

	async savePrompts(prompts: PromptConfig): Promise<any[]> {
		return this.saveData($prompts, prompts)
	}

	async getPrompt(): Promise<PromptConfig | null> {
		return this.getData<PromptConfig>($prompts)
	}

	/**
	 * Utility: Given a (pre-cleaned) list of handlers and an activating trigger
	 * 
	 *
	 * 
	 * @param handlerList 
	 * @param trigger 
	 */
	matchInvokeHandlers(handlerList: BotHandler[], trigger: Trigger, noMatch?: BotHandler) {
		const triggerPayload = trigger
		const checkHandler = (handler: BotHandler, trigger: Trigger):boolean => {
			/**
			* Per "https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js#L1625"
			* 	- "If regex, matches on entire message. If string, matches on first word."
			*/

			if (handler.keyword instanceof RegExp && handler.keyword.test(trigger.text as string)) {
                // trigger.phrase = handler.keyword
                return true;
            }
            if (typeof handler.keyword === 'string') {
                const { args } = trigger
                const [triggerCandidate] = args as string[]
                if (handler.keyword === triggerCandidate?.toLowerCase()) {
                    trigger.phrase = handler.keyword;
                    return true
                }
            }
			return false
		}


		if (trigger.message.roomType === 'group' && trigger['args'].length) {
			// In group rooms, return text includes bot @mention
			// if a group, slice off 1st element
			// Ain't pretty or elegant, but resolving this "here" is a big win
			// Another approach: https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js#L1193-L1194
			const args = trigger['args'].slice(1)
			Object.assign(triggerPayload, {args})
			Object.assign(triggerPayload, {text: args.join(' ')})

			// Adjust original message too
			// triggerPayload.message.html will contain the rich markup for a mention
			triggerPayload.message.text = triggerPayload.text
		}		
	
		let matchedHandlers = handlerList.filter(handler => {
			const {keyword} = handler
			if (Array.isArray(keyword)) {
				let flag = false
				keyword.forEach(kw => {
					const res = checkHandler({...handler, keyword:kw}, triggerPayload)
					if (res) {
						flag = true
					}
				})
				return flag
			} else {
				return checkHandler(handler, triggerPayload)
			}
         }).sort((a,b) => Number(a.preference) > Number(b.preference) ? 1 : -1)
		// https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js#L1155
		// Sort by preference
		// Check highest & lowest preference
		// filter out any items that don't have preference
		 const [low] = matchedHandlers
		 const lowPref = low?.preference
		 const highPref = matchedHandlers[matchedHandlers.length - 1]?.preference

		 if (lowPref !== highPref) {
			matchedHandlers = matchedHandlers.filter(handler => handler.preference === lowPref) 
		 }
		
        matchedHandlers.forEach(match => {
            const { handler } = match
            handler(this.botRef, triggerPayload)
        })

		if (!matchedHandlers.length && noMatch && noMatch.handler) {
			const {handler} = noMatch
			handler(this.botRef, triggerPayload)
		}
	}

	snippet(ref: (string | object)): string {
		return snippet(ref)
	}

	htmlSnippet(ref: (string | object), dataType='html'): string {
		return snippet(ref, dataType)
	}

	public async get<T=any>(url:string, config:AxiosRequestConfig={}):Promise<AxiosResponse<T>> {
		return this.request({url, method: 'GET', ...config})
	}

	public async post<T=any>(url, config:AxiosRequestConfig={}):Promise<T> {
		return this.request({url, method: 'POST', ...config})
	}

	public async getFile<T=any>(fileUrl: string, opts:AxiosRequestConfig={}): Promise<SpeedyFileData<T>> {
		/**
		 * Bummer: need to add additional dependency :/
		 * "request" is available in framework, however painful to get streams + deprecated: https://github.com/request/request/issues/3142
		 * 
		 */
		let requestOpts = {
			method: 'GET' as Method,
			url: fileUrl,
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
			...opts
		}
		try {
			const res = await axios(requestOpts)			
			const { headers, data } = res
			const { fileName, extension } = extractFileData(headers['content-disposition'])
			const type = headers['content-type']

			const payload = {
				data,
				extension,
				fileName,
				type,
				markdownSnippet: (type === 'application/json' || (typeof data === 'string' && data.length < 900)) ? this.snippet(data) : '' 
			}

			return payload

		} catch(e) {
			throw e
		}
	}

	// public markdownTable(data: any) {
	// 	// todo
	// 	return data
	// }

	public async send(payload: ToMessage) {
		return this.botRef.webex.messages.create(payload)
	}

	public genContextName(key:string) {
		return `${this.ContextKey}_${key}`
	}

	public degenContextName(key:string) {
		return key.replace(`${this.ContextKey}_`,'')
	}

	public async saveContext<T=any>(key: string, data?:T): Promise<void>{
		let writeData = data ? data : { _active: true }
		return this.saveData(`${this.genContextName(key)}`, writeData)
	}

	public async getContext<T=any>(key:string):Promise<T | null> {
		const res = await this.getData(this.genContextName(key))
		return res
	}

	public async contextActive(key:string):Promise<boolean> {
		const ctx = await this.getContext(key)
		return ctx ? true : false 
	}

	public async deleteContext<T=any>(key:string):Promise<void> {
		const res = await this.deleteData(this.genContextName(key))
		return res
	}

	public async getAllContexts(): Promise<string[]> {
		const fullRef = await this.botRef.recall()
		const keys = Object.keys(fullRef) || []
		const actives = keys.filter(key => key.includes(this.ContextKey))
							.map(key => this.degenContextName(key))
		return actives
	}
	
	public async sendURL(url: string, title?:string, buttonTitle='Go') {
		const card = new SpeedyCard()
		if (title) {
			card.setTitle(title).setUrl(url, buttonTitle)
		} else {
			card.setSubtitle(url).setUrl(url, buttonTitle)
		}
		this.botRef.sendCard(card.render(), url)
	}

	public async saveData<T=any>(key: string, data): Promise<T>{
		return this.botRef.store(key, data)
	}

	public async deleteData<T=any>(key: string): Promise<T | null>{
		return new Promise(async resolve => {
			try {
				const res = await this.botRef.forget(key)
				resolve(res)
			} catch(e) {
				resolve(null)
			}
		})
	}
	
	/**
	 * 
	 * Storage aliases
	 * getData: bot.recall 
	 * deleteData: bot.forget don't throw, resolve to null
	 * 
	 */
	public async getData<T=any>(key:string): Promise<T | null> {
			return new Promise(async resolve => {
				try {
					const res = await this.botRef.recall(key)
					resolve(res)
				} catch(e) {
					resolve(null)
				}
			})
		}
	public resolveFilePath(...filePieces: string[]) {
		return resolve(...filePieces)
	}
	
	public prepareLocalFile(...filePieces: string[]) {
		const target = resolve(...filePieces)
		const stream = createReadStream(target)
		return stream
	}

	public sendFile(...filePieces: string[]) {
		try {
			const stream = this.prepareLocalFile(...filePieces)
			this.botRef.uploadStream(stream)
		} catch(e) {
			throw e
		}
	}

	public async sendDataAsFile<T=any>(data: T, extensionOrFileName: string, fallbackText=' ') {
		const fullFileName = this.handleExt(extensionOrFileName)

		const formData = new FormData();
		formData.append('files', data, fullFileName)
		formData.append('roomId', this.botRef.room.id)
		formData.append('text', fallbackText)
		const formDataHeaders = formData.getHeaders()
		const headers = {
			...formDataHeaders,
			Authorization: `Bearer ${this.token}`,
		}
		return axios.post(this.API.messages, formData, { headers })
	}

	public async edit<T=any>(message: string | Message, newData: string) {
		let id = message
		let roomId = this.botRef.room.id

		if (typeof message === 'object') {
			const { id:msgId, roomId:msgRoomId } = message as Message
			id = msgId as string
			roomId = msgRoomId as string
		}

		const submitData = {
			roomId,
			markdown: newData
		}
		const headers = {
			Authorization: `Bearer ${this.token}`,
		}
		const url = `${this.API.messages}/${id}`
		return axios.put(url, submitData, { headers })
	}

	public async getUsers(): Promise<Membership[]> {
		const {items} = await this.botRef.webex.memberships.list({roomId: this.botRef.room.id})
		// Remove any items where email includes @webex.bot
		const botPrefix = '@webex.bot'
		return items.filter(({personEmail}) => !personEmail.includes(botPrefix))
	}

	public async sendAll(msg: string | object, list?: string[]) {
		const userList = list ? list : await this.getUsers()
		userList.forEach(user => {
			const { personEmail } = user
			if (typeof msg === 'string') {
				this.send({
					toPersonEmail: user.personEmail,
					markdown: msg as string
				})
			} else {
				this.dmCard(personEmail, msg, 'Sorry it does not appear your client supports Adaptive Cards')
			}
		})
	}

	public killFile(path:string) {
		return new Promise(resolve => {
			unlink(path, (err) => {
				if (err) {
					resolve(err)
				} else {
					resolve({})
				}
			})
		}) 
	}

	public async sendDataFromUrl(resourceUrl: string, fallbackText=' ') {
		return this.botRef.webex.messages.create({roomId: this.botRef.room.id, files: [resourceUrl], text:fallbackText})
	}

	public async sendSnippet(data: string | object, label='', dataType='json', fallbackText='It appears your client does not support markdown') {
		let markdown
		if (dataType === 'json') {
			markdown = this.snippet(data)
		} else {
			markdown = this.htmlSnippet(data)
		}

		if (label) {
			markdown = label + ' \n ' + markdown
		}
		return this.botRef.webex.messages.create({roomId: this.botRef.room.id, markdown, text: fallbackText})
	}

	public handleExt(input: string):string {
		const hasDot = input.indexOf('.') > -1
		let fileName = ''
		const [prefix, ext] = input.split('.')

		if (hasDot) {
			if (!prefix || prefix === '*') {
				// '.json' case, generate prefix
				fileName = `${this.generateFileName()}.${ext}`
			} else {
				// 'a.json' case, pass through
				fileName = input
			}
		} else {
			// 'json' case, generate prefix, add .
			fileName = `${this.generateFileName()}.${prefix}`
		}
		return fileName
	}

	public generateFileName(): string {
		return `${this.rando()}_${this.rando()}`
	}

	public rando(): string {
		return `${Math.random().toString(36).slice(2)}`
	}

	public dmCard(personId: string, jsonData: unknown, fallback?: string) {
		return this.botRef.dm(personId as string, {      
			// Fallback text for clients that don't render cards is required
			markdown: fallback ? fallback : "If you see this message your client cannot render buttons and cards.",
			attachments: [{
			"contentType": "application/vnd.microsoft.card.adaptive",
			"content": jsonData
			}]
		});
	}


	// Alias to other helpers

	public sendTemplate(utterances: string | string[], template:  { [key: string]: any }): Promise<Message> {
		const res = fillTemplate(utterances, template)
		return this.botRef.webex.messages.create({roomId: this.botRef.room.id, text: res})
	}

	public sendRandom(utterances: string[]) {
		const res = pickRandom(utterances)
		return this.botRef.webex.messages.create({roomId: this.botRef.room.id, text: res})
	}

	public log(...payload) {
		return log(...payload)
	}

	public checkMatch(candidate, list:(RegExp | string)[]): boolean {
		const checkRegex = (regex:RegExp, text: string) => regex.test(text)
		return list.some((element) => {
			if (typeof element === 'string') {
				if (candidate === element) {
					return true
				}
			}
			if (typeof element === 'object') {
				checkRegex(element, candidate)
			}
		})
	}

 	public async sendChips(chipPayload: ChipPayload, title = '') {
		 // Register 'n Render chips
		 const newChips:Chip[] = []
		if (Array.isArray(chipPayload)) {
			chipPayload.forEach(chip => {
				if (typeof chip === 'string') {
					const payload = {
						label: chip
					}
					newChips.push(payload)
				}
				const {label, keyword, handler} = chip as Chip
				if (label) {
					if (typeof handler === 'function') {
						newChips.push({label, handler})
					} else {
						if (keyword) {
							newChips.push({label, keyword})
						} else {
							newChips.push({label})
						}
					}
				}
			})
		}
		const chips = await this.getData(chipLabel) || []
		const keys = newChips.map(({label}) => label)
		const writeChips = chips.filter(chip => !keys.includes(chip.label)).concat(newChips)

		await this.saveData(chipLabel, writeChips)

		// Render chips in chat
		const labelsKeywords = newChips.map(({label, keyword}) => {
			return {
				label,
				keyword
			}
		})
		 const card = new SpeedyCard().setChips(labelsKeywords)
		 if (title) {
			 card.setSubtitle(title)
		 }
		 this.botRef.sendCard(card.render(), title)
	}

	public async setChipsConfig(config: ChipConfig) {
		return this.saveData(chipConfigLabel, config)
	}

	public async $trigger(text: string, trigger: Trigger) {
		const payload = {
			text,
			personId: trigger.person.id,
			roomId:  trigger.attachmentAction ? trigger.attachmentAction.roomId : trigger.message.roomId, 
		}
		this.botRef.framework.onMessageCreated(payload as Message)
	}

	public clearScreen(repeatCount=50) {
		const newLine = '\n'
		const repeatClamp = repeatCount > 7000 ? 5000 : repeatCount// 7439 char limit
		const clearScreen = `${newLine.repeat(repeatClamp)}`	
		return this.botRef.webex.messages.create({roomId: this.botRef.room.id, markdown: clearScreen, text: clearScreen,})
	}


	public _auth(fn: Function) {
		return fn.call(this, this.token)
	}

	public async getCounter(key: string): Promise<number> {
		const counterKey = this.__buildCounter(key)
		const counter = await this.getData(counterKey)
		if (counter === null) {
			await this.setCounter(key)
			return 0
		} else {
			return counter
		}
	}

	public async setCounter(key: string, val = 0) {
		const counterKey = this.__buildCounter(key)
		return this.saveData(counterKey, val)
	}

	public async increaseCounter(key: string): Promise<number> {
		const counterKey = this.__buildCounter(key)
		const counterRef = await this.getCounter(counterKey)
		const addOne = counterRef + 1
		await this.setCounter(key, addOne)
		return addOne
	}

	public async decreaseCounter(key: string): Promise<number> {
		const counterKey = this.__buildCounter(key)
		const counterRef = await this.getCounter(counterKey)
		const minusOne = counterRef - 1
		await this.setCounter(counterKey, minusOne)
		return minusOne
	}
	
	public async thread(thread: [string | object, string]) {
		let [root, reply] = thread
		let firstMsg = root
		const prepMsg = (card, fallback?) => {
			const rootMsg = {
				markdown: fallback ? fallback : "If you see this message your client cannot render buttons and cards.",
				attachments: [{
					"contentType": "application/vnd.microsoft.card.adaptive",
					"content": card
					}]
			}
			return rootMsg
		}

		if (typeof root === 'object') {
			firstMsg = prepMsg(root)
		}
		this.botRef.say(firstMsg).then(({id}) => {
			const msgObj = {
				parentId: id,
				markdown: reply
			}
			this.botRef.say(msgObj)
		})
	}

	/**
	 * Send a message to a room
	 * @param roomId roomID to which bot MUST be a member
	 * @param msgOrCard string | Adaptive Card: https://developer.webex.com/docs/api/guides/cards
	 * @param config How to handle error situation
	 * @param config.throwOnError flag to throw if error (ie target room does not exist or bot is not member of it)
	 * @param config.fallbackText Fallback text if Adaptive Card not support on client
	 * 
	 * ex.
	 * 
	 *
	 * ```ts
	 * import { $, SpeedyCard, pickRandom } from "speedybot";
		export const handlers = [
		{
			keyword: ["hi", "hello", "hey", "yo", "watsup", "hola"],
			async handler(bot, trigger) {
			const $bot = $(bot);

			// Ex1. Send text to a specific room
			const roomId = "aaa-bbb-ccc-ddd"; // NOTE: This is a ROOM ID not a room name!
			$bot.sendRoom(roomId, "My special message to the room");

			// Ex2. Send a card to specific room (https://developer.webex.com/docs/api/guides/cards)
			const myCard = new SpeedyCard()
				.setTitle("This is a card!")
				.setSubtitle("I want a beer plz")
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
			$bot.sendRoom(roomId, myCard.render());
			},
			helpText: "Handler that runs when the user greets the bot",
		}];
		```
	 * 
	 *  
	 */
	public async sendRoom(roomId: string, msgOrCard: string | any, config: {throwOnError: boolean, fallbackText: string} = 
	{
		throwOnError: false, 
		fallbackText:'If you see this message your client cannot render buttons and cards'
	}) {
		const isCard = typeof msgOrCard === 'object'
		const  {throwOnError, fallbackText } = config	
		try {
			if (isCard) {
				const payload = {
					roomId,
					markdown: fallbackText,
					attachments: [{
						"contentType": "application/vnd.microsoft.card.adaptive",
						"content": msgOrCard
						}]
				}
				return this.botRef.webex.messages.create(payload)
				// send card
			} else if (typeof msgOrCard === 'string') {
				return this.botRef.webex.messages.create({roomId, markdown: msgOrCard })
			}
		} catch(e) {
			if (throwOnError) {
				throw e
			}
			this.log(`There was an error attempting to send a message to ${roomId}`)
			this.log('Error', e)
		}
	}


	private __buildCounter(key: string=''): string {
		const prefix = `___$counter_`
		if (!key.includes(prefix)) {
			return `${prefix}${key}`
		} else {
			return key
		}

	} 
}

export interface FileConfig {
	type?: 'json' | 'buffer' | 'text'
}

export const $ = (botRef: BotInst | any):$Botutils => {
	// memo?
	return new $Botutils(botRef)
}

export interface Chip {
	label: string;
	keyword?: string; // Trigger a specific "keyword"/handler
	handler?: (bot: BotInst, trigger: Trigger) => void;
	// args?: () => Promise<string[]>
}

export type ChipPayload = string[] | Chip[] | (string | Chip)[]
export interface ChipConfig {
	disappearOnTap?: boolean;
}