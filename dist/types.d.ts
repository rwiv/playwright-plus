import { BrowserContextOptions, LaunchOptions } from "playwright";
export interface Args {
    browserType?: "chromium" | "firefox";
    launchOption?: LaunchOptions;
    ctxOpt?: BrowserContextOptions;
    cookies?: Cookie[];
}
export interface Cookie {
    name: string;
    value: string;
    url?: string;
    domain?: string;
    path?: string;
    expires?: number;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: "Strict" | "Lax" | "None";
}
