export class BrowserRunner {
    browser;
    constructor(browser) {
        this.browser = browser;
    }
    async launch() {
        await this.run();
        await this.browser.close();
    }
}
