import { Browser, BrowserContext } from "playwright";
export declare abstract class ContextRunner<T> {
    readonly context: BrowserContext;
    readonly browser: Browser;
    constructor(context: BrowserContext);
    launch(): Promise<T>;
    protected abstract run(): Promise<T>;
}
