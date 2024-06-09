import {Browser, BrowserContext} from "playwright";

export abstract class ContextRunner<T> {

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
    const result = await this.run();
    await this.context.close();
    return result;
  }

  protected abstract run(): Promise<T>;
}