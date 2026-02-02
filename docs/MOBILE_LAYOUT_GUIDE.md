# 年轻版设计系统 - 移动端布局规范

**版本：** v1.1.0
**更新日期：** 2025-01-31

**更新内容：**
- 明确栅格容器本身不添加任何 padding 或 margin
- 8px 左右间距通过内容单元格的 padding 实现
- 更新所有示例代码和说明文档

---

## 📋 布局原则

### 核心原则

年轻版设计系统的移动端布局遵循以下核心原则：

1. **全局布局：** 页面宽度 100%（375px 标准宽度，1倍设计稿）
2. **12栅格体系：** 内容区域使用 12 列栅格系统，`grid-template-columns: repeat(12, 1fr)`
3. **栅格间距：** 3px（1倍设计稿），通过 `gap: 3px` 实现
4. **内容边距：** 8px 左右边距（默认），通过内容单元格的 `padding: 0 8px` 实现
5. **栅格容器：** 不添加任何 padding 或 margin
6. **固定元素：** Navbar 和 TabBar 填充屏幕宽度，不额外添加 margin
7. **响应式：** 根据屏幕宽度自适应，在任何尺寸下都保持全宽

---

## 🎨 布局结构

### 页面整体布局

```
┌─────────────────────────────────┐ 375px（1倍设计稿）
│  Navbar（100% 宽度）              │  ← 固定顶部，z-index: 100
├─────────────────────────────────┤
│                                 │
│  Main Content（100% 宽度）       │  ← 主要内容区域
│  ┌───────────────────────────┐  │
│  │ 栅格系统（12列均分）        │  │
│  │ grid-template-columns:    │  │
│  │ repeat(12, 1fr)          │  │  ← 12列均分屏幕宽度
│  │ 无 padding/margin         │  │
│  │ gap: 3px                 │  │  ← 栅格间距 3px（1倍设计稿）
│  │ ┌─────────────────────┐  │  │
│  │ │ 内容单元格          │  │  │
│  │ │ padding: 0 8px     │  │  │  ← 实现 8px 左右边距
│  │ └─────────────────────┘  │  │
│  └───────────────────────────┘  │
│                                 │
├─────────────────────────────────┤
│  TabBar（100% 宽度）             │  ← 固定底部，z-index: 100
└─────────────────────────────────┘
```

### 关键点

- ✅ Navbar 和 TabBar **宽度 100%**，填充整个屏幕
- ✅ 栅格系统使用 `grid-template-columns: repeat(12, 1fr)` 实现 12 列均分
- ✅ 栅格间距 `gap: 3px`（1倍设计稿）
- ✅ 栅格容器**不添加任何 padding 或 margin**
- ✅ 8px 左右边距通过**内容单元格的 padding: 0 8px**实现

---

## 📐 栅格系统规范

### 栅格系统结构

```css
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);  /* 12列均分 */
  gap: 3px;                                  /* 栅格间距 3px（1倍设计稿） */
  width: 100%;                                /* 宽度 100% */
  /* ⚠️ 栅格容器本身不添加任何 padding 或 margin */
}
```

**重要说明：**
- 栅格容器使用 `repeat(12, 1fr)` 实现 12 列**均分屏幕宽度**
- 栅格间距 `gap: 3px`（1倍设计稿，2倍设计稿为 6px）
- 栅格容器**不添加任何 padding 或 margin**
- 8px 左右边距通过**内容单元格的 padding: 0 8px**实现
- 单列宽度约 29.92px（359px ÷ 12）

### 栅格单元格

```css
.yds-grid__cell {
  /* 占 N 列 */
  grid-column: span N;  /* N = 1-12 */
}

/* 内容单元格内的内容实现 8px 左右边距 */
.yds-grid__cell-content {
  padding: 0 8px;  /* 左右 8px padding（默认边距） */
}

/* 商品列表等场景使用 4px 边距 */
.yds-grid__cell-content--compact {
  padding: 0 4px;  /* 左右 4px padding（紧凑边距） */
}
```

