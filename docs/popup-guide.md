# Popup 弹出层组件使用指南

## 概述

Popup 弹出层是从屏幕边缘滑出的大型浮层组件，适用于展示更多内容、表单、菜单等场景。

### 与 Dialog 对话框的区别

| 特性 | Popup 弹出层 | Dialog 对话框 |
|------|------------|--------------|
| 位置 | 从屏幕边缘弹出 | 屏幕中央显示 |
| 尺寸 | 占据较大屏幕空间 | 固定宽度 280px |
| 用途 | 展示复杂内容、表单、菜单 | 确认、警告、简单提示 |
| 方向 | 支持四个方向 | 仅居中 |
| 导航栏 | 可选 | 无 |

## 组件结构

```
.yds-popup-overlay (蒙层)
└── .yds-popup (弹出层容器)
    ├── .yds-popup__navbar (导航栏，可选)
    │   ├── .yds-popup__back (左侧返回按钮，用于二级页面)
    │   ├── .yds-popup__title (标题)
    │   └── .yds-popup__close (右侧关闭按钮，用于一级页面)
    ├── .yds-popup__content (内容区域)
    └── .yds-popup__footer (底部操作栏，可选)
```

## 设计规范

### 1. 蒙层（Overlay）

- **背景色**: `rgba(27, 27, 27, 0.6)` (60% 黑色透明)
- **层级**: `z-index: 9999`
- **动画**: 淡入 0.2s

### 2. 弹出层容器

**重要：年轻版设计系统采用直角设计，所有弹出层均为直角（无圆角）**

#### 底部弹出（默认）
- **位置**: 固定在底部
- **宽度**: 100%（最小宽度 375px）
- **圆角**: 直角 `border-radius: 0`
- **动画**: 从下向上滑入 0.3s

#### 顶部弹出
- **位置**: 固定在顶部
- **宽度**: 100%（最小宽度 375px）
- **圆角**: 直角 `border-radius: 0`
- **动画**: 从上向下滑入 0.3s

#### 左侧弹出
- **位置**: 固定在左侧
- **宽度**: 300px（固定，不响应屏幕宽度）
- **圆角**: 直角 `border-radius: 0`
- **动画**: 从左向右滑入 0.3s

#### 右侧弹出
- **位置**: 固定在右侧
- **宽度**: 300px（固定，不响应屏幕宽度）
- **圆角**: 直角 `border-radius: 0`
- **动画**: 从右向左滑入 0.3s

### 3. 导航栏（可选）

- **左右内边距**: `0 12px`
- **边框**: 底部 1px `rgba(27, 27, 27, 0.08)`
- **直角设计**: 无圆角 `border-radius: 0`

#### 导航栏高度规则

**根据是否有副标题自动调整高度：**

| 情况 | 高度 | 说明 |
|------|------|------|
| **只有主标题** | 54px | 固定高度 |
| **有主副标题** | 58px | 固定高度，自动增加 4px |

**实现方式**：CSS 自动检测 `.yds-popup__title-sub` 的存在并调整高度。

#### 导航栏按钮使用规则

**重要：导航栏按钮使用规范**

| 按钮配置 | 使用场景 | 说明 |
|---------|---------|------|
| **仅右侧关闭** | 一级页面、独立弹窗 | 默认配置，最常用 |
| **左侧返回 + 右侧关闭** | 二级页面、详情页、筛选页 | 左侧返回必须和右侧关闭同时存在 |

**核心规则**：
1. ✅ **默认使用右侧关闭按钮**（独立使用）
2. ✅ **左侧返回必须和右侧关闭同时存在**（不能单独使用左侧返回）
3. ❌ **禁止单独使用左侧返回按钮**（必须搭配右侧关闭）

**右侧关闭按钮** (`.yds-popup__close`)：
- 位置：右侧绝对定位，距离右侧 12px
- 图标：`y_icon_line_edit_close.svg`
- 尺寸：22px × 22px
- 点击区域：32px × 32px（便于点击）
- 使用场景：所有弹窗的默认关闭方式

**左侧返回按钮** (`.yds-popup__back`)：
- 位置：左侧绝对定位，距离左侧 12px
- 图标：`y_icon_line_direction_arrow_left.svg`
- 尺寸：22px × 22px
- 使用场景：二级页面、详情页、筛选页等
- **重要**：必须和右侧关闭按钮同时使用

