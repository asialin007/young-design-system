# Dialog 对话框组件样式规范更新

**更新日期：** 2025-01-31
**版本：** v2.1.0

---

## 📋 更新概述

本次更新明确了 Dialog 对话框组件的正文内容区域边距规范，将 `.yds-dialog__body-text` 的 `margin` 和 `padding` 全部设置为 `0`，确保后续项目可以直接调用组件，保持样式一致性。

---

## 🔧 修复的问题

### 对话框正文边距规范

**问题描述：**
- 之前 `.yds-dialog__body-text` 有 `margin-bottom: 24px`
- 没有明确的 `padding` 规范
- 可能导致内容与对话框边缘间距不一致

**修复方案：**
- 明确规定 `.yds-dialog__body-text` 的 `margin` 和 `padding` 必须全部为 `0`
- 原因：对话框容器 `.yds-dialog` 已有整体内边距（`padding: 24px`）
- 标题区域和按钮区域通过 `margin` 控制间距
- 正文内容区域不需要额外的内外边距
- 通过 flex 布局的 `gap` 控制元素间距

---

## 📝 文件更新

### 1. Dialog 样式文件 (`css/dialog.css`)

**更新内容：** 添加 `padding: 0;` 规范

```css
/* 更新前 */
.yds-dialog__body-text {
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: #1B1B1B;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-bottom: 24px;
}

/* 更新后 */
.yds-dialog__body-text {
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: #1B1B1B;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0; /* 对话框正文内容无外边距 */
  padding: 0; /* 对话框正文内容无内边距 */
}
```

---

### 2. Dialog 演示页面 (`docs/dialog-demo.html`)

**更新内容：** 添加 `margin: 0;` 和 `padding: 0;` 规范

```css
/* 更新前 */
.yds-dialog__body-text {
  font-size: 14px;
  color: #1b1b1b;
  line-height: 22px;
  margin-bottom: 24px;
}

/* 更新后 */
.yds-dialog__body-text {
  font-size: 14px;
  color: #1b1b1b;
  line-height: 22px;
  margin: 0;
  padding: 0;
}
```

---

### 3. 待办事项应用 (`docs/todo-app-mobile.html`)

**更新内容：** 添加 `margin: 0;` 和 `padding: 0;` 规范

```css
/* 更新前 */
.yds-dialog__body-text {
  font-size: 14px;
  color: #1b1b1b;
  line-height: 22px;
  margin-bottom: 24px;
}

/* 更新后 */
.yds-dialog__body-text {
  font-size: 14px;
  color: #1b1b1b;
  line-height: 22px;
  margin: 0;
  padding: 0;
}
```

---

### 4. Dialog 组件指南 (`docs/dialog-guide.md`)

**新增章节：** "样式规范 - 对话框正文边距"

**内容包括：**
- ⚠️ 重要规范说明
- ✅ margin 和 padding 必须全部为 0 的原因
- ✅ 正确实现示例

**新增内容：**
```markdown
## 样式规范

### 对话框正文边距

**重要规范：** 对话框正文内容区域 `.yds-dialog__body-text` 的 `margin` 和 `padding` 必须全部为 `0`。

```css
.yds-dialog__body-text {
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: #1B1B1B;
  margin: 0; /* ⚠️ 必须为 0，不可添加外边距 */
  padding: 0; /* ⚠️ 必须为 0，不可添加内边距 */
}
```

**原因：**
- 对话框容器 `.yds-dialog` 已有整体内边距（`padding: 24px`）
- 标题区域和按钮区域通过 `margin` 控制间距
- 正文内容区域不需要额外的内外边距
- 保持内容与对话框边缘的视觉一致性
- 通过 flex 布局的 `gap` 控制元素间距
```

---

## 🎯 使用指南

### 正确实现示例