### 使用示例

```html
<!-- 单列布局（占满 12 列） -->
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 12;">
    <!-- 内容添加 padding: 0 8px 实现 8px 左右间距 -->
    <div class="yds-grid__cell-content" style="padding: 0 8px;">
      <!-- 内容 -->
    </div>
  </div>
</div>

<!-- 两列布局（每列占 6 列） -->
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 6;">
    <div class="yds-grid__cell-content" style="padding: 0 8px;">
      <!-- 左侧内容 -->
    </div>
  </div>
  <div class="yds-grid__cell" style="grid-column: span 6;">
    <div class="yds-grid__cell-content" style="padding: 0 8px;">
      <!-- 右侧内容 -->
    </div>
  </div>
</div>

<!-- 三列布局（每列占 4 列） -->
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 4;">
    <div class="yds-grid__cell-content" style="padding: 0 8px;">
      <!-- 内容 1 -->
    </div>
  </div>
  <div class="yds-grid__cell" style="grid-column: span 4;">
    <div class="yds-grid__cell-content" style="padding: 0 8px;">
      <!-- 内容 2 -->
    </div>
  </div>
  <div class="yds-grid__cell" style="grid-column: span 4;">
    <div class="yds-grid__cell-content" style="padding: 0 8px;">
      <!-- 内容 3 -->
    </div>
  </div>
</div>
```

---

## 📱 Navbar 和 TabBar 规范

### Navbar 导航栏

**宽度：** 100%（填充整个屏幕）
**定位：** 固定顶部时使用 `left: 0; right: 0;`
**内容 padding：** `padding: 6px 12px;`（内容区域内边距，不是页面边距）

```css
.yds-navbar {
  width: 100%;                    /* ✅ 填充屏幕宽度 */
  background-color: #FFFFFF;
}

.yds-navbar--fixed {
  position: fixed;
  top: 0;
  left: 0;                        /* ✅ 贴合左边 */
  right: 0;                       /* ✅ 贴合右边 */
  z-index: 100;
}

.yds-navbar__content {
  padding: 6px 12px;              /* ✅ 内容区域内边距 */
}
```

### TabBar 底部标签栏

**宽度：** 100%（填充整个屏幕）
**定位：** 固定底部时使用 `left: 0; right: 0;`
**内容 padding：** `padding: 0 12px;`（内容区域内边距，不是页面边距）

```css
.yds-tabbar {
  width: 100%;                    /* ✅ 填充屏幕宽度 */
  background-color: #FFFFFF;
}

.yds-tabbar--fixed {
  position: fixed;
  bottom: 0;
  left: 0;                        /* ✅ 贴合左边 */
  right: 0;                       /* ✅ 贴合右边 */
  z-index: 100;
}

.yds-tabbar__content {
  padding: 0 12px;                /* ✅ 内容区域内边距 */
}
```

---

## ⚠️ 常见错误

### 错误 1：给页面容器添加左右 margin

```css
/* ❌ 错误 */
body {
  margin: 0 16px;  /* 不要给 body 添加 margin */
}
```

**正确做法：**
```css
/* ✅ 正确 */
body {
  margin: 0;
  padding: 0;
}
```

---

### 错误 2：给栅格容器添加 padding

```css
/* ❌ 错误 */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 8px;          /* ❌ 栅格间距应该是 3px（1倍设计稿） */
  padding: 0 8px;    /* ❌ 栅格容器不要添加 padding */
  margin: 0 16px;    /* ❌ 也不要添加 margin */
}
```

**正确做法：**
```css
/* ✅ 正确 */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3px;  /* ✅ 栅格间距 3px（1倍设计稿） */
  /* ⚠️ 栅格容器不添加任何 padding 或 margin */
}

/* 8px 左右间距通过内容单元格实现 */
.yds-grid__cell-content {
  padding: 0 8px;
}
```

---

