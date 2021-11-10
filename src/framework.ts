/**
 * 
 * Framework: https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js
 * Bot inst: https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/bot.js
 *
 */

/**
 * Framework instance: https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js#L25-L34
 *
*/
export interface FrameworkInst {
    options: FrameworkOptions;
    id: string;
    active: boolean;
    isBotAccount: boolean;
    isUserAccount: boolean;
    person: Person;
    email: string;
    webex: WebexInst;
    messageFormat?: string;
    setWebexToken(token: string): Promise<string>;
    testWebexToken(token: string): Promise<string>;
    getWebexSDK(): WebexInst; // TODO
    stop(): Promise<boolean>;
    start(): Promise<boolean>;
    initialize(): Promise<boolean>;
    restart(): Promise<boolean>;
    hears(phrase: string | RegExp, action: any, helpText: string, preference?: number):string;
    clearHears(hearsId: string): void;
    showHelp(header:string, footer: string): string;
    setAuthorizer(func: any); boolean;
    clearAuthorizer(): void;
    on(eventName: string, handler: unknown): void;
    onMessageCreated(payload: Message): void
}

export interface FrameworkOptions {
    token: string;
    webhookSecret: string;
    webhookRequestJSONLocation: string;
    removeWebhooksOnStart: boolean;
    removeDeviceRegistrationsOnStart: boolean;
}


/**
 * Bot
 * Bot inst: https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/bot.js
 *
 */
export interface BotInst {
    framework: FrameworkInst;
    active: boolean; // Bot active state
    person: object; // Bot's Webex  Person Object
    email: string; // Bot email
    room: Room; // Bot's Webex Room object
    membership: object; // Bot's Webex Membership object
    isLocked: boolean; // If bot is locked
    isModerator: boolean; // If bot is a moderator
    isGroup: boolean; // If bot is in Group Room
    isDirect: boolean; // If bot is in 1:1/Direct Room
    isTeam: boolean; // If bot is in a Room associated to a Team
    isDirectTo: string; // Recipient Email if bot is in 1:1/Direct Room
    lastActivity: string; // Last bot activity
    webex: WebexInst;
    
    // methods
    implode(): Promise<boolean>;
    say(format:string, msg?: string | object): Promise<Message>
    say(object): Promise<Message>
    say({markdown: string}): Promise<Message>
    sayWithLocalFile(message: string | object, filename: string): Promise<Message>
    reply(replyTo: string | object, message: string | object, format?: string): Promise<Message>
	dm(person: string, format: string | object, ...rest: any): void;
	sendCard(cardJson: any, fallbackText: string): Promise<Message>;
    dmCard(person: string, cardJson: any, fallbackText: string): void;
    censor(messageId: string): Promise<Message>;
    uploadStream(stream: any): Promise<Message>;
    add(emails: string | string[], moderator: boolean): Promise<string[]>;
    remove(emails: string | string[]): Promise<string[]>;
    getModerators():Promise<string[]>;
    newRoom(roomName:string, email: string[], isTeam: boolean): Promise<BotInst>;
    newTeamRoom(roomName:string, email: string[]): Promise<BotInst>;
    roomRename(title: string): Promise<Room>;
    exit(): Promise<boolean>;
    
    // storage
    store<T=any>(key: string, val: any): Promise<T>;
    recall<T=any>(key?: string): Promise<T>;
    forget<T=any>(key: string): Promise<T>;
}

export interface ToMessage extends Partial<Message> {
    toPersonId?: string;
    toPersonEmail?: string;
    files?: string[] | any[]
}

export interface Message {
    id?: string;
    roomId?: string;
    roomType?: string;
    text?: string;
    personId?: string;
    personEmail?: string;
    markdown?: string;
    html?: string;
    created?: string;
    files: string[];
}

export interface Room {
    id: string;
    title: string;
    type: string;
    isLocked: boolean;
    lastActivity: string;
    creatorId: string;
    created?: string;
    ownerId: string;
    teamId?: string;
}

