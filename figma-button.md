# Button 组件

## 概述

Button 组件提供多种样式变体，支持不同的颜色、尺寸和状态。

## Figma 映射

| 属性 | Figma 值 | 代码值 |
|------|-----------|--------|
| 变体 | 深色填充 | `solid-dark` |
| 变体 | 浅色填充 | `solid-light` |
| 变体 | 描边 | `outlined` |
| 颜色 | 品牌色 | `brand` |
| 颜色 | 黑色 | `black` |
| 颜色 | 白色 | `white` |
| 尺寸 | 超大尺寸 | `xl` |
| 尺寸 | 大尺寸 | `large` |
| 尺寸 | 中尺寸 | `medium` |
| 尺寸 | 中小尺寸 | `medium-small` |
| 尺寸 | 小尺寸 | `small` |
| 尺寸 | 迷你 | `mini` |
| 状态 | 默认 | `default` |
| 状态 | 禁用 | `disabled` |

## 使用示例

### React

```tsx
import { Button } from '@vipshop/young-design-system';

// 深色填充 + 品牌色 + 大尺寸
<Button
  variant="solid-dark"
  color="brand"
  size="large"
>
  确认
</Button>

// 浅色填充 + 品牌色 + 中尺寸
<Button
  variant="solid-light"
  color="brand"
  size="medium"
>
  取消
</Button>

// 描边 + 品牌色 + 小尺寸
<Button
  variant="outlined"
  color="brand"
  size="small"
>
  详情
</Button>

// 纯图标模式
<Button
  variant="solid-dark"
  color="brand"
  size="large"
  iconOnly
>
  <IconSearch />
</Button>

// 带图标
<Button
  variant="solid-dark"
  color="brand"
  size="large"
  leftIcon={<IconHeart />}
>
  收藏
</Button>

// 禁用状态
<Button
  variant="solid-dark"
  color="brand"
  size="large"
  disabled
>
  提交
</Button>

// 加载状态
<Button
  variant="solid-dark"
  color="brand"
  size="large"
  loading
>
  提交中...
</Button>
```

### Vue

```vue
<template>
  <div>
    <!-- 深色填充 + 品牌色 + 大尺寸 -->
    <YDSButton
      variant="solid-dark"
      color="brand"
      size="large"
    >
      确认
    </YDSButton>

    <!-- 浅色填充 + 品牌色 + 中尺寸 -->
    <YDSButton
      variant="solid-light"
      color="brand"
      size="medium"
    >
      取消
    </YDSButton>

    <!-- 描边 + 品牌色 + 小尺寸 -->
    <YDSButton
      variant="outlined"
      color="brand"
      size="small"
    >
      详情
    </YDSButton>

    <!-- 纯图标模式 -->
    <YDSButton
      variant="solid-dark"
      color="brand"
      size="large"
      icon-only
    >
      <template #left>
        <IconSearch />
      </template>
    </YDSButton>

    <!-- 带图标 -->
    <YDSButton
      variant="solid-dark"
      color="brand"
      size="large"
    >
      <template #left>
        <IconHeart />
      </template>
      收藏
    </YDSButton>

    <!-- 禁用状态 -->
    <YDSButton
      variant="solid-dark"
      color="brand"
      size="large"
      :disabled="true"
    >
      提交
    </YDSButton>

    <!-- 加载状态 -->
    <YDSButton
      variant="solid-dark"
      color="brand"
      size="large"
      :loading="isLoading"
    >
      提交中...
    </YDSButton>
  </div>
</template>

<script>
import { YDSButton } from '@vipshop/young-design-system';

export default {
  components: {
    YDSButton
  },
  data() {
    return {
      isLoading: false
    };
  }
};
</script>
```

## Props

### ButtonProps (React)

| Prop | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `variant` | `'solid-dark' \| 'solid-light' \| 'outlined'` | `'solid-dark'` | 变体类型 |
| `color` | `'brand' \| 'black' \| 'white'` | `'brand'` | 颜色 |
| `size` | `'xl' \| 'large' \| 'medium' \| 'medium-small' \| 'small' \| 'mini'` | `'large'` | 尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `iconOnly` | `boolean` | `false` | 是否纯图标 |
| `loading` | `boolean` | `false` | 加载状态 |
| `leftIcon` | `ReactNode` | - | 左侧图标 |
| `rightIcon` | `ReactNode` | - | 右侧图标 |
| `onClick` | `(event: MouseEvent) => void` | - | 点击事件 |

## 变体说明

### 变体 (Variant)

| 变体 | 描述 | 使用场景 |
|------|------|---------|
| `solid-dark` | 深色填充 | 主要操作按钮、提交按钮 |
| `solid-light` | 浅色填充 | 次要操作按钮、取消按钮 |
| `outlined` | 描边 | 辅助操作按钮、详情按钮 |

### 颜色 (Color)

| 颜色 | 描述 | 使用场景 |
|------|------|---------|
| `brand` | 品牌色 | 品牌相关操作 |
| `black` | 黑色 | 中性操作 |
| `white` | 白色 | 深色背景上的操作 |

### 尺寸 (Size)

| 尺寸 | 高度 | 使用场景 |
|------|------|---------|
| `xl` | 48px | 页面主要操作、CTA 按钮 |
| `large` | 38px | 表单提交、对话框按钮 |
| `medium` | 32px | 工具栏按钮 |
| `medium-small` | 28px | 卡片操作 |
| `small` | 24px | 表格操作 |
| `mini` | 20px | 标签、徽章 |

## 样式变量

组件使用以下 YDS CSS 变量:

```css
/* 颜色 */
--yds-bg-brand-default: #ff77e7;
--yds-bg-brand-secondary: #fff2ff;
--yds-text-brand-default: #e52ec5;
--yds-text-default-tertiary: #1b1b1b;
--yds-border-brand-default: #f74ad9;

/* 尺寸 */
--yds-button-xl-height: 48px;
--yds-button-large-height: 38px;
--yds-button-medium-height: 32px;
--yds-button-medium-small-height: 28px;
--yds-button-small-height: 24px;
--yds-button-mini-height: 20px;

/* 字体 */
--yds-font-family-base: PingFang SC, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif;
--yds-font-weight-regular: 400;
--yds-font-weight-medium: 500;
```

## 自动化工作流

### 从 Figma 提取组件

```bash
# 运行组件提取脚本
cd /Users/linyazhou/young-design-system
node scripts/extract-components.js
```

### 添加 Code Connect 映射

```bash
# 手动添加 Figma Code Connect 映射
# 在 Figma 文件中: 右键组件 -> Code Connect -> Connect to code
```

## Figma 资源

- **文件**: 年轻版设计系统V2.0-草稿
- **File Key**: `BepKKgfdECcLIBi5bvkMbp`
- **Button 组件节点**: `2482:20987`
- **URL**: https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿-?node-id=2482-20987