**标题宽度自适应**：
- 无按钮：280px
- 仅右侧关闭：200px（默认）
- 左侧返回 + 右侧关闭：160px

#### 标题样式
- **主标题**:
  - 字体: PingFang SC Medium
  - 字号: 16px
  - 行高: 20px
  - 颜色: `#1B1B1B` (var(--yds-text-default-default))

- **副标题**:
  - 字体: PingFang SC Regular
  - 字号: 12px
  - 行高: 16px
  - 颜色: `#7E828C` (var(--yds-text-default-tertiary))

### 4. 内容区域

- **背景色**: `#FFFFFF` (var(--yds-bg-default-white))
- **滚动条**: 自定义样式（宽度 4px）
- **弹性**: 自动填充剩余空间

### 5. 底部操作栏（可选）

底部操作栏用于放置确认、取消等操作按钮。

#### 结构

```
.yds-popup__footer
├── .yds-popup__footer-buttons (按钮容器，在上)
│   ├── .yds-popup__button (按钮)
│   └── .yds-popup__button (按钮)
└── .yds-popup__footer-divider (可选，底部分隔线，在下)
```

#### Footer 容器样式

- **内边距**：`0 8px 8px 8px`（上0，左右8px，下8px）
  - **重要**：左右 8px 确保按钮距离屏幕边框有间距
- **背景色**：`#FFFFFF`
- **顶部边框**：1px `rgba(27, 27, 27, 0.08)`
- **宽度**：100%（填满整个弹出层宽度）

#### 按钮容器样式

- **内边距**：`12px 0`（上下各12px，左右0）
  - 上 12px：距离 footer 顶部边框
  - 下 12px：按钮和指示器之间的间距
- **布局**：flex 水平排列，等宽分配
- **按钮间距**：gap: 12px
- **对齐**：居中对齐

#### 按钮样式规范

**按钮尺寸**：
- 高度：48px（`min-height`）
- 内边距：`14px 20px`
- 字体：15px，行高 20px
- **Flex 设置**：`flex: 1 1 0`（确保等宽分配）
- **文本溢出**：`overflow: hidden; text-overflow: ellipsis`

**按钮类型**：

| 类型 | 背景色 | 文字颜色 | 说明 |
|------|-------|---------|------|
| **次按钮** | `rgba(27, 27, 27, 0.04)` | `#1B1B1B` | 灰色背景，黑色文字 |
| **主按钮** | `#1B1B1B` | `#FFFFFF` | 黑色背景，白色文字 |

**底部分隔线**（可选）：
- 宽度：135px
- 高度：5px
- 颜色：`rgba(27, 27, 27, 0.6)`（60% 黑色透明）
- 圆角：100px（完全圆角）
- 位置：居中，距离底部 8px
- 用途：视觉装饰，表示可拖拽或可滚动

#### 完整布局结构

```
┌─────────────────────────────────────┐
│   .yds-popup__footer (100% 宽度)    │
│   padding: 0 8px 8px 8px            │
│   ┌─────────────────────────────┐  │
│   │ .yds-popup__footer-buttons  │  │
│   │ padding: 12px 0             │  │
│   │ ┌─────────┐    ┌─────────┐  │  │
│   │ │  次按钮  │    │  主按钮  │  │  │
│   │ │ flex: 1 │    │ flex: 1 │  │  │
│   │ └─────────┘    └─────────┘  │  │
│   └─────────────────────────────┘  │
│           ◇ (指示器，距底部 8px)    │
└─────────────────────────────────────┘
```

#### 关键设计要点

1. **左右间距**：Footer 的左右 padding (8px) 确保按钮不贴边
2. **按钮自适应**：`flex: 1 1 0` 确保按钮等宽分配屏幕空间
3. **按钮间距**：按钮容器 padding 12px + 指示器 margin 8px = 20px 总间距
4. **元素顺序**：按钮在上，指示器在下

## 使用示例

### 1. 底部弹出 - 右侧关闭按钮（默认，一级页面）

**使用场景**：独立弹窗、通知、快捷操作等直接关闭的场景

