# 项目级配置 - PRD 生成与高保真原型系统

本项目用于将产品思维导图转换为结构化 PRD 文档，并基于年轻版设计系统生成高保真 HTML 原型。

## ⚠️ 强制规则（CRITICAL）

**在生成任何 HTML 原型之前，必须严格遵守以下规则：**

1. **颜色变量**：必须使用 `--yds-bg-*`, `--yds-text-*`, `--yds-border-*` 系列变量
2. **组件使用**：必须使用 YDS 组件类名，禁止自定义样式
3. **间距变量**：必须使用 `--yds-spacing-*` 变量
4. **字体变量**：必须使用 `--yds-font-*` 变量
5. **圆角变量**：必须使用 `--yds-radius-*` 变量
6. **移动端适配**：必须使用 `.mobile-container` 包裹所有内容，禁止水平滚动

---

## 项目结构

```
test1/
├── prompts/           # Prompt 模板
│   ├── 思维导图转PRD转换说明.md
│   └── 高保真HTML原型生成说明.md
├── prd/              # 生成的 PRD 文档
├── prototype/        # 生成的 HTML 原型
├── images/           # 图片资源
└── xmind/            # 思维导图源文件
```

---

## 工作流程

### 步骤 1：思维导图转 PRD

**输入**：XMind 导出的 Markdown 思维导图
**输出**：结构化的 PRD 文档

**核心规则**：
- `#` → 文档主标题与产品/平台总主题
- `##` → 一级模块（首页、个人中心、购物车等）
- `###` → 模块内的子主题（商品详情、设置等）
- 列表项 → 功能点、字段、操作、文案或交互说明

**术语映射**：
- "说明" → `### 说明` 小节
- "按钮" → "按钮"条目（弹窗/浮层则创建独立小节）
- "商品列表"/"展示内容" → "展示内容/字段"条目
- "筛选条件"/"搜索" → "筛选/搜索条件"条目
- "操作" → "用户操作"或"操作按钮"条目
- "提示文案"/"弹窗提示" → 归入对应弹窗/提示小节
- "复选框"/开关/状态 → 归入"商品属性/展示字段/用户选择/状态标识"

**使用方法**：
```bash
# 将 XMind 文件导出为 Markdown，放入 xmind/ 目录
# 然后运行 PRD 转换
"请根据 xmind/xxx.md 生成 PRD 文档"
```

---

### 步骤 2：PRD 转高保真 HTML 原型

**技术栈**：HTML5 + CSS3 + 原生 JavaScript（不使用前端框架）

**设计规范**：严格遵循年轻版设计系统

---

## 📱 移动端适配规范（必须严格遵守）

**所有生成的 HTML 页面必须遵循移动端适配规范，确保：**
- ✅ 禁止水平滚动
- ✅ 限制最大宽度为 375px（移动端标准宽度）
- ✅ 在桌面浏览器中居中显示
- ✅ 在移动设备中全屏显示

### HTML 头部设置

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <!-- 移动端视口设置（必须）-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>页面标题</title>
  <!-- 引用 YDS CSS -->
  <link rel="stylesheet" href="/Users/linyazhou/young-design-system/css/index.css">
</head>
```

**关键 meta 标签说明：**
- `width=device-width`: 宽度跟随设备宽度
- `initial-scale=1.0`: 初始缩放比例为 1.0
- `maximum-scale=1.0`: 禁止用户缩放（可选，根据需求）
- `user-scalable=no`: 禁止用户缩放（可选，根据需求）

### 移动端基础样式（必须添加）

```css
/* ========== HTML 元素 ========== */
html {
  width: 100%;
  height: 100%;
  overflow-x: hidden;  /* 禁止水平滚动 */
}

/* ========== Body 元素 ========== */
body {
  background-color: var(--yds-bg-default-white);
  min-height: 100vh;
  font-family: var(--yds-font-family-base);
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;  /* 禁止水平滚动 */
  -webkit-font-smoothing: antialiased;  /* 字体平滑 */
  -moz-osx-font-smoothing: grayscale;
}

/* ========== 移动端容器（必须） ========== */
.mobile-container {
  width: 100%;
  max-width: var(--yds-screen-mobile);  /* 375px - 移动端标准宽度 */
  margin: 0 auto;  /* 大屏幕居中显示 */
  overflow-x: hidden;
  position: relative;
}
```

### HTML 页面结构（必须遵循）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面标题</title>
  <link rel="stylesheet" href="/Users/linyazhou/young-design-system/css/index.css">
  <style>
    /* 移动端基础样式 */
    html {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }

    body {
      background-color: var(--yds-bg-default-white);
      min-height: 100vh;
      font-family: var(--yds-font-family-base);
      margin: 0;
      padding: 0;
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
    }

    .mobile-container {
      width: 100%;
      max-width: var(--yds-screen-mobile);
      margin: 0 auto;
      overflow-x: hidden;
    }

    /* 其他页面样式... */
  </style>
</head>
<body>
  <!-- 移动端容器：所有内容必须包裹在内 -->
  <div class="mobile-container">
    <!-- 页面内容 -->
  </div>
  <!-- 移动端容器结束 -->
</body>
</html>
```

### 移动端适配关键点

