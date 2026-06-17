import { test, expect } from '@playwright/test';

test('critical workflow: visitor starts a project inquiry from home', async ({
  page,
}) => {
  await page.route('https://eo82k4zs4dqpfy0.m.pipedream.net', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true }),
    });
  });

  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Message sent successfully!');
    await dialog.accept();
  });

  await page.goto('/');

  await page.getByRole('link', { name: 'Start a Project' }).click();
  await expect(page).toHaveURL(/\/contact$/);

  await page.getByPlaceholder('Your full name').fill('Test Visitor');
  await page.getByPlaceholder('your.email@example.com').fill('test@example.com');
  await page.getByPlaceholder("What's this about?").fill('Portfolio inquiry');
  await page
    .getByPlaceholder('Tell me about your project or inquiry...')
    .fill('I want to discuss a DevOps automation project.');

  await page.getByRole('button', { name: /\[ SEND MESSAGE \]/ }).click();

  await expect(
    page.getByRole('heading', { name: 'Message Sent Successfully!' }),
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: /\[ SEND MESSAGE \]/ }),
  ).not.toBeVisible();
});
