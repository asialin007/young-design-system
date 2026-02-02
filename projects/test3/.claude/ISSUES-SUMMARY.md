# 问题总结与解决方案

本文档总结了在生成高保真 HTML 原型时遇到的问题，以及如何避免这些问题。

---

## 📋 问题列表

### 1. 按钮没有居中对齐

**问题描述**：登录页面的按钮没有居中对齐，出现位置偏移。

**根本原因**：
- 没有使用 YDS 栅格系统包裹按钮
- 使用了自定义的布局容器 `.login-button-container`
- 按钮没有设置 `width: 100%` 占满容器宽度

**错误代码**：
```html
<!-- ❌ 错误：使用自定义容器 -->
<div class="login-button-container">
  <button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl">
    登录
  </button>
</div>
```

**正确代码**：
```html
<!-- ✅ 正确：使用栅格系统 -->
<div class="yds-grid">
  <div class="yds-grid__cell yds-grid__cell--12">
    <div class="yds-grid__cell-content">
      <button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl" style="width: 100%;">
        登录
      </button>
    </div>
  </div>
</div>
```

---

### 2. 页面可以左右滚动

**问题描述**：页面在浏览器中可以左右和上下滚动，不符合移动端体验。

**根本原因**：
- 没有设置 `overflow-x: hidden` 禁止水平滚动
- 没有设置 `max-width: 375px` 限制最大宽度
- 没有使用 `.mobile-container` 包裹所有内容

**解决方案**：
```css
/* HTML 元素 */
html {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

/* Body 元素 */
body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

/* 移动端容器 */
.mobile-container {
  width: 100%;
  max-width: var(--yds-screen-mobile);  /* 375px */
  margin: 0 auto;
  overflow-x: hidden;
}
```

---

### 3. 弹窗使用了自定义样式

**问题描述**：底部浮层使用了自定义的 `.bottom-sheet` 样式，而不是 YDS Dialog 组件。

**根本原因**：
- 没有查看设计系统是否已有 Dialog 组件
- 自定义了弹窗样式，导致不一致
- 没有遵循"必须使用 YDS 组件"的原则

**错误代码**：
```html
<!-- ❌ 错误：自定义弹窗样式 -->
<div class="bottom-sheet-overlay">
  <div class="bottom-sheet">
    <div class="bottom-sheet__title">选择问题类型</div>
    <div class="bottom-sheet__actions">...</div>
  </div>
</div>
```

**正确代码**：
```html
<!-- ✅ 正确：使用 YDS Dialog 组件 -->
<div class="yds-dialog-overlay">
  <div class="yds-dialog">
    <div class="yds-dialog__title-section">
      <h3 class="yds-dialog__title">选择问题类型</h3>
    </div>
    <div class="yds-dialog__content">
      <div class="yds-dialog__action">忘记密码</div>
      <div class="yds-dialog__action">找回账号</div>
    </div>
    <div class="yds-dialog__buttons yds-dialog__buttons--vertical">
      <button class="yds-dialog__button yds-dialog__button--secondary">取消</button>
    </div>
  </div>
</div>
```

---

### 4. 复选框勾选后没有视觉反馈

**问题描述**：点击复选框后，实际状态已改变（按钮禁用逻辑正常），但视觉上没有显示选中状态（没有黑色背景和对勾）。

**根本原因**：
- YDS 复选框组件需要通过 JavaScript 添加 `.yds-checkbox--checked` 类名
- 只监听了 `change` 事件来切换按钮禁用状态，但没有更新复选框的视觉类名
- 不了解 YDS 复选框组件的实现原理（使用伪类和 CSS 类控制视觉状态）

**错误代码**：
```javascript
// ❌ 错误：只切换按钮状态，没有更新复选框视觉
quickAgreement.addEventListener('change', () => {
  quickLoginBtn.disabled = !quickAgreement.checked;
});
```

**正确代码**：
```javascript
// ✅ 正确：同时切换复选框视觉状态和按钮禁用状态
quickAgreement.addEventListener('change', function() {
  // 切换复选框选中状态的视觉显示
  if (this.checked) {
    this.closest('.yds-checkbox').classList.add('yds-checkbox--checked');
  } else {
    this.closest('.yds-checkbox').classList.remove('yds-checkbox--checked');
  }
  // 切换登录按钮禁用状态
  quickLoginBtn.disabled = !this.checked;
});
```

**YDS 复选框组件工作原理**：
```html
<!-- HTML 结构 -->
<label class="yds-checkbox yds-checkbox--small">
  <input type="checkbox" class="yds-checkbox__input">
  <span class="yds-checkbox__box"></span>
  文字标签
</label>

<!-- 选中状态需要添加类名 -->
<label class="yds-checkbox yds-checkbox--small yds-checkbox--checked">
  <input type="checkbox" class="yds-checkbox__input" checked>
  <span class="yds-checkbox__box"></span>
  文字标签
</label>
```