| 项目 | 设置 | 说明 |
|------|------|------|
| **视口设置** | `width=device-width, initial-scale=1.0` | 跟随设备宽度，不缩放 |
| **HTML 宽度** | `width: 100%; overflow-x: hidden` | 禁止水平滚动 |
| **Body 宽度** | `width: 100%; max-width: 100%; overflow-x: hidden` | 禁止水平滚动 |
| **容器最大宽度** | `max-width: 375px` | 移动端标准宽度 |
| **容器居中** | `margin: 0 auto` | 在大屏幕上居中显示 |
| **字体平滑** | `-webkit-font-smoothing: antialiased` | 提升字体渲染质量 |

### 常见错误对照表

| ❌ 错误做法 | ✅ 正确做法 | 说明 |
|-----------|-----------|------|
| 没有 `mobile-container` | 所有内容包裹在 `.mobile-container` 中 | 限制最大宽度 |
| 没有 `overflow-x: hidden` | 添加 `overflow-x: hidden` | 禁止水平滚动 |
| 没有设置 `max-width` | 设置 `max-width: 375px` | 限制移动端宽度 |
| 没有 `viewport` meta 标签 | 添加完整的 `viewport` 设置 | 移动端视口适配 |
| 内容直接放在 `body` 中 | 内容放在 `.mobile-container` 中 | 确保宽度限制 |

### 在桌面浏览器中的效果

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│         ┌─────────────────────┐                      │
│         │                     │                      │
│         │   移动端容器 375px   │                      │
│         │                     │                      │
│         │   居中显示          │                      │
│         │                     │                      │
│         └─────────────────────┘                      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 在移动设备中的效果

```
┌─────────────────┐
│                 │
│   100% 宽度     │
│   全屏显示      │
│                 │
└─────────────────┘
```

### 测试检查清单

在生成 HTML 页面后，必须检查：

- [ ] 页面在桌面浏览器中是否居中显示（最大宽度 375px）
- [ ] 页面是否可以左右滚动（❌ 不应该可以）
- [ ] 页面在移动设备中是否全屏显示（100% 宽度）
- [ ] 所有内容是否包裹在 `.mobile-container` 中
- [ ] 是否添加了 `overflow-x: hidden`
- [ ] 是否设置了 `viewport` meta 标签

### 页面布局规范（必须使用栅格系统）

**⚠️ 重要：所有页面内容必须使用 YDS 栅格系统包裹！**

#### 正确的页面结构

```html
<body>
  <div class="mobile-container">
    <!-- ========== 必须使用栅格系统 ========== -->
    <div class="yds-grid">
      <div class="yds-grid__cell yds-grid__cell--12">
        <div class="yds-grid__cell-content">
          <!-- 所有页面内容放在这里 -->

          <!-- 按钮示例 -->
          <button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl" style="width: 100%;">
            登录
          </button>

        </div>
      </div>
    </div>
  </div>
</body>
```

#### 栅格系统说明

| 元素 | 类名 | 说明 |
|------|------|------|
| 栅格容器 | `.yds-grid` | 12列均分，gap: 3px |
| 单元格 | `.yds-grid__cell--12` | 占12列（100%宽度） |
| 单元格内容区 | `.yds-grid__cell-content` | 自动带 padding: 0 8px |

#### 布局层次

```
.mobile-container (移动端容器，max-width: 375px)
  └─ .yds-grid (栅格容器，12列均分)
      └─ .yds-grid__cell.yds-grid__cell--12 (单元格，占满12列)
          └─ .yds-grid__cell-content (内容区，padding: 0 8px)
              └─ 页面所有内容
```

#### 常见错误对照

| ❌ 错误做法 | ✅ 正确做法 | 说明 |
|-----------|-----------|------|
| 内容直接放在 `.mobile-container` 中 | 内容放在 `.yds-grid__cell-content` 中 | 必须使用栅格系统 |
| 使用自定义容器（如 `.login-button-container`） | 直接在 `.yds-grid__cell-content` 中放置 | 禁止自定义布局容器 |
| 按钮没有宽度设置 | 按钮设置 `width: 100%` | 确保按钮占满容器宽度 |
| 手动添加 `padding: 0 16px` | 使用 `.yds-grid__cell-content` 自动提供 padding | 栅格系统自动处理间距 |

#### 按钮布局示例

```html
<!-- ✅ 正确：按钮在栅格系统中 -->
<div class="yds-grid">
  <div class="yds-grid__cell yds-grid__cell--12">
    <div class="yds-grid__cell-content">
      <button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl" style="width: 100%;">
        登录
      </button>
    </div>
  </div>
</div>

<!-- ❌ 错误：使用自定义容器 -->
<div class="login-button-container">
  <button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl">
    登录
  </button>
</div>
```

---

## 🎨 颜色系统（必须严格遵守）

**⚠️⚠️⚠️ 极其重要：永远不要猜测颜色变量名！**

**年轻版设计系统不存在以下变量名：**
- ❌ `--yds-color-neutral-*` （不存在！）
- ❌ `--yds-color-opacity-*` （不存在！）
- ❌ `--yds-color-brand-*` （不存在！文字用 `--yds-text-brand-*`）
- ❌ `--yds-color-error-*` （不存在！文字用 `--yds-text-danger-*`）

**正确做法：**
1. ✅ 使用 `--yds-bg-*` 作为背景色
2. ✅ 使用 `--yds-text-*` 作为文字色
3. ✅ 使用 `--yds-border-*` 作为边框色

### 颜色变量命名规则

