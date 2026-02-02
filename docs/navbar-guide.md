# Navbar 导航栏组件

## 概述

Navbar 导航栏是移动端应用中最重要的导航组件，用于页面顶部导航、标题栏、选项卡等场景。支持基础导航栏、搜索导航栏、选项卡导航栏三种类型。

## 特性

- ✅ 三种导航栏类型：基础导航栏、搜索导航栏、选项卡导航栏
- ✅ 支持左侧返回/关闭按钮
- ✅ 支持中间标题区域（支持主标题 + 辅助说明 + 下拉箭头）
- ✅ 支持右侧操作图标和文字按钮
- ✅ 搜索框自适应宽度（根据右侧图标数量）
- ✅ 选项卡支持选中状态（18px Medium + 底部指示器）
- ✅ 基于 Figma 设计规范实现
- ✅ 使用 CSS 变量，支持主题定制
- ✅ 完整的响应式和无障碍支持

## 导航栏结构

### 整体结构

```
┌─────────────────────────────────┐
│   StatusBar (44px)              │  状态栏（可选）
├─────────────────────────────────┤
│   [返回]   标题   [图标][图标]  │  内容区域 (44px)
└─────────────────────────────────┘
```

### 组件层级

```html
<nav class="yds-navbar">
  <!-- 状态栏（可选） -->
  <div class="yds-navbar__statusbar"></div>

  <!-- 内容区域 -->
  <div class="yds-navbar__content">
    <!-- 左侧区域 -->
    <div class="yds-navbar__left">...</div>

    <!-- 中间标题区域（仅基础导航栏） -->
    <div class="yds-navbar__title">...</div>

    <!-- 搜索框（仅搜索导航栏） -->
    <div class="yds-navbar__search-box">...</div>

    <!-- 选项卡（仅选项卡导航栏） -->
    <div class="yds-navbar__tabs">...</div>

    <!-- 右侧区域 -->
    <div class="yds-navbar__right">...</div>
  </div>
</nav>
```

## 尺寸规范

| 区域 | 高度 | 说明 |
|------|------|------|
| StatusBar | 44px | 状态栏（可选） |
| 内容区域 | 44px | 导航栏主体内容 |
| 整体高度 | 88px | 状态栏 + 内容区域 |
| 容器宽度 | 375px | 移动端标准宽度 |

| 元素 | 尺寸 |
|------|------|
| 返回按钮 | 24px × 24px |
| 操作图标 | 24px × 24px |
| 搜索框高度 | 32px |
| 搜索图标 | 16px × 16px |
| 标题文字 | 16px Medium |
| 辅助说明 | 10px Regular |
| 操作文字 | 14px Regular |

## 导航栏类型

### 1. 基础导航栏

用于常规页面顶部导航，包含返回按钮、标题和右侧操作。

**布局特点：**
- 标题绝对定位居中
- 左侧区域和右侧区域正常流布局
- 使用 `.yds-navbar--basic` 类标记

```html
<nav class="yds-navbar yds-navbar--basic">
  <div class="yds-navbar__statusbar"></div>
  <div class="yds-navbar__content">
    <!-- 左侧返回按钮 -->
    <div class="yds-navbar__left">
      <button class="yds-navbar__back" aria-label="返回">
        <img src="../icons/y_icon_line_direction_arrow_left.svg" alt="返回" width="24" height="24">
      </button>
    </div>

    <!-- 中间标题 -->
    <div class="yds-navbar__title">
      <div class="yds-navbar__title-main">页面标题</div>
    </div>

    <!-- 右侧操作 -->
    <div class="yds-navbar__right">
      <button class="yds-navbar__action-icon" aria-label="分享">
        <img src="../icons/y_icon_line_edit_share.svg" alt="分享" width="24" height="24">
      </button>
      <button class="yds-navbar__action-icon" aria-label="更多">
        <img src="../icons/y_icon_line_generality_more.svg" alt="更多" width="24" height="24">
      </button>
    </div>
  </div>
</nav>
```

### 2. 搜索导航栏

用于搜索场景，左侧为搜索框，右侧为操作按钮。

**布局特点：**
- 搜索框占据剩余空间（`flex: 1 0 0`）
- 根据右侧图标数量自适应宽度
- 右侧区域正常流布局

```html
<nav class="yds-navbar">
  <div class="yds-navbar__statusbar"></div>
  <div class="yds-navbar__content">
    <!-- 搜索框 -->
    <div class="yds-navbar__search-box">
      <div class="yds-navbar__search-icon" aria-label="搜索">
        <img src="../icons/y_icon_line_edit_search.svg" alt="搜索" width="16" height="16">
      </div>
      <input type="text" class="yds-navbar__search-input" placeholder="搜索">
    </div>

    <!-- 右侧操作 -->
    <div class="yds-navbar__right">
      <button class="yds-navbar__action-text">取消</button>
    </div>
  </div>
</nav>
```

