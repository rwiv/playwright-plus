import { Browser, BrowserContext, Page } from "playwright";
import { Args } from "../types.js";
export declare abstract class OnePageRunner<T> {
    private context;
    private browser;
    private readonly browserType;
    private readonly launchOption;
    private readonly ctxOpt;
    private readonly cookies;
    constructor(args: Args);
    protected abstract run(page: Page): Promise<T>;
    start(): Promise<T>;
    protected getContext(): {
        context: BrowserContext;
        browser: Browser;
    };
}