年轻版设计系统使用三类颜色变量：

| 变量前缀 | 用途 | 示例 |
|---------|------|------|
| `--yds-bg-*` | **背景颜色** | `--yds-bg-default-white` |
| `--yds-text-*` | **文字颜色** | `--yds-text-default-default` |
| `--yds-border-*` | **边框颜色** | `--yds-border-default-tertiary` |

### 背景颜色变量（BG）

| 用途 | 正确变量 | 颜色值 |
|------|----------|--------|
| 白色背景 | `--yds-bg-default-white` | #FFFFFF |
| 灰色背景 | `--yds-bg-default-gray` | #F4F5F7 |
| 黑色背景 | `--yds-bg-default-black` | #1B1B1B |
| 品牌色背景 | `--yds-bg-brand-default` | #FF77E7 |
| 品牌色次背景 | `--yds-bg-brand-secondary` | #FFF2FF |
| 成功背景 | `--yds-bg-positive-default` | #2AA764 |
| 成功次背景 | `--yds-bg-positive-secondary` | #F2FAF6 |
| 警告背景 | `--yds-bg-warning-default` | #F29800 |
| 警告次背景 | `--yds-bg-warning-secondary` | #FFFCE5 |
| 错误背景 | `--yds-bg-danger-default` | #E93E3E |
| 错误次背景 | `--yds-bg-danger-secondary` | #FAF0F0 |
| 透明黑 4% | `--yds-bg-transp-black-4%` | rgba(27,27,27,0.04) |
| 透明黑 8% | `--yds-bg-transp-black-8%` | rgba(27,27,27,0.08) |
| 透明黑 50% | `--yds-bg-transp-black-50%` | rgba(27,27,27,0.5) |

### 文字颜色变量（TEXT）

| 用途 | 正确变量 | 颜色值 |
|------|----------|--------|
| 主要文字 | `--yds-text-default-default` | #1B1B1B |
| 次要文字 | `--yds-text-default-secondary` | #4E4F54 |
| 辅助文字 | `--yds-text-default-tertiary` | #7E828C |
| 禁用文字 | `--yds-text-default-disabled` | #B9BBBF |
| 白色文字 | `--yds-text-default-white` | #FFFFFF |
| 品牌色文字 | `--yds-text-brand-secondary` | #FF77E7 |
| 品牌色深文字 | `--yds-text-brand-default` | #E52EC5 |
| 成功文字 | `--yds-text-positive-default` | #2AA764 |
| 警告文字 | `--yds-text-warning-default` | #F29800 |
| 错误文字 | `--yds-text-danger-default` | #E93E3E |

### 边框颜色变量（BORDER）

| 用途 | 正确变量 | 颜色值 |
|------|----------|--------|
| 默认边框 | `--yds-border-default-default` | #1B1B1B |
| 次边框 | `--yds-border-default-secondary` | rgba(27,27,27,0.5) |
| 三级边框 | `--yds-border-default-tertiary` | rgba(27,27,27,0.24) |
| 白色边框 | `--yds-border-default-white` | #FFFFFF |
| 品牌色边框 | `--yds-border-brand-secondary` | #FFB3F2 |
| 成功边框 | `--yds-border-positive-default` | #2AA764 |
| 错误边框 | `--yds-border-danger-default` | #E93E3E |

### 常见错误对照表（完整的变量名映射）

**⚠️ 重要：这些是历史上常见的错误变量名，不要使用！**

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
| `--yds-color-opacity-black-50` | `--yds-bg-transp-black-50%` | 透明黑背景 50% |
| `--yds-color-brand-primary` | `--yds-text-brand-secondary` | 品牌色文字 |
| `--yds-color-brand-hover` | `--yds-bg-brand-default` | 品牌色背景 |
| `--yds-color-error-primary` | `--yds-text-danger-default` | 错误文字 |
| `--yds-color-warning-primary` | `--yds-text-warning-default` | 警告文字 |
| `--yds-color-positive-primary` | `--yds-text-positive-default` | 成功文字 |
| `--yds-color-positive-light` | `--yds-bg-positive-secondary` | 成功背景次色 |
| `--yds-color-warning-light` | `--yds-bg-warning-secondary` | 警告背景次色 |
| `--yds-color-error-light` | `--yds-bg-danger-secondary` | 错误背景次色 |

---

## 🧩 组件系统（必须使用 YDS 组件）

### 1. 按钮组件（Button）

**必须使用的类名组合：**

```html
<!-- 主行动按钮：XL 黑色按钮（页面主要操作）-->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl">
  登录
</button>

<!-- 次要按钮：Large 白色按钮 -->
<button class="yds-button yds-button--solid-light yds-button--white yds-button--large">
  取消
</button>

<!-- 品牌色按钮（仅营销场景）-->
<button class="yds-button yds-button--solid-dark yds-button--brand yds-button--large">
  立即抢购
</button>

<!-- 带图标的按钮（黑色按钮用白色图标）-->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl">
  <img src="/Users/linyazhou/young-design-system/icons/y_icon_line_edit_add.svg"
       class="yds-icon"
       style="filter: brightness(0) invert(1);"
       alt="添加">
  添加
</button>
```

**按钮尺寸：**
- `yds-button--xl`: 48px 高度（主行动按钮）
- `yds-button--large`: 38px 高度（常规操作）
- `yds-button--medium`: 32px 高度
- `yds-button--medium-small`: 28px 高度
- `yds-button--small`: 24px 高度
- `yds-button--mini`: 20px 高度

