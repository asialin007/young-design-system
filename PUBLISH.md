# 发布到 npm 的步骤

## 1. 准备工作

确保你有 npm 账号：
```bash
npm login
```

## 2. 修改包名（重要！）

在 `package.json` 中，将包名改为你自己的：

```json
{
  "name": "@你的用户名/young-design-system",
  // 或者不使用 scope：
  "name": "young-design-system-vipshop",
}
```

## 3. 构建（当前版本无需构建，直接发布）

由于我们使用纯 CSS 和 JSON，无需构建步骤。

## 4. 发布

```bash
# 第一次发布
npm publish --access public

# 后续更新版本
npm version patch  # 修复 bug: 2.0.0 -> 2.0.1
npm version minor  # 新功能: 2.0.0 -> 2.1.0
npm version major  # 破坏性更新: 2.0.0 -> 3.0.0

npm publish
```

## 5. 测试安装

```bash
# 在其他项目中测试
npm install @你的用户名/young-design-system
```

## 注意事项

- ✅ 确保 `package.json` 中的 `files` 字段包含要发布的文件
- ✅ 确保 README.md 完善
- ✅ 确保 LICENSE 文件存在
- ✅ 测试所有示例代码是否正常工作
