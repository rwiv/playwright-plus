import {it} from "vitest";
import {OnePageRunner} from "./OnePageRunner.js";
import {Args} from "../types.js";
import {Page} from "playwright";

it("test", async () => {
  const runner = new TestRunner({
    browserType: "chromium",
    launchOption: { headless: false }
  });
  await runner.start();
});

export class TestRunner extends OnePageRunner<void> {

  constructor(args: Args) {
    super(args);
  }

  protected async run(page: Page) {
    await page.goto("https://example.com");
    await page.waitForTimeout(1000);
  }
}
