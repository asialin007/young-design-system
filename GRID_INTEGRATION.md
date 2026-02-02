# 栅格系统整合完成

## 已创建的文件

```
✅ tokens/spacing.json              # 添加栅格间距变量
✅ css/variables.css               # 添加栅格系统变量
✅ css/grid.css                    # 栅格系统样式
✅ css/index.css                   # 导入栅格样式
✅ docs/grid-guide.md              # 栅格系统使用指南
✅ docs/grid-demo.html              # 栅格系统演示
✅ figma/components/grid.json       # Grid 组件 Figma 映射
✅ figma/config.json                # 更新添加 Grid 组件
```

## 栅格规范

### 12 栅格体系

- **单栅格宽度**: 8px
- **容器宽度**: 96px (12 栅格)
- **最小屏幕**: 375px (边距 8px)
- **适用页面**: 首页、列表、商详等主流程页面

### 间距系统

| 变量名 | 值 | 栅格 | 说明 |
|---------|-----|------|------|
| `--yds-spacing-2` | 2px | 0.25x | 最小间距 |
| `--yds-spacing-4` | 4px | 0.5x | 小间距 |
| `--yds-spacing-8` | 8px | 1x | 基础间距 |
| `--yds-spacing-12` | 12px | 1.5x | 中小间距 |
| `--yds-spacing-16` | 16px | 2x | 大间距 |
| `--yds-spacing-24` | 24px | 3x | - |
| `--yds-spacing-32` | 32px | 4x | - |
| `--yds-spacing-48` | 48px | 6x | - |
| `--yds-spacing-56` | 56px | 7x | - |
| `--yds-spacing-64` | 64px | 8x | - |
| `--yds-spacing-72` | 72px | 9x | - |
| `--yds-spacing-84` | 84px | 10.5x | - |
| `--yds-spacing-96` | 96px | 12x | 最大间距 |

### 屏幕尺寸

| 变量名 | 值 | 说明 |
|---------|-----|------|
| `--yds-screen-mobile` | 375px | 移动端屏幕 |
| `--yds-screen-tablet` | 768px | 平板屏幕 |
| `--yds-screen-desktop` | 1440px | 桌面屏幕 |

### 安全区域

| 变量名 | 值 | 说明 |
|---------|-----|------|
| `--yds-safe-area-bottom` | 34px | iPhone X 底部安全区 |
| `--yds-safe-area-top` | 44px | 状态栏高度 |

### 导航栏

| 变量名 | 值 | 说明 |
|---------|-----|------|
| `--yds-nav-height` | 44px | 顶部导航 |
| `--yds-tabbar-height` | 54px | 底部标签栏 |
| `--yds-statusbar-height` | 44px | 系统状态栏 |

## 使用方法

### 1. 在项目中导入

```css
/* 导入完整样式 */
@import '@vipshop/young-design-system/css';
```

### 2. 使用栅格

```html
<!-- 12 栅格布局 -->
<div class="yds-grid yds-grid--12">
  <div class="yds-grid__cell">内容 1</div>
  <div class="yds-grid__cell">内容 2</div>
  <div class="yds-grid__cell">内容 3</div>
  <!-- ... -->
</div>
```

### 3. 自定义间距

```html
<!-- 使用大间距 -->
<div class="yds-grid yds-grid--gutter-large">
  <div class="yds-grid__cell">内容</div>
  <div class="yds-grid__cell">内容</div>
</div>
```

### 4. 跨栅格

```html
<!-- 跨 3 栅格 -->
<div class="yds-grid yds-grid--12">
  <div class="yds-grid__cell yds-grid__cell--3">
    跨 3 栅格的内容
  </div>
</div>
```

## 查看演示

```bash
# 查看完整演示
open docs/grid-demo.html

# 查看使用指南
open docs/grid-guide.md
```

## Figma 信息

- **组件**: Grid 栅格系统
- **节点 ID**: 548:3165
- **文件**: 年轻版设计系统V2.0-草稿
- **URL**: https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿?node-id=548-3165

## 下一步

1. ✅ 栅格系统已录入
2. 🔄 在 Figma 中添加 Code Connect 映射
3. 🔄 继续添加其他组件（Input, Card, Modal 等）
4. 🔄 设置 CI/CD 自动化

---

**提示**: 所有栅格相关变量已转换为 YDS CSS 变量，可以直接在项目中使用！
