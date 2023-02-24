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
 await page.locator('#vote-1-1').click();
 const page1 = await page1Promise;

 const page2Promise = page.waitForEvent('popup');
 await page.locator('#vote-2-1').click();
 const page2 = await page2Promise;

 const page3Promise = page.waitForEvent('popup');
 await page.locator('#vote-3-1').click();
 const page3 = await page3Promise;

 const page4Promise = page.waitForEvent('popup');
 await page.locator('#vote-4-1').click();
 const page4 = await page4Promise;

 const page5Promise = page.waitForEvent('popup');
 await page.locator('#vote-5-1').click();
 const page5 = await page5Promise;

 const page6Promise = page.waitForEvent('popup');
 await page.locator('#vote-6-1').click();
 const page6 = await page6Promise;

 const page7Promise = page.waitForEvent('popup');
 await page.locator('#vote-7-1').click();
 const page7 = await page7Promise;

 const page8Promise = page.waitForEvent('popup');
 await page.locator('#vote-8-1').click();
 const page8 = await page8Promise;

 const page9Promise = page.waitForEvent('popup');
 await page.locator('#vote-9-1').click();
 const page9 = await page9Promise;

 const page10Promise = page.waitForEvent('popup');
 await page.locator('#vote-10-1').click();
 const page10 = await page10Promise;

 const page11Promise = page.waitForEvent('popup');
 await page.locator('#vote-11-1').click();
 const page11 = await page11Promise; 

 const page12Promise = page.waitForEvent('popup');
 await page.locator('#vote-12-1').click();
 const page12 = await page12Promise;

 const page13Promise = page.waitForEvent('popup');
 await page.locator('#vote-13-1').click();
 const page13 = await page13Promise;

 const page14Promise = page.waitForEvent('popup');
 await page.locator('#vote-14-1').click();
 const page14 = await page14Promise;

 const page15Promise = page.waitForEvent('popup');
 await page.locator('#vote-15-1').click();
 const page15 = await page15Promise;

 const page16Promise = page.waitForEvent('popup');
 await page.locator('#vote-16-1').click();
 const page16 = await page16Promise;

 const page17Promise = page.waitForEvent('popup');
 await page.locator('#vote-17-1').click();
 const page17 = await page17Promise;

 const page18Promise = page.waitForEvent('popup');
 await page.locator('#vote-18-1').click();
 const page18 = await page18Promise;

 const page19Promise = page.waitForEvent('popup');
 await page.getByRole('button', { name: 'Vote Now!' }).click();;
 const page19 = await page19Promise;

});
