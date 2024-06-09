import { Browser, BrowserContext, Page } from "playwright";
export declare abstract class PageRunner {
    readonly page: Page;
    readonly browser: Browser;
    readonly context: BrowserContext;
    constructor(page: Page);
    launch(): Promise<void>;
    protected abstract run(): Promise<void>;
}
