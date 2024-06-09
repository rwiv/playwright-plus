import { firefox } from "playwright";
export function browser(headless) {
    return firefox.launch({ headless });
}
export async function newPage(headless) {
    const browser = await firefox.launch({ headless });
    return browser.newPage();
}
