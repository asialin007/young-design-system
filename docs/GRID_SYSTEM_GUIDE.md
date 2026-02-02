# 年轻版设计系统 - 栅格系统指南

**版本：** v2.0.0
**更新日期：** 2025-01-31
**来源：** [Figma 设计稿](https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/%E5%B9%B4%E8%BD%BB%E7%89%88%E8%AE%BE%E8%AE%A1%E7%B3%BB%E7%BB%9FV2.0-%E8%8D%89%E7%A8%BF-?node-id=548-3165)

---

## 📋 概述

年轻版设计系统采用 **12 栅格体系**，以上下布局的结构为例，对内容区域进行 12 栅格的划分设置。

**重要说明：**
- 标注均为 **1倍设计稿**数值
- **2倍设计稿**以下数值均 × 2

---

## 🎨 栅格系统结构

### 整体布局结构

```
┌─────────────────────────────────┐ 375px
│  状态栏 (44px)                   │  StatusBar
├─────────────────────────────────┤
│  顶部导航 (44px)                 │  Top Navigation
├─────────────────────────────────┤
│                                 │
│  ┌───┬─────────────────────┬───┐│
│  │ 4 │    12栅格内容区域    │ 4 ││  ← 边距 4px + 内容 359px + 边距 4px
│  ├───┼─────────────────────┼───┤│
│  │   │ ┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐ │ ││
│  │   │ │1│2│3│4│5│6│7│8│9│10│11│12│ │ ││  12栅格等分（359px）
│  │   │ └─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘ │ ││
│  │   │    内容单元格          │ ││
│  └───┴─────────────────────┴───┘│
│                                 │
├─────────────────────────────────┤
│  底部导航 (54px)                 │  Bottom Navigation
├─────────────────────────────────┤
│  安全距离 (34px)                 │  Safe Area
└─────────────────────────────────┘
```

### 关键数值（1倍设计稿）

| 区域 | 数值 | 说明 |
|------|------|------|
| **屏幕总宽度** | 375px | 移动端标准宽度 |
| **左右边距** | 4px | 距离屏幕边缘的边距 |
| **栅格内容宽度** | 359px | 375 - 4×2 = 367px（实际内容区域） |
| **栅格数量** | 12 列 | 12栅格体系 |
| **单列宽度** | 29.92px | 359 ÷ 12 ≈ 29.92px |
| **栅格间距** | 3px | 栅格之间的间距 |

---

## 📐 三种信息密度

### 1. 大信息密度（默认）

**适用场景：** 首页、列表、商详等主流程页面

**布局特点：**
- **边距：** 8px（距离屏幕边缘）
- **栅格划分：** 单列布局，span 12
- **内容单元格：** `padding: 0 8px` 实现左右 8px 间距

**示例：**
```css
/* 页面容器 */
.page {
  width: 375px;
}

/* 栅格容器 */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);  /* 12列均分 */
  gap: 3px;                                  /* 栅格间距 3px */
  width: 100%;
}

/* 栅格单元格 */
.yds-grid__cell {
  grid-column: span N;  /* N = 1-12 */
}

/* 内容单元格（实现 8px 左右边距） */
.yds-grid__cell-content {
  padding: 0 8px;
}
```

---

### 2. 商品列表 1行2

**适用场景：** 商品列表、卡片列表

**布局特点：**
- **左右边距：** 4px
- **栅格划分：** 左右各 span 6，中间间距 8px
- **实际内容宽度：** 167.5px（单列）

**示例：**
```html
<div class="yds-grid">
  <!-- 左侧商品 -->
  <div class="yds-grid__cell" style="grid-column: span 6;">
    <div class="yds-grid__cell-content" style="padding: 0 4px;">
      <!-- 商品卡片 -->
    </div>
  </div>

  <!-- 右侧商品 -->
  <div class="yds-grid__cell" style="grid-column: span 6;">
    <div class="yds-grid__cell-content" style="padding: 0 4px;">
      <!-- 商品卡片 -->
    </div>
  </div>
</div>
```

---

