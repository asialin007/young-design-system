# TabBar 图标实现规范更新总结

**更新日期：** 2025-01-31
**版本：** v2.1.0

---

## 📋 更新概述

本次更新修复了 TabBar 组件图标选中态颜色显示问题，并明确了图标实现的规范要求，确保以后的项目可以直接调用组件，正确显示选中状态的品牌色。

---

## 🔧 修复的问题

### 1. 收藏图标硬编码颜色问题

**文件：** `/icons/y_icon_line_edit_favorites.svg`

**问题：** 图标使用了硬编码颜色 `fill="#1B1B1B"`

**修复：** 改为 `fill="currentColor"`，可以响应 CSS 颜色

```xml
<!-- 修复前 -->
<path d="..." fill="#1B1B1B" style="fill:#1B1B1B;..."/>

<!-- 修复后 -->
<path d="..." fill="currentColor"/>
```

---

### 2. todo-app.html 的 TabBar 图标实现

**文件：** `/docs/todo-app.html`

**问题：** 使用 `<img>` 标签加载 SVG，无法响应 CSS `color` 属性

**修复：** 改为内联 SVG + `fill="currentColor"`

```html
<!-- 修复前 -->
<button class="yds-tabbar__item yds-tabbar__item--active">
  <div class="yds-tabbar__icon">
    <img src="../icons/y_icon_line_generality_index.svg" class="yds-icon" alt="首页">
  </div>
  <span class="yds-tabbar__label">首页</span>
</button>

<!-- 修复后 -->
<button class="yds-tabbar__item yds-tabbar__item--active">
  <div class="yds-tabbar__icon">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 16.999H7V14.999H17V16.999Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6045 2.46973..." fill="currentColor"/>
    </svg>
  </div>
  <span class="yds-tabbar__label">首页</span>
</button>
```

---

## 📚 文档更新

### 1. TabBar 组件指南 (`docs/tabbar-guide.md`)

**新增章节：** "⚠️ 重要：图标实现方式"

**内容包括：**
- ✅ 必须使用内联 SVG（不能用 img 标签）
- ✅ 为什么必须使用内联 SVG
- ✅ 颜色变化机制说明
- ✅ 如何获取正确的 SVG 代码
- ✅ 常用 TabBar 图标的内联 SVG 代码

### 2. 设计规范文档 (`docs/design-standards.md`)

**更新章节：** "8. 图标选中态颜色规范"

**新增内容：**
- ⚠️ 重要：TabBar 必须使用内联 SVG
- ✅ 为什么 TabBar 必须使用内联 SVG
- ✅ 其他场景的图标选中态实现方式
- ✅ 品牌色图标 CSS 变量说明

---

## 🎨 颜色效果对比

### 修复前

```
选中状态:
┌─────────┐
│  ⚪ 首页  │  图标: 白色 ❌
│         │  文字: #E52EC5 粉色 ✅
└─────────┘

原因：使用了 filter: brightness(0) invert(1)
```

### 修复后

```
选中状态:
┌─────────┐
│  🌸 首页  │  图标: #F74AD9 粉色 ✅
│         │  文字: #E52EC5 粉色 ✅
└─────────┘

原因：TabBar CSS 自动应用 --yds-icon-brand-default
```

---

## ✅ 实现规范

### TabBar 图标实现三要素

1. **内联 SVG**：直接将 SVG 代码内联到 HTML 中
2. **currentColor**：使用 `fill="currentColor"` 而非硬编码颜色
3. **正确尺寸**：`width="22" height="22"`（TabBar 专用）

### 正确实现示例

```html
<nav class="yds-tabbar">
  <div class="yds-tabbar__content">
    <!-- 选中状态 -->
    <button class="yds-tabbar__item yds-tabbar__item--active">
      <div class="yds-tabbar__icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="..." fill="currentColor"/>
        </svg>
      </div>
      <span class="yds-tabbar__label">首页</span>
    </button>
  </div>
</nav>
```

### 颜色变化机制

```css
/* TabBar CSS 自动处理 */

/* 未选中状态 */
.yds-tabbar__item .yds-tabbar__icon {
  color: var(--yds-icon-default-default, #1B1B1B);
}

/* 选中状态 - 图标 */
.yds-tabbar__item--active .yds-tabbar__icon {
  color: var(--yds-icon-brand-default, #F74AD9);
}

/* 选中状态 - 文字 */
.yds-tabbar__item--active .yds-tabbar__label {
  color: var(--yds-text-brand-default, #E52EC5);
}
```

