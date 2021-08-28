## Useful Resources

### Bot Token

- Create new bot: https://developer.webex.com/my-apps/new/bot

- Get an existing bot's token (tap "regenerate"): https://developer.webex.com/my-apps

### Useful reading

- https://developer.webex.com/blog/from-zero-to-webex-teams-chatbot-in-15-minutes

- https://developer.webex.com/blog/introducing-the-webex-teams-bot-framework-for-node-js

- https://github.com/WebexSamples/webex-card-school/blob/master/README.md

- https://developer.webex.com/blog/five-tips-for-well-behaved-webex-bots

- https://github.com/WebexSamples/webex-node-bot-framework/blob/master/docs/buttons-and-cards-example.md


## Snippets

## DM directly to user (ie reply privately)

```ts

// Simple example to send message and file
framework.hears('dm me a file', function(bot, trigger) {
  bot.dm(trigger.person.id, {text: 'Here is your file!', file: 'http://myurl/file.doc'});
});

// Markdown Method 2 - Define message format as part of argument string
framework.hears('dm someone', function(bot, trigger) {
  bot.dm('john@doe.com', 'markdown', '**hello**, How are you today?');
});


```