### 3. 商品列表 1行1

**适用场景：** 大卡片、Banner、推荐内容

**布局特点：**
- **左右边距：** 4px
- **栅格划分：** span 8（居中显示，左右各留 span 2）
- **实际内容宽度：** 239.36px

**示例：**
```html
<div class="yds-grid">
  <!-- 左侧占位 span 2 -->
  <div class="yds-grid__cell" style="grid-column: span 2;"></div>

  <!-- 内容 span 8 -->
  <div class="yds-grid__cell" style="grid-column: span 8;">
    <div class="yds-grid__cell-content" style="padding: 0 4px;">
      <!-- 大卡片内容 -->
    </div>
  </div>

  <!-- 右侧占位 span 2 -->
  <div class="yds-grid__cell" style="grid-column: span 2;"></div>
</div>
```

---

## 📏 间距规范

### 间距等级

**最小间距：** 2pt
**递增规则：** 以 4 的倍数逐级递增（横向与纵向一致）

### 间距值（1倍设计稿）

| 间距值 | 说明 |
|--------|------|
| 1px | 最小间距（特殊场景） |
| 3px | 栅格间距 |
| 4px | 小间距（商品列表边距） |
| 8px | 标准间距（主流程页面边距） |
| 12px | 中间距 |
| 16px | 大间距 |
| 20px | 超大间距 |
| 24px | 特大间距 |
| 28px | 巨大间距 |
| 32px | 超巨大间距 |
| 40px | 极大间距 |
| 48px | 极极大间距 |
| 56px | 超级间距 |
| 64px | 超级极大间距 |
| 72px | 最大间距 |

---

## 💻 CSS 实现

### 基础栅格系统

```css
/* 栅格容器 */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);  /* 12列均分 */
  gap: 3px;                                  /* 栅格间距 3px（1倍设计稿） */
  width: 100%;
  /* ⚠️ 栅格容器不添加任何 padding 或 margin */
}

/* 栅格单元格 */
.yds-grid__cell {
  grid-column: span N;  /* N = 1-12 */
}

/* 内容单元格（实现左右边距） */
.yds-grid__cell-content {
  padding: 0 8px;  /* 默认 8px 边距 */
}
```

### 响应式处理

```css
/* 1倍设计稿（标准） */
@media (max-width: 375px) {
  .yds-grid {
    gap: 3px;  /* 栅格间距 3px */
  }
}

/* 2倍设计稿（Retina屏） */
@media (min-width: 376px) {
  .yds-grid {
    gap: 6px;  /* 栅格间距 3px × 2 = 6px */
  }
}
```

---

## 🎯 使用示例

### 示例 1：单列布局（默认）

```html
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 12;">
    <div class="yds-grid__cell-content" style="padding: 0 8px;">
      <!-- 内容卡片 -->
      <div class="card">卡片内容</div>
    </div>
  </div>
</div>
```

**效果：**
- 左右边距：8px
- 内容宽度：359px
- 栅格占用：span 12（全宽）

---

### 示例 2：两列布局（商品列表）

```html
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 6;">
    <div class="yds-grid__cell-content" style="padding: 0 4px;">
      <!-- 商品 1 -->
      <div class="product-card">商品 1</div>
    </div>
  </div>

  <div class="yds-grid__cell" style="grid-column: span 6;">
    <div class="yds-grid__cell-content" style="padding: 0 4px;">
      <!-- 商品 2 -->
      <div class="product-card">商品 2</div>
    </div>
  </div>
</div>
```

**效果：**
- 左右边距：4px
- 单列宽度：167.5px
- 栅格占用：span 6（半宽）
- 中间间距：3px

---

### 示例 3：居中单列布局

```html
<div class="yds-grid">
  <!-- 左侧占位 -->
  <div class="yds-grid__cell" style="grid-column: span 2;"></div>

  <!-- 内容 -->
  <div class="yds-grid__cell" style="grid-column: span 8;">
    <div class="yds-grid__cell-content" style="padding: 0 4px;">
      <!-- 大卡片 -->
      <div class="large-card">大卡片内容</div>
    </div>
  </div>

  <!-- 右侧占位 -->
  <div class="yds-grid__cell" style="grid-column: span 2;"></div>
</div>
```