### 3. 选项卡导航栏

用于多标签切换场景，左侧返回按钮 + 中间选项卡 + 右侧操作。

**布局特点：**
- 选项卡占据剩余空间（`flex: 1 0 0`）
- 选中状态：18px Medium + 底部 3px 指示器
- 未选中状态：14px Regular
- 选项卡间距：24px

```html
<nav class="yds-navbar">
  <div class="yds-navbar__statusbar"></div>
  <div class="yds-navbar__content">
    <!-- 左侧返回按钮 -->
    <div class="yds-navbar__left">
      <button class="yds-navbar__back" aria-label="返回">
        <img src="../icons/y_icon_line_direction_arrow_left.svg" alt="返回" width="24" height="24">
      </button>
    </div>

    <!-- 选项卡 -->
    <div class="yds-navbar__tabs">
      <button class="yds-navbar__tab yds-navbar__tab--active">推荐</button>
      <button class="yds-navbar__tab">热门</button>
      <button class="yds-navbar__tab">最新</button>
    </div>

    <!-- 右侧操作 -->
    <div class="yds-navbar__right">
      <button class="yds-navbar__action-icon" aria-label="更多">
        <img src="../icons/y_icon_line_generality_more.svg" alt="更多" width="24" height="24">
      </button>
    </div>
  </div>
</nav>
```

## CSS 类名说明

### 容器类

| 类名 | 说明 |
|------|------|
| `.yds-navbar` | 导航栏容器（必需） |
| `.yds-navbar--basic` | 基础导航栏（有标题） |
| `.yds-navbar--compact` | 紧凑型导航栏（44px） |
| `.yds-navbar--large` | 大标题导航栏（56px） |
| `.yds-navbar--borderless` | 无边框导航栏 |
| `.yds-navbar--fixed` | 固定顶部导航栏 |

### 区域类

| 类名 | 说明 |
|------|------|
| `.yds-navbar__statusbar` | 状态栏区域 |
| `.yds-navbar__content` | 内容区域 |
| `.yds-navbar__left` | 左侧区域 |
| `.yds-navbar__title` | 中间标题区域 |
| `.yds-navbar__search-box` | 搜索框 |
| `.yds-navbar__tabs` | 选项卡容器 |
| `.yds-navbar__right` | 右侧区域 |

### 元素类

| 类名 | 说明 |
|------|------|
| `.yds-navbar__back` | 返回按钮 |
| `.yds-navbar__close` | 关闭按钮 |
| `.yds-navbar__title-main` | 主标题 |
| `.yds-navbar__title-sub` | 辅助说明 |
| `.yds-navbar__title-arrow` | 下拉箭头 |
| `.yds-navbar__search-icon` | 搜索图标 |
| `.yds-navbar__search-input` | 搜索输入框 |
| `.yds-navbar__tab` | 选项卡按钮 |
| `.yds-navbar__tab--active` | 选中状态的选项卡 |
| `.yds-navbar__action-icon` | 操作图标按钮 |
| `.yds-navbar__action-text` | 操作文字按钮 |

### 状态类

| 类名 | 说明 |
|------|------|
| `.yds-navbar__tab--active` | 选项卡选中状态 |

## 颜色规范

| 元素 | 属性 | 颜色值 |
|------|------|--------|
| 背景色 | `--yds-bg-default-white` | #FFFFFF |
| 边框色 | `--yds-border-default-tertiary` | rgba(27, 27, 27, 0.08) |
| 标题文字 | `--yds-text-default-default` | #1B1B1B |
| 辅助说明 | `--yds-text-default-tertiary` | #7E828C |
| 操作文字 | `--yds-text-default-default` | #1B1B1B |
| 搜索框背景 | `--yds-bg-default-gray` | #F4F5F7 |
| 搜索占位符 | `--yds-text-default-disabled` | #B9BBBF |
| 选项卡选中 | `--yds-text-default-default` | #1B1B1B |
| 选项卡未选中 | `--yds-text-default-secondary` | #4E4F54 |
| 指示器背景 | `--yds-bg-brand-default` | #FF77E7 |

## 引入 CSS

```html
<link rel="stylesheet" href="/path/to/young-design-system/css/index.css">
```

或者在 CSS 中导入：

```css
@import '/path/to/young-design-system/css/index.css';
```

## JavaScript 交互

### 选项卡切换

```javascript
// 选项卡切换交互
document.querySelectorAll('.yds-navbar__tab').forEach(tab => {
  tab.addEventListener('click', function() {
    const tabs = this.closest('.yds-navbar__tabs');
    tabs.querySelectorAll('.yds-navbar__tab').forEach(t => {
      t.classList.remove('yds-navbar__tab--active');
    });
    this.classList.add('yds-navbar__tab--active');
  });
});
```

