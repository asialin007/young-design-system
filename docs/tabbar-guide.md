# TabBar 底部标签栏组件

## 概述

TabBar 底部标签栏是移动端应用中重要的导航组件，用于页面底部导航、主要功能切换等场景。支持 2-5 个标签，每个标签包含图标和文字，底部带有主页指示器。

## 特性

- ✅ 支持 2-5 个标签
- ✅ 标签项包含图标和文字
- ✅ 选中文字使用 Text/Brand/Default (#E52EC5)
- ✅ 选中图标使用 Icon/Brand/Default (#F74AD9)
- ✅ 底部安全区域（主页指示器）
- ✅ 基于 Figma 设计规范实现
- ✅ 使用 CSS 变量，支持主题定制
- ✅ 纯 CSS 实现，无 JavaScript 依赖

## 尺寸规范

| 区域 | 高度 | 说明 |
|------|------|------|
| 标签内容区域 | 49px | 包含图标和文字 |
| 安全区域 | 34px | 主页指示器区域 |
| 整体高度 | 83px | 标签区域 + 安全区域 |
| 容器宽度 | 100% / 100vw | 填充屏幕宽度，自适应 |

| 元素 | 尺寸 | 说明 |
|------|------|------|
| 标签图标 | 22px × 22px | 图标容器尺寸 |
| 标签文字 | 10px Regular | 字体大小 |
| 图文间距 | 3px | 图标和文字之间的间距 |
| 左右内边距 | 16px | 标签项左右内边距 |
| 上下内边距 | 6px | 标签项上下内边距 |

| 底部指示器 | 尺寸 | 说明 |
|-----------|------|------|
| 宽度 | 135px | 主页指示器宽度 |
| 高度 | 5px | 主页指示器高度 |
| 距底部 | 8px | 主页指示器距离底部 |
| 圆角 | 100px | 完全圆角 |

## TabBar 结构

```html
<nav class="yds-tabbar">
  <!-- 标签内容区域 -->
  <div class="yds-tabbar__content">
    <!-- 标签项 1 -->
    <button class="yds-tabbar__item yds-tabbar__item--active">
      <div class="yds-tabbar__icon">
        <img src="icon.svg" alt="">
      </div>
      <span class="yds-tabbar__label">首页</span>
    </button>

    <!-- 标签项 2 -->
    <button class="yds-tabbar__item">
      <div class="yds-tabbar__icon">
        <img src="icon.svg" alt="">
      </div>
      <span class="yds-tabbar__label">发现</span>
    </button>

    <!-- 更多标签项... -->
  </div>

  <!-- 底部安全区域 -->
  <div class="yds-tabbar__safe-area">
    <div class="yds-tabbar__indicator"></div>
  </div>
</nav>
```

## 使用方法

### HTML 结构

#### 2个标签

```html
<nav class="yds-tabbar">
  <div class="yds-tabbar__content">
    <button class="yds-tabbar__item yds-tabbar__item--active" aria-label="首页">
      <div class="yds-tabbar__icon">
        <img src="home.svg" alt="首页">
      </div>
      <span class="yds-tabbar__label">首页</span>
    </button>
    <button class="yds-tabbar__item" aria-label="我的">
      <div class="yds-tabbar__icon">
        <img src="profile.svg" alt="我的">
      </div>
      <span class="yds-tabbar__label">我的</span>
    </button>
  </div>
  <div class="yds-tabbar__safe-area">
    <div class="yds-tabbar__indicator"></div>
  </div>
</nav>
```

#### 3个标签

```html
<nav class="yds-tabbar">
  <div class="yds-tabbar__content">
    <button class="yds-tabbar__item yds-tabbar__item--active" aria-label="首页">
      <div class="yds-tabbar__icon">
        <img src="home.svg" alt="首页">
      </div>
      <span class="yds-tabbar__label">首页</span>
    </button>
    <button class="yds-tabbar__item" aria-label="发现">
      <div class="yds-tabbar__icon">
        <img src="discover.svg" alt="发现">
      </div>
      <span class="yds-tabbar__label">发现</span>
    </button>
    <button class="yds-tabbar__item" aria-label="我的">
      <div class="yds-tabbar__icon">
        <img src="profile.svg" alt="我的">
      </div>
      <span class="yds-tabbar__label">我的</span>
    </button>
  </div>
  <div class="yds-tabbar__safe-area">
    <div class="yds-tabbar__indicator"></div>
  </div>
</nav>
```

#### 4个标签

```html
<nav class="yds-tabbar">
  <div class="yds-tabbar__content">
    <button class="yds-tabbar__item yds-tabbar__item--active" aria-label="首页">
      <div class="yds-tabbar__icon">
        <img src="home.svg" alt="首页">
      </div>
      <span class="yds-tabbar__label">首页</span>
    </button>
    <button class="yds-tabbar__item" aria-label="发现">
      <div class="yds-tabbar__icon">
        <img src="discover.svg" alt="发现">
      </div>
      <span class="yds-tabbar__label">发现</span>
    </button>
    <button class="yds-tabbar__item" aria-label="消息">
      <div class="yds-tabbar__icon">
        <img src="message.svg" alt="消息">
      </div>
      <span class="yds-tabbar__label">消息</span>
    </button>
    <button class="yds-tabbar__item" aria-label="我的">
      <div class="yds-tabbar__icon">
        <img src="profile.svg" alt="我的">
      </div>
      <span class="yds-tabbar__label">我的</span>
    </button>
  </div>
  <div class="yds-tabbar__safe-area">
    <div class="yds-tabbar__indicator"></div>
  </div>
</nav>
```

#### 5个标签

```html
<nav class="yds-tabbar">
  <div class="yds-tabbar__content">
    <button class="yds-tabbar__item yds-tabbar__item--active" aria-label="首页">
      <div class="yds-tabbar__icon">
        <img src="home.svg" alt="首页">
      </div>
      <span class="yds-tabbar__label">首页</span>
    </button>
    <button class="yds-tabbar__item" aria-label="发现">
      <div class="yds-tabbar__icon">
        <img src="discover.svg" alt="发现">
      </div>
      <span class="yds-tabbar__label">发现</span>
    </button>
    <button class="yds-tabbar__item" aria-label="消息">
      <div class="yds-tabbar__icon">
        <img src="message.svg" alt="消息">
      </div>
      <span class="yds-tabbar__label">消息</span>
    </button>
    <button class="yds-tabbar__item" aria-label="购物">
      <div class="yds-tabbar__icon">
        <img src="cart.svg" alt="购物">
      </div>
      <span class="yds-tabbar__label">购物</span>
    </button>
    <button class="yds-tabbar__item" aria-label="我的">
      <div class="yds-tabbar__icon">
        <img src="profile.svg" alt="我的">
      </div>
      <span class="yds-tabbar__label">我的</span>
    </button>
  </div>
  <div class="yds-tabbar__safe-area">
    <div class="yds-tabbar__indicator"></div>
  </div>
</nav>
```

### CSS 类名说明

| 类名 | 说明 |
|------|------|
| `.yds-tabbar` | TabBar 容器（必需） |
| `.yds-tabbar__content` | 标签内容区域 |
| `.yds-tabbar__item` | 标签项 |
| `.yds-tabbar__item--active` | 选中状态的标签项 |
| `.yds-tabbar__icon` | 图标容器 |
| `.yds-tabbar__label` | 标签文字 |
| `.yds-tabbar__safe-area` | 底部安全区域 |
| `.yds-tabbar__indicator` | 主页指示器 |
| `.yds-tabbar--fixed` | 固定底部 |
| `.yds-tabbar--borderless` | 无边框 |

### 引入 CSS

```html
<link rel="stylesheet" href="/path/to/young-design-system/css/index.css">
```

或者在 CSS 中导入：

```css
@import '/path/to/young-design-system/css/index.css';
```

## ⚠️ 重要：图标实现方式

### 必须使用内联 SVG（不能用 img 标签）

**TabBar 组件的图标必须使用内联 SVG + `fill="currentColor"` 实现，**不能**使用 `<img>` 标签加载外部 SVG 文件。**

#### ✅ 正确实现：内联 SVG

```html
<nav class="yds-tabbar">
  <div class="yds-tabbar__content">
    <!-- 选中状态 -->
    <button class="yds-tabbar__item yds-tabbar__item--active">
      <div class="yds-tabbar__icon">
        <!-- ✅ 正确：内联 SVG + fill="currentColor" -->
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 16.999H7V14.999H17V16.999Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6045 2.46973C12.6075 2.47203 12.6112 2.47422 12.6143 2.47656L20.6143 8.69824C20.6197 8.70249 20.6245 8.70756 20.6299 8.71191L21 9V21H3V9L3.36914 8.71191C3.37469 8.7074 3.38008 8.70265 3.38574 8.69824L11.3857 2.47656C11.3886 2.47438 11.3917 2.47188 11.3945 2.46973L12 2L12.6045 2.46973ZM5 9.97754V18.999H19V9.97754L12 4.5332L5 9.97754Z" fill="currentColor"/>
        </svg>
      </div>
      <span class="yds-tabbar__label">首页</span>
    </button>
  </div>
</nav>
```

#### ❌ 错误实现：使用 img 标签

```html
<!-- ❌ 错误：不要使用 img 标签加载 SVG -->
<button class="yds-tabbar__item yds-tabbar__item--active">
  <div class="yds-tabbar__icon">
    <img src="../icons/y_icon_line_generality_index.svg" class="yds-icon" alt="首页">
  </div>
  <span class="yds-tabbar__label">首页</span>
</button>
```

### 为什么必须使用内联 SVG？

1. **CSS 颜色控制**：`<img>` 标签无法响应 CSS `color` 属性，而 TabBar 需要通过 CSS 控制选中状态的图标颜色
2. **currentColor 继承**：内联 SVG 使用 `fill="currentColor"` 可以继承父元素的 CSS `color` 属性
3. **品牌色显示**：选中状态需要显示品牌粉色（#F74AD9），只能通过 CSS 变量 + currentColor 实现

### 颜色变化机制

```css
/* TabBar CSS 自动处理颜色变化 */

/* 未选中状态 */
.yds-tabbar__item .yds-tabbar__icon {
  color: var(--yds-icon-default-default, #1B1B1B); /* 黑色 */
}

/* 选中状态 */
.yds-tabbar__item--active .yds-tabbar__icon {
  color: var(--yds-icon-brand-default, #F74AD9); /* 品牌粉色 */
}

.yds-tabbar__item--active .yds-tabbar__label {
  color: var(--yds-text-brand-default, #E52EC5); /* 品牌粉色（文字） */
}
```

### 如何获取正确的 SVG 代码

1. **从图标库复制 SVG 内容**
   ```bash
   # 查看图标库
   open /Users/linyazhou/young-design-system/icons/

   # 或查看图标演示
   open /Users/linyazhou/young-design-system/docs/icons-demo.html
   ```

2. **确保 SVG 使用 currentColor**
   ```xml
   <!-- ✅ 正确 -->
   <svg ...>
     <path d="..." fill="currentColor"/>
   </svg>

   <!-- ❌ 错误 -->
   <svg ...>
     <path d="..." fill="#1B1B1B"/>  <!-- 硬编码颜色 -->
   </svg>
   ```

3. **调整 SVG 尺寸**
   ```html
   <!-- TabBar 图标尺寸：22px × 22px -->
   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
   ```

### 常用 TabBar 图标

```html
<!-- 首页图标 -->
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 16.999H7V14.999H17V16.999Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6045 2.46973C12.6075 2.47203 12.6112 2.47422 12.6143 2.47656L20.6143 8.69824C20.6197 8.70249 20.6245 8.70756 20.6299 8.71191L21 9V21H3V9L3.36914 8.71191C3.37469 8.7074 3.38008 8.70265 3.38574 8.69824L11.3857 2.47656C11.3886 2.47438 11.3917 2.47188 11.3945 2.46973L12 2L12.6045 2.46973ZM5 9.97754V18.999H19V9.97754L12 4.5332L5 9.97754Z" fill="currentColor"/>
</svg>

<!-- 收藏图标 -->
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" fill="currentColor"/>
</svg>

<!-- 用户/我的图标 -->
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 22.5C4 18.0817 7.58172 14.5 12 14.5C16.4183 14.5 20 18.0817 20 22.5H18C18 19.1863 15.3137 16.5 12 16.5C8.68629 16.5 6 19.1863 6 22.5H4ZM12 13.5C8.685 13.5 6 10.815 6 7.5C6 4.185 8.685 1.5 12 1.5C15.315 1.5 18 4.185 18 7.5C18 10.815 15.315 13.5 12 13.5ZM12 11.5C14.21 11.5 16 9.71 16 7.5C16 5.29 14.21 3.5 12 3.5C9.79 3.5 8 5.29 8 7.5C8 9.71 9.79 11.5 12 11.5Z" fill="currentColor"/>
</svg>
```

## JavaScript 交互

### 标签切换

```javascript
// TabBar 标签切换
document.querySelectorAll('.yds-tabbar__content').forEach(content => {
  content.querySelectorAll('.yds-tabbar__item').forEach(item => {
    item.addEventListener('click', function() {
      // 移除所有项的选中状态
      content.querySelectorAll('.yds-tabbar__item').forEach(i => {
        i.classList.remove('yds-tabbar__item--active');
      });
      // 添加当前项的选中状态
      this.classList.add('yds-tabbar__item--active');

      // 执行页面切换逻辑
      const label = this.querySelector('.yds-tabbar__label').textContent;
      console.log('切换到:', label);
    });
  });
});
```

### 结合路由

```javascript
// 结合路由切换
function switchTab(label) {
  // 根据标签切换路由
  switch(label) {
    case '首页':
      router.push('/home');
      break;
    case '发现':
      router.push('/discover');
      break;
    case '消息':
      router.push('/message');
      break;
    case '我的':
      router.push('/profile');
      break;
  }
}
```

## 设计指南

### 何时使用 TabBar

- ✅ **主要功能导航**：应用的核心功能模块切换
- ✅ **同级页面切换**：首页、发现、消息等主要页面
- ✅ **长期固定**：在应用大部分页面都保持显示
- ✅ **2-5个入口**：标签数量建议 2-5 个

**示例：**
- 电商首页/分类/购物车/我的
- 社交首页/发现/消息/我的
- 内容首页/订阅/收藏/我的

### 何时不用 TabBar

- ❌ **子页面导航**：详情页、设置页等
- ❌ **临时功能**：不需要长期显示的导航
- ❌ **标签过多**：超过 5 个标签建议使用其他导航方式
- ❌ **层级关系**：有明确层级关系的内容

### 使用建议

#### ✅ 推荐做法

1. **清晰的图标**：使用符合用户认知的图标
   ```
   ✅ 首页：房子图标
   ✅ 发现：放大镜图标
   ✅ 我的：用户图标
   ```

2. **简洁的文字**：标签文字建议 2 个字
   ```
   ✅ 首页、发现、消息、我的
   ```

3. **默认选中首页**：首次进入应用默认选中第一个标签
   ```
   ✅ 第一个标签默认高亮
   ```

4. **固定底部显示**：TabBar 应固定在底部，在所有主要页面保持一致
   ```
   ✅ position: fixed; bottom: 0;
   ```

#### ❌ 避免做法

1. **避免标签过多**：超过 5 个标签会拥挤
   ```
   ❌ 首页、发现、消息、购物、收藏、设置、帮助（7个标签）
   ✅ 合并为：首页、消息、我的（3个标签）
   ```

2. **避免文字过长**：标签文字超过 2 个字会换行
   ```
   ❌ 个人中心、购物商城、消息通知
   ✅ 我的、购物、消息
   ```

3. **避免频繁变更**：不要在不同页面隐藏或改变 TabBar
   ```
   ❌ 首页有 TabBar，详情页隐藏
   ✅ TabBar 在所有主要页面保持一致
   ```

4. **避免嵌套导航**：不要在 TabBar 页面再使用其他主导航
   ```
   ❌ TabBar + 侧边栏导航
   ✅ 只使用一种主导航方式
   ```

### 图标使用建议

#### 推荐图标类型

1. **线性图标**：未选中状态使用线性图标
2. **填充图标**：选中状态可以使用填充图标（可选）
3. **品牌色高亮**：选中时文字使用品牌色

#### 图标尺寸

- 推荐 SVG 格式
- 视口尺寸：22px × 22px
- 线条粗细：1-2px
- 留白：图标周围适当留白

### 间距规范

- **标签项内边距**：上下 6px，左右 16px
- **图文间距**：3px
- **标签之间**：自动平均分配空间

### 可访问性

#### 键盘导航

- `Tab`：聚焦到下一个/上一个标签
- `Enter` / `Space`：激活选中的标签
- `←` / `→`：在标签之间切换

#### ARIA 属性

```html
<nav class="yds-tabbar" role="navigation" aria-label="底部导航">
  <div class="yds-tabbar__content" role="tablist">
    <button class="yds-tabbar__item yds-tabbar__item--active"
            role="tab"
            aria-selected="true"
            aria-label="首页">
      <div class="yds-tabbar__icon">
        <img src="home.svg" alt="">
      </div>
      <span class="yds-tabbar__label">首页</span>
    </button>
    <button class="yds-tabbar__item"
            role="tab"
            aria-selected="false"
            aria-label="发现">
      <div class="yds-tabbar__icon">
        <img src="discover.svg" alt="">
      </div>
      <span class="yds-tabbar__label">发现</span>
    </button>
  </div>
  <div class="yds-tabbar__safe-area">
    <div class="yds-tabbar__indicator"></div>
  </div>
</nav>
```

## 颜色规范

| 元素 | 属性 | 颜色值 |
|------|------|--------|
| 背景色 | `--yds-bg-default-white` | #FFFFFF |
| 边框色 | `--yds-border-transp-black-8` | rgba(27, 27, 27, 0.08) |
| 未选中文字 | `--yds-text-default-default` | #1B1B1B |
| 选中文字 | `--yds-text-brand-default` | #E52EC5 |
| 选中图标 | `--yds-icon-brand-default` | #F74AD9 (Icon/Brand/Default) |
| 未选中图标 | `--yds-icon-default-default` | #1B1B1B (Icon/Default/Default) |
| 主页指示器 | `--yds-icon-default-default` | #1B1B1B |

**实现方式**：
- SVG 图标使用 `fill="currentColor"` 并内联到 HTML 中
- 通过 CSS 的 `color` 属性精确控制图标颜色
- 颜色值直接使用设计系统 CSS 变量，无需任何转换

## CSS 变量

### 主题定制

可以通过覆盖 CSS 变量来自定义样式：

```css
:root {
  /* 背景颜色 */
  --yds-bg-default-white: #FFFFFF;

  /* 文字颜色 */
  --yds-text-default-default: #1B1B1B;
  --yds-text-brand-default: #E52EC5; /* 文字品牌色 */

  /* 图标颜色 */
  --yds-icon-default-default: #1B1B1B;
  --yds-icon-brand-default: #F74AD9; /* 图标品牌色 */

  /* 边框颜色 */
  --yds-border-transp-black-8: rgba(27, 27, 27, 0.08);

  /* 字体 */
  --yds-font-family-base: "PingFang SC", sans-serif;
}
```

## 变体

### 固定底部

```html
<nav class="yds-tabbar yds-tabbar--fixed">
  <!-- 固定在页面底部 -->
</nav>
```

### 无边框

```html
<nav class="yds-tabbar yds-tabbar--borderless">
  <!-- 无顶部边框 -->
</nav>
```

## 样式规范

### 固定定位的正确实现

**重要规范：** 使用固定定位时，TabBar 必须贴合屏幕左右边框，不得使用居中布局。

**✅ 正确实现：**
```css
.yds-tabbar--fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
```

**❌ 错误实现（会导致左右间距）：**
```css
.yds-tabbar--fixed {
  position: fixed;
  bottom: 0;
  left: 50%;           /* ❌ 不要使用居中 */
  transform: translateX(-50%);  /* ❌ 不要使用居中 */
  max-width: 375px;    /* ❌ 不要限制最大宽度 */
  width: 100%;
}
```

**原因：**
- 移动端 TabBar 应该占满整个屏幕宽度
- 使用 `left: 0; right: 0;` 实现全宽布局
- 在任何屏幕尺寸下都保持贴合边框
- 避免使用居中布局导致左右间距

## 响应式

TabBar 设计为移动端专用，在桌面端展示时建议：

```css
@media (min-width: 768px) {
  /* 桌面端保持全宽 */
  .yds-tabbar {
    width: 100%;
  }
}
```

## 暗色模式

组件支持暗色模式，自动适配暗色主题：

```css
[data-theme="dark"] {
  --yds-bg-default-white: #1B1B1B;
  --yds-text-default-default: #FFFFFF;
  --yds-text-brand-default: #E52EC5; /* 文字品牌色 */
  --yds-icon-default-default: #FFFFFF;
  --yds-icon-brand-default: #F74AD9; /* 图标品牌色 */
  /* ... 其他暗色主题变量 */
}
```

## 演示

查看完整演示：[tabbar-demo.html](./tabbar-demo.html)

## 更新日志

### v2.3.0 (2025-01-31)

- ✅ **重要更新**：TabBar 宽度改为填充整个屏幕宽度
- 🐛 移除 `max-width: 375px` 限制，改为 `width: 100%`
- ✅ TabBar 宽度根据屏幕宽度自适应，支持任意屏幕尺寸
- 📝 更新尺寸规范：容器宽度为 `100% / 100vw`
- 📚 更新响应式样式，桌面端使用 `width: 100vw` 确保全宽

**重要提示：**
- TabBar 宽度始终为 100%，填充整个屏幕宽度
- 标签项使用 `flex: 1 0 0` 自动平均分配空间
- 桌面端使用 `width: 100vw` 确保占满视口宽度
- 支持任意屏幕尺寸（手机、平板、桌面）

### v2.2.0 (2025-01-31)

- ⚠️ **重要更新**：明确规范固定定位时 TabBar 必须贴合屏幕左右边框
- 📝 新增"固定定位的正确实现"章节
- 🐛 修复响应式样式中的居中布局问题（移除 `margin: 0 auto`）
- ✅ 确保 TabBar 在任何屏幕尺寸下都保持全宽显示
- 📚 更新 `tabbar.css` 响应式样式为 `width: 100%`

**重要提示：**
- 使用固定定位时，TabBar 必须使用 `left: 0; right: 0;`
- **不要**使用 `left: 50%; transform: translateX(-50%);` 居中布局
- **不要**限制 `max-width`，保持全宽显示
- 避免在桌面端出现左右间距

### v2.1.0 (2025-01-31)

- ⚠️ **重要更新**：明确规范 TabBar 图标必须使用内联 SVG + `fill="currentColor"`
- 📝 新增"图标实现方式"章节，详细说明为什么不能使用 `<img>` 标签
- ✅ 提供常用 TabBar 图标的内联 SVG 代码（首页、收藏、用户）
- 🐛 修复收藏图标 `y_icon_line_edit_favorites.svg` 硬编码颜色问题
- 📚 更新设计规范文档，强调 TabBar 图标实现的特殊要求
- ✅ 确保 TabBar 选中状态正确显示品牌粉色（#F74AD9）

**重要提示：**
- TabBar 图标**必须**使用内联 SVG，不能使用 `<img>` 标签
- 图标 SVG 必须使用 `fill="currentColor"` 而非硬编码颜色
- 这样 CSS 才能通过 `color` 属性控制选中状态的图标颜色

### v2.0.3 (2025-01-31)

- ✅ SVG 图标改为内联方式实现
- ✅ 图标颜色直接使用设计系统变量，无需 filter 转换
- ✅ 选中图标精确显示 `--yds-icon-brand-default (#F74AD9)`
- ✅ 未选中图标使用 `--yds-icon-default-default (#1B1B1B)`

### v2.0.2 (2025-01-31)

- ✨ 图标 SVG 改用 `fill="currentColor"` 实现
- ✨ 通过 CSS `color` 属性精确控制图标颜色
- ✅ 颜色值与设计系统完全一致，不再使用 filter 转换
- 🐛 修复选中图标颜色显示不准确的问题

### v2.0.1 (2025-01-31)

- 🐛 选中状态文字使用 `Text/Brand/Default (#E52EC5)`
- 🐛 选中状态图标使用 `Icon/Brand/Default (#F74AD9)`
- 🐛 未选中状态使用 `Icon/Default/Default (#1B1B1B)`
- 🐛 所有颜色均使用设计系统 CSS 变量

### v2.0.0 (2025-01-31)

- ✅ 新增 TabBar 底部标签栏组件
- ✅ 支持 2-5 个标签
- ✅ 标签项包含图标和文字
- ✅ 选中状态使用品牌色
- ✅ 底部安全区域（主页指示器）
- ✅ 基于 Figma 设计规范实现
- ✅ 使用 CSS 变量，支持主题定制
- ✅ 支持暗色模式
- ✅ 完整的无障碍支持

## 相关资源

- [Figma 设计稿](https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/)
- [Navbar 导航栏](./navbar-guide.md)
- [Button 按钮](./button-guide.md)
- [Colors 颜色系统](./colors-guide.md)
