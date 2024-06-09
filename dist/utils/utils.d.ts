import { Browser, Page } from "playwright";
export declare function browser(headless: boolean): Promise<Browser>;
export declare function newPage(headless: boolean): Promise<Page>;