**效果：**
- 左右边距：4px
- 内容宽度：239.36px
- 栅格占用：span 8（2/3 宽）
- 左右占位：span 2（各 1/6 宽）

---

### 示例 4：三列布局

```html
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 4;">
    <div class="yds-grid__cell-content" style="padding: 0 3px;">
      <!-- 内容 1 -->
      <div class="item">内容 1</div>
    </div>
  </div>

  <div class="yds-grid__cell" style="grid-column: span 4;">
    <div class="yds-grid__cell-content" style="padding: 0 3px;">
      <!-- 内容 2 -->
      <div class="item">内容 2</div>
    </div>
  </div>

  <div class="yds-grid__cell" style="grid-column: span 4;">
    <div class="yds-grid__cell-content" style="padding: 0 3px;">
      <!-- 内容 3 -->
      <div class="item">内容 3</div>
    </div>
  </div>
</div>
```

**效果：**
- 单列宽度：111.76px
- 栅格占用：span 4（1/3 宽）
- 栅格间距：3px

---

## ⚠️ 常见错误

### 错误 1：给栅格容器添加 padding

```css
/* ❌ 错误 */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3px;
  padding: 0 8px;  /* ❌ 栅格容器不要添加 padding */
}
```

**正确做法：**
```css
/* ✅ 正确 */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3px;
  /* ⚠️ 栅格容器不添加任何 padding 或 margin */
}

/* 8px 左右边距通过内容单元格实现 */
.yds-grid__cell-content {
  padding: 0 8px;
}
```

---

### 错误 2：使用固定宽度而非 fr 单位

```css
/* ❌ 错误 */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 29.92px);  /* ❌ 使用固定宽度 */
  gap: 3px;
}
```

**正确做法：**
```css
/* ✅ 正确 */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);  /* ✅ 使用 fr 单位均分 */
  gap: 3px;
}
```

---

### 错误 3：忽略栅格间距 gap

```css
/* ❌ 错误 */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* ❌ 缺少 gap，导致列之间没有间距 */
}
```

**正确做法：**
```css
/* ✅ 正确 */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3px;  /* ✅ 栅格间距 3px（1倍设计稿） */
}
```

---

## 📊 栅格系统速查表

| 属性 | 值 | 说明 |
|------|-----|------|
| 栅格数量 | 12 列 | 12栅格体系 |
| 屏幕宽度 | 375px | 移动端标准宽度（1倍设计稿） |
| 左右边距 | 4px / 8px | 根据信息密度调整 |
| 栅格间距 | 3px | 1倍设计稿（2倍设计稿为 6px） |
| 单列宽度 | ~29.92px | 359 ÷ 12 |
| 栅格单元 | span N | N = 1-12 |

---

## 🎯 验证清单

实现栅格系统时，请确认：

- [ ] 使用 `grid-template-columns: repeat(12, 1fr)` 实现 12 列均分
- [ ] 栅格间距 `gap: 3px`（1倍设计稿）
- [ ] 栅格容器不添加任何 `padding` 或 `margin`
- [ ] 左右边距通过内容单元格的 `padding` 实现
- [ ] 根据信息密度选择合适的边距（4px / 8px）
- [ ] 使用 `grid-column: span N` 指定栅格占用

---

## 📖 相关文档

- [移动端布局规范](./MOBILE_LAYOUT_GUIDE.md) - 完整的移动端布局指南
- [设计规范](./design-standards.md) - 年轻版设计系统核心规范
- [Figma 设计稿](https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/%E5%B9%B4%E8%BD%BB%E7%89%88%E8%AE%BE%E8%AE%A1%E7%B3%BB%E7%BB%9FV2.0-%E8%8D%89%E7%A8%BF-?node-id=548-3165) - 栅格系统设计源文件

---

**更新完成！所有移动端页面都应遵循此栅格系统规范。** 🎉
