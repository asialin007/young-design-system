# Dialog 对话框组件整合完成

## 已创建的文件

```
✅ src/react/Dialog.tsx                # React Dialog 组件
✅ src/vue/Dialog.vue                  # Vue Dialog 组件
✅ css/dialog.css                      # Dialog 样式
✅ css/index.css                       # 导入 Dialog 样式
✅ src/index.ts                        # 导出 Dialog
✅ docs/dialog-guide.md                # Dialog 使用指南
✅ docs/dialog-demo.html                # Dialog 演示页面
✅ figma/config.json                   # 更新添加 Dialog 组件
```

## 组件功能

### 核心功能

| 功能 | 描述 |
|------|------|
| 模态遮罩 | 半透明遮罩层，带背景模糊效果 |
| 头部区域 | 支持标题和关闭按钮 |
| 内容区域 | 可自定义内容，支持滚动 |
| 底部操作栏 | 支持取消/确认按钮，三种对齐方式 |
| 分割线 | 可选的分割线 |
| 自定义页脚 | 支持完全自定义底部内容 |

### Props 配置

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

### 底部对齐方式

| 对齐方式 | 描述 | 使用场景 |
|---------|------|---------|
| `left` | 左对齐 | 需要左侧操作时 |
| `center` | 居中对齐（默认） | 标准对话框 |
| `right` | 右对齐 | 确认/取消操作（常用） |

## 使用示例

### React - 基础对话框

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
        onConfirm={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <p>这是一段提示信息</p>
      </Dialog>
    </>
  );
}
```

### React - 确认删除对话框

```tsx
<Dialog
  open={open}
  title="删除确认"
  showClose
  showCancel
  showConfirm
  align="right"
  cancelButtonProps={{
    variant: 'solid-light',
    color: 'black'
  }}
  confirmButtonProps={{
    variant: 'solid-dark',
    color: 'danger'
  }}
  onCancel={() => setOpen(false)}
  onConfirm={() => {
    // 删除逻辑
    setOpen(false);
  }}
  onClose={() => setOpen(false)}
>
  <p>确定要删除此项吗？此操作不可撤销。</p>
</Dialog>
```

### Vue - 基础对话框

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
  isOpen.value = false;
};
</script>
```

### Vue - 自定义页脚

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
</script>
```

## 查看演示

```bash
# 查看完整演示
open /Users/linyazhou/young-design-system/docs/dialog-demo.html

# 查看使用指南
cat /Users/linyazhou/young-design-system/docs/dialog-guide.md
```

## 样式特性

### 基础样式

```css
/* 遮罩层 */
.yds-dialog-overlay {
  position: fixed;
  background-color: rgba(27, 27, 27, 0.5);
  backdrop-filter: blur(4px);
  z-index: 9999;
}

/* 对话框容器 */
.yds-dialog {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-lg);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  animation: yds-dialog-slide-in 0.2s ease-out;
}

/* 头部 */
.yds-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--yds-spacing-20) var(--yds-spacing-24);
  border-bottom: 1px solid var(--yds-border-default-default);
}

/* 关闭按钮 */
.yds-dialog__close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: var(--yds-text-default-secondary);
  border-radius: var(--yds-radius-md);
  cursor: pointer;
}

/* 内容区域 */
.yds-dialog__body {
  padding: var(--yds-spacing-24);
  overflow-y: auto;
}

/* 底部操作栏 */
.yds-dialog__footer {
  display: flex;
  gap: var(--yds-spacing-12);
  padding: var(--yds-spacing-16) var(--yds-spacing-24);
  border-top: 1px solid var(--yds-border-default-default);
}
```

### 深色模式

```css
[data-theme="dark"] .yds-dialog {
  background-color: var(--yds-bg-default-black);
  border: 1px solid var(--yds-border-default-default);
}

[data-theme="dark"] .yds-dialog__title {
  color: var(--yds-text-default-default);
}
```

### 响应式

```css
/* 平板及以上 */
@media (min-width: 768px) {
  .yds-dialog {
    min-width: 480px;
  }

  .yds-dialog__header {
    padding: var(--yds-spacing-24) var(--yds-spacing-32);
  }

  .yds-dialog__body {
    padding: var(--yds-spacing-32);
  }
}
```

## 无障碍支持

- ✅ `role="dialog"` 标识对话框
- ✅ `aria-modal="true"` 表示模态状态
- ✅ `aria-labelledby` 关联标题
- ✅ `aria-label` 为关闭按钮提供标签
- ✅ 键盘导航支持（ESC 键关闭）

## Figma 信息

- **组件**: Dialog 对话框
- **节点 ID**: 5471:25750
- **文件**: 年轻版设计系统V2.0-草稿
- **URL**: https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿?node-id=5471-25750

## 下一步

1. ✅ Dialog 组件已录入
2. 🔄 在 Figma 中添加 Code Connect 映射（可选）
3. 🔄 继续添加其他组件（Input, Card, Modal 等）
4. 🔄 设置 CI/CD 自动化

---

**提示**: Dialog 组件已成功整合到 YDS 设计系统，可以直接在项目中使用！