```html
<div class="yds-popup-overlay">
  <div class="yds-popup yds-popup--bottom">
    <!-- 导航栏 -->
    <div class="yds-popup__navbar">
      <div class="yds-popup__title">
        <div class="yds-popup__title-main">独立弹窗</div>
      </div>
      <button class="yds-popup__close">
        <img src="icons/y_icon_line_edit_close.svg" alt="关闭">
      </button>
    </div>

    <!-- 内容区域 -->
    <div class="yds-popup__content">
      <!-- 你的内容 -->
    </div>
  </div>
</div>
```

### 2. 底部弹出 - 左侧返回 + 右侧关闭（二级页面）

**使用场景**：详情页、筛选页、设置页等需要返回上层的场景

```html
<div class="yds-popup-overlay">
  <div class="yds-popup yds-popup--bottom">
    <!-- 导航栏 -->
    <div class="yds-popup__navbar">
      <button class="yds-popup__back">
        <img src="icons/y_icon_line_direction_arrow_left.svg" alt="返回">
      </button>
      <div class="yds-popup__title">
        <div class="yds-popup__title-main">详情页</div>
        <div class="yds-popup__title-sub">副标题说明</div>
      </div>
      <button class="yds-popup__close">
        <img src="icons/y_icon_line_edit_close.svg" alt="关闭">
      </button>
    </div>

    <!-- 内容区域 -->
    <div class="yds-popup__content">
      <!-- 你的内容 -->
    </div>
  </div>
</div>
```

### 3. 右侧弹出 - 两个按钮（侧边栏）

```html
<div class="yds-popup-overlay">
  <div class="yds-popup yds-popup--right">
    <!-- 导航栏 -->
    <div class="yds-popup__navbar">
      <button class="yds-popup__back">
        <img src="icons/y_icon_line_direction_arrow_left.svg" alt="返回">
      </button>
      <div class="yds-popup__title">
        <div class="yds-popup__title-main">设置</div>
      </div>
      <button class="yds-popup__close">
        <img src="icons/y_icon_line_edit_close.svg" alt="关闭">
      </button>
    </div>

    <!-- 内容区域 -->
    <div class="yds-popup__content">
      <!-- 你的内容 -->
    </div>

    <!-- 底部操作栏 -->
    <div class="yds-popup__footer">
      <button class="yds-button yds-button--solid-light yds-button--white yds-button--large">
        取消
      </button>
      <button class="yds-button yds-button--solid-dark yds-button--black yds-button--large">
        确认
      </button>
    </div>
  </div>
</div>
```

### 4. 底部弹出 - 带底部操作栏（带分隔线）

**使用场景**：表单提交、确认操作等需要底部按钮的场景

```html
<div class="yds-popup-overlay">
  <div class="yds-popup yds-popup--bottom">
    <!-- 导航栏 -->
    <div class="yds-popup__navbar">
      <button class="yds-popup__back">
        <img src="icons/y_icon_line_direction_arrow_left.svg" alt="返回">
      </button>
      <div class="yds-popup__title">
        <div class="yds-popup__title-main">筛选</div>
      </div>
      <button class="yds-popup__close">
        <img src="icons/y_icon_line_edit_close.svg" alt="关闭">
      </button>
    </div>

    <!-- 内容区域 -->
    <div class="yds-popup__content">
      <!-- 筛选表单内容 -->
    </div>

    <!-- 底部操作栏（带按钮和分隔线） -->
    <div class="yds-popup__footer">
      <!-- 按钮容器 -->
      <div class="yds-popup__footer-buttons">
        <button class="yds-popup__button yds-popup__button--secondary">
          重置
        </button>
        <button class="yds-popup__button yds-popup__button--primary">
          确定
        </button>
      </div>

      <!-- 可选的分隔线（视觉装饰，在最底部） -->
      <div class="yds-popup__footer-divider"></div>
    </div>
  </div>
</div>
```

### 5. 左侧弹出 - 右侧关闭按钮（侧边菜单）

```html
<div class="yds-popup-overlay">
  <div class="yds-popup yds-popup--left">
    <!-- 导航栏 -->
    <div class="yds-popup__navbar">
      <div class="yds-popup__title">
        <div class="yds-popup__title-main">菜单</div>
      </div>
      <button class="yds-popup__close">
        <img src="icons/y_icon_line_edit_close.svg" alt="关闭">
      </button>
    </div>

    <!-- 内容区域 -->
    <div class="yds-popup__content">
      <!-- 你的内容 -->
    </div>
  </div>
</div>
```

### 6. 左侧弹出（侧边栏菜单）

