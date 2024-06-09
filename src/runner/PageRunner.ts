import {Browser, BrowserContext, Page} from "playwright";

export abstract class PageRunner<T> {

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

  async launch(): Promise<T> {
    const result = await this.run();
    await this.page.close();
    return result;
  }

  protected abstract run(): Promise<T>
}