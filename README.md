<h1 align="center">🤖 BotBrowser</h1>

<h4 align="center">The Ultimate Solution for Undetectable Automated Browsing 🚀</h4>

<p align="center">
  <a href="https://github.com/MiddleSchoolStudent/BotBrowser/releases">
    <img src="https://img.shields.io/github/v/release/MiddleSchoolStudent/BotBrowser?style=flat-square" alt="Latest Release">
  </a>
  <a href="https://github.com/MiddleSchoolStudent/BotBrowser/issues">
    <img src="https://img.shields.io/github/issues/MiddleSchoolStudent/BotBrowser?style=flat-square" alt="Issues">
  </a>
</p>

---

## What is BotBrowser?

BotBrowser is a cross-platform automation tool that redefines web automation. By modifying Chromium's C++ source code, it goes beyond the limitations of [CDP](https://chromedevtools.github.io/devtools-protocol/)-based solutions, allowing true undetectable automation.

## Simplified Management

Streamline your automation with [BotBrowserConsole](console), a free and open-source GUI tool designed to:
- Easily launch multiple browser instances
- Seamlessly manage different environments
- Efficiently handle multiple accounts

<div align="center">
  <img width="800" alt="BotBrowser GUI - Your Command Center" src="https://github.com/user-attachments/assets/e9c0b656-83b0-4be5-986e-d4bc3c04b4b5">
</div>

---

## 🚀 Features

### 🎯 Core Features

- **Cross-Platform Compatibility**
  > Fully supports Windows, macOS, and Ubuntu, enabling seamless cross-platform use of profiles. Start on one system and continue effortlessly on another.

- **Latest Chromium Base**
  > Stays updated with the latest stable Chrome/Chromium versions to ensure compatibility with advanced antibot defenses.

- **Advanced Programmatic Control**
  > Dual advantage: Leverages CDP for powerful automation with [Playwright](demo/playwright) and [Puppeteer](demo/puppeteer), while preventing CDP leak detection - perfect balance of control and undetectability.

- **Success & Performance**
  > Real client success stories validate our exceptional performance: **98%+ success rate** against advanced antibots with over **350,000 accounts registered daily**, demonstrating unmatched efficiency and reliability under high loads.

### 🛡️ Advanced Capabilities

#### 🕵️ Stealth and Detection Evasion

- **Bypass headless and incognito checks**: Enables undetectable automation by seamlessly evading detection in both headless and incognito modes.

- **Noise injection**: Randomizes 2D canvas, WebGL, emoji, fonts, text metrics, and audio fingerprints to avoid detection.

- **Simulated OS-specific properties**: Adjusts scrollbar width, BarcodeDetector, and system-specific settings for enhanced authenticity.

- **Chrome feature masking**: Removes Chromium-specific traits, simulating native Chrome with features like AdInterest and CDM for enhanced detection evasion.

- **Comprehensive fingerprint spoofing**:

  | **Category**    | **Details**                                 |
  |-----------------|---------------------------------------------|
  | **Browser**     | Version, OS, userAgentData                 |
  | **Graphics**    | WebGL, WebGL2, GPU                         |
  | **Hardware**    | Screen, Battery, Keyboard, CPU             |
  | **Environment** | Permissions, FeaturePolicy, SystemFonts    |
  | **Media**       | MediaDevices, MimeTypes                    |
  | **Visuals**     | Emoji, Unicode, System Colors, MatchMedia  |
  | **Others**      | Navigator, Window, and more                |


#### 🌐 Comprehensive Proxy and Network Control

