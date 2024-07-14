import {BrowserContextOptions, LaunchOptions} from "playwright";

export interface Args {
  browserType?: "chromium" | "firefox";
  launchOption?: LaunchOptions;
  ctxOpt?: BrowserContextOptions;
}
