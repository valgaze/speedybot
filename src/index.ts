export { Speedybot, SpeedybotWebhook, devLauncher, Speedytunnel, Launch } from './speedybot'
export { SpeedybotConfig } from './speedybot'

// Types: framework
export { FrameworkInst, BotHandler, Message, ToMessage, BotInst, Trigger } from './framework'
export { bad, help, ascii_art, log, good, askQuestion, loud } from './logger'
// thin file-utils
export { scaffoldGitclone, writeJSON, setupRepo,  } from './file'
// helpers
export { fillTemplate, placeholder, pickRandom } from './helpers'
// make adaptive cards less painful w/ base templates
export { easyCard } from './easycard'
