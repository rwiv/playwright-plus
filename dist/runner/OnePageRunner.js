import { PageRunner } from "./PageRunner.js";
export class OnePageRunner extends PageRunner {
    constructor(page) {
        super(page);
    }
    async launch() {
        await this.run();
        await this.browser.close();
    }
}
