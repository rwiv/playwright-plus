import { Browser } from "playwright";
export declare abstract class BrowserRunner {
    readonly browser: Browser;
    constructor(browser: Browser);
    launch(): Promise<void>;
    abstract run(): Promise<void>;
}
