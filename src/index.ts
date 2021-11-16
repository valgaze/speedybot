export { Speedybot, SpeedybotWebhook, Speedytunnel, Launch } from './speedybot'
export { SpeedybotConfig } from './speedybot'

// Types: framework
export { FrameworkInst, BotHandler,WebhookHandler, Message, ToMessage, BotInst, Trigger, passThru } from './framework'
export { bad, help, ascii_art, log, good, askQuestion, loud } from './logger'
// helpers
export { fillTemplate, pickRandom, snippet, Storage, Locker, $ } from './helpers'
// make adaptive cards less painful w/ base templates
export { SpeedyCard } from './cards'
export const placeholder = '__REPLACE__ME__'
export const chipLabel = '___$CHIPS'