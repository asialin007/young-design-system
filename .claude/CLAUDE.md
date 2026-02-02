# 年轻版设计系统 (Young Design System) - 项目配置

本文档为年轻版设计系统的项目级配置，当在此项目目录或其子目录中工作时自动生效。

## 🔴 强制工作流程 (CRITICAL)

**⚠️ 在使用年轻版设计系统时，必须严格遵循以下工作流程，不得跳过任何步骤！**

### 📋 每次使用前的检查清单

```bash
# 步骤 1：列出所有可用组件
ls css/

# 步骤 2：查看组件使用文档
cat docs/design-standards.md

# 步骤 3：查看组件演示
open docs/
```

### 🎯 核心原则

1. **组件优先级**：能用设计系统组件就绝不自定义
2. **检查顺序**：先查组件清单 → 再查文档 → 最后写代码
3. **禁止事项**：禁止自定义已存在的组件样式

---

## 📦 可用组件清单

**必须使用的组件（按优先级）：**

| 组件 | 文件路径 | 类名前缀 | 说明 |
|------|---------|---------|------|
| **按钮** | `css/button.css` | `.yds-button` | ✅ 必须使用，禁止自定义 |
| **复选框** | `css/checkbox.css` | `.yds-checkbox` | ✅ 必须使用，禁止自定义 |
| **单选框** | `css/radio.css` | `.yds-radio` | ✅ 必须使用，禁止自定义 |
| **开关** | `css/switch.css` | `.yds-switch` | ✅ 必须使用，禁止自定义 |
| **对话框** | `css/dialog.css` | `.yds-dialog` | ✅ 必须使用，禁止自定义 |
| **导航栏** | `css/navbar.css` | `.yds-navbar` | ✅ 必须使用，禁止自定义 |
| **标签栏** | `css/tabbar.css` | `.yds-tabbar` | ✅ 必须使用，禁止自定义 |
| **提示框** | `css/toast.css` | `.yds-toast` | ✅ 必须使用，禁止自定义 |
| **按钮组** | `css/button-group.css` | `.yds-button-group` | ✅ 必须使用，禁止自定义 |

**样式系统（必须使用）：**

| 系统 | 文件路径 | 说明 |
|------|---------|------|
| **颜色变量** | `css/colors.css` | 256 个 CSS 变量，必须使用 `var(--yds-*)` |
| **基础变量** | `css/variables.css` | 字体、间距、圆角等基础变量 |
| **图标样式** | `css/icons.css` | 图标基础样式 |
| **栅格系统** | `css/grid.css` | 12 列栅格系统 |

**图标库（必须从此加载）：**
- 路径：`icons/`
- 演示：`docs/icons-demo.html`
- ⚠️ 禁止使用外部图标或内联 SVG（TabBar 除外）

---

## 🚫 禁止行为清单

1. ❌ 禁止自定义按钮样式 → 必须使用 `.yds-button`
2. ❌ 禁止自定义复选框样式 → 必须使用 `.yds-checkbox`
3. ❌ 禁止自定义对话框样式 → 必须使用 `.yds-dialog`
4. ❌ 禁止使用非设计系统图标 → 必须从 `icons/` 加载
5. ❌ 禁止硬编码颜色值 → 必须使用 `var(--yds-*)`
6. ❌ 禁止跳过栅格系统 → 所有页面必须使用 12 列栅格
7. ❌ 禁止使用圆角按钮/容器 → 必须使用直角 `border-radius: 0`
8. ❌ 禁止使用品牌色按钮 → 默认使用黑色按钮 `yds-button--black`

---

## ✅ 正确使用示例

### 1. 按钮（Button）

```html
<!-- ✅ 主行动按钮：XL 黑色按钮 -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl">
  登录
</button>

<!-- ✅ 次要按钮：白色按钮 -->
<button class="yds-button yds-button--solid-light yds-button--white yds-button--large">
  取消
</button>

<!-- ❌ 错误：不要使用品牌色按钮（除非是营销场景） -->
<button class="yds-button yds-button--solid-dark yds-button--brand">
  确认
</button>
```

