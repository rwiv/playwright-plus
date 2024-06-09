import {Page} from "playwright";
import {PageRunner} from "./PageRunner.js";

export abstract class OnePageRunner<T> extends PageRunner<T> {

  constructor(page: Page) {
    super(page);
  }

  async launch() {
    const result = await this.run();
    await this.browser.close();
    return result;
  }

  protected abstract run(): Promise<T>
}