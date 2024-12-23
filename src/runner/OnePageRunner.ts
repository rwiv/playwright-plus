import {Browser, BrowserContext, LaunchOptions, Page} from "playwright";
import {BrowserContextOptions} from "playwright";
import {createBrowser} from "../utils/playwright.js";
import {Args, Cookie} from "../types.js";

export abstract class OnePageRunner<T> {

  private context: BrowserContext | null = null;
  private browser: Browser | null = null;
  private readonly browserType: "chromium" | "firefox" = "firefox";
  private readonly launchOption: LaunchOptions | undefined = undefined;
  private readonly ctxOpt: BrowserContextOptions | undefined = undefined;
  private readonly cookies: Cookie[] | undefined = undefined;

  constructor(args: Args) {
    this.browserType = args.browserType ?? "chromium";
    this.launchOption = args.launchOption;
    this.ctxOpt = args.ctxOpt;
    this.cookies = args.cookies;
  }

  protected abstract run(page: Page): Promise<T>

  async start(): Promise<T> {
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
    await browser.close()
    return result;
  }

  protected getContext() {
    if (this.context === null || this.browser === null) {
      throw Error("context is null")
    }
    return {
      context: this.context,
      browser: this.browser,
    }
  }
}
