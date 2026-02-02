# Figma 组件库整合指南

本文档说明如何将 Figma 组件库整合到年轻版设计系统中。

## 目录结构

```
young-design-system/
├── figma/                     # Figma 集成相关
│   ├── config.json            # Figma 文件配置
│   └── components/           # 组件映射配置
│       └── button.json       # Button 组件映射
├── src/                     # 框架组件
│   ├── react/              # React 组件
│   │   └── Button.tsx
│   ├── vue/                # Vue 组件
│   │   └── Button.vue
│   └── index.ts           # 统一入口
├── scripts/                 # 构建和提取脚本
│   ├── extract-colors.js       # 从 Figma Tokens 提取颜色
│   ├── generate-color-css.js   # 生成颜色 CSS
│   ├── extract-components.js   # 从 Figma 提取组件
│   └── build-tokens.js       # 构建 Design Tokens
├── css/                     # 样式文件
│   ├── index.css
│   ├── button.css
│   └── variables.css
└── tokens/                  # Design Tokens
    ├── colors.json
    ├── button.json
    └── ...
```

## 工作流程

### 1. 从 Figma 提取 Design Tokens

```bash
cd /Users/linyazhou/young-design-system
npm run extract:colors
```

这将:
1. 读取 `/Users/linyazhou/Desktop/年轻版ColorToken/Light.tokens.json`
2. 读取 `/Users/linyazhou/Desktop/年轻版ColorToken/Dark.tokens.json`
3. 生成 `tokens/colors-extracted.json`
4. 生成 `tokens/colors-detailed.json`
5. 生成 `css/colors.css`
6. 生成 `docs/colors-guide.md`

### 2. 从 Figma 提取组件

```bash
cd /Users/linyazhou/young-design-system
npm run extract:components
```

这将:
1. 读取 `figma/config.json`
2. 对每个配置的组件调用 Figma MCP 工具
3. 获取设计上下文和截图
4. 添加 Code Connect 映射

### 3. 添加 Code Connect 映射

在 Figma 中建立代码映射:

1. 打开 Figma 文件: [年轻版设计系统V2.0-草稿](https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿-?t=WltW8enqA8FCuqdG-1)

2. 选择 Button 组件 (node-id: 2482:20987)

3. 右键点击 → Code Connect → Connect to code

4. 填写映射信息:
   - **Component Name**: `YDSButton`
   - **Source**: `src/react/Button.tsx`
   - **Label**: `React`
   - **Client Languages**: `typescript,javascript`
   - **Client Frameworks**: `react,vue`

或使用命令行:

```bash
# 在 Claude Code 中运行
npx figma-cli code-connect add \
  --file-key BepKKgfdECcLIBi5bvkMbp \
  --node-id 2482:20987 \
  --component-name YDSButton \
  --source src/react/Button.tsx \
  --label React \
  --client-languages typescript,javascript \
  --client-frameworks react,vue
```

### 4. 更新组件配置

当添加新组件时,需要:

1. 在 `figma/config.json` 添加组件配置:

```json
{
  "components": {
    "NewComponent": {
      "name": "新组件",
      "nodeId": "1234:5678",
      "componentPath": "src/react/NewComponent.tsx",
      "variants": {
        "variant": ["..."],
        "color": ["..."],
        "size": ["..."],
        "state": ["..."]
      }
    }
  }
}
```

2. 在 `figma/components/new-component.json` 添加详细映射:

```json
{
  "component": "NewComponent",
  "figmaNodeId": "1234:5678",
  "figmaFileKey": "BepKKgfdECcLIBi5bvkMbp",
  "codeConnect": {
    "enabled": true,
    "componentName": "YDSNewComponent",
    "label": "React",
    "clientLanguages": "typescript,javascript",
    "clientFrameworks": "react,vue"
  },
  "variants": {
    "variant-name": {
      "nodeId": "1234:5679",
      "variant": "...",
      "color": "...",
      "size": "...",
      "state": "...",
      "props": {
        "background": "...",
        "color": "...",
        "height": "...",
        "padding": "...",
        "fontSize": "...",
        "fontWeight": "..."
      }
    }
  }
}
```

3. 创建 React 组件: `src/react/NewComponent.tsx`
4. 创建 Vue 组件: `src/vue/NewComponent.vue`
5. 更新入口文件: `src/index.ts`

### 5. 使用 Claude Code 自动生成组件

在 Claude Code 中,我可以帮你:

1. **获取设计上下文**:
   ```
   mcp__figma__get_design_context(nodeId, fileKey)
   ```

2. **获取组件截图**:
   ```
   mcp__figma__get_screenshot(nodeId, fileKey)
   ```

3. **生成组件代码**:
   - Figma 自动生成 React + Tailwind 代码
   - 我将其转换为你的 YDS 设计系统
   - 使用 YDS CSS 变量代替 Tailwind

4. **验证视觉效果**:
   - 对比生成代码与 Figma 截图
   - 确保 1:1 视觉一致性

5. **添加 Code Connect 映射**:
   ```
   mcp__figma__add_code_connect_map({
     nodeId, fileKey, componentName, source, label, ...
   })
   ```

### 6. 完整工作流示例

#### 场景: 添加 Input 组件

