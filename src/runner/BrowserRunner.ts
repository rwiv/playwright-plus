import {Browser} from "playwright";

export abstract class BrowserRunner<T> {

  constructor(
    public readonly browser: Browser,
  ) {
  }

  async launch() {
    const result = await this.run();
    await this.browser.close();
    return result;
  }

  abstract run(): Promise<T>;
}