### 2. 复选框（Checkbox）

```html
<!-- ✅ 小尺寸品牌色复选框 -->
<label class="yds-checkbox yds-checkbox--small yds-checkbox--brand">
  <input type="checkbox" class="yds-checkbox__input">
  <span class="yds-checkbox__box"></span>
  我同意协议
</label>

<!-- ❌ 错误：不要自定义复选框样式 -->
<div class="my-checkbox">...</div>
```

### 3. 对话框（Dialog）

```html
<!-- ✅ 使用 YDS 对话框 -->
<div class="yds-dialog-overlay">
  <div class="yds-dialog">
    <div class="yds-dialog__title-section">
      <h3 class="yds-dialog__title">提示</h3>
    </div>
    <div class="yds-dialog__content">
      <p class="yds-dialog__body-text">确定要删除吗？</p>
    </div>
    <div class="yds-dialog__buttons yds-dialog__buttons--horizontal">
      <button class="yds-dialog__button yds-dialog__button--secondary">取消</button>
      <button class="yds-dialog__button yds-dialog__button--primary">确定</button>
    </div>
  </div>
</div>
```

### 4. 栅格系统（Grid）

```html
<!-- ✅ 单列布局（使用 YDS 栅格类）-->
<div class="yds-grid">
  <div class="yds-grid__cell yds-grid__cell--12">
    <div class="yds-grid__cell-content">
      <!-- 内容（自动带 padding: 0 8px）-->
    </div>
  </div>
</div>

<!-- ✅ 两列布局 -->
<div class="yds-grid">
  <div class="yds-grid__cell yds-grid__cell--6">
    <div class="yds-grid__cell-content">
      <!-- 左侧内容 -->
    </div>
  </div>
  <div class="yds-grid__cell yds-grid__cell--6">
    <div class="yds-grid__cell-content">
      <!-- 右侧内容 -->
    </div>
  </div>
</div>

<!-- ❌ 错误：不要自定义栅格 -->
<div class="custom-grid" style="display: grid; grid-template-columns: repeat(12, 1fr);">
```

### 5. 图标（Icons）

```html
<!-- ✅ 从 YDS 图标库加载 -->
<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_direction_arrow_left.svg"
     class="yds-icon" alt="返回">

<!-- ✅ 相对路径（在项目内使用）-->
<img src="icons/y_icon_line_direction_arrow_left.svg"
     class="yds-icon" alt="返回">

<!-- ❌ 错误：不要使用外部图标 -->
<img src="https://example.com/icon.svg" alt="图标">
<svg>...</svg> <!-- 内联 SVG（TabBar 除外） -->
```

### 6. 颜色变量（Colors）

```css
/* ✅ 使用 YDS 颜色变量 */
.my-element {
  background-color: var(--yds-color-neutral-white);
  color: var(--yds-color-neutral-black);
  border-color: var(--yds-color-opacity-black-24);
}

/* ✅ 品牌色 */
.brand-element {
  background-color: var(--yds-color-brand-primary);
  color: var(--yds-color-brand-secondary);
}

/* ❌ 错误：不要硬编码颜色值 */
.my-element {
  background-color: #FFFFFF;
  color: #1B1B1B;
}
```

### 7. 间距变量（Spacing）

```css
/* ✅ 使用 YDS 间距变量 */
.my-container {
  padding: var(--yds-spacing-16);
  margin-bottom: var(--yds-spacing-24);
  gap: var(--yds-spacing-8);
}

/* ❌ 错误：不要硬编码间距 */
.my-container {
  padding: 16px;
  margin-bottom: 24px;
}
```

---

## 📖 快速参考文档

- **设计规范**：`docs/design-standards.md`
- **按钮演示**：`docs/button-demo.html`
- **图标演示**：`docs/icons-demo.html`
- **对话框文档**：`docs/dialog-guide.md`
- **颜色指南**：`docs/colors-guide.md`

---

## 🎨 核心设计规范

