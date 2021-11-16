import {bad} from './index'
export interface BaseConfig {
    title?: string;
    titleConfig?: Partial<TextBlock>;
    choices?: string[];
    buttons?: string[];
}

export interface BaseOpts {
    horizontalAlignment?:  "Left" | "Center" | "Right";
    size?: "Small" | "Default" | "Medium" | "Large" | "ExtraLarge";
}

export interface ChoiceOption {
    title: string;
    value: string;
}

export interface ChoiceBlock {
    type?: string; // "Input.ChoiceSet"
    id?: string;
    value?: string;
    isMultiSelect?: boolean;
    isVisible?: boolean;
    choices?: ChoiceOption[]
}

export interface TextBlock extends BaseOpts {
    type: "TextBlock";
    text: string;
    color?: "Default" | "Dark" | "Light" | "Accent" | "Good" | "Warning" | "Attention";
    fontType?: string;
    isSubtle?: boolean;
    weight: "Lighter" | "Default" | "Bolder";
    wrap?: boolean;
}

export interface ImageBlock extends BaseOpts {
    type:"Image";
    url: string;
}

export interface LinkButton {
    type: "Action.OpenUrl";
    title: string;
    url: string;
    style?: "positive" | "destructive";
}

export interface inputConfig {
    id: string;
    placeholder?: string;
}

export interface Fact {
    title: string;
    value: string
}
export interface FactSet {
    type: 'FactSet', 
    facts: Fact[]
}
export interface AttachmentData {
    [key: string]: any
}

/**
 * SpeedyCard
 *  Work in progress
 * - zero-knowledge, easy declarative way to construct
 * "rich" (ie interactive adpative cards)
 * 
 * - Chain methods together, kinda like SwiftUI's syntax: https://developer.apple.com/xcode/swiftui/
 * 
 * ```ts 
   import { SpeedyCard } from 'speedybot'

   const cardPayload = new SpeedyCard().setTitle('System is 👍')
    .setSubtitle('If you see this card, everything is working')
    .setImage('https://i.imgur.com/SW78JRd.jpg')
    .setInput(`What's on your mind?`)
    .setUrl(pickRandom(['https://www.youtube.com/watch?v=3GwjfUFyY6M', 'https://www.youtube.com/watch?v=d-diB65scQU']), 'Take a moment to celebrate')
    .setTable([[`Bot's Date`, new Date().toDateString()], ["Bot's Uptime", `${String(process.uptime()).substring(0, 25)}s`]])

    bot.sendCard(cardPayload.render(), 'Your client doesnt appear to support adaptive cards')
 * ```
 */
export interface SelectorPayload {
    id: string;
    type: string;
    label?: string;
}
export class SpeedyCard {
    public title = ''
    public subtitle = ''
    public titleConfig: Partial<TextBlock> = {}
    public subTitleConfig: Partial<TextBlock> = {}
    public choices: ChoiceOption[] = []
    public choiceConfig: Partial<ChoiceBlock> = {}
    public image: string = '';
    public imageConfig: BaseOpts = {};
    public buttonLabel = 'Submit'
    public inputPlaceholder = ''
    public inputConfig: inputConfig = {
        id: 'inputData',
    }
    public url = ''
    public urlLabel = 'Go'
    public tableData: string[][] = []
    public attachedData: AttachmentData = {}
    public needsSubmit = false
    public dateData: Partial<SelectorPayload> = {}
    public timeData: Partial<SelectorPayload> = {}

    public json:EasyCardSpec = {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": []      
    }

    constructor() {}

    setTitle(title:string, config?: Partial<TextBlock>) {
        this.title = title
        if (config) {
            this.titleConfig = config
        }
        return this
    }

    setSubtitle(subtitle: string, config?: Partial<TextBlock>) {
        this.subtitle = subtitle
        if (config) {
            this.subTitleConfig = config
        }
        return this
    }

    setChoices(choices: string[], config?:ChoiceBlock) {
        this.choices = choices.map((choice: string, idx) => {
			return {
				title: choice,
				value: String(idx)
			}
		})
        if (config) {
            this.choiceConfig = config
        }
        return this
    }

    setImage(url: string, imageConfig?) {
        this.image = url
        if (imageConfig) {
            this.imageConfig = imageConfig
        }
        return this
    }

    setButtonLabel(label: string) {
        this.buttonLabel = label
        return this
    }

    setInput(placeholder, config?) {
        this.inputPlaceholder = placeholder
        if (config) {
            this.inputConfig = config
        }
        return this
    }

    setUrl(url: string, label='Go') {
        this.urlLabel = label
        this.url = url
        return this
    }

