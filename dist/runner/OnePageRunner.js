import { createBrowser } from "../utils/playwright.js";
export class OnePageRunner {
    context = null;
    browser = null;
    browserType = "firefox";
    launchOption = undefined;
    ctxOpt = undefined;
    cookies = undefined;
    constructor(args) {
        this.browserType = args.browserType ?? "chromium";
        this.launchOption = args.launchOption;
        this.ctxOpt = args.ctxOpt;
        this.cookies = args.cookies;
    }
    async start() {
        const browser = await createBrowser(this.browserType, this.launchOption);
        const context = await browser.newContext(this.ctxOpt);
        if (this.cookies !== undefined) {
            await context.addCookies(this.cookies);
        }
        this.browser = browser;
        this.context = context;
        const page = await context.newPage();
        const result = await this.run(page);
        await page.close();
        await browser.close();
        return result;
    }
    getContext() {
        if (this.context === null || this.browser === null) {
            throw Error("context is null");
        }
        return {
            context: this.context,
            browser: this.browser,
        };
    }
}
