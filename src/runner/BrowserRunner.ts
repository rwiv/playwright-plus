import {Browser} from "playwright";

export abstract class BrowserRunner {

  constructor(
    public readonly browser: Browser,
  ) {
  }

  async launch() {
    await this.run();
    await this.browser.close();
  }

  abstract run(): Promise<void>;
}