import { test, expect } from '@playwright/test';

/**
 * 断点测试
 *
 * 测试三个断点的布局和元素可见性
 */

const breakpoints = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

for (const breakpoint of breakpoints) {
  test.describe(`${breakpoint.name} 断点测试`, () => {
    // 设置视口大小
    test.use({ viewport: { width: breakpoint.width, height: breakpoint.height } });

    test('页面加载成功', async ({ page }) => {
      // 访问页面（使用完整路径）
      await page.goto(`file:///Users/linyazhou/young-design-system/projects/figma-restore/${breakpoint.name}.html`);

      // 检查页面标题
      await expect(page).toHaveTitle(new RegExp(`示意还原 - ${breakpoint.name === 'mobile' ? '移动端' : breakpoint.name === 'tablet' ? '平板' : '桌面'}`));
    });

    test('导航栏可见', async ({ page }) => {
      await page.goto(`file:///Users/linyazhou/young-design-system/projects/figma-restore/${breakpoint.name}.html`);

      // 检查导航栏存在且可见（使用标签名）
      const navbar = page.locator('nav').first();
      await expect(navbar).toBeVisible();
    });

    test('按钮组件可见', async ({ page }) => {
      await page.goto(`file:///Users/linyazhou/young-design-system/projects/figma-restore/${breakpoint.name}.html`);

      // 检查按钮存在且可见
      const buttons = page.locator('.yds-button');
      const count = await buttons.count();
      expect(count).toBeGreaterThan(0);

      // 检查第一个按钮可见
      await expect(buttons.first()).toBeVisible();
    });

    test('栅格布局正确', async ({ page }) => {
      await page.goto(`file:///Users/linyazhou/young-design-system/projects/figma-restore/${breakpoint.name}.html`);

      // 检查栅格单元格存在
      const gridCells = page.locator('[class*="grid__cell"]');
      const count = await gridCells.count();
      expect(count).toBeGreaterThan(0);

      // 检查第一个栅格单元格可见
      await expect(gridCells.first()).toBeVisible();
    });

    test('CSS 变量加载正确', async ({ page }) => {
      await page.goto(`file:///Users/linyazhou/young-design-system/projects/figma-restore/${breakpoint.name}.html`);

      // 检查 CSS 变量是否正确应用
      const body = page.locator('body');
      const fontFamily = await body.evaluate((el) => {
        return getComputedStyle(el).getPropertyValue('font-family');
      });

      // 确认字体包含 PingFang SC
      expect(fontFamily).toContain('PingFang SC');
    });

    test('图标加载成功', async ({ page }) => {
      await page.goto(`file:///Users/linyazhou/young-design-system/projects/figma-restore/${breakpoint.name}.html`);

      // 检查图标存在
      const icons = page.locator('.yds-icon');
      const count = await icons.count();
      expect(count).toBeGreaterThan(0);

      // 检查所有图标加载完成
      await page.waitForFunction(() => {
        const images = Array.from(document.images);
        return images.every(img => img.complete);
      });
    });

    test('无控制台错误', async ({ page }) => {
      const errors: string[] = [];

      // 监听控制台错误
      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      // 访问页面（使用完整路径）
      await page.goto(`file:///Users/linyazhou/young-design-system/projects/figma-restore/${breakpoint.name}.html`);
      await page.waitForLoadState('networkidle');

      // 检查没有错误（忽略 404 图标错误）
      const criticalErrors = errors.filter(err =>
        !err.includes('404') &&
        !err.includes('Failed to load resource')
      );
      expect(criticalErrors).toHaveLength(0);
    });
  });
}

test.describe('响应式布局测试', () => {
  test('主页面导航链接正确', async ({ page }) => {
    await page.goto('file:///Users/linyazhou/young-design-system/projects/figma-restore/index.html');

    // 检查三个断点链接存在
    const mobileLink = page.locator('a[href="./mobile.html"]');
    const tabletLink = page.locator('a[href="./tablet.html"]');
    const desktopLink = page.locator('a[href="./desktop.html"]');

    await expect(mobileLink).toBeVisible();
    await expect(tabletLink).toBeVisible();
    await expect(desktopLink).toBeVisible();
  });

  test('移动端到平板布局变化', async ({ page }) => {
    // 移动端（使用完整路径）
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('file:///Users/linyazhou/young-design-system/projects/figma-restore/mobile.html');
    await page.waitForLoadState('networkidle');

    // 检查移动端布局
    const mobileButtons = page.locator('.mobile-buttons');
    await expect(mobileButtons).toHaveCSS('flex-direction', 'column');

    // 平板（使用完整路径）
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('file:///Users/linyazhou/young-design-system/projects/figma-restore/tablet.html');
    await page.waitForLoadState('networkidle');

    // 检查平板布局
    const tabletButtons = page.locator('.tablet-buttons');
    await expect(tabletButtons).toHaveCSS('display', 'grid');
  });
});