```bash
# 1. 在 Figma 中找到 Input 组件
# URL: https://www.figma.com/design/...?node-id=9999:8888

# 2. 在 Claude Code 中运行:
"请帮我提取这个 Figma Input 组件:
https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿-?node-id=9999:8888
并生成 React 和 Vue 组件"

# 3. Claude Code 会:
# - 获取设计上下文
# - 获取截图
# - 生成 React 组件
# - 生成 Vue 组件
# - 转换为 YDS 设计系统样式
# - 创建组件映射文件
# - 生成文档和示例

# 4. 将生成的文件保存到项目:
# - src/react/Input.tsx
# - src/vue/Input.vue
# - figma/components/input.json
# - docs/input.md
# - docs/input-react-demo.html
# - docs/input-vue-demo.html

# 5. 在 Figma 中添加 Code Connect 映射
# 或让 Claude Code 自动添加

# 6. 更新 package.json exports
# 7. 运行构建: npm run build
```

## 自动化脚本说明

### extract-colors.js

从 Figma Design Tokens 提取颜色数据。

**输入**:
- `/Users/linyazhou/Desktop/年轻版ColorToken/Light.tokens.json`
- `/Users/linyazhou/Desktop/年轻版ColorToken/Dark.tokens.json`

**输出**:
- `tokens/colors-extracted.json` - 扁平化的颜色值
- `tokens/colors-detailed.json` - 详细的颜色映射
- `css/colors.css` - 完整颜色系统 CSS
- `docs/colors-guide.md` - 颜色使用指南

### extract-components.js

从 Figma 提取组件定义。

**输入**:
- `figma/config.json` - Figma 文件和组件配置

**输出**:
- 生成组件映射文件
- 添加 Code Connect 映射
- 显示提取日志

### generate-color-css.js

从提取的颜色数据生成 CSS 变量。

**输入**:
- `tokens/colors-extracted.json`

**输出**:
- `css/colors.css` - 包含浅色/深色模式的所有颜色变量

## 使用生成的组件

### React 项目

```tsx
import { Button } from '@vipshop/young-design-system';
import '@vipshop/young-design-system/css';

function App() {
  return (
    <div>
      <Button variant="solid-dark" color="brand" size="large">
        提交
      </Button>

      <Button variant="solid-light" color="brand" size="medium">
        取消
      </Button>
    </div>
  );
}
```

### Vue 项目

```vue
<template>
  <div>
    <YDSButton variant="solid-dark" color="brand" size="large">
      提交
    </YDSButton>

    <YDSButton variant="solid-light" color="brand" size="medium">
      取消
    </YDSButton>
  </div>
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

### 纯 CSS 项目

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

  <button class="yds-button yds-button--solid-light yds-button--brand yds-button--medium">
    取消
  </button>
</body>
</html>
```

## 查看演示

### Button 组件演示

```bash
# React 演示
open /Users/linyazhou/young-design-system/docs/button-react-demo.html

# Vue 演示
open /Users/linyazhou/young-design-system/docs/button-vue-demo.html

# 颜色系统演示
open /Users/linyazhou/young-design-system/docs/colors-demo.html

# Button CSS 演示 (已有)
open /Users/linyazhou/young-design-system/docs/button-demo.html
```

## 持续集成建议

### 1. 建立 Figma Code Connect 映射

为所有主要组件建立 Code Connect 映射,这样:

- 在 Figma 中可以看到对应的代码位置
- 设计师可以直接在 Figma 中查看组件代码
- 开发者可以看到组件的 Figma 源文件

### 2. 定期同步

当 Figma 设计更新后:

```bash
# 1. 提取更新后的颜色
npm run extract:colors

# 2. 提取更新后的组件
npm run extract:components

# 3. 重新构建
npm run build

# 4. 发布新版本
npm version patch
npm publish
```

### 3. CI/CD 集成

在 CI 流程中自动提取和构建:

```yaml
# .github/workflows/figma-sync.yml
name: Sync from Figma

on:
  schedule:
    - cron: '0 2 * * *'  # 每天凌晨2点
  workflow_dispatch:          # 手动触发

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Extract from Figma
        run: |
          # 提取颜色和组件
          npm run extract:all

      - name: Build
        run: npm run build

      - name: Commit changes
        run: |
          git config user.name "Figma Sync Bot"
          git config user.email "figma-bot@vipshop.com"
          git add .
          git commit -m "chore: sync from Figma"
          git push
```

## 故障排查

### 提取颜色失败

**问题**: `Error: ENOENT: no such file or directory`

**解决**: 确保 Figma Tokens 文件存在:
```bash
ls -la /Users/linyazhou/Desktop/年轻版ColorToken/
```

### 组件截图为空

**问题**: 获取的截图为空白

**解决**:
1. 确认 Figma 文件有访问权限
2. 确认 Node ID 正确
3. 尝试重新获取:
   ```bash
   # 在 Claude Code 中
   "请重新获取这个组件的截图: <figma-url>"
   ```

### 样式不生效

**问题**: 组件样式未应用

**解决**: 确保导入了 CSS:
```tsx
import '@vipshop/young-design-system/css';
// 或
import '@vipshop/young-design-system/css/index.css';
```

## 参考资源

- [Figma Code Connect 文档](https://www.figma.com/developer/docs/code-connect)
- [年轻版设计系统 Figma 文件](https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/年轻版设计系统V2.0-草稿-?t=WltW8enqA8FCuqdG-1)
- [Button 组件文档](./button.md)
- [颜色系统指南](./colors-guide.md)