### 按钮默认样式
- **默认颜色**：黑色（`yds-button--black`）
- **默认尺寸**：XL（48px，用于主行动按钮）
- **形状**：直角（`border-radius: 0`）

### 容器设计
- **圆角**：直角（`var(--yds-radius-none)` = 0px）
- **阴影**：无阴影（`box-shadow: none`）
- **边框**：原则上不添加边框（`border: none`）

### 栅格系统
- **列数**：12 列均分屏幕（`repeat(12, 1fr)`）
- **间距**：3px（`gap: var(--yds-grid-gap)`）
- **边距**：通过 `.yds-grid__cell-content` 提供 `padding: 0 8px`

### 透明背景色系统（2025-02-02 修复）

**⚠️ 重要：设计系统已修复透明背景色变量，必须使用 rgba 格式的变量！**

**可用变量：**

| 变量名 | 颜色值 | 用途 |
|--------|--------|------|
| `--yds-bg-transp-black-4-pct` | `rgba(27, 27, 27, 0.04)` | 黑色 4% 透明度 |
| `--yds-bg-transp-black-8-pct` | `rgba(27, 27, 27, 0.08)` | 黑色 8% 透明度 |
| `--yds-bg-transp-black-16-pct` | `rgba(27, 27, 27, 0.16)` | 黑色 16% 透明度 |
| `--yds-bg-transp-black-24-pct` | `rgba(27, 27, 27, 0.24)` | 黑色 24% 透明度 |
| `--yds-bg-transp-black-50-pct` | `rgba(27, 27, 27, 0.5)` | 黑色 50% 透明度 |
| `--yds-bg-transp-white-4-pct` | `rgba(255, 255, 255, 0.04)` | 白色 4% 透明度 |
| `--yds-bg-transp-white-8-pct` | `rgba(255, 255, 255, 0.08)` | 白色 8% 透明度 |
| `--yds-bg-transp-white-16-pct` | `rgba(255, 255, 255, 0.16)` | 白色 16% 透明度 |
| `--yds-bg-transp-white-24-pct` | `rgba(255, 255, 255, 0.24)` | 白色 24% 透明度 |
| `--yds-bg-transp-white-50-pct` | `rgba(255, 255, 255, 0.5)` | 白色 50% 透明度 |

**使用示例：**

```css
/* ✅ 正确：使用设计系统透明背景色变量 */
.third-party-icon {
  background-color: var(--yds-bg-transp-black-4-pct);
}

.third-party-icon:active {
  background-color: var(--yds-bg-transp-black-8-pct);
}

/* ❌ 错误：不要直接写 rgba 值 */
.third-party-icon {
  background-color: rgba(27, 27, 27, 0.04);
}
```

**常见使用场景：**
- 第三方登录图标背景（4% 透明黑）
- 按钮禁用状态背景（8% 透明黑）
- 加载中遮罩层（50% 透明黑）
- Hover 效果背景（4-8% 透明黑）

**修复说明（2025-02-02）：**
- **问题**：之前的 `--yds-bg-transp-black-4-pct` 等变量值是纯色 `#1B1B1B`，不是真正的透明色
- **修复**：已将所有透明背景色变量改为 `rgba()` 格式
- **影响范围**：`css/colors.css` 中的所有 `--yds-bg-transp-*` 变量

---

## 💡 使用流程

当在此项目或其子目录中工作时：

1. **自动加载**：本配置会自动生效
2. **优先检查**：优先使用设计系统组件
3. **查阅文档**：不确定时查阅 `docs/` 目录
4. **查看演示**：打开 `docs/*.html` 查看组件示例

---

## 🔗 相关资源

- **Figma 设计稿**：[Vipshop Young Design](https://www.figma.com)
- **组件演示**：`docs/` 目录
- **CSS 文件**：`css/` 目录
- **图标库**：`icons/` 目录

---

**最后更新**：2025-02-02
**维护者**：Claude Code + 用户协作
**版本**：v1.1（添加透明背景色系统修复说明）

**版本历史：**
- v1.0 - 初始版本
- v1.1 - 修复透明背景色变量，添加 `rgba()` 格式的透明背景色变量说明
