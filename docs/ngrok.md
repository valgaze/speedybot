### nGrok

nGrok will tunnel a port on your machine to a fixed URL controlled by nGrok's system. This is done as a convenience step to make prototyping & implementing conversational experiences as fast (and secure) as possible.

nGrok offers pro/enterprise versions available here: https://ngrok.com/pricing 

<p>

**IMPORTANT:** nGrok will expose your port to nGrok's systems so your local install can talk to DialogFlow-- there are password-protected & pro/paid plans: https://ngrok.com/pricing

nGrok was developed by Alan Shreeve as a way to learn Go. nGrok will open a "secure" tunnel to nGrok's system so external services (like webhook systems) can access exposed resources on your local machine as if they were deployed on the public internet. This can make developing bot handling webhooks insanely convenient & fast-- nGrok also comes with a network inspector available on localhost:4040

While it's really simple/fast to get up and running with a webhook, the downside of this approach is that every time you restart nGrok you will be assigned a new URL which you'll need to update the **tunnel** field inside **[config.json](./../settings/config.json)** (paid versions of nGrok have persistent URLs & other features.)

Additionally, this repo uses an **[npm package](https://www.npmjs.com/package/ngrok)** (not controlled by nGrok) which instruments on top of nGrok

Using nGrok means you...

- Trust nGrok & the team building systems/servicing for it

- Trust author of nGrok npm package (you can inspect package-lock.json) which downloads an nGrok binary

nGrok is used for speed + convenience only, instead, you can deploy to a publically-reachable server and use the host address as a tunnel

There are other alternative services like **[https://localtunnel.github.io/www/](localtunnel)**

Long story short, if nGrok/tunneling is scary, just deploy the server and use the hostname as the "tunnel" value in **[config.json](./../settings/config.json)**
</p>
</details>