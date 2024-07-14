import {Browser, BrowserContext, LaunchOptions, Page} from "playwright";
import {BrowserContextOptions} from "playwright";
import {subLists} from "utils-js/list";
import {createBrowser} from "../utils/playwright.js";
import {Args} from "../types.js";

export abstract class ParallelRunner<E, R> {

  private context: BrowserContext | null = null;
  private browser: Browser | null = null;
  private readonly browserType: "chromium" | "firefox" = "firefox";
  private readonly launchOption: LaunchOptions | undefined = undefined;
  private readonly ctxOpt: BrowserContextOptions | undefined = undefined;

  constructor(
    private elems: E[],
    private parallel: number,
    args: Args,
  ) {
    this.browserType = args.browserType ?? "chromium";
    this.launchOption = args.launchOption;
    this.ctxOpt = args.ctxOpt;
  }

  protected abstract run(elem: E, page: Page): Promise<R>

  async start(): Promise<R[]> {
    const browser = await createBrowser(this.browserType, this.launchOption);
    const context = await browser.newContext(this.ctxOpt);
    this.browser = browser;
    this.context = context;

    const subs = subLists(this.elems, this.parallel);
    const result: R[] = [];
    for (const sub of subs) {
      const promises = sub.map(async elem => {
        const page = await context.newPage();
        const pageResult = this.run(elem, page);
        await page.close();
        return pageResult;
      });
      result.concat(await Promise.all(promises));
    }
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
