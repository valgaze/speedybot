import BotFramework from 'webex-node-bot-framework'

export interface FrameworkConfig {
	token: string; // Webex Token.
	webhookUrl?: string; // URL that is used for Webex API to send callbacks. If not set events are received via websocket
	webhookSecret?: string; // If specified, inbound webhooks are authorized before being processed. Ignored if webhookUrl is not set.
	httpsProxy?: string; // If specified the https proxy to route request to webex through. Ie: "https://proxy.mycompany.com:8090"
	maxStartupSpaces?: number; // If specified, the maximum number of spaces with our bot that the framework will discover during startup. If not specified the framework will attempt to discover all the spaces the framework's identity is in and "spawn" a bot object for all of them before emitting an "initiatialized" event. For popular bots that belog to hundreds or thousands of spaces, this can result in long startup times. Setting this to a number (ie: 100) will limit the number of bots spawned before initialization. Bots that are driven by external events and rely on logic that checks if an appropriate bot object exists before sending a notification should not modify the default. Bots that are driven primarily by webex user commands to the bot may set this to 0 or any positive number to facilitate a faster startup. After initialization new bot objects are created ("spawned") when the bot is added to a new space or, if the framework receives events in existing spaces that it did not discover during initialization. In the case of these "late discoveries", bots objects are spawned "just in time". This behavior is similar to the way the webex teams clients work. See the Spawn Event docs to discover how to handle the different types of spawn events.
	messageFormat?: string; // Default Webex message format to use with bot.say().
	initBotStorageData?: object; // Initial data for new bots to put into storage.
	id?: string; // The id this instance of Framework uses.
	webhookRequestJSONLocation?: string; // The property under the Request to find the JSON contents.
	removeWebhooksOnStart?: Boolean; // If you wish to have the bot remove all account webhooks when starting. Ignored if webhookUrl is not set.
	removeDeviceRegistrationsOnStart?: Boolean; // If you use websockets and get "excessive device registrations" during iterative development, this will delete ALL device registrations. Use with caution! Ignored if webhookUrl is set.
	restrictedToEmailDomains?: string; // Set to a comma seperated list of email domains the bot may interact with, ie "myco.com,myco2.com". For more details see the Membership-Rules README
	guideEmails?: string; // Set to a comma seperated list of Webex users emails who MUST be in a space in order for the bot to work, ie "user1@myco.com,user2@myco2.com". For more details see the Membership-Rules README
	membershipRulesDisallowedResponse?: string; // Message from bot when it detects it is in a space that does not conform to the membership rules specified by the restrictedToEmailDomains and/or the guideEmails parameters. Default messages is "Sorry, my use is not allowed for all the members in this space. Will ignore any new messages to me.". No message will be sent if this is set to an empty string.
	membershipRulesStateMessageResponse?: string; // Message from bot when it is messaged in a space that does not conform to the membership rules specified by the restrictedToEmailDomains and/or the guideEmails parameters. Default messages is "Sorry, because my use is not allowed for all the members in this space I am ignoring any input.". No message will be sent if this is set to an empty string.
	membershipRulesAllowedResponse?: string; // Message from bot when it detects that an the memberships of a space it is in have changed in in order to conform with the membership rules specified by the The default messages is "I am now allowed to interact with all the members in this space and will no longer ignore any input.". No message will be sent if this is set to an empty string.
}

/**
 * Framework instance
 * https://github.com/WebexSamples/webex-node-bot-framework/blob/7754330240a88d15ddd76e1956672c444a9337c5/lib/framework.js#L1516
 * Ex.
 * 
 * ```ts
 * framework.on('spawn', function(bot, flintId, addedById) {
*     if (!addedById) {
*      // don't say anything here or your bot's spaces will get
*      // spammed every time your server is restarted
*      framework.debug(`Framework spawned a bot object in existing
*         space: ${bot.room.title}`);
*   } else {
*     if ((bot.room.type === 'group') && (addedById)) {
*       // In this example we imagine our bot is only allowed in 1-1 spaces
*       // our bot creates a 1-1 with the addedBy user, and leaves the group space
*       bot.dm(addedById, `I see you added me to the the space "${bot.room.title}", ` +
*         `but I am not allowed in group spaces.  ` +
*         `We can talk here if you like.`).then(() => bot.exit());
*     } else {
*       bot.say(`Thanks for adding me to this space.  Here is what I can do...`);
*     }
*   }
* });
* 
* ```
* 
*/
export interface FrameworkInst {
	on(eventName: string, handler: Function): void;
	hears(phrase, action: handlerFunc, helpText?:string, preference?: number);
	setWebexToken?(string): Promise<string>;
	[key: string]: any; // TODO: get the rest-- https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js#L1663
}

