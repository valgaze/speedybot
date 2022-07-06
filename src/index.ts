export { Speedybot, SpeedybotWebhook, Speedytunnel, Launch } from './speedybot'
export { SpeedybotConfig } from './speedybot'

// Types: framework
export { FrameworkInst, BotHandler,WebhookHandler, Message, ToMessage, BotInst, Trigger, passThru } from './framework'
export { bad, help, ascii_art, log, good, askQuestion, loud } from './logger'
// helpers
export { fillTemplate, pickRandom, snippet, Storage, Locker, $, globoStore } from './helpers'
export { Chip, ChipPayload, ChipConfig } from './helpers'

// make adaptive cards less painful w/ base templates
export { SpeedyCard } from './cards'
export const placeholder = '__REPLACE__ME__'

// special internal values for suggestion "chip" engine
export const chipLabel = '___$CHIPS'
export const chipConfigLabel = `${chipLabel}_$config`

// special internal values for $prompt'ing
export const $promptActiveKey = '$promptActive'
export const $prompts = '$prompts'

// Vote
export const vote_prefix = '$$_VOTE_$$'

export { HookBot, AbbreviatedSpeedyCard, Hooks, IncomingWebhook, SpeedyGuard } from './webhook'