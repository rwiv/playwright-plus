import {Browser, BrowserContext, Page} from "playwright";

export abstract class ContextRunner {

  public readonly browser: Browser

  constructor(
    public readonly context: BrowserContext,
  ) {
    const browser = this.context.browser();
    if (browser === null) {
      throw Error("browser does not exist");
    }
    this.browser = browser;
  }

  async launch() {
    await this.run();
    await this.context.close();
  }

  protected abstract run(): Promise<void>;
}