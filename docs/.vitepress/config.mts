import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "speedybot",
  description: "Invisible and indispensable conversation design tooling",
  base: "/speedybot/",
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/valgaze/speedybot-mini" },
    ],
  },
});
