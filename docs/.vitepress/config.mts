import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/speedybot/", // repo name
  title: "SpeedyBot",
  description: "Rich conversation agents, the speedy and easy way",
  themeConfig: {
    footer: {
      message: `<a href="https://github.com/valgaze/speedybot/blob/v2/LICENSE" target="_blank">MIT License</a> ${new Date().getFullYear()}`, // this'll be statically updated everytime redeploy
    },
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "🆕 Start Here", link: "/new" },
      {
        text: "🚀 Examples",
        items: [
          {
            text: "🎨 Common Patterns",
            link: "/patterns",
          },
          {
            text: "🐣 Run a bot locally",
            link: "/new",
          },
          {
            text: "λ Deploy to AWS Lamda",
            link: "/examples/lambda/README",
          },
          {
            text: "🔥 Deploy to Worker ",
            link: "/examples/worker/README",
          },
          {
            text: "🦖 Deploy to Deno",
            link: "/examples/deno/README",
          },
          {
            text: "🌐 Deploy to Server ",
            link: "/examples/standard-server/README",
          },
          {
            text: "📲 LLM streaming responses",
            link: "/examples/llm-stream/README",
          },
          {
            text: "🗣 Connect to Voiceflow",
            link: "/examples/voiceflow/README",
          },
          {
            text: "📂 RAG with Voiceflow (file upload)",
            link: "/examples/voiceflow-kb/README",
          },
          {
            text: "🌎 Location Prompt",
            link: "/examples/location/README.md",
          },
          {
            text: "🔐 Secure Webhooks ",
            link: "/webhooks",
          },
          {
            text: "💡 Get help",
            link: "/help",
          },
        ],
      },
      { text: "📇 SpeedyCard", link: "/speedycard" },
      { text: "🔧 Garage", link: "/garage" },
      { text: "📚 Reference", link: "/../api-docs/modules" },
      { text: "🐍 Python Version", link: "https://pypi.org/project/speedybot" },
      // { text: "🏡 Home", link: "/" },
    ],

    sidebar: [
      {
        text: "🤖 Bot Utils ",
        link: "/garage",
        collapsed: true,
        items: [
          { text: "🔧 Garage", link: "/garage" },
          { text: "📇 SpeedyCard Editor", link: "/speedycard" },
          { text: "🌐 Webhooks", link: "/webhooks" },
        ],
      },
      {
        text: "🚀 Quickstarts",
        collapsed: true,
        items: [
          {
            text: "🐣 Run a bot locally",
            link: "/new",
          },
          {
            text: "λ Deploy to AWS Lamda",
            link: "/examples/lambda/README",
          },
          {
            text: "🔥 Deploy to Worker ",
            link: "/examples/worker/README",
          },
          {
            text: "🦖 Deploy to Deno",
            link: "/examples/deno/README",
          },
          {
            text: "🌐 Deploy to Server ",
            link: "/examples/standard-server/README",
          },
          {
            text: "📲 LLM streaming responses",
            link: "/examples/llm-stream/README",
          },
          {
            text: "🗣 Connect to Voiceflow",
            link: "/examples/voiceflow/README",
          },
          {
            text: "📂 RAG with Voiceflow (file upload)",
            link: "/examples/voiceflow-kb/README",
          },
          {
            text: "🌎 Location Prompt",
            link: "/examples/location/README.md",
          },
        ],
      },
      {
        text: "🌟 Learn",
        // collapsed: true,
        items: [
          {
            text: "🎨 Common Patterns",
            link: "/patterns",
          },
          {
            text: `💻 Secure Webhooks with a "secret"`,
            link: "/webhooks.html#securing-webhooks",
          },

          {
            text: "📚 API Docs",
            link: "/../api-docs/modules",
          },
          {
            text: "💡 Get help",
            link: "/help",
          },
          {
            text: "✉️ Send a SpeedyCard",
            link: "https://speedybot.js.org/send-a-card", // open external
          },
          // {
          //   text: "🗣 Voiceflow Integration",
          //   link: "../examples/express-incoming-webhook/README.md",
          // },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/valgaze/speedybot " },
    ],
  },
  vite: {
    // build: {
    //   rollupOptions: {
    //     external: ["adaptivecards"],
    //   },
    // },
    ssr: {
      noExternal: ["monaco-editor"],
    },
    optimizeDeps: {
      include: ["adaptivecards", "element-plus"],
    },
  },
});
