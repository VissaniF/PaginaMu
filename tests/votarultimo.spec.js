import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://warcraftmu.com/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Vissani');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pomelo17.');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://warcraftmu.com/account-panel');
  
 // await page.getByRole('link', { name: 'Vote' }).click();
 await page.locator(`#wrapper-bgbtm > div > div.menu > ul > li:nth-child(5) > a`).click()
 //comenzamos a votar

const page1Promise = page.waitForEvent('popup');
await page.getByRole('button', { name: 'Vote Now!' }).click();;
const page1 = await page1Promise;});