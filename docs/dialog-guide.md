# Dialog 对话框组件

## 概述

Dialog 对话框组件是一种模态弹窗，用于需要用户响应的重要信息展示或操作确认。Dialog 会覆盖当前页面内容，强制用户完成或取消当前任务。

## 特性

- ✅ 模态遮罩层，带背景模糊效果
- ✅ 支持自定义标题和内容
- ✅ 可选的关闭按钮（右上角）
- ✅ 灵活的底部操作栏配置
- ✅ 三种对齐方式：左对齐、居中对齐、右对齐
- ✅ 可选分割线
- ✅ 支持自定义页脚
- ✅ 完整的 TypeScript 类型支持
- ✅ 响应式设计
- ✅ 深色模式支持
- ✅ 无障碍支持（ARIA 属性）

## Props

### DialogProps

| Prop | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `open` | `boolean` | `false` | 是否打开对话框 |
| `title` | `string` | `'标题'` | 对话框标题 |
| `className` | `string` | `''` | 自定义类名 |
| `children` | `ReactNode` / 插槽 | - | 对话框内容 |
| `footer` | `ReactNode` / 插槽 | - | 自定义页脚内容 |
| `showClose` | `boolean` | `false` | 是否显示右上角关闭按钮 |
| `showCancel` | `boolean` | `false` | 是否显示取消按钮 |
| `showConfirm` | `boolean` | `false` | 是否显示确认按钮 |
| `showDivider` | `boolean` | `false` | 是否显示分割线 |
| `align` | `'left' \| 'center' \| 'right'` | `'center'` | 底部按钮对齐方式 |
| `cancelButtonProps` | `Partial<ButtonProps>` | `{}` | 取消按钮配置 |
| `confirmButtonProps` | `Partial<ButtonProps>` | `{}` | 确认按钮配置 |
| `onClose` | `() => void` | - | 关闭对话框事件 |
| `onCancel` | `() => void` | - | 点击取消按钮事件 |
| `onConfirm` | `() => void` | - | 点击确认按钮事件 |

## 事件

| 事件名 | 参数 | 触发条件 |
|--------|------|----------|
| `close` | - | 点击右上角关闭按钮 |
| `cancel` | - | 点击取消按钮 |
| `confirm` | - | 点击确认按钮 |

## 使用示例

### React

#### 基础对话框

```tsx
import { Dialog } from '@vipshop/young-design-system';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        打开对话框
      </button>

      <Dialog
        open={open}
        title="提示"
        showClose
        showCancel
        showConfirm
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          // 处理确认逻辑
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
      >
        <p>这是一段提示信息</p>
      </Dialog>
    </>
  );
}
```

#### 自定义内容

```tsx
<Dialog
  open={open}
  title="确认操作"
  showClose
  showCancel
  showConfirm
  onCancel={() => setOpen(false)}
  onConfirm={() => setOpen(false)}
  onClose={() => setOpen(false)}
>
  <p>确定要执行此操作吗？此操作不可撤销。</p>
  <ul>
    <li>删除所有相关数据</li>
    <li>无法恢复</li>
  </ul>
</Dialog>
```

#### 自定义页脚

```tsx
<Dialog
  open={open}
  title="操作确认"
  showClose
  onClose={() => setOpen(false)}
>
  <p>请选择操作方式：</p>

  {/* 自定义页脚 */}
  <Dialog footer={
    <div className="custom-footer">
      <button onClick={handleOption1}>选项一</button>
      <button onClick={handleOption2}>选项二</button>
      <button onClick={handleOption3}>选项三</button>
    </div>
  }>
    内容...
  </Dialog>
</Dialog>
```

#### 不同对齐方式

```tsx
// 左对齐
<Dialog
  open={open}
  title="操作"
  align="left"
  showCancel
  showConfirm
>
  内容...
</Dialog>

// 居中对齐（默认）
<Dialog
  open={open}
  title="操作"
  align="center"
  showCancel
  showConfirm
>
  内容...
</Dialog>

// 右对齐
<Dialog
  open={open}
  title="操作"
  align="right"
  showCancel
  showConfirm
>
  内容...
</Dialog>
```

