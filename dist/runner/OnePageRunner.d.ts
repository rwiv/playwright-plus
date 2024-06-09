import { Page } from "playwright";
import { PageRunner } from "./PageRunner.js";
export declare abstract class OnePageRunner<T> extends PageRunner<T> {
    constructor(page: Page);
    launch(): Promise<T>;
    protected abstract run(): Promise<T>;
}
