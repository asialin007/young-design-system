# ButtonGroup 按钮组合组件整合完成

## 已创建的文件

```
✅ src/react/ButtonGroup.tsx              # React ButtonGroup 组件
✅ src/vue/ButtonGroup.vue                  # Vue ButtonGroup 组件
✅ css/button-group.css                   # ButtonGroup 样式
✅ css/index.css                           # 导入 ButtonGroup 样式
✅ src/index.ts                              # 导出 ButtonGroup
✅ docs/button-group-guide.md                # ButtonGroup 使用指南
✅ docs/button-group-demo.html                # ButtonGroup 演示页面
✅ figma/components/button-group.json         # ButtonGroup Figma 映射
✅ figma/config.json                         # 更新添加 ButtonGroup 组件
```

## 组件功能

### 按钮组合

| 按钮数量 | 描述 |
|----------|------|
| 1 | 单个按钮 |
| 2 | 主按钮 + 次按钮 |
| 3 | 主按钮 + 次按钮 + 更多按钮 |
| 4 | 主按钮 + 次按钮 + 三级按钮 + 四级按钮 |

### 对齐方式

| 对齐方式 | 描述 |
|----------|------|
| `equal` | 均分对齐，主次按钮宽度相等 |
| `right` | 右侧对齐，主按钮占满，次按钮靠右 |
| `text-mix` | 文字混合对齐，主按钮固定宽度，次按钮自适应 |
| `icon-mix` | 图标混合对齐，主按钮固定宽度，次按钮自适应 |

### 排列方向

| 方向 | 描述 |
|------|------|
| `horizontal` | 水平排列（默认） |
| `vertical` | 垂直排列 |

### 尺寸

| 尺寸 | 按钮高度 | 使用场景 |
|------|------------|----------|
| `large` | 48px | 表单提交、主要操作 |
| `small` | 32px | 工具栏、次要操作 |

### 事件

| 事件名 | 参数 | 触发条件 |
|--------|------|----------|
| `primary-click` | `MouseEvent` | 点击主按钮 |
| `secondary-click` | `MouseEvent` | 点击次按钮 |
| `more-click` | `MouseEvent` | 点击更多按钮 |
| `tertiary-click` | `MouseEvent` | 点击三级按钮 |
| `quaternary-click` | `MouseEvent` | 点击四级按钮 |

## 使用示例

### React

```tsx
import { ButtonGroup } from '@vipshop/young-design-system';
import '@vipshop/young-design-system/css';

// 单个按钮
<ButtonGroup
  primaryButton={{
    text: '提交',
    variant: 'solid-dark',
    color: 'brand'
  }}
/>

// 两个按钮 - 均分对齐
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

// 两个按钮 - 右侧对齐
<ButtonGroup
  count={2}
  alignment="right"
  primaryButton={{
    text: '保存',
    variant: 'solid-dark',
    color: 'brand'
  }}
  secondaryButton={{
    text: '取消',
    variant: 'solid-light',
    color: 'black'
  }}
/>

// 三个按钮
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

// 四个按钮
<ButtonGroup
  count={4}
  alignment="text-mix"
  primaryButton={{ text: '按钮1', variant: 'solid-dark', color: 'brand' }}
  secondaryButton={{ text: '按钮2', variant: 'solid-light', color: 'black' }}
  tertiaryButton={{ text: '按钮3', variant: 'solid-light', color: 'brand' }}
  quaternaryButton={{ text: '更多', variant: 'solid-light', color: 'black' }}
/>

// 带点击事件
<ButtonGroup
  count={2}
  primaryButton={{
    text: '保存',
    onClick: (e) => { /* 保存逻辑 */ }
  }}
  secondaryButton={{
    text: '取消',
    onClick: (e) => { /* 取消逻辑 */ }
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

// 小尺寸
<ButtonGroup
  count={2}
  size="small"
  primaryButton={{
    text: '确定',
    variant: 'solid-dark',
    color: 'brand'
  }}
  secondaryButton={{
    text: '取消',
    variant: 'solid-light',
    color: 'black'
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
      variant: 'solid-dark',
      color: 'brand'
    }"
  />

  <!-- 两个按钮 -->
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

  <!-- 三个按钮 -->
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

## 查看演示

```bash
# 查看完整演示
open /Users/linyazhou/young-design-system/docs/button-group-demo.html

# 查看使用指南
cat /Users/linyazhou/young-design-system/docs/button-group-guide.md
```

## Figma 信息

- **组件**: ButtonGroup 按钮组合
- **节点 ID**: 5863:18305
- **文件**: 年轻版设计系统V2.0-草稿
- **URL**: https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿?node-id=5863:18305

## 下一步

1. ✅ ButtonGroup 组件已录入
2. 🔄 在 Figma 中添加 Code Connect 映射（可选）
3. 🔄 继续添加其他组件（Input, Card, Modal 等）
4. 🔄 设置 CI/CD 自动化

---

**提示**: ButtonGroup 组件已转换为 YDS 设计系统样式，可以直接在项目中使用！
