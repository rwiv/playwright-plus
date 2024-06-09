export class ContextRunner {
    context;
    browser;
    constructor(context) {
        this.context = context;
        const browser = this.context.browser();
        if (browser === null) {
            throw Error("browser does not exist");
        }
        this.browser = browser;
    }
    async launch() {
        const result = await this.run();
        await this.context.close();
        return result;
    }
}
