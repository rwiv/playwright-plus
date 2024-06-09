import {Page} from "playwright";
import {PageRunner} from "./PageRunner.js";

export abstract class OnePageRunner extends PageRunner {

  constructor(page: Page) {
    super(page);
  }

  async launch() {
    await this.run();
    await this.browser.close();
  }

  protected abstract run(): Promise<void>
}