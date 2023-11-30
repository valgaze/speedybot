#!/usr/bin/env node

const { execSync } = require("child_process");

try {
  execSync(
    "npx -y create-speedybot@latest " + process.argv.slice(2).join(" "),
    {
      stdio: "inherit",
    }
  );
} catch (error) {
  console.error("Error running create-speedybot:", error.message);
  process.exit(1);
}