export interface PhoneNumber {
    type: string;
    value: string;
}

export interface Person {
    id: string;
    emails: string[];
    phoneNumbers: PhoneNumber[];
    displayName: string;
    nickName: string;
    firstName: string;
    lastName: string;
    avatar: string;
    orgId: string;
    created: string;
    lastModified: string;
    type: string;
}

export interface Trigger {
    type: 'message' | 'attachmentAction';
    id: string;
    text: string;
    args: string[];
    message: Message;
    person: Person;
    personId: string;
    phrase: string;
    attachmentAction?: any;
}

// Partial stub-out of webex library
// webex.memberships.create
// webex.messages.create(message);
// https://webex.github.io/webex-js-sdk/api/#messageobject
export interface WebexInst {
    rooms: {
        create(room: Room): Promise<Room>,
        get(room: (Room | string), options: Object): Promise<Room>,
        remove(room: (Room | string)): Promise<unknown>,
        update(room: Room): Promise<Room>,
        [key: string]: any;
    },
    messages: {
        // https://webex.github.io/webex-js-sdk/api/#messageobject
        /**
         * 
         * @param message
         * 
         * ```ts
         * {
         * "toPersonEmail":"joe@bongo.com",
         * "text": "Here is a message"
         * }
         * ``` 
         * 
         */
        create(message: ToMessage): Promise<Message>,
        get(message: (Message | string)): Promise<Message>,
        list(options: {roomId: string, max?: number}): Promise<Message>,
        remove(message: (Message | string | number)): Promise<unknown>,
        [key: string]: any;
    },
    memberships: {
        create(membership: Membership): Promise<Membership>,
        get(membership: (Message | string | number)): Promise<Membership>,
        remove(membership: (Message | string | number)): Promise<unknown>,
        update(membership: (Message | string | number)): Promise<Membership>,
    },

    request(payload: any): Promise<any>; // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/request/index.d.ts
    // catch-all
    [key: string]: any
}

// For endpoint, message request
export interface MessageRequest {
    roomId?: string;
    parentId?: string;
    toPersonId?: string;
    toPersonEmail?: string;
    text?: string;
    markdown?: string;
    files?: string[];
    attachments?: any[]; // Adaptive card
}

export interface Membership {
    id: string; // Unique identifier for the membership
    roomId: string; // The room ID
    personId: string; // The person ID
    personEmail: string; // The email address of the person / room member
    isModerator: boolean; // Indicates whether the specified person should be a room moderator
    isMonitor: boolean; // Indicates whether the specified member is a room monitor
    created: string; // The date and time that this membership was created
}

// Bot handler
export type keywords = string | RegExp;
export type Allowedkeywords = keywords | keywords[];
export type handlerFunc = (bot: BotInst, trigger: Trigger) => void;

/**
 * 
 * @member {string | RegExp | (string | RegExp)[]} keyword is used for whatever reason

 * ```
 * keyword: string or regex, or a list of both. If regex it matches on entire message, if a string just on the 1st word
 * handler: handler function
 * helpText: help text
 * preference (optional) specify what should happen if multiple handlers overlap, lower number == higher match priority
 * ```
 */
export interface BotHandler {
	keyword: Allowedkeywords; // string or regex, or a list of both. If regex it matches on entire message, if a string just on the 1st word
	handler: handlerFunc;
	helpText: string; // Used by built-in help generator any handlers you write this way will list out their help data
	preference?: number; // defaults to 0, specifies preference of phrase when overlapping handlers match, lower number >> higher match priority
}

export type AlertFunc = (req: any, res: any) => void;

export type ValidMethods = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
export interface WebhookHandler {
    keyword: '<@webhook>';
    route: string;
    handler: AlertFunc;
    method?: ValidMethods; // default to post
}

export const passThru = (bot: BotInst, trigger: Trigger) => {
    // HACK: pass the button-tap value through the handler system
    return bot.framework.onMessageCreated(trigger.message)
}