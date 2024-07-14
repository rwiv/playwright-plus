import { subLists } from "utils-js/list";
import { createBrowser } from "../utils/playwright.js";
export class ParallelRunner {
    elems;
    parallel;
    context = null;
    browser = null;
    browserType = "firefox";
    launchOption = undefined;
    ctxOpt = undefined;
    constructor(elems, parallel, args) {
        this.elems = elems;
        this.parallel = parallel;
        this.browserType = args.browserType ?? "chromium";
        this.launchOption = args.launchOption;
        this.ctxOpt = args.ctxOpt;
    }
    async start() {
        const browser = await createBrowser(this.browserType, this.launchOption);
        const context = await browser.newContext(this.ctxOpt);
        this.browser = browser;
        this.context = context;
        const subs = subLists(this.elems, this.parallel);
        const result = [];
        for (const sub of subs) {
            const promises = sub.map(async (elem) => {
                const page = await context.newPage();
                const pageResult = this.run(elem, page);
                await page.close();
                return pageResult;
            });
            result.concat(await Promise.all(promises));
        }
        await browser.close();
        return result;
    }
    getContext() {
        if (this.context === null || this.browser === null) {
            throw Error("context is null");
        }
        return {
            context: this.context,
            browser: this.browser,
        };
    }
}