### 错误 3：给 Navbar 或 TabBar 添加宽度限制

```css
/* ❌ 错误 */
.yds-navbar--fixed {
  position: fixed;
  max-width: 375px;  /* 不要限制宽度 */
  margin: 0 auto;    /* 不要居中 */
}
```

**正确做法：**
```css
/* ✅ 正确 */
.yds-navbar--fixed {
  position: fixed;
  width: 100%;       /* 100% 宽度 */
  left: 0;
  right: 0;
}
```

---

## 🎯 完整页面布局示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>移动端页面示例</title>
  <link rel="stylesheet" href="css/index.css">
</head>
<body>
  <!-- Navbar（100% 宽度） -->
  <nav class="yds-navbar yds-navbar--fixed">
    <div class="yds-navbar__statusbar"></div>
    <div class="yds-navbar__content">
      <!-- Navbar 内容 -->
    </div>
  </nav>

  <!-- 主要内容区域（100% 宽度） -->
  <main class="main-content">
    <!-- 栅格系统（无 padding，12 列均分） -->
    <div class="yds-grid">
      <!-- 单列布局 -->
      <div class="yds-grid__cell" style="grid-column: span 12;">
        <div class="yds-grid__cell-content" style="padding: 0 8px;">
          <!-- 内容卡片 -->
        </div>
      </div>

      <!-- 两列布局 -->
      <div class="yds-grid__cell" style="grid-column: span 6;">
        <div class="yds-grid__cell-content" style="padding: 0 8px;">
          <!-- 左侧内容 -->
        </div>
      </div>
      <div class="yds-grid__cell" style="grid-column: span 6;">
        <div class="yds-grid__cell-content" style="padding: 0 8px;">
          <!-- 右侧内容 -->
        </div>
      </div>
    </div>
  </main>

  <!-- TabBar（100% 宽度） -->
  <nav class="yds-tabbar yds-tabbar--fixed">
    <div class="yds-tabbar__content">
      <!-- TabBar 内容 -->
    </div>
    <div class="yds-tabbar__safe-area">
      <div class="yds-tabbar__indicator"></div>
    </div>
  </nav>
</body>
</html>
```

---

## 📊 尺寸规范速查表

| 元素 | 属性 | 值（1倍设计稿） | 说明 |
|------|------|----------------|------|
| 页面容器 | width | 375px / 100% | 移动端标准宽度 |
| Navbar | width | 100% | 填充屏幕宽度 |
| TabBar | width | 100% | 填充屏幕宽度 |
| 栅格系统 | columns | 12 | 12列均分 |
| 栅格系统 | gap | 3px | 栅格间距（1倍设计稿） |
| 栅格单元格 | grid-column | span N | N 列（1-12） |
| 内容单元格 | padding | 0 8px | 默认边距（主流程页面） |
| 内容单元格 | padding | 0 4px | 紧凑边距（商品列表） |

---

## 🎯 验证清单

实现移动端页面时，请确认：

- [ ] 页面宽度 375px（1倍设计稿）或 100%（响应式）
- [ ] Navbar 宽度 100%，填充屏幕
- [ ] TabBar 宽度 100%，填充屏幕
- [ ] 使用 `grid-template-columns: repeat(12, 1fr)` 实现 12 列栅格
- [ ] 栅格间距 `gap: 3px`（1倍设计稿）
- [ ] 栅格容器**不添加任何 padding 或 margin**
- [ ] 8px 左右边距通过内容单元格的 `padding: 0 8px` 实现
- [ ] 没有额外的 `margin` 在页面容器上
- [ ] Navbar 和 TabBar 使用 `left: 0; right: 0;` 固定定位

---

**更新完成！所有移动端页面都应遵循此布局规范。** 🎉

**相关文档：**
- [栅格系统指南](./GRID_SYSTEM_GUIDE.md) - 12栅格体系完整规范
- [设计规范](./design-standards.md) - 年轻版设计系统核心规范