**按钮颜色：**
- `yds-button--black`: 黑色（默认首选）
- `yds-button--white`: 白色（次要操作）
- `yds-button--brand`: 品牌色（仅营销场景）

### 2. 复选框组件（Checkbox）

**⚠️ 重要：复选框组件需要 JavaScript 来切换选中状态的视觉显示！**

**HTML 结构：**
```html
<label class="yds-checkbox yds-checkbox--small">
  <input type="checkbox" class="yds-checkbox__input" id="agreement">
  <span class="yds-checkbox__box"></span>
  我同意协议
</label>
```

**⚠️ 必须添加 JavaScript 来切换视觉状态：**

```javascript
// ✅ 正确：完整的复选框事件处理
const checkbox = document.getElementById('agreement');

checkbox.addEventListener('change', function() {
  // 1. 切换复选框选中状态的视觉显示（必须！）
  if (this.checked) {
    this.closest('.yds-checkbox').classList.add('yds-checkbox--checked');
  } else {
    this.closest('.yds-checkbox').classList.remove('yds-checkbox--checked');
  }

  // 2. 执行其他业务逻辑（如按钮禁用状态）
  // button.disabled = !this.checked;
});
```

**错误示例（❌ 不要这样做）：**

```javascript
// ❌ 错误：只监听状态，没有更新视觉显示
checkbox.addEventListener('change', () => {
  button.disabled = !checkbox.checked;
  // 结果：复选框的实际状态改变了，但视觉上没有显示选中状态
});
```

**复选框工作原理：**

| 状态 | 类名 | 视觉效果 |
|------|------|----------|
| 未选中 | `.yds-checkbox` | 白色背景 + 灰色边框 |
| 选中 | `.yds-checkbox.yds-checkbox--checked` | 黑色背景 + 白色对勾 |

**尺寸变体：**
- `yds-checkbox--small`: 小尺寸（默认，16px）
- `yds-checkbox--medium`: 中等尺寸（20px）

**颜色变体：**
- `yds-checkbox--brand`: 品牌色（默认黑色）

**完整示例（带按钮联动）：**

```html
<label class="yds-checkbox yds-checkbox--small">
  <input type="checkbox" class="yds-checkbox__input" id="agreement">
  <span class="yds-checkbox__box"></span>
  我同意《用户协议》
</label>

<button id="submit-btn" disabled>提交</button>

<script>
const checkbox = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

checkbox.addEventListener('change', function() {
  // 切换视觉状态
  if (this.checked) {
    this.closest('.yds-checkbox').classList.add('yds-checkbox--checked');
  } else {
    this.closest('.yds-checkbox').classList.remove('yds-checkbox--checked');
  }
  // 切换按钮状态
  button.disabled = !this.checked;
});
</script>
```

### 3. 单选框组件（Radio）

```html
<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" name="option" value="1">
  <span class="yds-radio__box"></span>
  选项1
</label>
```

### 4. 开关组件（Switch）

```html
<label class="yds-switch yds-switch--small">
  <input type="checkbox" class="yds-switch__input">
  <span class="yds-switch__track"></span>
</label>
```

### 5. 对话框组件（Dialog）

**⚠️ 重要：所有弹窗、浮层、对话框必须使用 YDS Dialog 组件！禁止自定义样式！**

**标准对话框结构：**
```html
<div class="yds-dialog-overlay">
  <div class="yds-dialog">
    <!-- 标题区域（可选）-->
    <div class="yds-dialog__title-section">
      <h3 class="yds-dialog__title">提示</h3>
    </div>

    <!-- 内容区域 -->
    <div class="yds-dialog__content">
      <p class="yds-dialog__body-text">确定要删除吗？</p>
    </div>

    <!-- 按钮区域 -->
    <div class="yds-dialog__buttons yds-dialog__buttons--horizontal">
      <button class="yds-dialog__button yds-dialog__button--secondary">取消</button>
      <button class="yds-dialog__button yds-dialog__button--primary">确定</button>
    </div>
  </div>
</div>
```

**底部浮层（Action Sheet）示例：**
```html
<div class="yds-dialog-overlay">
  <div class="yds-dialog">
    <!-- 标题 -->
    <div class="yds-dialog__title-section">
      <h3 class="yds-dialog__title">选择问题类型</h3>
    </div>

    <!-- 操作选项 -->
    <div class="yds-dialog__content">
      <div class="yds-dialog__action" onclick="alert('忘记密码')">忘记密码</div>
      <div class="yds-dialog__action" onclick="alert('找回账号')">找回账号</div>
    </div>

    <!-- 取消按钮 -->
    <div class="yds-dialog__buttons yds-dialog__buttons--vertical">
      <button class="yds-dialog__button yds-dialog__button--secondary">取消</button>
    </div>
  </div>
</div>
```

**⚠️ 禁止事项：**
- ❌ **禁止**自定义 `.bottom-sheet`、`.modal`、`.popup` 等样式
- ❌ **禁止**使用自定义的遮罩层样式
- ❌ **禁止**使用第三方 UI 库的弹窗组件
- ✅ **必须**使用 `.yds-dialog-overlay` 和 `.yds-dialog`
- ✅ **必须**使用 YDS Dialog 的子元素类名

