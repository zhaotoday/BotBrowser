import { chromium } from "playwright";

const CHROMIUM_EXEC_PATH = process.env.CHROMIUM_EXEC_PATH;
const BOT_PROFILE_PATH = process.env.BOT_PROFILE_PATH;

const browser = await chromium.launch({
  browser: "chrome",
  executablePath: CHROMIUM_EXEC_PATH,
  headless: false,
  ignoreDefaultArgs: [
    // "--headless",
    "--disable-crash-reporter",
    "--disable-crashpad-for-testing",
    "--disable-gpu-watchdog",
  ],
  args: [
    "--no-sandbox",
    "--disable-blink-features=AutomationControlled",
    "--disable-audio-output",
    `--bot-profile=${BOT_PROFILE_PATH}`,
    // '--headless="new"',
  ],
});

const page = await browser.newPage();
await page.goto("https://www.google.com");
