import { PageRunner } from "./PageRunner.js";
export class OnePageRunner extends PageRunner {
    constructor(page) {
        super(page);
    }
    async launch() {
        const result = await this.run();
        await this.browser.close();
        return result;
    }
}
