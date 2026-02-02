# Toast 轻提示集成文档

## 概述

Toast 轻提示组件用于显示短暂的通知消息，在屏幕中央显示，自动消失。适用于操作反馈、状态提示等场景。

## Figma 设计源

- **Figma 文件**: [年轻版设计系统 V2.0](https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp)
- **组件节点 ID**: 7211:6379

## 设计规范

### 尺寸规范

| 变体 | 最小宽度 | 最大宽度 | 内边距 |
|------|----------|----------|--------|
| default | 120px | 240px | 16px |
| brand | - | - | 12px 16px |
| atmosphere | 120px | 240px | 16px |

### 字体规范

| 元素 | 字号 | 行高 | 字重 |
|------|------|------|------|
| 标题 | 14px | 18px | Regular |
| 副标题 | 12px | 16px | Regular |

### 颜色规范

- 背景色：`rgba(27, 27, 27, 0.85)`
- 文字色：`#ffffff`
- 头像背景：`#ffffff`
- 头像边框：`rgba(27, 27, 27, 0.16)` (0.5px)
- 副标题色：`rgba(255, 255, 255, 0.5)`

### 圆角规范

- Toast 容器：`8px`
- 头像：`9999px` (圆形)

### 间距规范

- 默认变体间距：`8px`
- 品牌变体间距：`12px`
- 标题与副标题间距：`2px`

## 组件变体

### 1. 默认 Toast (Default)

**用途**: 简单的文本提示

```html
<div class="yds-toast yds-toast--default">
  <span class="yds-toast__text">操作成功</span>
</div>
```

**特点**:
- 水平布局，居中对齐
- 支持单行和多行文本
- 文本居中显示

### 2. 品牌 Toast (Brand)

**用途**: 显示品牌信息，如订阅成功

```html
<div class="yds-toast yds-toast--brand">
  <div class="yds-toast__avatar">
    <img src="avatar.jpg" alt="Avatar">
  </div>
  <div class="yds-toast__content">
    <span class="yds-toast__title">VIPSHOP</span>
    <span class="yds-toast__subtitle">订阅成功</span>
  </div>
</div>
```

**特点**:
- 垂直布局，居中对齐
- 包含圆形头像
- 支持可选的副标题

### 3. 氛围 Toast (Atmosphere)

**用途**: 带装饰图标的提示

```html
<div class="yds-toast yds-toast--atmosphere">
  <div class="yds-toast__icon yds-toast__icon--left">◀</div>
  <span class="yds-toast__text">标题不超过一行</span>
  <div class="yds-toast__icon yds-toast__icon--right">▶</div>
</div>
```

**特点**:
- 水平布局，左对齐
- 左右带装饰图标
- 文本自动省略

### 4. 带图标的 Toast

**用途**: 带状态图标的提示

```html
<div class="yds-toast yds-toast--default yds-toast--with-icon">
  <div class="yds-toast__icon">✓</div>
  <span class="yds-toast__text">操作成功</span>
</div>
```

**特点**:
- 在默认变体基础上添加图标
- 图标与文本间距 `8px`

## CSS 类名

### 容器类

- `yds-toast` - 基础类
- `yds-toast--default` - 默认变体
- `yds-toast--brand` - 品牌变体
- `yds-toast--atmosphere` - 氛围变体
- `yds-toast--with-icon` - 带图标变体
- `yds-toast--fade-in` - 淡入动画
- `yds-toast--fade-out` - 淡出动画

### 元素类

- `yds-toast__text` - 文本内容
- `yds-toast__icon` - 图标
- `yds-toast__icon--left` - 左侧图标
- `yds-toast__icon--right` - 右侧图标
- `yds-toast__avatar` - 头像容器
- `yds-toast__content` - 内容区域
- `yds-toast__title` - 标题
- `yds-toast__subtitle` - 副标题

## CSS 变量

```css
/* Toast 尺寸 */
--yds-toast-min-width: 120px;
--yds-toast-max-width: 240px;
--yds-toast-padding-x: 16px;
--yds-toast-padding-y: 16px;

/* Toast 头像 */
--yds-toast-avatar-size: 56px;

/* Toast 字体 */
--yds-toast-font-size: var(--yds-font-size-14);
--yds-toast-line-height: var(--yds-line-height-18);
--yds-toast-subtitle-font-size: var(--yds-font-size-12);
--yds-toast-subtitle-line-height: var(--yds-line-height-16);

/* Toast 间距 */
--yds-toast-gap: 8px;
--yds-toast-brand-gap: 12px;
```

