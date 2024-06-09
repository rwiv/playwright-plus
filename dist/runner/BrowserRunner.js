export class BrowserRunner {
    browser;
    constructor(browser) {
        this.browser = browser;
    }
    async launch() {
        const result = await this.run();
        await this.browser.close();
        return result;
    }
}
