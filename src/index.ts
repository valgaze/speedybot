export { Speedybot, SpeedybotWebhook, Speedytunnel, Launch } from './speedybot'
export { SpeedybotConfig } from './speedybot'

// Types: framework
export { FrameworkInst, BotHandler, Message, ToMessage, BotInst, Trigger } from './framework'
export { bad, help, ascii_art, log, good, askQuestion, loud } from './logger'
// helpers
export { fillTemplate, pickRandom } from './helpers'
// make adaptive cards less painful w/ base templates
export { easyCard } from './easycard'
export const placeholder = '__REPLACE__ME__'