---

## 🚀 使用指南

### 如何获取 TabBar 图标

1. **查看图标库**
   ```bash
   open /Users/linyazhou/young-design-system/icons/
   ```

2. **复制 SVG 内容**：打开图标文件，复制 `<svg>` 标签内的内容

3. **确保使用 currentColor**：检查 `fill` 属性是否为 `currentColor`

4. **调整尺寸**：改为 `width="22" height="22"`

5. **内联到 HTML**：粘贴到 TabBar 的 `.yds-tabbar__icon` 容器中

### 常用 TabBar 图标

#### 首页图标
```html
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 16.999H7V14.999H17V16.999Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6045 2.46973C12.6075 2.47203 12.6112 2.47422 12.6143 2.47656L20.6143 8.69824C20.6197 8.70249 20.6245 8.70756 20.6299 8.71191L21 9V21H3V9L3.36914 8.71191C3.37469 8.7074 3.38008 8.70265 3.38574 8.69824L11.3857 2.47656C11.3886 2.47438 11.3917 2.47188 11.3945 2.46973L12 2L12.6045 2.46973ZM5 9.97754V18.999H19V9.97754L12 4.5332L5 9.97754Z" fill="currentColor"/>
</svg>
```

#### 收藏图标
```html
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" fill="currentColor"/>
</svg>
```

#### 用户/我的图标
```html
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 22.5C4 18.0817 7.58172 14.5 12 14.5C16.4183 14.5 20 18.0817 20 22.5H18C18 19.1863 15.3137 16.5 12 16.5C8.68629 16.5 6 19.1863 6 22.5H4ZM12 13.5C8.685 13.5 6 10.815 6 7.5C6 4.185 8.685 1.5 12 1.5C15.315 1.5 18 4.185 18 7.5C18 10.815 15.315 13.5 12 13.5ZM12 11.5C14.21 11.5 16 9.71 16 7.5C16 5.29 14.21 3.5 12 3.5C9.79 3.5 8 5.29 8 7.5C8 9.71 9.79 11.5 12 11.5Z" fill="currentColor"/>
</svg>
```

---

## ⚠️ 常见错误

### 错误 1：使用 img 标签

```html
<!-- ❌ 错误 -->
<button class="yds-tabbar__item yds-tabbar__item--active">
  <div class="yds-tabbar__icon">
    <img src="../icons/y_icon_line_generality_index.svg" class="yds-icon" alt="首页">
  </div>
  <span class="yds-tabbar__label">首页</span>
</button>
```

**问题：** `<img>` 标签无法响应 CSS `color` 属性，选中图标颜色不正确

---

### 错误 2：SVG 使用硬编码颜色

```xml
<!-- ❌ 错误 -->
<svg ...>
  <path d="..." fill="#1B1B1B"/>
</svg>
```

**问题：** 硬编码颜色无法响应 CSS 变化

---

### 错误 3：使用 filter 转换颜色

```css
/* ❌ 错误 */
.yds-tabbar__item--active .yds-icon {
  filter: brightness(0) invert(1); /* 只能变成白色 */
}
```

**问题：** filter 只能变成白色或黑色，不能变成品牌粉色（#F74AD9）

---

## 📖 相关文档

- [TabBar 组件指南](./tabbar-guide.md) - 完整的 TabBar 使用文档
- [TabBar 演示](./tabbar-demo.html) - 交互式演示
- [设计规范](./design-standards.md) - 年轻版设计系统核心规范
- [颜色系统](./colors-guide.md) - 颜色变量使用指南

---

## 🎯 验证清单

使用 TabBar 组件时，请确认：

- [ ] 图标使用内联 SVG（不是 `<img>` 标签）
- [ ] SVG 使用 `fill="currentColor"`
- [ ] SVG 尺寸为 `width="22" height="22"`
- [ ] 选中状态图标显示品牌粉色（#F74AD9）
- [ ] 选中状态文字显示品牌粉色（#E52EC5）
- [ ] 未选中状态图标显示黑色（#1B1B1B）

---

**更新完成！现在以后的项目可以直接使用 TabBar 组件，选中状态会正确显示品牌粉色。** 🎉