#### 带分割线

```tsx
<Dialog
  open={open}
  title="提示"
  showDivider
  showClose
  showCancel
  showConfirm
>
  <p>内容区域</p>
</Dialog>
```

#### 自定义按钮配置

```tsx
<Dialog
  open={open}
  title="删除确认"
  showClose
  showCancel
  showConfirm
  cancelButtonProps={{
    variant: 'outlined',
    color: 'black',
    children: '不删除'
  }}
  confirmButtonProps={{
    variant: 'solid-dark',
    color: 'danger',
    children: '确认删除'
  }}
  onCancel={() => setOpen(false)}
  onConfirm={() => {
    // 删除逻辑
    setOpen(false);
  }}
  onClose={() => setOpen(false)}
>
  <p>确定要删除此项吗？</p>
</Dialog>
```

#### 完整示例

```tsx
import { Dialog } from '@vipshop/young-design-system';
import { useState } from 'react';

function ConfirmDialog() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    // 执行确认逻辑
    console.log('用户确认了操作');
    setOpen(false);
  };

  const handleCancel = () => {
    console.log('用户取消了操作');
    setOpen(false);
  };

  const handleClose = () => {
    console.log('用户关闭了对话框');
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>
        打开确认对话框
      </button>

      <Dialog
        open={open}
        title="重要提示"
        showClose
        showCancel
        showConfirm
        align="right"
        cancelButtonProps={{
          color: 'black',
          variant: 'solid-light'
        }}
        confirmButtonProps={{
          color: 'brand',
          variant: 'solid-dark'
        }}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        onClose={handleClose}
      >
        <p style={{ marginBottom: '16px' }}>
          这是一个重要的操作提示，请仔细阅读以下内容：
        </p>
        <ul>
          <li>此操作将永久删除所有相关数据</li>
          <li>删除后无法恢复</li>
          <li>请确认是否继续</li>
        </ul>
      </Dialog>
    </>
  );
}
```

### Vue

#### 基础对话框

```vue
<template>
  <div>
    <button @click="openDialog">打开对话框</button>

    <YDSDialog
      :open="isOpen"
      title="提示"
      :show-close="true"
      :show-cancel="true"
      :show-confirm="true"
      @cancel="closeDialog"
      @confirm="handleConfirm"
      @close="closeDialog"
    >
      <p>这是一段提示信息</p>
    </YDSDialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { YDSDialog } from '@vipshop/young-design-system';

const isOpen = ref(false);

const openDialog = () => {
  isOpen.value = true;
};

const closeDialog = () => {
  isOpen.value = false;
};

const handleConfirm = () => {
  // 处理确认逻辑
  isOpen.value = false;
};
</script>
```

#### 自定义内容

```vue
<template>
  <YDSDialog
    :open="isOpen"
    title="确认操作"
    :show-close="true"
    :show-cancel="true"
    :show-confirm="true"
    @cancel="isOpen = false"
    @confirm="handleConfirm"
    @close="isOpen = false"
  >
    <p>确定要执行此操作吗？此操作不可撤销。</p>
    <ul>
      <li>删除所有相关数据</li>
      <li>无法恢复</li>
    </ul>
  </YDSDialog>
</template>

<script setup>
import { ref } from 'vue';
import { YDSDialog } from '@vipshop/young-design-system';

const isOpen = ref(false);

const handleConfirm = () => {
  console.log('用户确认了操作');
  isOpen.value = false;
};
</script>
```

#### 自定义页脚