### 6. 栅格系统（Grid）

```html
<!-- 单列布局 -->
<div class="yds-grid">
  <div class="yds-grid__cell yds-grid__cell--12">
    <div class="yds-grid__cell-content">
      <!-- 内容（自动带 padding: 0 8px）-->
    </div>
  </div>
</div>

<!-- 两列布局 -->
<div class="yds-grid">
  <div class="yds-grid__cell yds-grid__cell--6">
    <div class="yds-grid__cell-content">左侧内容</div>
  </div>
  <div class="yds-grid__cell yds-grid__cell--6">
    <div class="yds-grid__cell-content">右侧内容</div>
  </div>
</div>
```

**栅格配置：**
- 12 列均分：`repeat(12, 1fr)`
- 栅格间距：`gap: 3px`
- 单元格边距：`.yds-grid__cell-content` 提供 `padding: 0 8px`

### 7. 导航栏组件（Navbar）

```html
<nav class="yds-navbar yds-navbar--mobile">
  <div class="yds-navbar__back">
    <img src="/Users/linyazhou/young-design-system/icons/y_icon_line_direction_arrow_left.svg"
         class="yds-icon" alt="返回">
  </div>
  <div class="yds-navbar__title">页面标题</div>
  <div class="yds-navbar__action">
    <img src="/Users/linyazhou/young-design-system/icons/xxx.svg"
         class="yds-icon" alt="更多">
  </div>
</nav>
```

### 8. 标签栏组件（TabBar）

```html
<div class="yds-tabbar">
  <button class="yds-tabbar__item yds-tabbar__item--active">
    <img src="/Users/linyazhou/young-design-system/icons/home.svg"
         class="yds-tabbar__icon"
         style="filter: brightness(0) invert(1);"
         alt="首页">
    <span class="yds-tabbar__label">首页</span>
  </button>
  <button class="yds-tabbar__item">
    <img src="/Users/linyazhou/young-design-system/icons/cart.svg"
         class="yds-tabbar__icon"
         alt="购物车">
    <span class="yds-tabbar__label">购物车</span>
  </button>
</div>
```

**注意**：激活状态使用品牌色，图标需添加 `filter: brightness(0) invert(1);`

### 9. 提示框组件（Toast）

**⚠️ 重要：必须使用 YDS Toast 组件，禁止使用原生 `alert()`！**

**HTML 结构：**
```html
<!-- Toast 容器（放在页面最底部）-->
<div id="yds-toast" class="yds-toast yds-toast--default" style="display: none;">
  <div class="yds-toast__text"></div>
</div>
```

**JavaScript 函数：**
```javascript
// 显示 Toast 提示
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

// 使用示例
showToast('登录成功');
showToast('请输入正确的手机号码');
showToast('验证码已发送至 138****8888', 3000); // 自定义显示时长
```

**Toast 变体：**

| 变体类名 | 用途 | 说明 |
|---------|------|------|
| `.yds-toast--default` | 默认样式 | 纯文字提示，最常用 |
| `.yds-toast--brand` | 品牌样式 | 带头像的提示 |
| `.yds-toast--atmosphere` | 氛围样式 | 带图标的提示 |

**❌ 错误示例（不要这样做）：**
```javascript
// ❌ 错误：使用原生 alert
alert('登录成功');
alert('请输入正确的手机号码');
confirm('确定要删除吗？');
```

**✅ 正确示例：**
```javascript
// ✅ 正确：使用 YDS Toast
showToast('登录成功');
showToast('请输入正确的手机号码');

// 确认对话框使用 YDS Dialog
showConfirmDialog('确定要删除吗？', () => {
  // 确认后的操作
});
```

**对比：`alert()` vs YDS Toast**

| 特性 | `alert()` | YDS Toast |
|------|-----------|-----------|
| 样式 | ❌ 浏览器原生 | ✅ 统一设计风格 |
| 用户体验 | ❌ 阻塞式，需点击确认 | ✅ 非阻塞，自动消失 |
| 动画效果 | ❌ 无 | ✅ 淡入淡出动画 |
| 品牌一致性 | ❌ 不一致 | ✅ 符合设计系统 |
| 移动端体验 | ❌ 体验差 | ✅ 移动端优化 |
| 自定义 | ❌ 无法自定义 | ✅ 可自定义时长、样式 |

### 10. 按钮组组件（Button Group）

```html
<div class="yds-button-group yds-button-group--horizontal">
  <button class="yds-button-group__button yds-button-group__button--active">
    选项1
  </button>
  <button class="yds-button-group__button">
    选项2
  </button>
</div>
```

---

## 📐 间距系统（Spacing）

**必须使用间距变量，禁止硬编码像素值：**

```css
/* ✅ 正确：使用间距变量 */
padding: var(--yds-spacing-16);
margin-bottom: var(--yds-spacing-24);
gap: var(--yds-spacing-8);

/* ❌ 错误：硬编码像素值 */
padding: 16px;
margin-bottom: 24px;
gap: 8px;
```

**可用间距变量：**

