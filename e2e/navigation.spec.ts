import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navigates between all pages via navbar links', async ({ page }) => {
    await page.goto('/');

    // Navigate to About Us
    await page.click('nav >> text=About Us');
    await expect(page).toHaveURL('/history');
    await expect(page.locator('h1')).toContainText('About');

    // Navigate to Services
    await page.click('nav >> text=Services');
    await expect(page).toHaveURL('/services');
    await expect(page.locator('h1')).toContainText('Services');

    // Navigate to Projects
    await page.click('nav >> text=Projects');
    await expect(page).toHaveURL('/projects');
    await expect(page.locator('h1')).toContainText('Project');

    // Navigate to Team
    await page.click('nav >> text=Team');
    await expect(page).toHaveURL('/team');
    await expect(page.locator('h1')).toContainText('Team');

    // Navigate back Home
    await page.click('nav >> text=Home');
    await expect(page).toHaveURL('/');
  });

  test('logo links to home', async ({ page }) => {
    await page.goto('/services');
    await page.click('a[aria-label="BAi Home"]');
    await expect(page).toHaveURL('/');
  });

  test('footer links work', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.locator('text=Services')).toBeVisible();
    await expect(footer.locator('text=Projects')).toBeVisible();
    await expect(footer.locator('text=Team')).toBeVisible();
  });
});