## JavaScript 工具函数

### 基础实现

```javascript
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
```

### React 实现

```jsx
import { useState, useEffect } from 'react';

function Toast({ text, variant = 'default', duration = 2000, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose?.(), 300); // 等待动画完成
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`yds-toast yds-toast--${variant} ${
        visible ? 'yds-toast--fade-in' : 'yds-toast--fade-out'
      }`}
    >
      {variant === 'brand' ? (
        <>
          <div className="yds-toast__avatar">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="yds-toast__content">
            <span className="yds-toast__title">VIPSHOP</span>
            <span className="yds-toast__subtitle">{text}</span>
          </div>
        </>
      ) : variant === 'atmosphere' ? (
        <>
          <div className="yds-toast__icon yds-toast__icon--left">◀</div>
          <span className="yds-toast__text">{text}</span>
          <div className="yds-toast__icon yds-toast__icon--right">▶</div>
        </>
      ) : (
        <span className="yds-toast__text">{text}</span>
      )}
    </div>
  );
}

// 使用
function App() {
  const [toast, setToast] = useState(null);

  const showToast = (text, variant) => {
    const id = Date.now();
    setToast({ id, text, variant });
  };

  return (
    <>
      <button onClick={() => showToast('操作成功', 'default')}>默认 Toast</button>
      {toast && (
        <Toast
          key={toast.id}
          text={toast.text}
          variant={toast.variant}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
```

### Vue 实现

```vue
<template>
  <teleport to="body">
    <transition name="toast-fade">
      <div
        v-if="visible"
        class="yds-toast"
        :class="[`yds-toast--${variant}`, 'yds-toast--fade-in']"
      >
        <template v-if="variant === 'brand'">
          <div class="yds-toast__avatar">
            <img :src="avatar" alt="Avatar" />
          </div>
          <div class="yds-toast__content">
            <span class="yds-toast__title">VIPSHOP</span>
            <span class="yds-toast__subtitle">{{ text }}</span>
          </div>
        </template>
        <template v-else-if="variant === 'atmosphere'">
          <div class="yds-toast__icon yds-toast__icon--left">◀</div>
          <span class="yds-toast__text">{{ text }}</span>
          <div class="yds-toast__icon yds-toast__icon--right">▶</div>
        </template>
        <template v-else>
          <span class="yds-toast__text">{{ text }}</span>
        </template>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  text: String,
  variant: { type: String, default: 'default' },
  duration: { type: Number, default: 2000 }
});

const emit = defineEmits(['close']);

const visible = ref(true);

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
    setTimeout(() => emit('close'), 300);
  }, props.duration);
});
</script>
```

## 使用示例

### 成功提示

```javascript
showToast('操作成功', 'default');
```

### 订阅成功

```javascript
showToast('订阅成功', 'brand');
```

### 长时间显示

```javascript
showToast('正在处理...', 'default', 5000);
```

### 带自定义内容

```javascript
const toast = document.createElement('div');
toast.classList.add('yds-toast', 'yds-toast--default', 'yds-toast--with-icon');
toast.innerHTML = `
  <div class="yds-toast__icon">✓</div>
  <span class="yds-toast__text">自定义内容</span>
`;
document.body.appendChild(toast);
```

## 文件结构

```
young-design-system/
├── css/
│   ├── toast.css              # Toast 组件样式
│   └── index.css             # 导入 toast.css
├── docs/
│   └── toast-demo.html       # Toast 组件演示
└── README.md                 # Toast 组件文档
```

## 注意事项

1. **自动消失**: Toast 默认 2 秒后自动消失
2. **位置**: Toast 默认固定在屏幕中央
3. **动画**: Toast 使用 CSS 动画实现淡入淡出效果
4. **响应式**: 移动端会自动调整最大宽度
5. **层级**: Toast 的 z-index 为 1000，确保显示在最上层

## 与 Figma 1:1 还原

本组件严格遵循 Figma 设计规范：
- ✅ 尺寸、间距完全一致
- ✅ 字体、颜色精确匹配
- ✅ 圆角、边框精确还原
- ✅ 所有变体完整实现

## 相关链接

- [Figma 设计文件](https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp)
- [Toast 组件演示](docs/toast-demo.html)
- [设计系统 README](README.md)