export type handlerFunc = (bot: BotInst, trigger: Trigger) => void;
/**
 * BotHandler
 * 
 * 
 * 
 */
 export interface BotHandler {
	activator: AllowedActivators // todo: restrict "help" &
	handler: handlerFunc;
	helpText: string; // Help is a reserved name, if you type @botname help, any handlers you write this way will list out their help data
	preference?: number;
}

export type activatorNames = 'help' | 'healthcheck' | 'help'
export type activators = string | RegExp;
export type AllowedActivators = activators | activators[];

/**
 * https://github.com/WebexSamples/webex-node-bot-framework/blob/master/README.md#bot
 * Get better types
 * 
 */
export interface BotInst {
	say(payload?: any, ...rest: any): void;
	dm(payload?: any, ...rest:any): void;
	sendCard(cardJson: any, fallbackText:string): Promise<any>;
	[key: string]: any; // TODO: get the rest;
}

/**
 *
 * Trigger Object
 * https://github.com/WebexSamples/webex-node-bot-framework/blob/7754330240a88d15ddd76e1956672c444a9337c5/lib/framework.js#L635
 * @namespace Trigger
 * @property {string} type - type of trigger - message or attachmentAction
 * @property {string} id - Message or attachentAction ID
 * @property {object} message - message that caused this trigger (if type is 'message')
 * @property {(string|regex)} phrase - Matched lexicon phrase if any
 * @property {array} args - Filtered array of words in message text.
 * @property {object} attachmentAction - attachmentAction that caused this trigger (if type is 'attachmentAction')
 * @property {object} person - Person object associated with user that sent the message or action
 * @property {string} personId - ID of person
 */
 export interface Trigger {
	type: string; // message or attachmentAction
	id: string; // Message or attachentAction ID
	message?: any; // TODO
	phrase: string | RegExp; // Matched lexicon phrase if any
	args: any; // TODO, Filtered array of words in message text
	attachmentAction: any; // TODO, attachmentAction
	person: Person; // TODO: person
	personId: string;
	[key: string]: any; // TODO: get the rest-- https://github.com/WebexSamples/webex-node-bot-framework/blob/master/lib/framework.js#L1663
}    
export interface Person {
  id: string;
  emails?: string[];
  phoneNumbers?: string;
  displayName?: string;
  nickName?: string;
  firstName: string;
  lastName: string;
  avatar: string;
  orgId: string;
  created: string;
  lastModified: string;
  type: string;
}



export type EventNames = 'attachmentAction' | 'log' | 'messageCreated' | 'stop' | 'start' | 'initialized' | 'roomLocked' | 'roomUnocked' | 'roomRenamed' | 'memberEnters' | 'botAddedAsModerator' | 'botRemovedAsModerator' | 'memberAddedAsModerator' | 'memberRemovedAsModerator' | 'memberExits' | 'mentioned' | 'message' | 'files' | 'spawn' | 'despawn'
export interface FrameworkHandler {
	eventName: EventNames;
	handler: handlerFunc;
}

export async function startBot(config: FrameworkConfig):Promise<FrameworkInst> {

	const inst = new BotFramework(config);
	try {
		await inst.start();
		if (process) {
			process.on('SIGINT', function() {
				inst.debug('stoppping...');
				inst.stop().then(function() {
					process.exit();
				});
			});
		}
		return new Promise((resolve) => {
			inst.on("initialized", function (x) {
				return resolve(inst);
			});	
		})
			
	} catch(e) {
		throw e;
	}
}