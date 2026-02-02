# 年轻版设计系统 2.0 (Young Design System)

[![npm version](https://img.shields.io/npm/v/@vipshop/young-design-system.svg)](https://www.npmjs.com/package/@vipshop/young-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 唯品会移动端年轻版设计系统 - 多框架通用组件库

## ✨ 特性

- 🎨 **完整颜色系统** - 256 个颜色变量，支持浅色/深色模式
- 🎯 **Design Tokens** - JSON 格式设计变量，支持多平台
- 🌈 **CSS 变量** - 原生 CSS Variables，任何框架可用
- 📦 **组件丰富** - TabBar、Button、Switch、Toast 等常用组件
- 📦 **轻量级** - 按需引入，Tree-shakable
- 🔧 **框架无关** - React、Vue、Angular、原生 HTML 均可使用
- 📱 **移动优先** - 专为移动端设计
- 🌓 **主题切换** - 内置浅色/深色模式支持
- 🎯 **完整规范** - 基于 Figma 设计系统 1:1 还原

## 🎯 核心设计原则

年轻版设计系统遵循以下核心设计原则,所有项目必须严格遵守:

### 1. 扁平化设计
- ✅ **容器不默认添加边框** - 使用 `border: none`
- ✅ **容器不添加阴影效果** - 使用 `box-shadow: none`
- ✅ **使用间距和背景色区分内容** - 而非边框和阴影

### 2. 直角设计
- ✅ **内容容器使用直角** - `border-radius: 0`
- ✅ **按钮使用直角** - `border-radius: 0`
- ✅ **复选框使用直角** - `border-radius: 0`
- ⚠️ **例外**：单选框保持圆形（`border-radius: 50%`），开关保持圆角（设计特性）

### 3. 按钮默认样式
- ✅ **项目主行动按钮** - 使用 XL 黑色按钮
- ✅ **其他按钮默认使用黑色** - `yds-button--black`
- ✅ **品牌色按钮仅在特殊场景使用** - 如营销、品牌强相关场景

### 4. 代码示例

```css
/* ✅ 正确的内容容器样式 */
.card {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none); /* 直角 */
  border: none; /* 无边框 */
  box-shadow: none; /* 无阴影 */
  padding: var(--yds-spacing-16);
}

/* ✅ 按钮使用直角（设计系统组件已内置） */
.yds-button {
  border-radius: var(--yds-radius-none, 0); /* 直角 */
}

/* ✅ 复选框使用直角（设计系统组件已内置） */
.yds-checkbox__box {
  border-radius: var(--yds-radius-none, 0); /* 直角 */
}
```

**详细设计规范**: 参见 [设计规范文档](docs/design-standards.md)

## 📦 安装

```bash
npm install @vipshop/young-design-system
```

## 🚀 快速开始

### 方式一：纯 CSS（推荐 - 任何框架可用）

```html
<!-- 引入完整样式（包含颜色系统） -->
<link rel="stylesheet" href="node_modules/@vipshop/young-design-system/css/index.css">

<!-- 设置主题 -->
<html data-theme="light">  <!-- 或 "dark" / "auto" -->

<!-- 使用组件（默认使用黑色按钮，参见设计规范） -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--large">
  确认
</button>
```

### 方式二：使用 Design Tokens

```javascript
// 在构建工具中引入 tokens
import tokens from '@vipshop/young-design-system/tokens';

console.log(tokens.colors.brand.primary.value); // #ff77e7
```

### 方式三：在 React 中使用

```jsx
import '@vipshop/young-design-system/css/index.css';

function App() {
  return (
    <button className="yds-button yds-button--solid-dark yds-button--black yds-button--large">
      确认
    </button>
  );
}
```

### 方式四：在 Vue 中使用

```vue
<template>
  <button class="yds-button yds-button--solid-dark yds-button--black yds-button--large">
    确认
  </button>
</template>

<script>
import '@vipshop/young-design-system/css/index.css';
</script>
```

## 🎨 颜色系统

### 256 个颜色变量

- **背景色 (Bg)**: 54 个
- **文字色 (Text)**: 62 个
- **边框色 (Border)**: 59 个
- **按钮色 (Btn)**: 19 个
- **图标色 (Icon)**: 62 个

### 主要颜色

```css
/* 品牌色 */
--yds-bg-brand-default: #FF77E7;
--yds-bg-brand-secondary: #FFF2FF;
--yds-text-brand-default: #E52EC5;

/* 功能色 */
--yds-bg-positive-default: #2AA764;   /* 成功 */
--yds-bg-warning-default: #F29800;    /* 警告 */
--yds-bg-danger-default: #E93E3E;     /* 危险 */

/* 中性色 */
--yds-bg-default-white: #FFFFFF;
--yds-bg-default-gray: #F4F5F7;
--yds-bg-default-black: #1B1B1B;

/* 文字色层级 */
--yds-text-default-default: #1B1B1B;      /* 主要文字 */
--yds-text-default-secondary: #4E4F54;    /* 次要文字 */
--yds-text-default-tertiary: #7E828C;     /* 辅助文字 */
--yds-text-default-disabled: #B9BBBF;     /* 禁用文字 */
```

### 🌓 主题切换

```html
<!-- 浅色模式 -->
<html data-theme="light">

<!-- 深色模式 -->
<html data-theme="dark">

<!-- 自动模式（跟随系统） -->
<html data-theme="auto">
```

```javascript
// JavaScript 切换主题
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

setTheme('dark'); // 切换到深色模式
```

### 查看完整颜色

打开 `docs/colors-demo.html` 查看所有 256 个颜色变量的交互式展示。

## 📚 组件

### TabBar 底部标签栏

**特性:**
- 支持 2-5 个标签
- 标签项包含图标和文字
- 选中文字使用 `Text/Brand/Default (#E52EC5)`
- 选中图标使用 `Icon/Brand/Default (#F74AD9)`
- 底部安全区域（主页指示器）
- 固定底部或正常流式布局

**示例:**

```html
<!-- 3个标签 - 第一个选中 -->
<nav class="yds-tabbar">
  <div class="yds-tabbar__content">
    <button class="yds-tabbar__item yds-tabbar__item--active" aria-label="首页">
      <div class="yds-tabbar__icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 16.999H7V14.999H17V16.999Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6045 2.46973C12.6075 2.47203 12.6112 2.47422 12.6143 2.47656L20.6143 8.69824C20.6197 8.70249 20.6245 8.70756 20.6299 8.71191L21 9V21H3V9L3.36914 8.71191C3.37469 8.7074 3.38008 8.70265 3.38574 8.69824L11.3857 2.47656C11.3886 2.47438 11.3917 2.47188 11.3945 2.46973L12 2L12.6045 2.46973ZM5 9.97754V18.999H19V9.97754L12 4.5332L5 9.97754Z" fill="currentColor"/>
        </svg>
      </div>
      <span class="yds-tabbar__label">首页</span>
    </button>
    <button class="yds-tabbar__item" aria-label="发现">
      <div class="yds-tabbar__icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.91762 8.03672C3.32984 9.2334 3 10.5794 3 12C3 16.9705 7.02944 21 12 21C13.4216 21 14.7684 20.6697 15.9657 20.0812C16.8385 20.4545 17.6848 20.6993 18.4564 20.7622C19.3582 20.8357 20 20.6666 20.9818 19.9848C21.7339 19.2327 21.8625 18.169 21.7279 17.1728C21.6052 16.2639 21.2481 15.2539 20.726 14.2116C20.9051 13.5031 21 12.762 21 12C21 7.02942 16.9706 2.99998 12 2.99998C11.2389 2.99998 10.4987 3.09467 9.79103 3.27331C8.7474 2.74993 7.73605 2.39184 6.8261 2.26846C5.82897 2.13327 4.76406 2.26141 4.01121 3.01425C3.3287 3.69676 3.16001 4.63968 3.2341 5.54245C3.29752 6.31512 3.54313 7.16259 3.91762 8.03672Z" fill="currentColor"/>
        </svg>
      </div>
      <span class="yds-tabbar__label">发现</span>
    </button>
    <button class="yds-tabbar__item" aria-label="我的">
      <div class="yds-tabbar__icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 22.5C4 18.0817 7.58172 14.5 12 14.5C16.4183 14.5 20 18.0817 20 22.5H18C18 19.1863 15.3137 16.5 12 16.5C8.68629 16.5 6 19.1863 6 22.5H4ZM12 13.5C8.685 13.5 6 10.815 6 7.5C6 4.185 8.685 1.5 12 1.5C15.315 1.5 18 4.185 18 7.5C18 10.815 15.315 13.5 12 13.5ZM12 11.5C14.21 11.5 16 9.71 16 7.5C16 5.29 14.21 3.5 12 3.5C9.79 3.5 8 5.29 8 7.5C8 9.71 9.79 11.5 12 11.5Z" fill="currentColor"/>
        </svg>
      </div>
      <span class="yds-tabbar__label">我的</span>
    </button>
  </div>
  <div class="yds-tabbar__safe-area">
    <div class="yds-tabbar__indicator"></div>
  </div>
</nav>
```

**变体:**
- `yds-tabbar--fixed` - 固定底部
- `yds-tabbar--borderless` - 无边框

### Button 按钮

**变体 (Variant):**
- `solid-dark` - 深色填充
- `solid-light` - 浅色填充
- `outlined` - 描边

**颜色 (Color):**
- `brand` - 品牌色
- `black` - 黑色
- `white` - 白色

**尺寸 (Size):**
- `xl` - 超大 (48px)
- `large` - 大 (38px)
- `medium` - 中 (32px)
- `medium-small` - 中小 (28px)
- `small` - 小 (24px)
- `mini` - 迷你 (20px)

**示例:**

```html
<!-- 深色填充 - 品牌色 - 大尺寸 -->
<button class="yds-button yds-button--solid-dark yds-button--brand yds-button--large">
  确认
</button>

<!-- 浅色填充 - 品牌色 - 中尺寸 -->
<button class="yds-button yds-button--solid-light yds-button--brand yds-button--medium">
  取消
</button>

<!-- 描边 - 品牌色 - 小尺寸 -->
<button class="yds-button yds-button--outlined yds-button--brand yds-button--small">
  详情
</button>

<!-- 禁用状态 -->
<button class="yds-button yds-button--solid-dark yds-button--brand yds-button--large" disabled>
  禁用
</button>

<!-- 纯图标按钮 -->
<button class="yds-button yds-button--solid-dark yds-button--brand yds-button--large yds-button--icon-only">
  <svg>...</svg>
</button>
```

### Switch 开关

**尺寸 (Size):**
- `small` - 小 (38px × 24px, 圆点 18px)
- `medium` - 中 (46px × 28px, 圆点 20px)
- `large` - 大 (52px × 32px, 圆点 24px)

**Props:**
- `checked` - 是否开启（布尔值）
- `disabled` - 是否禁用（布尔值）
- `onChange` - 变化回调函数

**示例:**

```html
<!-- 小尺寸 - 关闭状态 -->
<button class="yds-switch yds-switch--small">
  <span class="yds-switch__dot"></span>
</button>

<!-- 中尺寸 - 开启状态 -->
<button class="yds-switch yds-switch--medium yds-switch--checked">
  <span class="yds-switch__dot"></span>
</button>

<!-- 大尺寸 - 禁用状态 -->
<div class="yds-switch yds-switch--large yds-switch--disabled">
  <span class="yds-switch__dot"></span>
</div>
```

**React 示例:**

```jsx
import { Switch } from '@vipshop/young-design-system';

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={(checked) => setEnabled(checked)}
      size="medium"
    />
  );
}
```

**Vue 示例:**

```vue
<template>
  <Switch
    v-model:checked="enabled"
    size="medium"
  />
</template>

<script setup>
import { ref } from 'vue';
import Switch from '@vipshop/young-design-system/vue/Switch';

const enabled = ref(false);
</script>
```

### Toast 轻提示

**变体 (Variant):**
- `default` - 默认（水平布局）
- `brand` - 品牌/头像（垂直布局）
- `atmosphere` - 氛围（带装饰图标）

**Props:**
- `text` - 提示文字
- `title` - 标题（仅 brand 变体）
- `subtitle` - 副标题（仅 brand 变体，可选）
- `avatar` - 头像 URL（仅 brand 变体）
- `icon` - 图标（可选）
- `duration` - 显示时长（毫秒，默认 2000）

**示例:**

```html
<!-- 默认 Toast - 单行文字 -->
<div class="yds-toast yds-toast--default">
  <span class="yds-toast__text">操作成功</span>
</div>

<!-- 默认 Toast - 多行文字 -->
<div class="yds-toast yds-toast--default">
  <span class="yds-toast__text">建议内容<br>不超过两行</span>
</div>

<!-- 品牌 Toast - 带头像和副标题 -->
<div class="yds-toast yds-toast--brand">
  <div class="yds-toast__avatar">
    <img src="avatar.jpg" alt="Avatar">
  </div>
  <div class="yds-toast__content">
    <span class="yds-toast__title">VIPSHOP</span>
    <span class="yds-toast__subtitle">订阅成功</span>
  </div>
</div>

<!-- 品牌 Toast - 仅标题 -->
<div class="yds-toast yds-toast--brand">
  <div class="yds-toast__avatar">
    <img src="avatar.jpg" alt="Avatar">
  </div>
  <div class="yds-toast__content">
    <span class="yds-toast__title">VIPSHOP</span>
  </div>
</div>

<!-- 氛围 Toast - 带装饰图标 -->
<div class="yds-toast yds-toast--atmosphere">
  <div class="yds-toast__icon yds-toast__icon--left">◀</div>
  <span class="yds-toast__text">标题不超过一行</span>
  <div class="yds-toast__icon yds-toast__icon--right">▶</div>
</div>

<!-- 带图标的 Toast -->
<div class="yds-toast yds-toast--default yds-toast--with-icon">
  <div class="yds-toast__icon">✓</div>
  <span class="yds-toast__text">操作成功</span>
</div>
```

**JavaScript 工具函数:**

```javascript
// Toast 工具函数
function showToast(text, variant = 'default', duration = 2000) {
  const toast = document.createElement('div');
  toast.classList.add('yds-toast', `yds-toast--${variant}`, 'yds-toast--fade-in');

  let html = '';
  switch (variant) {
    case 'brand':
      html = `
        <div class="yds-toast__avatar">
          <img src="avatar.jpg" alt="Avatar">
        </div>
        <div class="yds-toast__content">
          <span class="yds-toast__title">VIPSHOP</span>
          <span class="yds-toast__subtitle">${text}</span>
        </div>
      `;
      break;
    case 'atmosphere':
      html = `
        <div class="yds-toast__icon yds-toast__icon--left">◀</div>
        <span class="yds-toast__text">${text}</span>
        <div class="yds-toast__icon yds-toast__icon--right">▶</div>
      `;
      break;
    default:
      html = `<span class="yds-toast__text">${text}</span>`;
  }

  toast.innerHTML = html;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('yds-toast--fade-in');
    toast.classList.add('yds-toast--fade-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, duration);
}

// 使用
showToast('操作成功');                      // 默认 Toast
showToast('订阅成功', 'brand');             // 品牌 Toast
showToast('标题不超过一行', 'atmosphere');   // 氛围 Toast
showToast('操作成功', 'default', 3000);     // 自定义显示时长
```

## 💡 使用颜色变量

```css
.my-card {
  background-color: var(--yds-bg-default-white);
  border: 1px solid var(--yds-border-default-default);
  color: var(--yds-text-default-default);
}

.my-card:hover {
  background-color: var(--yds-bg-default-gray);
}

.success-message {
  background-color: var(--yds-bg-positive-secondary);
  color: var(--yds-text-positive-default);
  border-left: 4px solid var(--yds-bg-positive-default);
}
```

## 📖 文档

### 在线演示

```bash
# 克隆仓库后
cd young-design-system

# Button 组件示例
open docs/button-demo.html

# Switch 组件示例
open docs/switch-demo.html

# Toast 组件示例
open docs/toast-demo.html

# TabBar 组件示例
open docs/tabbar-demo.html

# 颜色系统示例（256个颜色变量，支持主题切换）
open docs/colors-demo.html
```

### 完整文档

- [设计规范](docs/design-standards.md) - **核心规范：按钮默认使用黑色、容器使用直角、容器不默认添加边框和阴影** ⭐
- [颜色使用指南](docs/colors-guide.md) - 256 个颜色变量详细说明
- [TabBar 组件文档](docs/tabbar-guide.md)
- [Button 组件文档](docs/button-demo.html)
- [Switch 组件文档](docs/switch-demo.html)
- [Toast 组件文档](docs/toast-demo.html)

## 🔧 开发

```bash
# 安装依赖
npm install

# 提取颜色（从 Figma tokens）
node scripts/extract-colors.js

# 生成颜色 CSS
node scripts/generate-color-css.js

# 发布（自动构建）
npm publish
```

## 📁 项目结构

```
young-design-system/
├── tokens/                     # Design Tokens (JSON)
│   ├── colors-extracted.json  # 提取的颜色数据
│   ├── colors-detailed.json   # 详细颜色信息
│   ├── typography.json         # 字体变量
│   ├── spacing.json            # 间距变量
│   └── button.json             # Button 组件变量
├── css/                        # CSS 样式
│   ├── colors.css              # 完整颜色系统 (32KB, 256个变量)
│   ├── variables.css           # 其他 CSS 变量
│   ├── button.css              # Button 组件样式
│   ├── switch.css              # Switch 组件样式
│   ├── toast.css               # Toast 组件样式
│   ├── tabbar.css              # TabBar 组件样式
│   └── index.css               # 入口文件
├── docs/                       # 文档和示例
│   ├── colors-demo.html        # 颜色系统演示（交互式）
│   ├── colors-guide.md         # 颜色使用指南
│   ├── button-demo.html        # Button 组件演示
│   ├── switch-demo.html        # Switch 组件演示
│   ├── toast-demo.html         # Toast 组件演示
│   ├── tabbar-demo.html        # TabBar 组件演示
│   └── tabbar-guide.md         # TabBar 组件文档
├── scripts/                    # 构建脚本
│   ├── extract-colors.js       # 提取 Figma 颜色
│   └── generate-color-css.js   # 生成颜色 CSS
└── package.json
```

## 🎯 使用场景

### 1. 在 React 项目中

```jsx
import '@vipshop/young-design-system/css/index.css';

function LoginPage() {
  return (
    <div style={{
      backgroundColor: 'var(--yds-bg-default-gray)',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'var(--yds-bg-default-white)',
        padding: '30px',
        borderRadius: '12px'
      }}>
        <h1 style={{ color: 'var(--yds-text-default-default)' }}>登录</h1>
        <button className="yds-button yds-button--solid-dark yds-button--brand yds-button--large">
          登录
        </button>
      </div>
    </div>
  );
}
```

### 2. 在 Vue 项目中

```vue
<template>
  <div class="page">
    <div class="card">
      <h1>登录</h1>
      <button class="yds-button yds-button--solid-dark yds-button--brand yds-button--large">
        登录
      </button>
    </div>
  </div>
</template>

<style>
@import '@vipshop/young-design-system/css/index.css';

.page {
  background-color: var(--yds-bg-default-gray);
  padding: 20px;
}

.card {
  background-color: var(--yds-bg-default-white);
  padding: 30px;
  border-radius: 12px;
}

.card h1 {
  color: var(--yds-text-default-default);
}
</style>
```

### 3. 功能色应用

```html
<!-- 成功提示 -->
<div style="
  background-color: var(--yds-bg-positive-secondary);
  color: var(--yds-text-positive-default);
  border-left: 4px solid var(--yds-bg-positive-default);
  padding: 12px;
  border-radius: 4px;
">
  ✓ 操作成功！
</div>

<!-- 警告提示 -->
<div style="
  background-color: var(--yds-bg-warning-secondary);
  color: var(--yds-text-warning-default);
  border-left: 4px solid var(--yds-bg-warning-default);
  padding: 12px;
  border-radius: 4px;
">
  ⚠️ 请注意！
</div>

<!-- 错误提示 -->
<div style="
  background-color: var(--yds-bg-danger-secondary);
  color: var(--yds-text-danger-default);
  border-left: 4px solid var(--yds-bg-danger-default);
  padding: 12px;
  border-radius: 4px;
">
  ✗ 操作失败！
</div>
```

## 🎨 颜色系统亮点

✅ **完整性** - 256 个精心设计的颜色变量
✅ **语义化** - 清晰的命名规范（bg/text/border/icon）
✅ **主题支持** - 内置浅色/深色模式
✅ **自动切换** - 可跟随系统主题
✅ **功能色** - 成功、警告、危险等状态色
✅ **透明度** - 多级透明度变量（4%/8%/16%/24%/50%）

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🔗 相关链接

- [Figma 设计文件](https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp)
- [颜色系统演示](docs/colors-demo.html) - 交互式颜色展示
- [使用指南](docs/colors-guide.md)

---

Made with ❤️ by Vipshop UED Team