| 变量名 | 像素值 | 使用场景 |
|--------|-------|----------|
| `--yds-spacing-0` | 0px | 无间距 |
| `--yds-spacing-2` | 2px | 最小间距 |
| `--yds-spacing-4` | 4px | 极小间距 |
| `--yds-spacing-8` | 8px | 小间距 |
| `--yds-spacing-12` | 12px | 中小间距 |
| `--yds-spacing-16` | 16px | 标准间距 |
| `--yds-spacing-20` | 20px | 中大间距 |
| `--yds-spacing-24` | 24px | 大间距 |
| `--yds-spacing-32` | 32px | 很大间距 |
| `--yds-spacing-40` | 40px | 超大间距 |
| `--yds-spacing-48` | 48px | 巨大间距 |

---

## 🔤 字体系统（Typography）

**必须使用字体变量：**

```css
/* 字体家族 */
font-family: var(--yds-font-family-base);

/* 字号 */
font-size: var(--yds-font-size-11);  /* 11px */
font-size: var(--yds-font-size-12);  /* 12px */
font-size: var(--yds-font-size-13);  /* 13px */
font-size: var(--yds-font-size-14);  /* 14px */
font-size: var(--yds-font-size-15);  /* 15px */

/* 字重 */
font-weight: var(--yds-font-weight-regular);  /* 400 */
font-weight: var(--yds-font-weight-medium);   /* 500 */

/* 行高 */
line-height: var(--yds-line-height-16);  /* 16px */
line-height: var(--yds-line-height-18);  /* 18px */
line-height: var(--yds-line-height-20);  /* 20px */
```

---

## 📦 圆角系统（Border Radius）

**必须使用圆角变量：**

```css
/* 直角（内容容器默认）*/
border-radius: var(--yds-radius-none);  /* 0px */

/* 小圆角 */
border-radius: var(--yds-radius-sm);  /* 2px */

/* 中圆角 */
border-radius: var(--yds-radius-md);  /* 4px */

/* 大圆角 */
border-radius: var(--yds-radius-lg);  /* 8px */

/* 超大圆角 */
border-radius: var(--yds-radius-xl);  /* 12px */

/* 完整圆角（圆形）*/
border-radius: var(--yds-radius-full);  /* 9999px */
```

**设计原则：内容容器使用直角（`--yds-radius-none`）**

---

## 🖼️ 图标系统（Icons）

**⚠️ 重要：使用图标前必须检查文件是否存在！**

### 图标库路径

- **路径**：`/Users/linyazhou/young-design-system/icons/`
- **演示页面**：`/Users/linyazhou/young-design-system/docs/icons-demo.html`

### 如何查找正确的图标文件名

**⚠️ 禁止凭空猜测图标文件名！必须使用以下方法确认：**

#### 方法 1：使用命令行搜索（推荐）

```bash
# 搜索特定关键词的图标
ls /Users/linyazhou/young-design-system/icons/ | grep -i "返回关键词"

# 常用搜索示例
ls /Users/linyazhou/young-design-system/icons/ | grep -i "arrow_left"    # 返回图标
ls /Users/linyazhou/young-design-system/icons/ | grep -i "visible"      # 可见性图标
ls /Users/linyazhou/young-design-system/icons/ | grep -i "password"     # 密码图标
ls /Users/linyazhou/young-design-system/icons/ | grep -i "close"        # 关闭图标
ls /Users/linyazhou/young-design-system/icons/ | grep -i "search"       # 搜索图标
```

#### 方法 2：使用图标演示页面

```bash
# 在浏览器中打开图标演示页面
open /Users/linyazhou/young-design-system/docs/icons-demo.html
```

在演示页面中：
- 查看所有可用图标的预览
- 复制正确的图标文件名
- 查看图标的正确使用方式

### 图标命名规则

年轻版设计系统图标命名规则：

| 前缀 | 类型 | 说明 |
|------|------|------|
| `y_icon_line_` | 线性图标 | 细线条图标（常用） |
| `y_icon_linebold_` | 粗线图标 | 粗线条图标 |
| `y_icon_planarity_` | 平面图标 | 填充型图标 |
| `y_icon_planaritybold_` | 平面粗体 | 粗填充图标 |

### 常用图标对照表

| 用途 | 正确文件名 | 关键词 |
|------|-----------|--------|
| **返回** | `y_icon_line_direction_arrow_left.svg` | arrow_left |
| **密码隐藏** | `y_icon_line_edit_invisible.svg` | invisible |
| **密码可见** | `y_icon_line_edit_passwordvisible.svg` | passwordvisible |
| **关闭** | `y_icon_line_edit_close.svg` | close |
| **搜索** | `y_icon_line_generality_search.svg` | search |
| **添加** | `y_icon_line_edit_add.svg` | add |
| **删除** | `y_icon_line_edit_delete.svg` | delete |
| **编辑** | `y_icon_line_edit_edit.svg` | edit |

### 正确使用示例

```html
<!-- ✅ 正确：使用实际存在的图标文件 -->
<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_direction_arrow_left.svg"
     class="yds-icon"
     alt="返回">

<!-- ✅ 正确：按钮内使用白色图标 -->
<button class="yds-button yds-button--solid-dark yds-button--black">
  <img src="/Users/linyazhou/young-design-system/icons/y_icon_line_edit_add.svg"
       class="yds-icon"
       style="filter: brightness(0) invert(1);"
       alt="添加">
  添加
</button>

<!-- ✅ 正确：密码可见性切换 -->
<script>
const toggle = document.getElementById('password-toggle');
const input = document.getElementById('password-input');
let visible = false;

toggle.addEventListener('click', () => {
  visible = !visible;
  input.type = visible ? 'text' : 'password';
  toggle.innerHTML = visible
    ? '<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_edit_passwordvisible.svg" alt="隐藏密码">'
    : '<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_edit_invisible.svg" alt="显示密码">';
});
</script>
```