### 搜索框交互

```javascript
// 搜索框输入监听
const searchInput = document.querySelector('.yds-navbar__search-input');
searchInput.addEventListener('input', function(e) {
  const searchTerm = e.target.value;
  console.log('搜索:', searchTerm);
  // 执行搜索逻辑
});

// 取消按钮
const cancelButton = document.querySelector('.yds-navbar__action-text');
cancelButton.addEventListener('click', function() {
  searchInput.value = '';
  // 清空搜索或返回上一页
});
```

## 设计指南

### 何时使用基础导航栏

- ✅ **常规页面**：大部分内容页、详情页
- ✅ **需要标题**：页面标题需要明确展示
- ✅ **操作按钮**：右侧需要分享、更多等操作

**示例：** 个人中心、设置页面、商品详情

### 何时使用搜索导航栏

- ✅ **搜索场景**：商品搜索、内容搜索
- ✅ **筛选场景**：需要输入关键词或条件
- ✅ **快速查找**：提供便捷的搜索入口

**示例：** 搜索页、筛选页、发现页

### 何时使用选项卡导航栏

- ✅ **分类浏览**：内容分类、标签切换
- ✅ **状态切换**：全部/未读/已读
- ✅ **时间维度**：推荐/最新/热门

**示例：** 首页分类、消息列表、订单状态

### 使用建议

#### ✅ 推荐做法

1. **清晰的标题**：标题应该准确描述页面内容
   ```
   ✅ 页面标题：商品详情
   ```

2. **合理的操作按钮**：右侧操作不超过 3 个图标
   ```
   ✅ [返回]  商品详情  [分享] [更多]
   ```

3. **选项卡数量适中**：建议 2-4 个选项卡
   ```
   ✅ 推荐 | 热门 | 最新
   ```

4. **搜索框自适应**：根据右侧图标数量自动调整宽度
   ```
   ✅ [搜索框........................] [取消]
   ✅ [搜索框...................] [分享]
   ```

#### ❌ 避免做法

1. **避免标题过长**：超过 10 个字建议省略
   ```
   ❌ 这是一个非常非常非常长的页面标题
   ✅ 这是一个非常非...
   ```

2. **避免过多操作**：右侧超过 3 个图标建议使用"更多"
   ```
   ❌ [返回] 标题 [分享] [收藏] [点赞] [评论]
   ✅ [返回] 标题 [更多]
   ```

3. **避免选项卡过多**：超过 5 个建议使用下拉选择
   ```
   ❌ 选项卡1 | 选项卡2 | ... | 选项卡8
   ✅ 使用下拉选择器
   ```

4. **避免混用导航栏类型**：不要在同一页面混用不同类型
   ```
   ❌ 基础导航栏 + 选项卡导航栏
   ✅ 只使用一种导航栏类型
   ```

### 间距规范

- **内容区域内边距**：上下 6px，左右 12px
- **元素间距**：12px（通过 `gap: 12px` 实现）
- **图标间距**：12px
- **选项卡间距**：24px

### 可访问性

#### 键盘导航

- `Tab`：聚焦到下一个可交互元素
- `Enter` / `Space`：激活按钮或选项卡
- `Escape`：取消搜索或关闭

#### ARIA 属性

```html
<!-- 返回按钮 -->
<button class="yds-navbar__back" aria-label="返回">
  <img src="../icons/y_icon_line_direction_arrow_left.svg" alt="返回" width="24" height="24">
</button>

<!-- 搜索框 -->
<div class="yds-navbar__search-box" role="search">
  <div class="yds-navbar__search-icon" aria-label="搜索">
    <img src="../icons/y_icon_line_edit_search.svg" alt="搜索" width="16" height="16">
  </div>
  <input type="text" class="yds-navbar__search-input" placeholder="搜索" aria-label="搜索内容">
</div>

<!-- 选项卡 -->
<div class="yds-navbar__tabs" role="tablist">
  <button class="yds-navbar__tab yds-navbar__tab--active" role="tab" aria-selected="true">推荐</button>
  <button class="yds-navbar__tab" role="tab" aria-selected="false">热门</button>
  <button class="yds-navbar__tab" role="tab" aria-selected="false">最新</button>
</div>
```

## CSS 变量

### 主题定制

可以通过覆盖 CSS 变量来自定义样式：

