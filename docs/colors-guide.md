# 颜色系统使用指南

## 📊 颜色统计

- **总计**: 256 个颜色变量
- **背景色 (Bg)**: 54 个
- **文字色 (Text)**: 62 个
- **边框色 (Border)**: 59 个
- **按钮色 (Btn)**: 19 个
- **图标色 (Icon)**: 62 个

## 🎨 主要颜色

### 品牌色 (Brand)
```css
--yds-bg-brand-default: #FF77E7      /* 品牌主色 */
--yds-bg-brand-default02: #F74AD9    /* 品牌辅色 */
--yds-bg-brand-secondary: #FFF2FF    /* 品牌浅色 */
--yds-text-brand-default: #E52EC5    /* 品牌文字 */
```

### 功能色 (Functional)

**成功色 (Positive)**
```css
--yds-bg-positive-default: #2AA764
--yds-bg-positive-secondary: #F2FAF6
--yds-text-positive-default: #2AA764
```

**警告色 (Warning)**
```css
--yds-bg-warning-default: #F29800
--yds-bg-warning-secondary: #FFFCE5
--yds-text-warning-default: #F29800
```

**危险色 (Danger)**
```css
--yds-bg-danger-default: #E93E3E
--yds-bg-danger-secondary: #FAF0F0
--yds-text-danger-default: #E93E3E
```

### 中性色 (Neutral)
```css
--yds-bg-default-white: #FFFFFF
--yds-bg-default-gray: #F4F5F7
--yds-bg-default-black: #1B1B1B

--yds-text-default-default: #1B1B1B      /* 主要文字 */
--yds-text-default-secondary: #4E4F54    /* 次要文字 */
--yds-text-default-tertiary: #7E828C     /* 辅助文字 */
--yds-text-default-disabled: #B9BBBF     /* 禁用文字 */
```

### 透明度颜色 (Transparency)
```css
/* 黑色透明度 */
--yds-bg-transp-black-4%
--yds-bg-transp-black-8%
--yds-bg-transp-black-16%
--yds-bg-transp-black-24%
--yds-bg-transp-black-50%

/* 白色透明度 */
--yds-bg-transp-white-4%
--yds-bg-transp-white-8%
--yds-bg-transp-white-16%
--yds-bg-transp-white-24%
--yds-bg-transp-white-50%

/* 品牌色透明度 */
--yds-bg-transp-brand-4%
--yds-bg-transp-brand-8%
--yds-bg-transp-brand-16%
--yds-bg-transp-brand-24%
--yds-bg-transp-brand-50%
```

## 🌓 主题切换

### 方式一：手动切换

```html
<!-- 浅色模式 -->
<html data-theme="light">

<!-- 深色模式 -->
<html data-theme="dark">

<!-- 自动模式（跟随系统） -->
<html data-theme="auto">
```

### 方式二：JavaScript 切换

```javascript
// 切换主题
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// 初始化主题
const savedTheme = localStorage.getItem('theme') || 'auto';
setTheme(savedTheme);

// 主题切换按钮
document.getElementById('theme-toggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
});
```

## 💡 使用示例

### 基础使用

```html
<div style="
  background-color: var(--yds-bg-brand-default);
  color: var(--yds-text-default-white);
  padding: 16px;
">
  品牌色背景
</div>
```

### 在 CSS 中使用

```css
.card {
  background-color: var(--yds-bg-default-white);
  border: 1px solid var(--yds-border-default-default);
  color: var(--yds-text-default-default);
}

.card:hover {
  background-color: var(--yds-bg-default-gray);
}

.button-primary {
  background-color: var(--yds-bg-brand-default);
  color: var(--yds-text-default-white);
  border: none;
}

.button-primary:hover {
  background-color: var(--yds-bg-brand-default02);
}
```

### 功能色应用

```html
<!-- 成功提示 -->
<div class="alert alert-success">
  <style>
    .alert-success {
      background-color: var(--yds-bg-positive-secondary);
      color: var(--yds-text-positive-default);
      border-left: 4px solid var(--yds-bg-positive-default);
    }
  </style>
  操作成功！
</div>

<!-- 警告提示 -->
<div class="alert alert-warning">
  <style>
    .alert-warning {
      background-color: var(--yds-bg-warning-secondary);
      color: var(--yds-text-warning-default);
      border-left: 4px solid var(--yds-bg-warning-default);
    }
  </style>
  请注意！
</div>

<!-- 错误提示 -->
<div class="alert alert-danger">
  <style>
    .alert-danger {
      background-color: var(--yds-bg-danger-secondary);
      color: var(--yds-text-danger-default);
      border-left: 4px solid var(--yds-bg-danger-default);
    }
  </style>
  操作失败！
</div>
```

## 🎯 最佳实践

1. **始终使用 CSS 变量**
   ```css
   /* ✅ 推荐 */
   color: var(--yds-text-default-default);

   /* ❌ 不推荐 */
   color: #1B1B1B;
   ```

2. **语义化使用**
   ```css
   /* ✅ 根据用途选择变量 */
   .error-message {
     color: var(--yds-text-danger-default);
   }

   /* ❌ 不要硬编码场景 */
   .error-message {
     color: #E93E3E;
   }
   ```

3. **利用透明度变量**
   ```css
   /* ✅ 使用透明度变量 */
   background-color: var(--yds-bg-transp-black-24%);

   /* ❌ 不要手写 rgba */
   background-color: rgba(27, 27, 27, 0.24);
   ```

## 📋 完整变量列表

查看 `css/colors.css` 文件获取所有 256 个颜色变量。

---

**提示**: 颜色会根据浅色/深色模式自动切换，无需手动处理！
