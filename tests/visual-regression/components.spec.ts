import { test, expect } from '@playwright/test';

/**
 * 组件视觉回归测试
 *
 * 测试三个断点的组件快照：
 * - 移动端：375x667
 * - 平板：768x1024
 * - 桌面：1440x900
 */

test.describe('组件视觉回归测试', () => {
  test('移动端组件快照', async ({ page }) => {
    // 设置移动端视口
    await page.setViewportSize({ width: 375, height: 667 });

    // 访问移动端页面（使用完整路径）
    await page.goto('file:///Users/linyazhou/young-design-system/projects/figma-restore/mobile.html');

    // 等待字体加载完成
    await page.waitForLoadState('networkidle');

    // 等待所有图片加载完成
    await page.waitForSelector('img', { state: 'attached' });
    await page.waitForFunction(() => {
      const images = Array.from(document.images);
      return images.every(img => img.complete);
    });

    // 捕获整页快照
    await expect(page).toHaveScreenshot('mobile-components.png', {
      fullPage: true,
      maxDiffPixels: 100, // 允许最大 100 像素差异
    });
  });

  test('平板组件快照', async ({ page }) => {
    // 设置平板视口
    await page.setViewportSize({ width: 768, height: 1024 });

    // 访问平板页面（使用完整路径）
    await page.goto('file:///Users/linyazhou/young-design-system/projects/figma-restore/tablet.html');

    // 等待字体加载完成
    await page.waitForLoadState('networkidle');

    // 等待所有图片加载完成
    await page.waitForSelector('img', { state: 'attached' });
    await page.waitForFunction(() => {
      const images = Array.from(document.images);
      return images.every(img => img.complete);
    });

    // 捕获整页快照
    await expect(page).toHaveScreenshot('tablet-components.png', {
      fullPage: true,
      maxDiffPixels: 100,
    });
  });

  test('桌面组件快照', async ({ page }) => {
    // 设置桌面视口
    await page.setViewportSize({ width: 1440, height: 900 });

    // 访问桌面页面（使用完整路径）
    await page.goto('file:///Users/linyazhou/young-design-system/projects/figma-restore/desktop.html');

    // 等待字体加载完成
    await page.waitForLoadState('networkidle');

    // 等待所有图片加载完成
    await page.waitForSelector('img', { state: 'attached' });
    await page.waitForFunction(() => {
      const images = Array.from(document.images);
      return images.every(img => img.complete);
    });

    // 捕获整页快照
    await expect(page).toHaveScreenshot('desktop-components.png', {
      fullPage: true,
      maxDiffPixels: 100,
    });
  });
});