```css
:root {
  /* 背景颜色 */
  --yds-bg-default-white: #FFFFFF;
  --yds-bg-default-gray: #F4F5F7;
  --yds-bg-brand-default: #FF77E7;

  /* 文字颜色 */
  --yds-text-default-default: #1B1B1B;
  --yds-text-default-secondary: #4E4F54;
  --yds-text-default-tertiary: #7E828C;
  --yds-text-default-disabled: #B9BBBF;

  /* 边框颜色 */
  --yds-border-default-tertiary: rgba(27, 27, 27, 0.08);

  /* 间距 */
  --yds-spacing-12: 12px;
  --yds-spacing-8: 8px;
  --yds-spacing-4: 4px;

  /* 字体 */
  --yds-font-family-base: PingFang SC, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif;
  --yds-font-size-10: 10px;
  --yds-font-size-14: 14px;
  --yds-font-size-16: 16px;
  --yds-font-size-18: 18px;
  --yds-font-weight-regular: 400;
  --yds-font-weight-medium: 500;
  --yds-line-height-18: 18px;
  --yds-line-height-20: 20px;
  --yds-line-height-22: 22px;
}
```

## 响应式

导航栏设计为移动端专用（375px 标准宽度），在桌面端展示时建议：

```css
@media (min-width: 768px) {
  /* 桌面端居中显示 */
  .yds-navbar {
    max-width: 375px;
    margin: 0 auto;
  }
}
```

## 变体

### 紧凑型导航栏

```html
<nav class="yds-navbar yds-navbar--compact">
  <!-- 高度 44px，无状态栏 -->
</nav>
```

### 大标题导航栏

```html
<nav class="yds-navbar yds-navbar--large">
  <!-- 内容区域高度 56px -->
</nav>
```

### 无边框导航栏

```html
<nav class="yds-navbar yds-navbar--borderless">
  <!-- 无底部边框 -->
</nav>
```

### 固定顶部导航栏

```html
<nav class="yds-navbar yds-navbar--fixed">
  <!-- 固定在页面顶部，z-index: 100 -->
</nav>
```

## 样式规范

### 固定定位的正确实现

**重要规范：** 使用固定定位时，导航栏和 TabBar 必须贴合屏幕左右边框，不得使用居中布局。

**✅ 正确实现：**
```css
.yds-navbar--fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
```

**❌ 错误实现（会导致左右间距）：**
```css
.yds-navbar--fixed {
  position: fixed;
  top: 0;
  left: 50%;           /* ❌ 不要使用居中 */
  transform: translateX(-50%);  /* ❌ 不要使用居中 */
  max-width: 375px;    /* ❌ 不要限制最大宽度 */
  width: 100%;
}
```

**原因：**
- 移动端导航栏应该占满整个屏幕宽度
- 使用 `left: 0; right: 0;` 实现全宽布局
- 在任何屏幕尺寸下都保持贴合边框
- 避免使用居中布局导致左右间距

## 暗色模式

组件支持暗色模式，自动适配暗色主题：

```css
[data-theme="dark"] {
  --yds-bg-default-white: #1B1B1B;
  --yds-bg-default-gray: #2A2A2A;
  --yds-text-default-default: #FFFFFF;
  --yds-text-default-secondary: #B9BBBF;
  /* ... 其他暗色主题变量 */
}
```

## 演示

查看完整演示：[navbar-demo.html](./navbar-demo.html)

## 更新日志

### v2.1.0 (2025-01-31)

- ⚠️ **重要更新**：明确规范固定定位时 Navbar 必须贴合屏幕左右边框
- 📝 新增"固定定位的正确实现"章节
- 🐛 修复固定定位样式，确保使用 `left: 0; right: 0;`
- ✅ 确保 Navbar 在任何屏幕尺寸下都保持全宽显示
- 📚 更新文档，说明避免使用居中布局导致左右间距

**重要提示：**
- 使用固定定位时，Navbar 必须使用 `left: 0; right: 0;`
- **不要**使用 `left: 50%; transform: translateX(-50%);` 居中布局
- **不要**限制 `max-width`，保持全宽显示
- 避免在桌面端出现左右间距

### v2.0.0 (2025-01-31)

- ✅ 新增 Navbar 导航栏组件
- ✅ 支持三种导航栏类型：基础、搜索、选项卡
- ✅ 支持左侧返回/关闭按钮
- ✅ 支持中间标题区域（主标题 + 辅助说明 + 下拉箭头）
- ✅ 支持右侧操作图标和文字按钮
- ✅ 搜索框自适应宽度
- ✅ 选项卡支持选中状态
- ✅ 基于 Figma 设计规范实现
- ✅ 使用 CSS 变量，支持主题定制
- ✅ 支持暗色模式
- ✅ 完整的无障碍支持

## 相关资源

- [Figma 设计稿](https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/)
- [Button 按钮](./button-guide.md)
- [Dialog 对话框](./dialog-guide.md)
- [Colors 颜色系统](./colors-guide.md)
