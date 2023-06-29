import { test, expect } from '@playwright/test';

test('is title visible', async ({ page }) => {
  await page.goto('https://printingindustries.github.io/');

  // Expect the title to be visible
  await expect(page.locator('#hero')).toBeVisible();
});