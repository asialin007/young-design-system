# 栅格系统

## 概述

年轻版设计系统采用 **12 栅格体系**，单栅格宽度为 **8px**，基于 375px 移动端屏幕宽度设计。

## 栅格配置

| 配置项 | 值 | 说明 |
|--------|-----|------|
| 栅格数 | 12 | 完整栅格系统 |
| 单栅格宽度 | 8px | 1 栅格 = 8px |
| 容器宽度 | 96px | 12 栅格容器宽度 |
| 最小间距 | 2px | 0.25 栅格 |
| 小间距 | 4px | 0.5 栅格 |
| 基础间距 | 8px | 1 栅格 |
| 大间距 | 16px | 2 栅格 |

## 间距系统

间距以 2px 为最小单位，以 4 的倍数逐级递增：

| 变量名 | 值 | 栅格 | 说明 |
|---------|-----|------|------|
| `--yds-spacing-2` | 2px | 0.25x | 最小间距 |
| `--yds-spacing-4` | 4px | 0.5x | 小间距 |
| `--yds-spacing-8` | 8px | 1x | 基础间距 |
| `--yds-spacing-12` | 12px | 1.5x | 中小间距 |
| `--yds-spacing-16` | 16px | 2x | 大间距 |
| `--yds-spacing-20` | 20px | 2.5x | - |
| `--yds-spacing-24` | 24px | 3x | - |
| `--yds-spacing-28` | 28px | 3.5x | - |
| `--yds-spacing-32` | 32px | 4x | - |
| `--yds-spacing-40` | 40px | 5x | - |
| `--yds-spacing-48` | 48px | 6x | - |
| `--yds-spacing-56` | 56px | 7x | - |
| `--yds-spacing-64` | 64px | 8x | - |
| `--yds-spacing-72` | 72px | 9x | - |
| `--yds-spacing-84` | 84px | 10.5x | - |
| `--yds-spacing-96` | 96px | 12x | 最大间距 |

## 屏幕尺寸

| 类型 | 宽度 | 说明 |
|------|------|------|
| 移动端 | 375px | 标准移动端屏幕（边距 8px） |
| 平板 | 768px | iPad 等平板设备 |
| 桌面 | 1440px | 大屏桌面设备 |

## 安全区域

| 区域 | 尺寸 | 说明 |
|------|------|------|
| 底部安全距离 | 34px | iPhone X 等设备的底部安全区域 |
| 顶部安全距离 | 44px | 状态栏高度 |

## 导航栏

| 组件 | 高度 | 说明 |
|--------|------|------|
| 顶部导航栏 | 44px | 移动端顶部导航 |
| 底部标签栏 | 54px | 移动端底部 Tab 导航 |
| 状态栏 | 44px | 系统状态栏 |

## 使用方法

### 基础栅格

```html
<div class="yds-grid yds-grid--container">
  <!-- 12 栅格布局 -->
  <div class="yds-grid__cell">1 栅格</div>
  <div class="yds-grid__cell">1 栅格</div>
  <!-- ... -->
</div>
```

### 指定列数

```html
<!-- 6列布局 -->
<div class="yds-grid yds-grid--6">
  <div class="yds-grid__cell">内容 1</div>
  <div class="yds-grid__cell">内容 2</div>
  <div class="yds-grid__cell">内容 3</div>
  <div class="yds-grid__cell">内容 4</div>
  <div class="yds-grid__cell">内容 5</div>
  <div class="yds-grid__cell">内容 6</div>
</div>
```

### 跨栅格

```html
<div class="yds-grid yds-grid--12">
  <!-- 跨 3 栅格 -->
  <div class="yds-grid__cell yds-grid__cell--3">内容</div>

  <!-- 跨 6 栅格 -->
  <div class="yds-grid__cell yds-grid__cell--6">内容</div>
</div>
```

### 自定义间距

```html
<!-- 使用大间距 -->
<div class="yds-grid yds-grid--gutter-large">
  <div class="yds-grid__cell">内容 1</div>
  <div class="yds-grid__cell">内容 2</div>
</div>

<!-- 使用小间距 -->
<div class="yds-grid yds-grid--gutter-small">
  <div class="yds-grid__cell">内容 1</div>
  <div class="yds-grid__cell">内容 2</div>
</div>
```

### 内容对齐

```html
<div class="yds-grid yds-grid--12">
  <div class="yds-grid__cell yds-grid__left">左对齐</div>
  <div class="yds-grid__cell yds-grid__center">居中对齐</div>
  <div class="yds-grid__cell yds-grid__right">右对齐</div>
</div>
```

## CSS 变量

```css
/* 栅格配置 */
--yds-grid-columns: 12;
--yds-grid-column-width: 8px;
--yds-grid-container-width: 96px;

/* 栅格间距 */
--yds-grid-gutter-min: 2px;
--yds-grid-gutter-small: 4px;
--yds-grid-gutter-base: 8px;
--yds-grid-gutter-large: 16px;

/* 屏幕尺寸 */
--yds-screen-mobile: 375px;
--yds-screen-tablet: 768px;
--yds-screen-desktop: 1440px;

/* 安全区域 */
--yds-safe-area-bottom: 34px;
--yds-safe-area-top: 44px;

/* 导航栏 */
--yds-nav-height: 44px;
--yds-tabbar-height: 54px;
--yds-statusbar-height: 44px;
```

## 最佳实践

### 1. 使用栅格对齐

```html
<!-- ✅ 推荐：使用栅格对齐 -->
<div class="yds-grid yds-grid--12">
  <div class="yds-grid__cell yds-grid__cell--3">
    <div class="yds-grid--standard-margin">内容</div>
  </div>
</div>

<!-- ❌ 不推荐：手动计算像素 -->
<div style="width: calc(3 * 8px - 16px);">内容</div>
```

### 2. 使用间距变量

```css
/* ✅ 推荐：使用设计系统变量 */
.card {
  margin: var(--yds-spacing-16);
  padding: var(--yds-spacing-24);
  gap: var(--yds-grid-gutter-base);
}

/* ❌ 不推荐：硬编码像素值 */
.card {
  margin: 16px;
  padding: 24px;
  gap: 8px;
}
```

### 3. 考虑安全区域

```html
<!-- 移动端需要考虑安全区域 -->
<div style="padding-bottom: var(--yds-safe-area-bottom)">
  <!-- 内容 -->
</div>
```

### 4. 响应式设计

```html
<!-- 移动端 -->
<div class="yds-grid yds-grid--responsive yds-grid--6">
  <!-- 移动端 6 列 -->
</div>

<!-- 桌面会自动扩展到 12 列 -->
```

## Figma 资源

- **文件**: 年轻版设计系统V2.0-草稿
- **File Key**: `BepKKgfdECcLIBi5bvkMbp`
- **栅格节点**: `548:3165`
- **URL**: https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿?node-id=548-3165

## 相关文档

- [间距系统说明](../css/variables.css#间距)
- [按钮组件文档](./button.md)
- [导航栏组件](./navbar-guide.md)
- [Figma 集成指南](./figma-integration.md)
