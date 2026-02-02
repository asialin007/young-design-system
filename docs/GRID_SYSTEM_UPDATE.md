# 栅格系统更新文档

**更新日期：** 2025-01-31
**版本：** v2.0.0
**来源：** [Figma 设计稿](https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/%E5%B9%B4%E8%BD%BB%E7%89%88%E8%AE%BE%E8%AE%A1%E7%B3%BB%E7%BB%9FV2.0-%E8%8D%89%E7%A8%BF-?node-id=548-3165)

---

## 📋 更新概述

本次更新基于 Figma 设计稿的 12 栅格体系规范，全面更新了年轻版设计系统的栅格系统 CSS 文件和相关文档，确保后续项目可以直接调用正确的栅格类。

---

## 🔧 文件更新

### 1. CSS 变量文件 (`css/variables.css`)

**更新内容：** 添加 12 栅格体系相关变量

```css
/* 栅格配置 - 12栅格体系（基于 Figma 设计稿） */
--yds-grid-columns: 12;                    /* 12 列均分 */
--yds-grid-template: repeat(12, 1fr);     /* 使用 fr 单位均分屏幕宽度 */
--yds-grid-gap: 3px;                      /* 栅格间距 3px（1倍设计稿） */
--yds-grid-gap-2x: 6px;                   /* 栅格间距 6px（2倍设计稿） */

/* 栅格边距 */
--yds-grid-padding-default: 8px;          /* 默认边距 8px（主流程页面） */
--yds-grid-padding-compact: 4px;          /* 紧凑边距 4px（商品列表） */

/* 栅格间距变体 */
--yds-grid-gutter-min: 2px;
--yds-grid-gutter-small: 4px;
--yds-grid-gutter-base: 3px;              /* 基础栅格间距（1倍设计稿） */
--yds-grid-gutter-large: 6px;             /* 大栅格间距（2倍设计稿） */

/* 布局尺寸 */
--yds-screen-mobile: 375px;               /* 移动端标准宽度（1倍设计稿） */
--yds-screen-tablet: 768px;
--yds-screen-desktop: 1440px;
```

---

### 2. 栅格系统样式文件 (`css/grid.css`)

**更新内容：** 完全重写栅格系统，基于 12 栅格体系

#### 核心类

```css
/**
 * 基础栅格容器
 * 使用 grid-template-columns: repeat(12, 1fr) 实现 12 列均分屏幕宽度
 * 栅格间距 gap: 3px（1 倍设计稿）
 */
.yds-grid {
  display: grid;
  grid-template-columns: var(--yds-grid-template);  /* repeat(12, 1fr) */
  gap: var(--yds-grid-gap);                        /* 3px（1倍设计稿） */
  width: 100%;
  box-sizing: border-box;

  /* ⚠️ 重要：栅格容器不添加任何 padding 或 margin */
  /* 8px 左右边距通过内容单元格的 padding 实现 */
}
```

#### 栅格单元格

```css
/* 栅格单元格基础样式 */
.yds-grid__cell {
  position: relative;
  box-sizing: border-box;
  grid-column: span 1;  /* 默认占 1 列 */
}

/* 栅格单元格 - 占 N 列（N = 1-12） */
.yds-grid__cell--1 { grid-column: span 1; }
.yds-grid__cell--2 { grid-column: span 2; }
/* ... */
.yds-grid__cell--12 { grid-column: span 12; }
```

#### 内容单元格

```css
/**
 * 内容单元格 - 实现 8px 左右边距（默认）
 * 用于主流程页面（首页、列表、商详等）
 */
.yds-grid__cell-content {
  padding: 0 var(--yds-grid-padding-default);  /* 0 8px */
}

/**
 * 内容单元格 - 紧凑边距（4px）
 * 用于商品列表等紧凑场景
 */
.yds-grid__cell-content--compact {
  padding: 0 var(--yds-grid-padding-compact);  /* 0 4px */
}
```

#### 栅格间距变体

```css
.yds-grid--gutter-min { gap: var(--yds-grid-gutter-min); }  /* 2px */
.yds-grid--gutter-small { gap: var(--yds-grid-gutter-small); }  /* 4px */
.yds-grid--gutter-base { gap: var(--yds-grid-gutter-base); }  /* 3px */
.yds-grid--gutter-large { gap: var(--yds-grid-gutter-large); }  /* 6px */
```

---

### 3. 待办事项应用 (`docs/todo-app-mobile.html`)

**更新内容：** 使用设计系统栅格类

#### 更新前

```html
<!-- 自定义栅格类 -->
<div class="todo-grid">
  <div class="todo-grid__cell">
    <div class="action-bar">
      <!-- 内容 -->
    </div>
  </div>
</div>

<style>
  .todo-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 3px;
  }
  .todo-grid__cell {
    grid-column: span 12;
  }
</style>
```

#### 更新后

```html
<!-- 使用设计系统栅格类 -->
<div class="yds-grid">
  <div class="yds-grid__cell yds-grid__cell--12">
    <div class="yds-grid__cell-content">
      <div class="action-bar">
        <!-- 内容 -->
      </div>
    </div>
  </div>
</div>

<!-- 无需自定义样式，直接使用设计系统 -->
```

---

## 📖 使用指南

### 基础用法

