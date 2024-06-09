import { Browser, BrowserContext, Page } from "playwright";
export declare abstract class PageRunner<T> {
    readonly page: Page;
    readonly browser: Browser;
    readonly context: BrowserContext;
    constructor(page: Page);
    launch(): Promise<T>;
    protected abstract run(): Promise<T>;
}
