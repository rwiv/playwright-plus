import { Browser, BrowserContext } from "playwright";
export declare abstract class ContextRunner {
    readonly context: BrowserContext;
    readonly browser: Browser;
    constructor(context: BrowserContext);
    launch(): Promise<void>;
    protected abstract run(): Promise<void>;
}
