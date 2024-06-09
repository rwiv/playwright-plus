import {Browser, BrowserContext, Page} from "playwright";

export abstract class PageRunner {

  public readonly browser: Browser;
  public readonly context: BrowserContext;

  constructor(
    public readonly page: Page,
  ) {
    this.context = page.context();
    const browser = this.context.browser();
    if (browser === null) {
      throw Error("browser does not exist");
    }
    this.browser = browser;
  }

  async launch() {
    await this.run();
    await this.page.close();
  }

  protected abstract run(): Promise<void>
}