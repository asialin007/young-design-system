# ButtonGroup 按钮组合组件

## 概述

ButtonGroup 组件提供按钮组合功能，支持单个按钮、两个按钮组合、三个按钮组合、四个按钮组合。

## 特性

- ✅ 支持多个按钮组合
- ✅ 多种对齐方式：均分、右侧对齐、文字混合、图标混合
- ✅ 多种排列方向：水平、垂直
- ✅ 两种尺寸：小、大
- ✅ 自动分割线
- ✅ 响应式设计

## Props

### ButtonGroupProps

| Prop | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `className` | `string` | `''` | 组件类名 |
| `alignment` | `'equal' \| 'right' \| 'text-mix' \| 'icon-mix'` | `'equal'` | 对齐方式 |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 排列方向 |
| `size` | `'small' \| 'large'` | `'large'` | 尺寸 |
| `count` | `1 \| 2 \| 3 \| 4` | `1` | 按钮数量 |
| `primaryButton` | `PrimaryButtonConfig` | - | 主按钮配置 |
| `secondaryButton` | `SecondaryButtonConfig` | - | 次按钮配置 |
| `moreButton` | `MoreButtonConfig` | - | 更多按钮配置 |
| `tertiaryButton` | `TertiaryButtonConfig` | - | 三级按钮配置 |
| `quaternaryButton` | `QuaternaryButtonConfig` | - | 四级按钮配置 |
| `showDivider` | `boolean` | `false` | 是否显示分割线 |

### PrimaryButtonConfig / SecondaryButtonConfig / MoreButtonConfig

| Prop | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `text` | `string` | `'主按钮'` / `'次按钮'` / `'更多'` | 按钮文本 |
| `variant` | `'solid-dark' \| 'solid-light' \| 'outlined'` | `'solid-dark'` / `'solid-light'` / `'solid-light'` | 变体类型 |
| `color` | `'brand' \| 'black' \| 'white'` | `'brand'` / `'black'` / `'black'` | 颜色 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `leftIcon` | `ReactNode` / Vue 插槽 | - | 左侧图标 |
| `rightIcon` | `ReactNode` / Vue 插槽 | - | 右侧图标 |
| `onClick` | `(event) => void` | - | 点击事件 |

## 对齐方式

| 对齐方式 | 描述 | 使用场景 |
|---------|------|---------|
| `equal` | 均分对齐 | 主按钮和次按钮宽度相等 |
| `right` | 右侧对齐 | 主按钮占满，次按钮靠右 |
| `text-mix` | 文字混合对齐 | 主按钮固定宽度，次按钮自适应 |
| `icon-mix` | 图标混合对齐 | 主按钮固定宽度，次按钮自适应 |

## 排列方向

| 方向 | 描述 | 使用场景 |
|------|------|---------|
| `horizontal` | 水平排列 | 默认方式，按钮横向排列 |
| `vertical` | 垂直排列 | 按钮纵向排列 |

## 尺寸

| 尺寸 | 主按钮高度 | 次按钮高度 | 使用场景 |
|------|-------------|-------------|---------|
| `large` | 48px | 48px | 表单提交、主要操作 |
| `small` | 32px | 32px | 工具栏、次要操作 |

## 使用示例

### React

```tsx
import { ButtonGroup } from '@vipshop/young-design-system';
import '@vipshop/young-design-system/css';

// 单个按钮
<ButtonGroup
  primaryButton={{
    text: '提交',
    color: 'brand',
    variant: 'solid-dark'
  }}
/>

// 两个按钮组合
<ButtonGroup
  count={2}
  alignment="equal"
  primaryButton={{
    text: '主按钮',
    variant: 'solid-dark',
    color: 'brand'
  }}
  secondaryButton={{
    text: '次按钮',
    variant: 'solid-light',
    color: 'black'
  }}
  showDivider
/>

// 三个按钮组合
<ButtonGroup
  count={3}
  alignment="right"
  primaryButton={{
    text: '主按钮',
    variant: 'solid-dark',
    color: 'brand',
    leftIcon: <IconHeart />
  }}
  secondaryButton={{
    text: '次按钮',
    variant: 'solid-light',
    color: 'black'
  }}
  moreButton={{
    text: '更多',
    variant: 'solid-light',
    color: 'black',
    rightIcon: <IconMore />
  }}
/>

// 四个按钮组合
<ButtonGroup
  count={4}
  alignment="text-mix"
  direction="horizontal"
  size="large"
  primaryButton={{
    text: '按钮1',
    variant: 'solid-dark',
    color: 'brand'
  }}
  secondaryButton={{
    text: '按钮2',
    variant: 'solid-light',
    color: 'black'
  }}
  tertiaryButton={{
    text: '按钮3',
    variant: 'solid-light',
    color: 'black'
  }}
  quaternaryButton={{
    text: '更多',
    variant: 'solid-light',
    color: 'black'
  }}
/>

// 垂直排列
<ButtonGroup
  direction="vertical"
  primaryButton={{
    text: '主按钮',
    variant: 'solid-dark',
    color: 'brand'
  }}
  secondaryButton={{
    text: '次按钮',
    variant: 'solid-light',
    color: 'black'
  }}
/>

// 带点击事件
<ButtonGroup
  primaryButton={{
    text: '保存',
    onClick: (e) => console.log('保存', e)
  }}
  secondaryButton={{
    text: '取消',
    onClick: (e) => console.log('取消', e)
  }}
/>
```

