# Figma 组件库整合方案

## 概述

本文档说明如何将 Figma 组件库整合到年轻版设计系统中,实现从 Figma 到代码的自动化工作流。

## 已创建的文件

```
✅ figma/config.json                    # Figma 文件配置
✅ figma/components/button.json          # Button 组件映射
✅ src/react/Button.tsx                # React Button 组件
✅ src/vue/Button.vue                  # Vue Button 组件
✅ src/index.ts                       # 统一入口文件
✅ scripts/extract-components.js         # 组件提取脚本
✅ docs/figma-integration.md          # 详细集成指南
✅ docs/button-react-demo.html         # React 演示
✅ docs/button-vue-demo.html           # Vue 演示
```

## 工作流程图

```
┌─────────────┐
│  Figma UI  │
│  设计师     │
└──────┬──────┘
       │ 设计更新
       ↓
┌─────────────────────┐
│  Claude Code      │
│  (自动化流程)     │
└────────┬───────────┘
         │
         ├───────────────────────────────┐
         ↓                             ↓
┌─────────────────┐         ┌─────────────────┐
│ 提取 Design   │         │ 提取组件设计   │
│ Tokens        │         │ (get_design_   │
└────────┬────────┘         │ context)       │
         ↓                 └────────┬────────┘
┌─────────────────┐                │
│ 生成 CSS 变量   │                ↓
│ + 颜色指南    │        ┌─────────────────┐
└────────┬────────┘        │ 获取组件截图   │
         ↓                │ (get_screenshot)│
┌─────────────────┐        └────────┬────────┘
│ tokens/ 目录    │                ↓
│ css/ 目录      │        ┌─────────────────┐
└────────┬────────┘        │ 生成组件代码   │
         ↓                │ (React/Vue)    │
┌─────────────────┐        └────────┬────────┘
│ src/react/     │                ↓
│ src/vue/       │        ┌─────────────────┐
└────────┬────────┘        │ 转换为 YDS    │
         ↓                │ 设计系统样式    │
┌─────────────────┐        └────────┬────────┘
│  添加 Code     │                ↓
│  Connect 映射   │        ┌─────────────────┐
└────────┬────────┘        │ figma/components/ │
         ↓                │ 组件映射文件    │
┌─────────────────┐        └────────┬────────┘
│ 生成文档       │                ↓
│  + 演示       │        ┌─────────────────┐
└────────┬────────┘        │ Figma ↔ 代码  │
         ↓                │ 双向关联        │
┌─────────────────┐        └─────────────────┘
│  npm publish   │
│  发布到仓库    │
└───────────────┘
```

## 快速开始

### 方式一: 使用 Claude Code (推荐)

只需提供 Figma URL,自动完成所有工作:

```bash
# 在 Claude Code 中运行:
"请帮我提取这个 Figma 组件并整合到设计系统:
https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿-?node-id=2482:20987"
```

Claude Code 会自动:
1. ✅ 获取设计上下文 (mcp__figma__get_design_context)
2. ✅ 获取组件截图 (mcp__figma__get_screenshot)
3. ✅ 生成 React 组件
4. ✅ 生成 Vue 组件
5. ✅ 转换为 YDS CSS 变量
6. ✅ 创建组件映射文件
7. ✅ 生成文档和演示
8. ✅ 添加 Code Connect 映射

### 方式二: 手动添加

1. **在 Figma 中添加 Code Connect 映射**

   - 打开 Figma 文件
   - 右键点击组件 → Code Connect → Connect to code
   - 填写组件信息

2. **创建组件文件**

   ```bash
   # 复制现有组件模板
   cp src/react/Button.tsx src/react/NewComponent.tsx
   cp src/vue/Button.vue src/vue/NewComponent.vue
   ```

3. **更新配置**

   编辑 `figma/config.json` 和 `figma/components/new-component.json`

4. **运行构建**

   ```bash
   npm run build
   ```

## 添加新组件步骤

### 示例: 添加 Input 组件

#### Step 1: 在 Figma 中找到组件

```
URL: https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿-?node-id=9999:8888
```

#### Step 2: 在 Claude Code 中提取

```
请帮我提取这个 Input 组件:
https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿-?node-id=9999:8888

要求:
1. 生成 React 组件 (src/react/Input.tsx)
2. 生成 Vue 组件 (src/vue/Input.vue)
3. 使用 YDS CSS 变量
4. 创建组件映射 (figma/components/input.json)
5. 生成文档 (docs/input.md)
6. 生成演示页面 (docs/input-react-demo.html)
7. 添加 Code Connect 映射
```