---

### 5. 颜色变量命名错误（系统性的变量名混淆）

**问题描述**：大量使用了错误的颜色变量名，导致样式不生效或显示错误。

**根本原因**：
- **没有先查看设计系统的 CSS 文件**了解变量命名规则
- **凭空猜测变量命名**（以为 `--yds-color-neutral-*` 是正确的）
- **不了解设计系统的变量命名约定**（`bg-*`, `text-*`, `border-*`）
- **没有参考项目配置文件中的颜色变量映射表**
- **生成代码后没有检查变量是否正确**

**错误变量对照表**：

| ❌ 错误变量（不存在） | ✅ 正确变量 | 说明 |
|-------------------|------------|------|
| `--yds-color-neutral-white` | `--yds-bg-default-white` | 白色背景 |
| `--yds-color-neutral-black` | `--yds-text-default-default` | 主要文字 |
| `--yds-color-neutral-grey-40` | `--yds-text-default-disabled` | 禁用文字 |
| `--yds-color-neutral-grey-60` | `--yds-text-default-tertiary` | 辅助文字 |
| `--yds-color-opacity-black-4` | `--yds-bg-transp-black-4%` | 透明黑背景 4% |
| `--yds-color-opacity-black-8` | `--yds-border-default-tertiary` | 三级边框 |
| `--yds-color-opacity-black-12` | `--yds-bg-transp-black-8%` | 透明黑背景 8% |
| `--yds-color-opacity-black-24` | `--yds-border-default-secondary` | 次边框 |
| `--yds-color-brand-primary` | `--yds-text-brand-secondary` | 品牌色文字 |
| `--yds-color-error-primary` | `--yds-text-danger-default` | 错误文字 |
| `--yds-color-warning-primary` | `--yds-text-warning-default` | 警告文字 |
| `--yds-color-positive-primary` | `--yds-text-positive-default` | 成功文字 |
| `--yds-color-positive-light` | `--yds-bg-positive-secondary` | 成功背景次色 |

**错误代码示例**：
```css
/* ❌ 错误：使用不存在的变量 */
body {
  background-color: var(--yds-color-neutral-white);
  color: var(--yds-color-neutral-black);
}

.button {
  background-color: var(--yds-color-opacity-black-4);
  border: 1px solid var(--yds-color-opacity-black-8);
}

.text-secondary {
  color: var(--yds-color-neutral-grey-60);
}
```

**正确代码示例**：
```css
/* ✅ 正确：使用正确的变量前缀 */
body {
  background-color: var(--yds-bg-default-white);
  color: var(--yds-text-default-default);
}

.button {
  background-color: var(--yds-bg-transp-black-4%);
  border: 1px solid var(--yds-border-default-tertiary);
}

.text-secondary {
  color: var(--yds-text-default-tertiary);
}
```

**年轻版设计系统颜色变量命名规则**：

| 前缀 | 用途 | 示例 |
|------|------|------|
| `--yds-bg-*` | **背景颜色** | `--yds-bg-default-white` |
| `--yds-text-*` | **文字颜色** | `--yds-text-default-default` |
| `--yds-border-*` | **边框颜色** | `--yds-border-default-tertiary` |
| `--yds-btn-*` | **按钮颜色** | `--yds-btn-bg-default-primary02` |

**⚠️ 核心原则**：
- ❌ **不存在** `--yds-color-neutral-*` 这样的变量
- ❌ **不存在** `--yds-color-opacity-*` 这样的变量
- ❌ **不存在** `--yds-color-brand-*` 这样的变量（文字用 `--yds-text-brand-*`）
- ✅ **必须使用** `bg-*`, `text-*`, `border-*` 前缀

**如何避免类似问题**：

1. **生成代码前**：查看 `/Users/linyazhou/young-design-system/css/colors.css` 了解所有可用变量
2. **生成代码时**：参考项目配置文件中的"颜色变量映射表"
3. **生成代码后**：使用命令检查是否有错误的变量名
4. **永远不要猜测**变量名，必须查看实际定义

**检查命令**：
```bash
# 检查项目中是否使用了错误的颜色变量
grep -r "yds-color-neutral\|yds-color-opacity\|yds-color-brand-primary" prototype/
```

---

### 6. 图标文件名错误导致图标不显示

**问题描述**：密码显示/隐藏的图标无法显示，页面显示为空白或损坏的图片图标。

**根本原因**：
- 使用了不存在的图标文件名（`y_icon_line_generality_end.svg`）
- 没有在使用前检查图标文件是否存在
- 没有参考图标演示页面确认正确的图标文件名
- 凭空猜测图标文件名而不是查找实际存在的文件

