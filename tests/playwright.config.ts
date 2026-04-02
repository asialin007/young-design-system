import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright 配置 - 年轻版设计系统视觉回归测试
 *
 * 配置三个断点：
 * - 移动端：375x667 (iPhone SE)
 * - 平板：768x1024 (iPad)
 * - 桌面：1440x900
 */
export default defineConfig({
  // 测试目录
  testDir: './visual-regression',

  // 快照目录
  snapshotDir: './visual-regression/snapshots',

  // 完全并行执行测试
  fullyParallel: true,

  // CI 环境下禁止 only
  forbidOnly: !!process.env.CI,

  // CI 环境下重试 2 次
  retries: process.env.CI ? 2 : 0,

  // CI 环境下使用 1 个 worker，本地可以并行
  workers: process.env.CI ? 1 : undefined,

  // HTML 报告
  reporter: 'html',

  // 全局配置
  use: {
    // 基础 URL（使用 file:// 协议）
    baseURL: 'file:///Users/linyazhou/young-design-system',

    // 失败时追踪
    trace: 'on-first-retry',

    // 失败时截图
    screenshot: 'on',

    // 失败时保留视频
    video: 'retain-on-failure',

    // 等待动画完成
    actionTimeout: 10000,

    // 导航超时
    navigationTimeout: 30000,
  },

  // 配置项目（三个断点，只使用 Chromium）
  projects: [
    {
      name: 'mobile',
      use: {
        browserName: 'chromium',
        viewport: { width: 375, height: 667 },
      },
    },
    {
      name: 'tablet',
      use: {
        browserName: 'chromium',
        viewport: { width: 768, height: 1024 },
      },
    },
    {
      name: 'desktop',
      use: {
        browserName: 'chromium',
        viewport: { width: 1440, height: 900 },
      },
    },
  ],

  // 配置 Web Server（本地不需要，使用 file:// 协议）
  // webServer: undefined,
});
