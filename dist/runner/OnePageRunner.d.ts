import { Page } from "playwright";
import { PageRunner } from "./PageRunner.js";
export declare abstract class OnePageRunner extends PageRunner {
    constructor(page: Page);
    launch(): Promise<void>;
    protected abstract run(): Promise<void>;
}