```html
<div class="yds-dialog">
  <!-- 标题区域 -->
  <div class="yds-dialog__title-section">
    <h2 class="yds-dialog__title">确认删除</h2>
  </div>

  <!-- 正文内容区域 - padding 为 0 -->
  <div class="yds-dialog__body-text">
    确定要删除这个待办事项吗？删除后无法恢复。
  </div>

  <!-- 按钮区域 -->
  <div class="yds-dialog__buttons yds-dialog__buttons--horizontal">
    <button class="yds-dialog__button yds-dialog__button--secondary">取消</button>
    <button class="yds-dialog__button yds-dialog__button--primary">删除</button>
  </div>
</div>
```

### CSS 结构说明

```css
/* 对话框容器 - 有整体内边距 */
.yds-dialog {
  padding: 24px; /* 对话框整体内边距 */
}

/* 标题区域 */
.yds-dialog__title-section {
  margin-bottom: 16px;
}

/* 正文内容区域 - margin 和 padding 全部为 0 */
.yds-dialog__body-text {
  font-size: 14px;
  line-height: 22px;
  color: #1B1B1B;
  margin: 0; /* ⚠️ 必须为 0 */
  padding: 0; /* ⚠️ 必须为 0 */
}

/* 按钮区域 */
.yds-dialog__buttons {
  margin-top: 24px;
}
```

---

## ⚠️ 常见错误

### 错误 1：给正文内容添加外边距

```css
/* ❌ 错误 */
.yds-dialog__body-text {
  margin-bottom: 24px;
}
```

**问题：** 会破坏对话框的布局结构

**正确做法：**
```css
/* ✅ 正确 */
.yds-dialog__body-text {
  margin: 0;
}
```

---

### 错误 2：给正文内容添加内边距

```css
/* ❌ 错误 */
.yds-dialog__body-text {
  padding: 12px 16px;
}
```

**问题：** 会导致内容与对话框边缘的间距过大，视觉不一致

**正确做法：**
```css
/* ✅ 正确 */
.yds-dialog__body-text {
  padding: 0;
}
```

---

### 错误 3：忽略容器内边距

```css
/* ❌ 错误 */
.yds-dialog {
  padding: 0; /* 移除了容器内边距 */
}

.yds-dialog__body-text {
  padding: 24px; /* 在正文区域添加内边距 */
}
```

**问题：** 破坏了对话框的整体布局结构

**正确做法：**
```css
/* ✅ 正确 */
.yds-dialog {
  padding: 24px; /* 保持容器内边距 */
}

.yds-dialog__body-text {
  padding: 0; /* 正文区域无内边距 */
}
```

---

## 📖 相关文档

- [Dialog 组件指南](./dialog-guide.md) - 完整的 Dialog 使用文档
- [Dialog 演示](./dialog-demo.html) - 交互式演示
- [设计规范](./design-standards.md) - 年轻版设计系统核心规范
- [样式规范](./design-standards.md#组件间距规范) - 组件间距规范

---

## 🎯 验证清单

使用 Dialog 组件时，请确认：

- [ ] `.yds-dialog__body-text` 的 `margin` 为 `0`
- [ ] `.yds-dialog__body-text` 的 `padding` 为 `0`
- [ ] 对话框容器 `.yds-dialog` 保持 `padding: 24px`
- [ ] 内容与对话框边缘的间距一致
- [ ] 标题、正文、按钮区域的间距符合规范

---

## 📊 样式规范速查表

| 元素 | 属性 | 值 | 说明 |
|------|------|-----|------|
| `.yds-dialog` | padding | 24px | 对话框整体内边距 |
| `.yds-dialog__title-section` | margin-bottom | 16px | 标题区域底部间距 |
| `.yds-dialog__body-text` | **margin** | **0** | **正文内容外边距（必须为 0）** |
| `.yds-dialog__body-text` | **padding** | **0** | **正文内容内边距（必须为 0）** |
| `.yds-dialog__buttons` | margin-top | 24px | 按钮区域顶部间距 |

---

**更新完成！现在以后的项目可以直接使用 Dialog 组件，正文内容区域的 margin 和 padding 已规范化为 0。** 🎉