    setTable(input: string[][]) {
        let core = input
        if (!Array.isArray(input) && typeof input === 'object') {
            core = Object.entries(input)
        }
        this.tableData = core
        return this
    }

    setData(payload:AttachmentData) {
        if (payload) {
            this.attachedData = payload
            this.needsSubmit = true
        }
        return this
    }

    setDate(id="selectedDate", label: string='Select a date') {
        const payload = {
            "type": "Input.Date",
            id,
            label
        }
        this.dateData = payload
        return this
    }

    setTime(id="selectedTime", label: string = 'Select a time') {
        const payload = {
            "type": "Input.Time",
            id,
            label
        }
        this.timeData = payload
        return this
    }

    setChips(chips: string[]) {
        const chipPayload = chips.map(chip => {
            const payload = {
				"type": "Action.Submit",
				"title": chip,
				"data": {
					"chip_action": chip
				}
			}
            return payload
        })
        this.json.actions = this.json.actions ? this.json.actions.push(chipPayload) : chipPayload
        return this
    }

    render() {
        if (this.title) {
            const payload:TextBlock = {
                type: 'TextBlock',
                text: this.title,
                weight: 'Bolder',
                size: 'Large',
                wrap: true,
                ...this.titleConfig
            }
            this.json.body.push(payload)
        }

        if (this.subtitle) {
            const payload:TextBlock = {
                type: 'TextBlock',
                text: this.subtitle,
                size: "Medium",
                isSubtle: true,
                wrap:true,
                weight: 'Lighter',
                ...this.subTitleConfig
            }
            this.json.body.push(payload)
        }

        if (this.tableData && this.tableData.length) {
            const payload: FactSet = {
                "type": "FactSet",
                "facts": []
            }

            this.tableData.forEach(([label, value], i) => {
                const fact:Fact = {
                    title: label,
                    value
                }
                payload.facts.push(fact)
            })
            
            this.json.body.push(payload)
        }

        if (this.image) {
            const payload: ImageBlock = {
                type: "Image",
                url: this.image,
                horizontalAlignment: "Center",
                size: "Large",
                ...this.imageConfig
            }
            this.json.body.push(payload)
        }

        if (this.choices.length) {
            this.needsSubmit = true
            const payload: ChoiceBlock = {
                type: 'Input.ChoiceSet',
                id: 'choiceSelect',
                "value": "0", // Pick 1st one?
                "isMultiSelect": false,
                "isVisible": true,
                choices: this.choices,
                ...this.choiceConfig
            }
            this.json.body.push(payload)
        }

        if (this.inputPlaceholder) {
            this.needsSubmit = true
            const payload = {
                "type": "Input.Text",
                placeholder: this.inputPlaceholder,
                ...this.inputConfig,
            }
            this.json.body.push(payload)
        }

        if (Object.keys(this.dateData).length) {
            const { id, type, label} = this.dateData
            if (label) {
                this.json.body.push({
                    "type": "TextBlock",
                    "text": label,
                    "wrap": true
                })
            }
            if (id && type) {
                this.json.body.push({id, type})
            }
            this.needsSubmit = true
         }


        if (Object.keys(this.timeData).length) {
            const { id, type, label} = this.timeData
            if (label) {
                this.json.body.push({
                    "type": "TextBlock",
                    "text": label,
                    "wrap": true
                })
            }
            if (id && type) {
                this.json.body.push({id, type})
            }
            this.needsSubmit = true
        }


        if (this.needsSubmit) {
            interface SubmitPayload {
                type: string;
                title: string;
                data?: unknown
            }
            const payload:SubmitPayload = {
                type: "Action.Submit",
                title: this.buttonLabel,
            }
            if (this.attachedData) {
                payload.data = this.attachedData
            }
            this.json.actions = this.json.actions ? this.json.actions.push(payload) : [payload]
        } else {
            if (this.attachedData && Object.keys(this.attachedData).length) {
                bad(`attachedData ignore, you must call at least either .setInput(), .setChoices, .setDate, .setTime, to pass through data with an adaptive card`)
            }
        }

        if (this.url) {
            const payload: LinkButton = {
                type: "Action.OpenUrl",
                title: this.urlLabel,
                url: this.url,
            }
            if (this.json.actions) {
                this.json.actions.push(payload)
            } else {
                this.json.actions = [payload]
            }
        }
        return this.json
    }

    renderFull() {
        const cardData = this.render()
        const fullPayload = {
            "roomId": "__REPLACE__ME__",
            "markdown": "Fallback text **here**",
            "attachments": [cardData]
        }
        return fullPayload
    }
}

// todo: better types
export interface EasyCardSpec {
	$schema: string;
	type: string;
	version: string;
	body: any;
	actions?: any;
}