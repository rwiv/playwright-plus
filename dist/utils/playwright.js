import { chromium, firefox } from "playwright";
export function createBrowser(browserType, launchOption = undefined) {
    if (browserType === "chromium") {
        return chromium.launch(launchOption);
    }
    else if (browserType === "firefox") {
        return firefox.launch(launchOption);
    }
    else {
        throw Error("not supported browser type");
    }
}
