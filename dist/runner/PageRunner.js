export class PageRunner {
    page;
    browser;
    context;
    constructor(page) {
        this.page = page;
        this.context = page.context();
        const browser = this.context.browser();
        if (browser === null) {
            throw Error("browser does not exist");
        }
        this.browser = browser;
    }
    async launch() {
        const result = await this.run();
        await this.page.close();
        return result;
    }
}