**使用场景**：侧边导航菜单，不需要导航栏

```html
<div class="yds-popup-overlay">
  <div class="yds-popup yds-popup--left">
    <div class="yds-popup__content">
      <!-- 菜单内容 -->
      <nav>
        <a href="#">首页</a>
        <a href="#">分类</a>
        <a href="#">购物车</a>
        <a href="#">我的</a>
      </nav>
    </div>
  </div>
</div>
```

### 7. 紧凑型导航栏（可选变体）

```html
<div class="yds-popup-overlay">
  <div class="yds-popup yds-popup--bottom">
    <div class="yds-popup__navbar yds-popup__navbar--compact">
      <!-- 导航栏内容 -->
    </div>
    <div class="yds-popup__content">
      <!-- 内容 -->
    </div>
  </div>
</div>
```

## JavaScript 控制

### 打开弹出层

```javascript
function openPopup(direction = 'bottom') {
  // 创建蒙层
  const overlay = document.createElement('div');
  overlay.className = 'yds-popup-overlay';

  // 创建弹出层
  const popup = document.createElement('div');
  popup.className = `yds-popup yds-popup--${direction}`;

  // 添加内容
  popup.innerHTML = `
    <div class="yds-popup__navbar">
      <button class="yds-popup__back">
        <img src="icons/y_icon_line_direction_arrow_left.svg" alt="返回">
      </button>
      <div class="yds-popup__title">
        <div class="yds-popup__title-main">标题</div>
      </div>
    </div>
    <div class="yds-popup__content">
      <!-- 内容 -->
    </div>
  `;

  // 添加到 DOM
  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // 点击蒙层关闭
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closePopup(overlay, popup);
    }
  });

  // 返回按钮关闭
  const backBtn = popup.querySelector('.yds-popup__back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      closePopup(overlay, popup);
    });
  }

  return overlay;
}
```

### 关闭弹出层（带退场动画）

```javascript
function closePopup(overlay, popup) {
  // 添加关闭动画类
  popup.classList.add('yds-popup--closing');

  // 等待退场动画结束后移除（250ms 匹配 CSS 动画时长）
  setTimeout(() => {
    if (overlay.parentNode) {
      document.body.removeChild(overlay);
    }
  }, 250);
}
```

**退场动画说明**：
- 底部弹出：向下滑出屏幕（`translateY(100%)`）
- 顶部弹出：向上滑出屏幕（`translateY(-100%)`）
- 左侧弹出：向左滑出屏幕（`translateX(-100%)`）
- 右侧弹出：向右滑出屏幕（`translateX(100%)`）
- 动画时长：250ms
- 缓动函数：`ease-in`（加速退出）
- 透明度：同步降低到 0.8

### React Hook 示例

```jsx
import { useState, useEffect } from 'react';
import '/Users/linyazhou/young-design-system/css/popup.css';

function usePopup(direction = 'bottom') {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const open = (content) => {
    setContent(content);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const PopupComponent = () => {
    if (!isOpen) return null;

    const handleClose = (e) => {
      if (e.target.classList.contains('yds-popup-overlay')) {
        close();
      }
    };

    return (
      <div className="yds-popup-overlay" onClick={handleClose}>
        <div className={`yds-popup yds-popup--${direction}`}>
          {content}
        </div>
      </div>
    );
  };

  return { open, close, PopupComponent };
}

// 使用示例
function App() {
  const { open, close, PopupComponent } = usePopup('bottom');

  return (
    <>
      <button onClick={() => open(
        <>
          <div className="yds-popup__navbar">
            <button className="yds-popup__back" onClick={close}>
              <img src="icons/y_icon_line_direction_arrow_left.svg" alt="返回" />
            </button>
            <div className="yds-popup__title">
              <div className="yds-popup__title-main">标题</div>
            </div>
          </div>
          <div className="yds-popup__content">
            <p>内容区域</p>
          </div>
        </>
      )}>
        打开弹出层
      </button>
      <PopupComponent />
    </>
  );
}
```

## 响应式设计

### 移动端（< 768px）
- 左/右侧弹出层宽度调整为 80%，最大 300px

### 小屏移动端（< 480px）
- 左/右侧弹出层占满全宽，去除圆角

## 可访问性

### 键盘导航
- **ESC 键**: 关闭弹出层
- **Tab 键**: 在弹出层内容中导航