### 错误使用示例（❌ 不要这样做）

```html
<!-- ❌ 错误：使用不存在的图标文件 -->
<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_generality_end.svg" alt="显示密码">

<!-- ❌ 错误：凭空猜测文件名 -->
<img src="/Users/linyazhou/young-design-system/icons/back.svg" alt="返回">

<!-- ❌ 错误：使用外部图标 -->
<img src="https://example.com/icon.svg" alt="图标">

<!-- ❌ 错误：使用内联 SVG（TabBar 除外）-->
<svg>...</svg>
```

### 图标使用规则

1. **必须从图标库加载**：禁止使用外部图标或自定义图标
2. **使用前必须检查文件存在**：使用 `ls` 命令或查看演示页面
3. **使用 `yds-icon` 类名**：保持代码一致性
4. **黑色按钮内的图标使用白色**：`style="filter: brightness(0) invert(1);"`
5. **激活状态图标使用品牌色**：通过 CSS 类名控制

---

## ✅ 代码生成检查清单

**在生成任何 HTML 原型之前，必须检查以下项目：**

### 颜色变量检查
- [ ] 所有背景色使用 `--yds-bg-*` 变量
- [ ] 所有文字色使用 `--yds-text-*` 变量
- [ ] 所有边框色使用 `--yds-border-*` 变量
- [ ] **禁止使用 `--yds-color-neutral-*` （⚠️ 常见错误！）**
- [ ] **禁止使用 `--yds-color-opacity-*` （⚠️ 常见错误！）**
- [ ] **禁止使用 `--yds-color-brand-*` （⚠️ 文字用 `--yds-text-brand-*`）**
- [ ] **禁止使用 `--yds-color-error-*` （⚠️ 文字用 `--yds-text-danger-*`）**
- [ ] **禁止使用 `--yds-color-warning-*` （⚠️ 文字用 `--yds-text-warning-*`）**
- [ ] **禁止使用 `--yds-color-positive-*` （⚠️ 文字用 `--yds-text-positive-*`）**
- [ ] **使用命令检查错误变量：`grep -r "yds-color-neutral\|yds-color-opacity" prototype/`**

### 组件使用检查
- [ ] 按钮使用 `yds-button` 组件类
- [ ] 复选框使用 `yds-checkbox` 组件类
- [ ] **复选框添加 JavaScript 切换 `.yds-checkbox--checked` 类名（⚠️ 必须）**
- [ ] 对话框使用 `yds-dialog` 组件类
- [ ] **Toast 使用 `yds-toast` 组件（⚠️ 必须！）**
- [ ] **禁止使用原生 `alert()` 函数（⚠️ 必须！）**
- [ ] **禁止使用原生 `confirm()` 函数（⚠️ 必须！）**
- [ ] 栅格使用 `yds-grid` 组件类
- [ ] 禁止自定义组件样式

### 设计规范检查
- [ ] 按钮默认使用黑色（`yds-button--black`）
- [ ] 容器使用直角（`border-radius: 0`）
- [ ] 容器无阴影（`box-shadow: none`）
- [ ] 图标从 YDS 图标库加载
- [ ] **图标文件已检查确实存在（⚠️ 必须！）**
- [ ] **禁止凭空猜测图标文件名（⚠️ 必须！）**
- [ ] 间距使用 `--yds-spacing-*` 变量
- [ ] 字体使用 `--yds-font-*` 变量

### 引用文件检查
- [ ] 引用 YDS CSS：`/Users/linyazhou/young-design-system/css/index.css`
- [ ] 引用 Tailwind CSS（可选）：`<script src="https://cdn.tailwindcss.com"></script>`

### 移动端适配检查
- [ ] 添加 `viewport` meta 标签：`width=device-width, initial-scale=1.0`
- [ ] HTML 元素添加 `overflow-x: hidden`
- [ ] Body 元素添加 `width: 100%; max-width: 100%; overflow-x: hidden`
- [ ] 所有内容包裹在 `.mobile-container` 中
- [ ] 设置容器最大宽度：`max-width: var(--yds-screen-mobile)` (375px)
- [ ] 设置容器居中：`margin: 0 auto`
- [ ] 测试页面是否可以左右滚动（❌ 不应该可以）

### 栅格系统检查（必须）
- [ ] 所有内容必须包裹在 `.yds-grid` 中
- [ ] 使用 `.yds-grid__cell yds-grid__cell--12`（单列）
- [ ] 实际内容放在 `.yds-grid__cell-content` 中
- [ ] 禁止在栅格外直接放置内容
- [ ] 禁止使用自定义布局容器（如 `.login-button-container`）
- [ ] 按钮必须设置 `width: 100%` 占满容器

### 对话框组件检查（必须）
- [ ] 所有弹窗使用 `.yds-dialog-overlay` 和 `.yds-dialog`
- [ ] 禁止自定义 `.bottom-sheet`、`.modal` 等样式
- [ ] 使用 `.yds-dialog__title-section`、`.yds-dialog__content`、`.yds-dialog__buttons`
- [ ] 禁止使用第三方 UI 库的弹窗组件

---

## 🚫 禁止事项清单