- **Proxy integration**: Easily configure proxy host, username, and password without relying on CDP ([Page.authenticate](https://pptr.dev/api/puppeteer.page.authenticate/)).

- **Dynamic language and timezone settings**: Automatically adapt browser environment based on proxy IP for realistic geolocation.

- **WebRTC leak protection**: Prevents exposure of real IPs during WebRTC communication.


---

## 🚀 Usage

1. **Download**: Get the installer for your OS from [Releases](https://github.com/MiddleSchoolStudent/BotBrowser/releases) page.

  - ⚠️ For MacOS Binary, if you encounter the error: `"Chromium" is damaged and can't be opened`, you may need to run this command:

    ```bash
    xattr -rd com.apple.quarantine Chromium.app
    ```

  - ⚠️ For Windows Binary, if you encounter the error `STATUS_ACCESS_VIOLATION`, it may be resolved by adding the `--no-sandbox` flag when launching the application.

2. **Cross-Platform Profiles**:
  We offer demo [Profiles](profiles) for demonstration purposes. They are **cross-compatible**, allowing seamless fingerprint emulation on any system. For example, a macOS profile works on Ubuntu or a Windows profile on macOS **without compatibility issues**.

3. **Launching BotBrowser**: BotBrowser can be launched in three ways:

  - **CLI**:
    Pass your profile via the `--bot-profile` parameter, use the absolute path:

    ```bash
    chromium --no-sandbox --bot-profile="{absolute_path_of_}/chrome134_win11_x64.enc"
    ```

  - **[Playwright](demo/playwright) / [Puppeteer Demo](demo/puppeteer)**:
    Integrate BotBrowser within automation frameworks with a few lines:

    ```javascript
    const browser = await chromium.launch({
      headless: true,
      executablePath: BOTBROWSER_EXEC_PATH, // Absolute path to the BotBrowser executable
      args: [`--bot-profile=${BOT_PROFILE_PATH}`], // Absolute path to the bot profile
    });

    const page = await browser.newPage();

    // Remove Playwright's bindings to avoid detection.
    await page.addInitScript(() => {
      delete window.__playwright__binding__;
      delete window.__pwInitScripts;
    });
    await page.goto("https://abrahamjuliot.github.io/creepjs/");
    ```

  - **[BotBrowserConsole](console)**: A free and open-source GUI tool.

4. **Tests**
  Use our detailed test scripts to explore real-world use cases and implementation examples: **[Tests](tests)**.

---

## 🎯 Proven Effectiveness

⚠️ **Disclaimer**

These test scripts are provided for educational purposes and to demonstrate the capabilities of BotBrowser. They are intended solely for **legal use cases** that comply with all applicable laws and regulations.  **Any misuse of these tests or the tool—such as violating website terms of service or engaging in unlawful activities-is strictly prohibited.**


### 🧪 Code and Video Test Results

BotBrowser has been extensively tested against leading antibot systems. Below are detailed test results and video demonstrations:



| Service & Scripts                                                  | Test Results                                                                                                                                                                                                                                                                       |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **[Cloudflare](tests/tests/antibots/cloudflare.spec.ts)**          | [▶️ Turnstile](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-cloudflare-turnstile), [▶️ Challenge](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-cloudflare-challenge), [▶️ taxslayer.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-cloudflare-taxslayer) |
| **[Akamai Bot Manager](tests/tests/antibots/akamai.spec.ts)**      | [▶️ playstation.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-akamai-playstation), [▶️ wizzair.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-kasada-wizzair) |
| **[Kasada](tests/tests/antibots/kasada.spec.ts)**                  | [▶️ kick.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-kasada-kick), [▶️ playstation.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-akamai-playstation), [▶️ twitch.tv](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-kasada-twitch), [▶️ playstation.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-akamai-playstation), [▶️ wizzair.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-kasada-wizzair) |
| **[F5 Shape Security](tests/tests/antibots/shape.spec.ts)**        | [▶️ southwest.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-shape-southwest)                                                                                     |
| **[reCAPTCHA](tests/tests/antibots/recaptcha.spec.ts)**            | [▶️ Test Video](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-recaptcha-v3)                                                                                 |
| **[PerimeterX](tests/tests/antibots/perimeterx.spec.ts)**          | [▶️ textnow.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-perimeterx-textnow), [▶️ grubhub.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-perimeterx-grubhub)                                                                                     |
| **[Imperva (Incapsula)](tests/tests/antibots/incapsula.spec.ts)**  | [▶️ copaair.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-incapsula-copaair)                                                                       |
| **[DataDome](tests/tests/antibots/datadome.spec.ts)**              | [▶️ shutterstock.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-datadome-shutterstock), [▶️ seatgeek.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-datadome-seatgeek)                                                                       |
| **[hCaptcha](tests/tests/antibots/hcaptcha.spec.ts)**              | [▶️ epicgames.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-hcaptcha-epicgames), [▶️ discord.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-hcaptcha-discord), [▶️ Steam](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-hcaptcha-steam)                                                                       |
| **[Accertify](tests/tests/antibots/accertify.spec.ts)**            | [▶️ grubhub.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-perimeterx-grubhub)                                                                       |
| **[Forter](tests/tests/antibots/forter.spec.ts)**                  | [▶️ grubhub.com](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-perimeterx-grubhub)                                                                       |
| **[Adscore](tests/tests/antibots/adscore.spec.ts)**                | [▶️ Test Video](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-adscore-adscore)                                                                                          |
| **ThreatMetrix**                                                   | 🚧 Coming Soon                                                                                                                                                                                                                                                                            |
| **ProtectedMedia**                                                 | 🚧 Coming Soon                                                                                                                                                                                                                                                                            |
| **[Fake Vision](tests/tests/antibots/fvpro.spec.ts)**              | [▶️ fv.pro](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-fvpro-fvpro)                                                                                           |
| **[FingerprintJS](tests/tests/antibots/fingerprintjs.spec.ts)**    | [▶️ Bot Detection](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-fingerprintjs-botdetection)                                                         |
| **[CreepJS](tests/tests/antibots/creepjs.spec.ts)**                | [▶️ Test Video](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-creepjs-creepjs)                                                                                            |
| **[BrowserScan](tests/tests/antibots/browserscan.spec.ts)**        | [▶️ Test Video](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-browserscan-browserscan)                                                                                     |
| **[Pixelscan](tests/tests/antibots/pixelscan.spec.ts)**            | [▶️ Test Video](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-pixelscan-pixelscan)                                                                                         |
| **[iphey](tests/tests/antibots/iphey.spec.ts)**                    | [▶️ Test Video](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-iphey-iphey)                                                                                               |
| **[deviceandbrowserinfo](tests/tests/antibots/deviceandbrowserinfo.spec.ts)**     | [▶️ Test Video](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-deviceandbrowserinfo-deviceandbrowserinfo)                                                                                               |
| **[brotector](tests/tests/antibots/brotector.spec.ts)**            | [▶️ Test Video](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=antibots-brotector-brotector)                                                                                       |

### 🌐 Top Platforms and Websites

The following platforms have been tested:

| Service & Scripts | Anti-bot Services | Test Results |
|------------------|-------------------|--------------|
| **[Nike](tests/tests/websites/nike.spec.ts)** | F5 Shape Security | ✅ Success  [▶️ Checkout Video](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=websites-nike-nike-checkout)  |
| **TikTok** | Generic Antibot | ✅ Success |
| **[Walmart](tests/tests/websites/walmart.spec.ts)** | PerimeterX | ✅ Success [▶️ Test Video](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=websites-walmart-walmart) |
| **[Temu](tests/tests/websites/temu.spec.ts)** | F5 Shape Security | ✅ Success [▶️ Test Video](//middleschoolstudent.github.io/BotBrowser/video_player/index.html?video=websites-temu-temu) |
| **LinkedIn** | Generic Antibot | ✅ Success |
| **Ticketmaster** | PerimeterX, FingerprintJS, reCAPTCHA | ✅ Success |
| **Shein** | F5 Shape Security, FingerprintJS, Forter | ✅ Success |
| **Facebook** | Generic Antibot | ✅ Success |
| **Bet365** | Generic Antibot | ✅ Success |

...and many more


---


## 📚 Additional Resources

### 🔐 Profile Generation

We do not provide the private key required to generate new profiles. If you need additional profiles, please contact us directly. We maintain over **300,000 real user browser fingerprints** to support your needs.

**📞 Contact us today:**

| 📧 Email    | [middleschoolstudent@mail.ru](mailto:middleschoolstudent@mail.ru) |
|-------------|--------------------------------------------------|
| 📱 Telegram | [middle_student](https://t.me/middle_student)   |


### 🛠️ Building from Source

If you wish to compile your own version of Chromium with our modifications, follow the instructions provided [here](build).


---

## ⚠️ Disclaimer

BotBrowser is intended for legitimate use cases that comply with all applicable laws and regulations. Misuse of this tool to violate the terms of service of websites or engage in illegal activities is strictly prohibited.

---

<p align="center">
  <a href="https://github.com/MiddleSchoolStudent/BotBrowser">
    <img src="https://img.shields.io/github/stars/MiddleSchoolStudent/BotBrowser?style=social" alt="GitHub Stars">
  </a>
  <a href="https://github.com/MiddleSchoolStudent/BotBrowser/fork">
    <img src="https://img.shields.io/github/forks/MiddleSchoolStudent/BotBrowser?style=social" alt="GitHub Forks">
  </a>
</p>
