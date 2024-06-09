import {Browser, firefox, Page} from "playwright";

export function browser(headless: boolean): Promise<Browser> {
  return firefox.launch({ headless })
}

export async function newPage(headless: boolean): Promise<Page> {
  const browser = await firefox.launch({ headless });
  return browser.newPage()
}