#### Step 3: 更新入口文件

编辑 `src/index.ts`:

```typescript
export { Input, type InputProps } from './react/Input';
```

#### Step 4: 更新 package.json

```json
{
  "exports": {
    "./Input": "./dist/Input.js"
  }
}
```

#### Step 5: 构建和测试

```bash
# 构建
npm run build

# 查看演示
open docs/input-react-demo.html
```

## 持续集成最佳实践

### 1. 使用 Code Connect

优势:
- 设计师可以直接在 Figma 中查看组件代码
- 开发者可以看到组件的 Figma 源
- 自动同步设计变更

### 2. 版本控制

```bash
# 每次从 Figma 更新后
git add figma/ src/ css/ tokens/ docs/
git commit -m "feat(input): sync with Figma design"
git tag v2.0.1-input
```

### 3. 语义化版本

遵循语义化版本控制 (SemVer):

```
MAJOR.MINOR.PATCH
  ↑    ↑     ↑
  │    │     └─ Bug 修复
  │    └─ 新功能,向后兼容
  └─ 破坏性变更
```

### 4. 自动化测试

```bash
# 在每次构建后运行演示
npm run build && open docs/*.html
```

## 项目中使用

### 安装

```bash
npm install @vipshop/young-design-system
```

### React 使用

```tsx
import { Button } from '@vipshop/young-design-system';
import '@vipshop/young-design-system/css';

export default function App() {
  return (
    <Button variant="solid-dark" color="brand" size="large">
      提交
    </Button>
  );
}
```

### Vue 使用

```vue
<template>
  <YDSButton
    variant="solid-dark"
    color="brand"
    size="large"
  >
    提交
  </YDSButton>
</template>

<script>
import { YDSButtonVue } from '@vipshop/young-design-system';
import '@vipshop/young-design-system/css';

export default {
  components: {
    YDSButton: YDSButtonVue
  }
};
</script>
```

### 纯 CSS 使用

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@vipshop/young-design-system/css/index.css">
</head>
<body>
  <button class="yds-button yds-button--solid-dark yds-button--brand yds-button--large">
    提交
  </button>
</body>
</html>
```

## 从 Figma 更新组件

### 1. 设计师在 Figma 中更新组件

### 2. 运行提取脚本

```bash
cd /Users/linyazhou/young-design-system
npm run extract:all
```

### 3. 查看变更

```bash
git diff
```

### 4. 构建和发布

```bash
# 构建
npm run build

# 更新版本
npm version patch

# 发布
npm publish
```

## 自动化 CI/CD

可以设置 GitHub Actions 自动同步 Figma 更新:

```yaml
name: Sync from Figma

on:
  schedule:
    - cron: '0 2 * * *'  # 每天凌晨2点
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run extract:all
      - run: npm run build
```

## 查看演示

### Button 组件

```bash
# React 演示
open /Users/linyazhou/young-design-system/docs/button-react-demo.html

# Vue 演示
open /Users/linyazhou/young-design-system/docs/button-vue-demo.html

# CSS 演示 (已有)
open /Users/linyazhou/young-design-system/docs/button-demo.html
```

### 颜色系统

```bash
# 颜色演示 (带主题切换)
open /Users/linyazhou/young-design-system/docs/colors-demo.html

# 颜色指南
open /Users/linyazhou/young-design-system/docs/colors-guide.md
```

## 参考文档

- [完整集成指南](docs/figma-integration.md) - 详细的 Figma 集成步骤
- [Button 组件文档](figma-button.md) - Button 组件使用说明
- [颜色系统指南](docs/colors-guide.md) - 颜色变量使用指南
- [CSS 变量文档](css/variables.css) - 所有可用的 CSS 变量

## Figma 资源

- **文件**: 年轻版设计系统V2.0-草稿
- **File Key**: `BepKKgfdECcLIBi5bvkMbp`
- **Button 组件**: `2482:20987`
- **URL**: https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿-?node-id=2482:20987

## 下一步

1. ✅ Button 组件已完成
2. 🔄 添加更多组件 (Input, Card, Modal, etc.)
3. 🔄 在 Figma 中添加 Code Connect 映射
4. 🔄 设置 CI/CD 自动化
5. 🔄 发布到 npm 仓库

---

**提示**: 使用 Claude Code 可以自动化整个流程,只需提供 Figma URL 即可!