```html
<!-- 引入设计系统 CSS -->
<link rel="stylesheet" href="/path/to/young-design-system/css/index.css">

<!-- 使用栅格系统 -->
<div class="yds-grid">
  <!-- 单列布局（占满 12 列） -->
  <div class="yds-grid__cell yds-grid__cell--12">
    <div class="yds-grid__cell-content">
      <!-- 内容 -->
    </div>
  </div>
</div>
```

### 两列布局（商品列表）

```html
<div class="yds-grid">
  <!-- 左侧商品 -->
  <div class="yds-grid__cell yds-grid__cell--6">
    <div class="yds-grid__cell-content yds-grid__cell-content--compact">
      <!-- 商品 1 -->
    </div>
  </div>

  <!-- 右侧商品 -->
  <div class="yds-grid__cell yds-grid__cell--6">
    <div class="yds-grid__cell-content yds-grid__cell-content--compact">
      <!-- 商品 2 -->
    </div>
  </div>
</div>
```

### 居中单列布局（大卡片）

```html
<div class="yds-grid">
  <!-- 左侧占位 -->
  <div class="yds-grid__cell yds-grid__cell--2"></div>

  <!-- 内容 -->
  <div class="yds-grid__cell yds-grid__cell--8">
    <div class="yds-grid__cell-content yds-grid__cell-content--compact">
      <!-- 大卡片内容 -->
    </div>
  </div>

  <!-- 右侧占位 -->
  <div class="yds-grid__cell yds-grid__cell--2"></div>
</div>
```

### 三列布局

```html
<div class="yds-grid">
  <div class="yds-grid__cell yds-grid__cell--4">
    <div class="yds-grid__cell-content">
      <!-- 内容 1 -->
    </div>
  </div>
  <div class="yds-grid__cell yds-grid__cell--4">
    <div class="yds-grid__cell-content">
      <!-- 内容 2 -->
    </div>
  </div>
  <div class="yds-grid__cell yds-grid__cell--4">
    <div class="yds-grid__cell-content">
      <!-- 内容 3 -->
    </div>
  </div>
</div>
```

---

## 🎯 关键点

### ✅ 正确做法

1. **使用设计系统栅格类**
   - 栅格容器：`.yds-grid`
   - 栅格单元格：`.yds-grid__cell yds-grid__cell--N`（N = 1-12）
   - 内容单元格：`.yds-grid__cell-content`

2. **8px 左右边距通过内容单元格实现**
   - 使用 `.yds-grid__cell-content` 实现 8px 边距
   - 使用 `.yds-grid__cell-content--compact` 实现 4px 边距

3. **栅格容器不添加 padding 或 margin**
   - 栅格容器本身不添加任何 padding 或 margin
   - 所有间距通过内容单元格的 padding 实现

### ❌ 错误做法

1. **自定义栅格样式**
   ```html
   <!-- ❌ 不要自定义栅格类 -->
   <div class="custom-grid">
     <style>
       .custom-grid {
         display: grid;
         grid-template-columns: repeat(12, 1fr);
         gap: 8px;  /* ❌ 错误的间距 */
       }
     </style>
   </div>
   ```

2. **给栅格容器添加 padding**
   ```css
   /* ❌ 错误 */
   .yds-grid {
     padding: 0 8px;  /* 不要给栅格容器添加 padding */
   }
   ```

3. **使用错误的栅格间距**
   ```css
   /* ❌ 错误 */
   .custom-grid {
     gap: 8px;  /* 栅格间距应该是 3px（1倍设计稿） */
   }
   ```

---

## 📊 栅格系统速查表

| 类名 | 说明 | 用途 |
|------|------|------|
| `.yds-grid` | 栅格容器 | 12 列均分，gap 3px |
| `.yds-grid__cell` | 栅格单元格 | 基础单元格，占 1 列 |
| `.yds-grid__cell--N` | 栅格单元格 | 占 N 列（N = 1-12） |
| `.yds-grid__cell-content` | 内容单元格 | 实现 8px 左右边距 |
| `.yds-grid__cell-content--compact` | 内容单元格（紧凑） | 实现 4px 左右边距 |

| 间距变体 | 值 | 说明 |
|---------|-----|------|
| `.yds-grid--gutter-min` | 2px | 最小间距 |
| `.yds-grid--gutter-small` | 4px | 小间距 |
| `.yds-grid--gutter-base` | 3px | 基础间距（1倍设计稿） |
| `.yds-grid--gutter-large` | 6px | 大间距（2倍设计稿） |

---

## 🔗 相关文档

- [栅格系统指南](./GRID_SYSTEM_GUIDE.md) - 12栅格体系完整规范
- [移动端布局规范](./MOBILE_LAYOUT_GUIDE.md) - 移动端布局指南
- [设计规范](./design-standards.md) - 年轻版设计系统核心规范

---

## ✅ 验证清单

使用栅格系统时，请确认：

- [ ] 使用 `.yds-grid` 作为栅格容器
- [ ] 使用 `.yds-grid__cell yds-grid__cell--N` 指定栅格占用
- [ ] 使用 `.yds-grid__cell-content` 实现左右边距
- [ ] 栅格容器不添加 padding 或 margin
- [ ] 栅格间距使用 3px（1倍设计稿）
- [ ] 根据信息密度选择合适的边距（8px / 4px）

---

**更新完成！所有后续项目都可以直接使用设计系统的栅格类。** 🎉
