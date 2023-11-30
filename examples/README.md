## Examples

SpeedyBot has several "batteries-included" examples that show how to deploy Speedybot on a variety of platforms/services. It doesn't matter if it's Serverless-less/Server-ful, websockets or whatever-- it can probably run Speedybot. There's no "best" infrastructure solution but rather choices/options depending on your setup and particular requirements.

SpeedyBot makes it easy to focus on that parts that matter-- your content + integrations and you do all of that from a simple `bot.ts` file.

Grab an example and see the included README for instructions on how to quickly go from zero to an agent with which you can virtal

| Platform                                                                          | Needs server? | Needs webhooks? |
| --------------------------------------------------------------------------------- | ------------- | --------------- |
| **[🔌 Deploy with websockets](./speedybot-starter/README.md)**                    | ❌            | ❌              |
| **[💻 Deploy to Simple Express Server](./standard-server/README.md)**             | ✅            | ✅              |
| **[λ Deploy to AWS Lamda](./lambda/README.md)** using **[SST](https://sst.dev/)** | ❌            | ✅              |
| **[🔥 Deploy to Worker](./worker/README.md)**                                     | ❌            | ✅              |
| **[🦖 Deploy to Deno](./deno/README.md)**                                         | ❌            | ✅              |
| **[📲 LLM Stream](./llm-stream/README.md)**                                       | ❌            | ❌              |
