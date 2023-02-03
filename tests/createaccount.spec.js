import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://warcraftmu.com/');
  await page.getByTitle('Registration').click();
  await page.locator('#user').click();
  await page.locator('#user').fill('Vissani');
  await page.locator('#email').click();
  await page.locator('#email').fill('franco_07_77@hotmail.com');
  await page.locator('#pass').click();
  await page.locator('#pass').fill('Pomelo17.');
  await page.locator('#rpass').click();
  await page.locator('#rpass').fill('Pomelo17.');
  await page.locator('#rules').check();
  await page.getByRole('button', { name: 'Submit' }).click();
});
