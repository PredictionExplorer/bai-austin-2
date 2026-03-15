import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('displays hero section with company name', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=BAi')).toBeVisible();
    await expect(page.locator('text=Acoustics')).toBeVisible();
  });

  test('displays stats section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Years of Excellence')).toBeVisible();
    await expect(page.locator('text=Projects Completed')).toBeVisible();
    await expect(page.locator('text=Texas Offices')).toBeVisible();
  });

  test('hero has navigation arrows', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('button[aria-label="Previous slide"]')).toBeVisible();
    await expect(page.locator('button[aria-label="Next slide"]')).toBeVisible();
  });

  test('hero carousel has dot indicators', async ({ page }) => {
    await page.goto('/');
    const dots = page.locator('button[aria-label^="Go to slide"]');
    await expect(dots).toHaveCount(6);
  });
});

test.describe('History Page', () => {
  test('displays about us content', async ({ page }) => {
    await page.goto('/history');
    await expect(page.locator('text=About')).toBeVisible();
    await expect(page.locator('text=Dr. C.P.')).toBeVisible();
  });
});

test.describe('Services Page', () => {
  test('displays all service categories', async ({ page }) => {
    await page.goto('/services');
    await expect(page.locator('text=Room Acoustics')).toBeVisible();
    await expect(page.locator('text=Sound Isolation')).toBeVisible();
    await expect(page.locator('text=Noise Control')).toBeVisible();
    await expect(page.locator('text=Sound Reinforcement System')).toBeVisible();
    await expect(page.locator('text=Audio Visual Systems')).toBeVisible();
  });
});

test.describe('Projects Page', () => {
  test('displays project categories', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.locator('text=Performing Arts')).toBeVisible();
    await expect(page.locator('text=Healthcare')).toBeVisible();
    await expect(page.locator('text=Collegiate')).toBeVisible();
  });
});

test.describe('Team Page', () => {
  test('displays team members', async ({ page }) => {
    await page.goto('/team');
    await expect(page.locator('text=Richard Boner')).toBeVisible();
    await expect(page.locator('text=Andy Miller')).toBeVisible();
    await expect(page.locator('text=Bill Hammon')).toBeVisible();
    await expect(page.locator('text=Rob Lee')).toBeVisible();
    await expect(page.locator('text=Anthony Hardey')).toBeVisible();
  });
});

test.describe('Responsive Design', () => {
  test('mobile menu button is visible on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.locator('button[aria-label="Open menu"]')).toBeVisible();
  });

  test('mobile menu opens and shows all links', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.click('button[aria-label="Open menu"]');
    await expect(page.locator('text=About Us')).toBeVisible();
    await expect(page.locator('text=Services')).toBeVisible();
    await expect(page.locator('text=Projects')).toBeVisible();
    await expect(page.locator('text=Team')).toBeVisible();
  });
});

test.describe('Footer', () => {
  test('displays all three offices on every page', async ({ page }) => {
    for (const path of ['/', '/history', '/services', '/projects', '/team']) {
      await page.goto(path);
      await expect(page.locator('footer >> text=Austin Office (HQ)')).toBeVisible();
      await expect(page.locator('footer >> text=Dallas Office')).toBeVisible();
      await expect(page.locator('footer >> text=Houston Office')).toBeVisible();
    }
  });
});
