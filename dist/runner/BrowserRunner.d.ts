import { Browser } from "playwright";
export declare abstract class BrowserRunner<T> {
    readonly browser: Browser;
    constructor(browser: Browser);
    launch(): Promise<T>;
    abstract run(): Promise<T>;
}