### Vue

```vue
<template>
  <!-- 单个按钮 -->
  <YDSButtonGroup
    :primary-button="{
      text: '提交',
      color: 'brand',
      variant: 'solid-dark'
    }"
  />

  <!-- 两个按钮组合 -->
  <YDSButtonGroup
    :count="2"
    alignment="equal"
    :primary-button="{
      text: '主按钮',
      variant: 'solid-dark',
      color: 'brand'
    }"
    :secondary-button="{
      text: '次按钮',
      variant: 'solid-light',
      color: 'black'
    }"
    :show-divider="true"
  />

  <!-- 三个按钮组合 -->
  <YDSButtonGroup
    :count="3"
    alignment="right"
    :primary-button="{
      text: '主按钮',
      variant: 'solid-dark',
      color: 'brand'
    }"
    :secondary-button="{
      text: '次按钮',
      variant: 'solid-light',
      color: 'black'
    }"
    :more-button="{
      text: '更多',
      variant: 'solid-light',
      color: 'black'
    }"
  />

  <!-- 四个按钮组合 -->
  <YDSButtonGroup
    :count="4"
    alignment="text-mix"
    direction="horizontal"
    size="large"
    :primary-button="{ text: '按钮1', variant: 'solid-dark', color: 'brand' }"
    :secondary-button="{ text: '按钮2', variant: 'solid-light', color: 'black' }"
    :tertiary-button="{ text: '按钮3', variant: 'solid-light', color: 'black' }"
    :quaternary-button="{ text: '更多', variant: 'solid-light', color: 'black' }"
  />

  <!-- 垂直排列 -->
  <YDSButtonGroup
    direction="vertical"
    :primary-button="{ text: '主按钮', variant: 'solid-dark', color: 'brand' }"
    :secondary-button="{ text: '次按钮', variant: 'solid-light', color: 'black' }"
  />
</template>

<script>
import { YDSButtonGroup } from '@vipshop/young-design-system';
import '@vipshop/young-design-system/css';

export default {
  components: {
    YDSButtonGroup
  }
};
</script>
```

## 样式变量

组件使用以下 YDS CSS 变量：

```css
/* 按钮尺寸 */
--yds-button-large-height: 48px;
--yds-button-large-padding-x: 16px;
--yds-button-large-padding-y: 10px;
--yds-button-large-font-size: var(--yds-font-size-14);

--yds-button-medium-height: 32px;
--yds-button-medium-padding-x: 14px;
--yds-button-medium-padding-y: 8px;
--yds-button-medium-font-size: var(--yds-font-size-14);

/* 间距 */
--yds-spacing-8: 8px;
--yds-spacing-12: 12px;
--yds-spacing-16: 16px;

/* 边框颜色 */
--yds-border-default-default: var(--yds-border-transp-black-8);
```

## 事件处理

组件会触发以下事件：

| 事件 | 参数 | 描述 |
|------|------|---------|
| `primary-click` | `MouseEvent` | 主按钮点击 |
| `secondary-click` | `MouseEvent` | 次按钮点击 |
| `more-click` | `MouseEvent` | 更多按钮点击 |
| `tertiary-click` | `MouseEvent` | 三级按钮点击 |
| `quaternary-click` | `MouseEvent` | 四级按钮点击 |

### 事件处理示例

```tsx
function App() {
  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('保存按钮被点击', event);
    // 处理保存逻辑
  };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('取消按钮被点击', event);
    // 处理取消逻辑
  };

  return (
    <ButtonGroup
      primaryButton={{
        text: '保存',
        onClick: handleSave
      }}
      secondaryButton={{
        text: '取消',
        onClick: handleCancel
      }}
    />
  );
}
```

## 响应式设计

组件根据屏幕尺寸自动调整：

- **移动端** (< 768px): 标准间距 8px
- **平板** (>= 768px): 较大间距 16px
- **桌面** (>= 1440px): 最大间距 20px

## Figma 信息

- **组件**: ButtonGroup 按钮组合
- **节点 ID**: 5863:18305
- **文件**: 年轻版设计系统V2.0-草稿
- **URL**: https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿?node-id=5863-18305

## 相关文档

- [Button 组件文档](./button.md)
- [栅格系统](./grid-guide.md)
- [Figma 集成指南](./figma-integration.md)
