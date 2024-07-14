import { Browser, BrowserContext, Page } from "playwright";
import { Args } from "../types.js";
export declare abstract class ParallelRunner<E, R> {
    private elems;
    private parallel;
    private context;
    private browser;
    private readonly browserType;
    private readonly launchOption;
    private readonly ctxOpt;
    constructor(elems: E[], parallel: number, args: Args);
    protected abstract run(elem: E, page: Page): Promise<R>;
    start(): Promise<R[]>;
    protected getContext(): {
        context: BrowserContext;
        browser: Browser;
    };
}