```vue
<template>
  <YDSDialog
    :open="isOpen"
    title="操作确认"
    :show-close="true"
    @close="isOpen = false"
  >
    <p>请选择操作方式：</p>

    <!-- 自定义页脚插槽 -->
    <template #footer>
      <div class="custom-footer">
        <button @click="handleOption1">选项一</button>
        <button @click="handleOption2">选项二</button>
        <button @click="handleOption3">选项三</button>
      </div>
    </template>
  </YDSDialog>
</template>

<script setup>
import { ref } from 'vue';
import { YDSDialog } from '@vipshop/young-design-system';

const isOpen = ref(false);

const handleOption1 = () => {
  console.log('选项一被点击');
  isOpen.value = false;
};

const handleOption2 = () => {
  console.log('选项二被点击');
  isOpen.value = false;
};

const handleOption3 = () => {
  console.log('选项三被点击');
  isOpen.value = false;
};
</script>
```

#### 完整示例

```vue
<template>
  <div>
    <button @click="openDialog">打开确认对话框</button>

    <YDSDialog
      :open="isOpen"
      title="重要提示"
      :show-close="true"
      :show-cancel="true"
      :show-confirm="true"
      align="right"
      :cancel-button-props="{
        color: 'black',
        variant: 'solid-light'
      }"
      :confirm-button-props="{
        color: 'brand',
        variant: 'solid-dark'
      }"
      @cancel="handleCancel"
      @confirm="handleConfirm"
      @close="handleClose"
    >
      <p style="margin-bottom: 16px;">
        这是一个重要的操作提示，请仔细阅读以下内容：
      </p>
      <ul>
        <li>此操作将永久删除所有相关数据</li>
        <li>删除后无法恢复</li>
        <li>请确认是否继续</li>
      </ul>
    </YDSDialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { YDSDialog } from '@vipshop/young-design-system';

const isOpen = ref(false);

const openDialog = () => {
  isOpen.value = true;
};

const handleConfirm = () => {
  console.log('用户确认了操作');
  isOpen.value = false;
};

const handleCancel = () => {
  console.log('用户取消了操作');
  isOpen.value = false;
};

const handleClose = () => {
  console.log('用户关闭了对话框');
  isOpen.value = false;
};
</script>
```

## 样式变量

组件使用以下 YDS CSS 变量：

```css
/* 间距 */
--yds-spacing-12: 12px;
--yds-spacing-16: 16px;
--yds-spacing-20: 20px;
--yds-spacing-24: 24px;
--yds-spacing-32: 32px;

/* 圆角 */
--yds-radius-lg: 8px;
--yds-radius-md: 4px;
--yds-radius-full: 9999px;

/* 边框颜色 */
--yds-border-default-default: var(--yds-border-transp-black-8);

/* 背景颜色 */
--yds-bg-default-white: #FFFFFF;
--yds-bg-default-gray: #F4F5F7;
--yds-bg-default-black: #1B1B1B;

/* 文字颜色 */
--yds-text-default-default: #1B1B1B;
--yds-text-default-secondary: #4E4F54;

/* 字体 */
--yds-font-size-16: 16px;
--yds-font-weight-medium: 500;
--yds-line-height-24: 24px;
```

## 样式规范

### 对话框正文边距

**重要规范：** 对话框正文内容区域 `.yds-dialog__body-text` 的 `margin` 和 `padding` 必须全部为 `0`。

```css
.yds-dialog__body-text {
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: #1B1B1B;
  margin: 0; /* ⚠️ 必须为 0，不可添加外边距 */
  padding: 0; /* ⚠️ 必须为 0，不可添加内边距 */
}
```

**原因：**
- 对话框容器 `.yds-dialog` 已有整体内边距（`padding: 24px`）
- 标题区域和按钮区域通过 `margin` 控制间距
- 正文内容区域不需要额外的内外边距
- 保持内容与对话框边缘的视觉一致性
- 通过 flex 布局的 `gap` 控制元素间距