### ARIA 属性

```html
<div class="yds-popup-overlay" role="dialog" aria-modal="true">
  <div class="yds-popup yds-popup--bottom" aria-labelledby="popup-title">
    <div class="yds-popup__navbar">
      <button class="yds-popup__back" aria-label="关闭">
        <img src="icons/y_icon_line_direction_arrow_left.svg" alt="返回">
      </button>
      <div class="yds-popup__title">
        <div class="yds-popup__title-main" id="popup-title">标题</div>
      </div>
    </div>
    <div class="yds-popup__content">
      <!-- 内容 -->
    </div>
  </div>
</div>
```

## 最佳实践

### 1. 导航栏按钮使用（重要）
- ✅ **默认使用右侧关闭按钮**（一级页面、独立弹窗）
- ✅ **左侧返回必须搭配右侧关闭**（二级页面）
- ❌ **禁止单独使用左侧返回按钮**
- ✅ 点击蒙层、关闭按钮、返回按钮或按 ESC 键均可关闭

### 2. 使用场景
- ✅ 展示表单（如筛选、搜索）
- ✅ 展示详细内容（如商品详情、文章）
- ✅ 侧边菜单导航（左侧或右侧）
- ✅ 设置面板（右侧）
- ❌ 简单确认操作（应使用 Dialog）

### 3. 内容建议
- 内容高度不超过屏幕高度的 80%
- 避免在弹出层内再嵌套弹出层
- 提供明确的关闭操作

### 4. 性能优化
- 内容过多时使用虚拟滚动
- 图片使用懒加载
- 避免在弹出层中执行耗时操作

### 5. 用户体验
- 支持多种关闭方式（蒙层、关闭按钮、返回按钮、ESC 键）
- 流畅的入场和退场动画（0.3s 入场，0.25s 退场）
- 侧边栏保持固定宽度，不填满整个屏幕

## 设计 Token 映射

```css
/* 导航栏高度 */
--yds-popup-navbar-height: 54px;           /* 只有主标题 */
--yds-popup-navbar-height-with-subtitle: 58px;  /* 有主副标题 */

/* 侧边栏宽度 */
--yds-popup-sidebar-width: 300px;

/* 蒙层 */
--yds-popup-overlay-bg: rgba(27, 27, 27, 0.6);
--yds-popup-overlay-z-index: 9999;

/* 弹出层 */
--yds-popup-bg: #FFFFFF;
--yds-popup-z-index: 10000;

/* 导航栏边框 */
--yds-popup-navbar-border: rgba(27, 27, 27, 0.08);

/* 动画时长 */
--yds-popup-animation-enter: 0.3s;
--yds-popup-animation-exit: 0.25s;
--yds-popup-ease-enter: ease-out;
--yds-popup-ease-exit: ease-in;

/* 文字颜色 */
--yds-text-default-default: #1B1B1B;
--yds-text-default-tertiary: #7E828C;
```

## Figma 设计参考

- **组件名称**: popup 弹出层
- **Node ID**: 6907:65115
- **设计文件**: 年轻版设计系统 V2.0
- **方向**: 支持底部、顶部、左侧、右侧四个方向
- **包含**: 蒙层、导航栏、内容区域、底部操作栏

## 相关组件

- [Dialog 对话框](./dialog-guide.md) - 居中显示的小型确认对话框
- [Navbar 导航栏](./navbar-guide.md) - 顶部导航栏组件
- [Button 按钮](./button-demo.html) - 按钮组件
- [Toast 提示框](./toast-demo.html) - 轻量级提示

## 更新日志

### 2025-02-02
- 根据 Figma 设计创建 Popup 组件
- 支持四个方向：底部、顶部、左侧、右侧
- 添加可选导航栏和底部操作栏
- 添加响应式设计支持
- **2025-02-02 更新**：
  - ✅ 统一采用直角设计（所有弹出层 border-radius: 0）
  - ✅ 优化导航栏高度规则：54px（主标题）/ 58px（主副标题）
  - ✅ 明确导航栏按钮使用规范：默认右侧关闭，左侧返回必须搭配右侧关闭
  - ✅ 左右侧弹出层保持固定 300px 宽度，不响应屏幕宽度
  - ✅ 添加流畅的反向退场过渡动画（0.25s ease-in）
  - ✅ 移除不合理的响应式设置