1. ❌ **禁止自定义按钮样式** → 必须使用 `.yds-button`
2. ❌ **禁止自定义复选框样式** → 必须使用 `.yds-checkbox`
   - ⚠️ **禁止忘记添加 JavaScript 切换 `.yds-checkbox--checked` 类名**
   - ⚠️ **禁止只监听状态不更新视觉显示**
3. ❌ **禁止自定义对话框样式** → 必须使用 `.yds-dialog`
4. ❌ **禁止使用非 YDS 图标** → 必须从 `icons/` 加载
   - ⚠️ **禁止使用不存在的图标文件名** → 必须先检查文件是否存在
   - ⚠️ **禁止凭空猜测图标文件名** → 必须使用 `ls` 命令或查看演示页面确认
5. ❌ **禁止硬编码颜色值** → 必须使用 `var(--yds-*)` 变量
6. ❌ **禁止跳过栅格系统** → 所有页面必须使用 12 列栅格
7. ❌ **禁止使用圆角按钮/容器** → 必须使用直角 `border-radius: 0`
8. ❌ **禁止使用品牌色按钮** → 默认使用黑色按钮 `yds-button--black`
9. ❌ **禁止硬编码间距值** → 必须使用 `--yds-spacing-*` 变量
10. ❌ **禁止使用不存在的颜色变量** → 必须使用 `--yds-bg-*`, `--yds-text-*`, `--yds-border-*`
    - ⚠️ **禁止 `--yds-color-neutral-*` （不存在的变量！）**
    - ⚠️ **禁止 `--yds-color-opacity-*` （不存在的变量！）**
    - ⚠️ **禁止 `--yds-color-brand-*` （文字用 `--yds-text-brand-*`）**
11. ❌ **禁止页面可以左右滚动** → 必须添加 `overflow-x: hidden` 和 `.mobile-container`
12. ❌ **禁止内容直接放在 body 中** → 必须包裹在 `.mobile-container` 中
13. ❌ **禁止不设置移动端最大宽度** → 必须设置 `max-width: 375px`
14. ❌ **禁止在栅格外直接放置内容** → 必须放在 `.yds-grid__cell-content` 中
15. ❌ **禁止使用自定义布局容器** → 如 `.login-button-container`、`.form-container` 等
16. ❌ **禁止自定义弹窗/浮层样式** → 如 `.bottom-sheet`、`.modal`、`.popup` 等
17. ❌ **禁止使用第三方 UI 库的弹窗组件** → 必须使用 YDS Dialog
18. ❌ **禁止使用原生 `alert()` 函数** → 必须使用 YDS Toast 组件
19. ❌ **禁止使用原生 `confirm()` 函数** → 必须使用 YDS Dialog 组件
20. ❌ **禁止使用原生 `prompt()` 函数** → 必须使用自定义输入框

---

## 📖 参考文档

### 设计系统文档
- **设计标准**：`/Users/linyazhou/young-design-system/docs/design-standards.md`
- **对话框文档**：`/Users/linyazhou/young-design-system/docs/dialog-guide.md`
- **颜色指南**：`/Users/linyazhou/young-design-system/docs/colors-guide.md`
- **按钮演示**：`/Users/linyazhou/young-design-system/docs/button-demo.html`
- **图标演示**：`/Users/linyazhou/young-design-system/docs/icons-demo.html`

### 设计系统源文件
- **CSS 变量**：`/Users/linyazhou/young-design-system/css/variables.css`
- **颜色系统**：`/Users/linyazhou/young-design-system/css/colors.css`
- **按钮组件**：`/Users/linyazhou/young-design-system/css/button.css`
- **复选框组件**：`/Users/linyazhou/young-design-system/css/checkbox.css`
- **对话框组件**：`/Users/linyazhou/young-design-system/css/dialog.css`
- **栅格系统**：`/Users/linyazhou/young-design-system/css/grid.css`
- **导航栏组件**：`/Users/linyazhou/young-design-system/css/navbar.css`
- **标签栏组件**：`/Users/linyazhou/young-design-system/css/tabbar.css`

---

## 💡 重要提示

1. **业务逻辑闭环**：生成原型前，先检查核心业务逻辑是否闭环（登录、注册、搜索、加购、收藏等），不闭环则补充相应逻辑
2. **文件分离**：每个功能页面生成一个独立的 HTML 文件，方便后续修改
3. **交互完整性**：确保所有交互逻辑可体验（按钮点击、页面跳转、弹窗、提示等）
4. **设计规范遵循**：严格遵循年轻版设计系统的所有规范
5. **变量命名准确**：使用正确的颜色变量前缀（`bg-*`, `text-*`, `border-*`）
6. **移动端适配**：确保页面不能左右滚动，最大宽度 375px，在桌面浏览器中居中显示

---

**项目维护者**：Claude Code + 用户协作
**最后更新**：2025-02-01
**版本**：v7.0（添加 Toast 组件强制规范和原生函数禁止事项）

**版本历史**：
- v1.0 - 初始版本
- v2.0 - 添加移动端适配规范
- v3.0 - 添加颜色变量映射表
- v4.0 - 添加栅格系统强制规范和对话框组件强制规范
- v5.0 - 添加图标使用规范和复选框 JavaScript 规范
- v6.0 - 添加颜色变量命名强制规范和完整错误对照表
- v7.0 - 添加 Toast 组件强制规范和原生函数禁止事项