**错误代码**：
```html
<!-- ❌ 错误：使用不存在的图标文件 -->
<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_generality_end.svg" alt="显示密码">

<script>
// ❌ 错误：切换时使用不存在的图标
toggle.innerHTML = visible
  ? '<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_generality_end.svg" alt="隐藏密码">'
  : '<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_generality_end.svg" alt="显示密码">';
</script>
```

**正确代码**：
```html
<!-- ✅ 正确：使用实际存在的图标文件 -->
<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_edit_invisible.svg" alt="显示密码">

<script>
// ✅ 正确：切换时使用正确的图标
toggle.innerHTML = visible
  ? '<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_edit_passwordvisible.svg" alt="隐藏密码">'
  : '<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_edit_invisible.svg" alt="显示密码">';
</script>
```

**如何查找正确的图标文件名**：

**方法 1：使用命令行搜索**
```bash
# 搜索特定关键词的图标
ls /Users/linyazhou/young-design-system/icons/ | grep -i "visible"
ls /Users/linyazhou/young-design-system/icons/ | grep -i "password"
ls /Users/linyazhou/young-design-system/icons/ | grep -i "eye"
```

**方法 2：使用图标演示页面**
```bash
# 打开图标演示页面查看所有可用图标
open /Users/linyazhou/young-design-system/docs/icons-demo.html
```

**常用密码可见性图标对照表**：

| 用途 | 正确文件名 | 说明 |
|------|-----------|------|
| 密码隐藏 | `y_icon_line_edit_invisible.svg` | 闭眼图标 |
| 密码可见 | `y_icon_line_edit_passwordvisible.svg` | 睁眼图标 |
| ❌ 错误 | `y_icon_line_generality_end.svg` | 文件不存在 |

---

### 7. 使用原生 alert() 而不是 YDS Toast 组件

**问题描述**：所有页面都使用了原生的 `alert()` 函数来显示提示信息，而不是使用设计系统的 Toast 组件。

**根本原因**：
- **没有查看设计系统是否已有 Toast 组件**
- **习惯性使用原生 `alert()` 函数**
- **不知道 YDS Toast 组件的存在和使用方法**
- **没有遵循"必须使用 YDS 组件"的原则**

**影响范围**：
- `login.html`：10+ 处 `alert()`
- `register.html`：5+ 处 `alert()`
- `forgot-password.html`：8+ 处 `alert()`

**错误代码**：
```javascript
// ❌ 错误：使用原生 alert
alert('请输入正确的手机号码');
alert('验证码已发送至 ' + phone);
alert('登录成功');
```

**正确代码**：
```javascript
// ✅ 正确：使用 YDS Toast 组件
// 1. 在 HTML 中添加 Toast 容器
<div id="yds-toast" class="yds-toast yds-toast--default" style="display: none;">
  <div class="yds-toast__text"></div>
</div>

// 2. 使用 Toast 函数
showToast('请输入正确的手机号码');
showToast('验证码已发送至 ' + phone);
showToast('登录成功');

// 3. Toast 函数实现
function showToast(message, duration = 2000) {
  const toast = document.getElementById('yds-toast');
  const toastText = toast.querySelector('.yds-toast__text');

  toastText.textContent = message;
  toast.style.display = 'flex';
  toast.classList.add('yds-toast--fade-in');

  setTimeout(() => {
    toast.classList.remove('yds-toast--fade-in');
    toast.classList.add('yds-toast--fade-out');

    setTimeout(() => {
      toast.style.display = 'none';
      toast.classList.remove('yds-toast--fade-out');
    }, 300);
  }, duration);
}
```

**YDS Toast 组件说明**：

| 组件类名 | 用途 | 说明 |
|---------|------|------|
| `.yds-toast` | Toast 容器 | 必须 |
| `.yds-toast--default` | 默认样式 | 纯文字提示 |
| `.yds-toast--brand` | 品牌样式 | 带头像的提示 |
| `.yds-toast--atmosphere` | 氛围样式 | 带图标的提示 |
| `.yds-toast--fade-in` | 淡入动画 | 显示时使用 |
| `.yds-toast--fade-out` | 淡出动画 | 隐藏时使用 |

**对比**：
| 特性 | `alert()` | YDS Toast |
|------|-----------|-----------|
| 样式 | ❌ 浏览器原生，无法自定义 | ✅ 统一的设计风格 |
| 用户体验 | ❌ 阻塞式，需要点击确认 | ✅ 非阻塞，自动消失 |
| 动画效果 | ❌ 无 | ✅ 支持淡入淡出 |
| 品牌一致性 | ❌ 不一致 | ✅ 符合设计系统 |
| 移动端适配 | ❌ 体验差 | ✅ 移动端优化 |

**如何避免**：
1. 生成代码前：查看设计系统是否有对应组件（Toast、Dialog、Loading 等）
2. 生成代码时：优先使用 YDS 组件而不是原生方法
3. 生成代码后：检查是否使用了 `alert()`、`confirm()` 等原生方法

