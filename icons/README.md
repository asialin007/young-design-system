# 图标库 - 年轻版设计系统 2.0

## 使用方式

### 1. 直接引入 SVG 文件

```html
<!-- 方式一：内联 SVG -->
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
</svg>

<!-- 方式二：作为图片引入 -->
<img src="../icons/arrow-left.svg" alt="返回" class="yds-icon">
```

### 2. 使用 CSS 类

```html
<div class="yds-icon yds-icon--arrow-left"></div>
```

### 3. 使用 JavaScript 动态加载

```javascript
import { ArrowLeft, Search, Share } from '@vipshop/young-design-system/icons';
```

## 图标分类

- **导航图标** (navigation) - 返回、关闭、下拉箭头等
- **操作图标** (action) - 分享、收藏、删除等
- **功能图标** (function) - 搜索、扫码、购物车等
- **状态图标** (status) - 成功、失败、警告等
- **其他图标** (misc) - 其他分类图标

## 图标命名规范

- 使用 kebab-case 命名：`arrow-left.svg`
- 语义化命名，描述图标用途而非外观
