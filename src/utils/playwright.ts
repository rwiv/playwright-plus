import {chromium, firefox, LaunchOptions} from "playwright";

export function createBrowser(
  browserType: "chromium" | "firefox",
  launchOption: LaunchOptions | undefined = undefined,
) {
  if (browserType === "chromium") {
    return chromium.launch(launchOption);
  } else if (browserType === "firefox") {
    return firefox.launch(launchOption);
  } else {
    throw Error("not supported browser type");
  }
}