**正确示例：**
```html
<div class="yds-dialog">
  <div class="yds-dialog__title-section">
    <h2 class="yds-dialog__title">确认删除</h2>
  </div>
  <div class="yds-dialog__body-text">
    确定要删除这个待办事项吗？删除后无法恢复。
  </div>
  <div class="yds-dialog__buttons yds-dialog__buttons--horizontal">
    <button class="yds-dialog__button yds-dialog__button--secondary">取消</button>
    <button class="yds-dialog__button yds-dialog__button--primary">删除</button>
  </div>
</div>
```

## 样式自定义

### 自定义遮罩层样式

```css
.yds-dialog-overlay {
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
}
```

### 自定义对话框尺寸

```css
.yds-dialog {
  min-width: 600px;
  max-width: 800px;
}
```

### 自定义头部样式

```css
.yds-dialog__header {
  background-color: var(--yds-bg-brand-secondary);
}
```

### 自定义按钮样式

通过 `cancelButtonProps` 和 `confirmButtonProps` 自定义按钮样式：

```tsx
<Dialog
  cancelButtonProps={{
    variant: 'outlined',
    color: 'brand',
    size: 'large'
  }}
  confirmButtonProps={{
    variant: 'solid-dark',
    color: 'danger',
    size: 'large'
  }}
>
  内容...
</Dialog>
```

## 响应式设计

组件根据屏幕尺寸自动调整：

- **移动端** (< 768px): 标准间距，全屏宽度
- **平板及以上** (>= 768px): 较大间距，最小宽度 480px

## 深色模式

组件支持深色模式，通过父元素的 `data-theme` 属性自动切换：

```html
<!-- 深色模式 -->
<html data-theme="dark">
```

```javascript
// 切换深色模式
document.documentElement.setAttribute('data-theme', 'dark');
```

## 无障碍支持

组件内置以下无障碍特性：

- `role="dialog"` 标识对话框
- `aria-modal="true"` 表示模态状态
- `aria-labelledby` 关联标题
- `aria-label` 为关闭按钮提供标签
- 键盘导航支持（ESC 键关闭）

## 最佳实践

1. **合理使用模态对话框**
   - 仅用于需要用户响应的重要操作
   - 避免滥用，影响用户体验

2. **提供明确的操作选项**
   - 按钮文本应该清晰明确
   - 危险操作使用醒目的颜色

3. **使用语义化的标题**
   - 标题应该简明扼要
   - 准确描述对话框用途

4. **考虑移动端体验**
   - 内容不宜过多
   - 避免在对话框内嵌套滚动

5. **提供明确的取消方式**
   - 始终提供取消或关闭按钮
   - 支持点击遮罩层关闭（可扩展实现）

## Figma 信息

- **组件**: Dialog 对话框
- **节点 ID**: 5471:25750
- **文件**: 年轻版设计系统V2.0-草稿
- **URL**: https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿?node-id=5471:25750

## 更新日志

### v2.1.0 (2025-01-31)

- ✅ **新增样式规范章节**：明确对话框正文边距规范
  - `.yds-dialog__body-text` 的 `margin` 和 `padding` 必须全部为 `0`
  - 原因：对话框容器已有整体内边距，正文区域不需要额外边距
  - 更新 `dialog.css`、`dialog-demo.html` 和 `todo-app-mobile.html`
  - 后续项目可直接调用，遵循此规范

### v2.0.0 (2025-01-30)

- ✅ 新增 Dialog 对话框组件
- ✅ 支持自定义标题和内容
- ✅ 可选的关闭按钮（右上角）
- ✅ 灵活的底部操作栏配置
- ✅ 三种对齐方式：左对齐、居中对齐、右对齐
- ✅ 可选分割线
- ✅ 支持自定义页脚
- ✅ 完整的 TypeScript 类型支持
- ✅ 响应式设计
- ✅ 深色模式支持
- ✅ 无障碍支持（ARIA 属性）

## 相关文档

- [Button 组件文档](./button.md)
- [ButtonGroup 组件文档](./button-group.md)
- [栅格系统](./grid-guide.md)
- [Figma 集成指南](./figma-integration.md)
