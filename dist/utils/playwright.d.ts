import { LaunchOptions } from "playwright";
export declare function createBrowser(browserType: "chromium" | "firefox", launchOption?: LaunchOptions | undefined): Promise<import("playwright").Browser>;