---

## 🔍 问题根源分析

### 为什么会出现这些问题？

1. **没有充分了解设计系统**
   - 没有查看设计系统的 CSS 文件
   - 没有查看设计系统的文档和演示
   - 不清楚设计系统提供了哪些组件

2. **没有遵循设计原则**
   - 没有遵循"必须使用 YDS 组件"的原则
   - 习惯性地自定义样式
   - 没有在配置文件中明确禁止自定义样式

3. **没有完善的规范文档**
   - 最初的配置文件缺少详细的组件使用规范
   - 没有明确的错误对照表
   - 没有完整的页面结构模板

4. **缺少代码生成检查清单**
   - 没有明确的检查项
   - 没有栅格系统强制规范
   - 没有对话框组件强制规范

---

## ✅ 解决方案

### 1. 完善项目配置文件

**已添加的内容**：
- ✅ 页面布局规范（强制使用栅格系统）
- ✅ 移动端适配规范（禁止水平滚动）
- ✅ 对话框组件强制规范（禁止自定义样式）
- ✅ 完整的 HTML 页面结构模板
- ✅ 代码生成检查清单（7 个检查部分，共 30+ 项检查）
- ✅ 禁止事项清单（17 条禁止项）
- ✅ 常见错误对照表

### 2. 建立严格的开发流程

**生成 HTML 原型前**：
1. 查看设计系统文档和演示
2. 检查设计系统是否已有对应组件
3. 阅读项目配置文件中的组件使用规范
4. 遵循代码生成检查清单

**生成 HTML 原型时**：
1. 使用完整的 HTML 页面结构模板
2. 所有内容必须包裹在栅格系统中
3. 所有组件必须使用 YDS 类名
4. 所有样式必须使用设计系统变量

**生成 HTML 原型后**：
1. 使用代码生成检查清单逐项检查
2. 测试页面是否可以左右滚动
3. 测试所有交互功能是否正常
4. 在浏览器中验证视觉效果

### 3. 强化设计系统使用

**设计系统组件清单**（必须使用）：
- ✅ 按钮：`.yds-button`
- ✅ 复选框：`.yds-checkbox`
- ✅ 单选框：`.yds-radio`
- ✅ 开关：`.yds-switch`
- ✅ 对话框：`.yds-dialog`
- ✅ 栅格：`.yds-grid`
- ✅ 导航栏：`.yds-navbar`
- ✅ 标签栏：`.yds-tabbar`
- ✅ 提示框：`.yds-toast`
- ✅ 按钮组：`.yds-button-group`

---

## 🛡️ 如何避免类似问题

### 对于 AI 助手（Claude Code）

1. **在生成代码前**：
   - 查看项目配置文件 `.claude/CLAUDE.md`
   - 阅读设计系统文档和组件使用规范
   - 查看设计系统的 CSS 文件和演示

2. **在生成代码时**：
   - 严格遵循项目配置文件中的所有规范
   - 使用完整的 HTML 页面结构模板
   - 所有组件必须使用 YDS 类名
   - 遵循代码生成检查清单

3. **在生成代码后**：
   - 使用代码生成检查清单逐项检查
   - 测试页面功能和交互
   - 验证视觉效果

### 对于用户

1. **提供明确的反馈**：
   - 指出具体的问题（如"按钮没有居中对齐"）
   - 说明期望的效果（如"应该使用栅格系统"）
   - 提供参考的设计系统文档或演示

2. **要求遵循规范**：
   - 明确要求遵循设计系统规范
   - 明确要求使用 YDS 组件
   - 明确禁止自定义样式

3. **持续完善规范**：
   - 根据遇到的问题持续更新配置文件
   - 添加更多的示例和错误对照表
   - 建立完善的检查清单

---

## 📖 相关文档

- **项目配置文件**：`.claude/CLAUDE.md`
- **设计标准**：`/Users/linyazhou/young-design-system/docs/design-standards.md`
- **对话框文档**：`/Users/linyazhou/young-design-system/docs/dialog-guide.md`
- **按钮演示**：`/Users/linyazhou/young-design-system/docs/button-demo.html`
- **图标演示**：`/Users/linyazhou/young-design-system/docs/icons-demo.html`

---

**文档版本**：v1.4
**创建日期**：2025-02-01
**最后更新**：2025-02-01（添加 alert() 替代问题）
**维护者**：Claude Code + 用户协作

**问题历史**：
- v1.0 - 初始版本（按钮对齐、滚动、弹窗问题）
- v1.1 - 添加复选框视觉反馈问题
- v1.2 - 添加图标文件名错误问题
- v1.3 - 添加颜色变量命名错误问题（系统性问题）
- v1.4 - 添加使用原生 alert() 而不是 YDS Toast 问题
