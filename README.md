```ts
import {it} from "vitest";
import {Page} from "playwright";
import {OnePageRunner} from "./OnePageRunner.js";
import {newPage} from "../utils/utiles.js";

it("test", async () => {
  const runner = new MyRunner(await newPage(false));
  await runner.launch();
});

class MyRunner extends OnePageRunner {

  constructor(page: Page) {
    super(page);
  }

  override async run(): Promise<void> {
    // ...
  }
}
```
