import axios, { Method, AxiosRequestConfig, AxiosResponse } from 'axios'
import { createReadStream, unlink, writeFileSync } from 'fs'
import {  SpeedyCard, chipLabel } from './index'
import { BotInst, Trigger, ToMessage, Message } from './framework'
import { log, loud } from './logger'
import { resolve } from 'path'




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

Ex. (expresjs) If your server's route handler look like this:

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


export class Locker<T> {
	constructor(public state: T = {} as T) {}

	save(trigger:Trigger, key: string, value: unknown) {
		const { personId } = trigger
		if (!this.state[personId]) {
			this.state[personId] = {}
		}
		this.state[personId][key] = value
	}

	get(trigger:Trigger, key: string) {
		const { personId } = trigger
		return this.state[personId] ? (this.state[personId][key] || null) : null
	}

	delete(trigger: Trigger, key: string) {
		const { personId } = trigger
		if (this.state[personId]) {
			delete this.state[personId][key]
		}
	}

	snapShot() {
		return JSON.parse(JSON.stringify(this.state))
	}
}


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

export class $Botutils {
	public token:string
	public botRef: BotInst;
	public request: (payload: any) => Promise<any>;
	public ContextKey = '_context_'
	// https://developer.webex.com/docs/basics
	public supportedExtensions = ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'pdf', 'jpg', 'jpeg', 'bmp', 'gif', 'png']
	constructor(botRef: BotInst | any){
		this.botRef = botRef
		this.token = botRef.framework.options.token
		this.request = axios
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

	public async sendURL(url: string, title?:string) {
		const card = new SpeedyCard()
		if (title) {
			card.setTitle(title).setUrl(url)
		} else {
			card.setSubtitle(url).setUrl(url, 'Open')
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

	public async sendDataAsFile<T=any>(data: T, extensionOrFileName: string, config: FileConfig ={}, fallbackText=' ') {
		// 🦆: HACK HACK HACK for "files": https://developer.webex.com/docs/basics
		// todo: get rid of filesystem write
		const fullFileName = this.handleExt(extensionOrFileName)
		try {
			writeFileSync(fullFileName, data)
			const stream = createReadStream(fullFileName)
			await this.botRef.webex.messages.create({roomId: this.botRef.room.id, files: [stream], text:fallbackText})
			this.killFile(fullFileName)
		} catch(e) {
			throw e
		}
	}

	public killFile(path:string) {
		return new Promise((resolve, reject) => {
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
			if (!prefix) {
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

 	public async sendChips(chipPayload: ChipPayload, heading?:string) {
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
				const {label, handler} = chip as Chip
				if (label) {
					if (typeof handler === 'function') {
						newChips.push({label, handler})
					} else {
						newChips.push({label})
					}
				}
			})
		}

		 if (typeof chipPayload === 'string') {
			let candidate: Chip = {label: ''}
			 candidate = {
				 label: chipPayload.split(' ').join('_')
			 }
			 newChips.push(candidate)
		 }

		const chips = await this.getData(chipLabel) || []
		const keys = newChips.map(({label}) => label)
		const writeChips = chips.filter(chip => !keys.includes(chip.label)).concat(newChips)
		await this.saveData(chipLabel, writeChips)

		// Render chips in chat
		const labels = newChips.map(({label}) => {
			return label
		})
		 const card = new SpeedyCard().setChips(labels)
		 if (heading) {
			 card.setSubtitle(heading)
			 this.sendTemplate([heading], { time: new Date().toString()})
		 }

		 this.botRef.sendCard(card.render(), heading ? heading : ' ')
	}

	public async $trigger(text: string, trigger: Trigger) {
		const payload = {
			text,
			personId: trigger.person.id,
			roomId:  trigger.attachmentAction ? trigger.attachmentAction.roomId : trigger.message.roomId, 
		}
		this.botRef.framework.onMessageCreated(payload as Message)
	}

	public _auth(fn: Function) {
		return fn.call(this, this.token)
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
	handler?: (bot: BotInst, trigger: Trigger) => void;
	// args?: () => Promise<string[]>
}

export type ChipPayload = string | string[] | Chip[] | (string | Chip)[]