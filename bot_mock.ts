export type Message = {
    name: string
}
export type Room = {
    id: string
}

const RoomSample = {
    id: "x"
}
const MessageSample: Message = {
    name: 'xxx'
}

export const BotMock: BotInst = {
    framework: {},
    active: true,
    person: {},
    room: {}, //
    membership: {}, //
    isLocked: false,
    isModerator: true,
    isGroup: true,
    isDirect: false,
    isTeam: true,
    isDirectTo: 'todo',
    lastActivity: 'todo',
    webex: {}, //
    async implode() {
        return true
    },

    // async say(format:string, msg?: string | object): Promise<Message> {
    //     return MessageSample
    // },
    // async say(object): Promise<Message> {
    //     return MessageSample
    // },
    // async say({markdown: string}): Promise<Message> {
    //     return MessageSample
    // },
    async sayWithLocalFile(message: string | object, filename: string): Promise<Message> {
        return MessageSample
    },
    async reply(replyTo: string | object, message: string | object, format?: string): Promise<Message> {
        return MessageSample
    },
	dm(person: string, format: string | object, ...rest: any): void {
        return
    },
	async sendCard(cardJson: any, fallbackText: string): Promise<Message> {
        return MessageSample
    },
    dmCard(person: string, cardJson: any, fallbackText: string): void {},
    async censor(messageId: string): Promise<Message> {
        return MessageSample
    },
    async uploadStream(stream: any): Promise<Message> {
        return MessageSample
    },
    async add(emails: string | string[], moderator: boolean): Promise<string[]> {
        return ['']
    },
    async remove(emails: string | string[]): Promise<string[]> {
        return ['']
    },
    async getModerators():Promise<string[]> {
        return ['']
    },
    async newRoom(roomName:string, email: string[], isTeam: boolean): Promise<BotInst> {
        return this
    },
    async newTeamRoom(roomName:string, email: string[]): Promise<BotInst> {
        return this
    },
    async roomRename(title: string): Promise<Room> {
        return RoomSample
    },
    async exit(): Promise<boolean> {
        return true
    },
    
    // storage
    async store<T=any>(key: string, val: any): Promise<T> {
        return val
    },
    async recall<T=any>(key?: string): Promise<T> {
        return key as any
    },
    forget<T=any>(key: string): Promise<T> {
        return key as any
    }

}

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