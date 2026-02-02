# PRD 转高保真原型

根据 PRD 文档生成高保真 HTML 原型，严格遵循年轻版设计系统规范。

## 使用方法

1. 确保 PRD 文档位于 `prd/` 目录
2. 运行此技能
3. 生成的 HTML 文件将保存在 `prototype/` 目录

## 技术栈

- HTML5 + CSS3 + 原生 JavaScript
- Tailwind CSS（CDN）
- 年轻版设计系统组件

## 核心设计规则

1. **默认按钮颜色**：黑色（`yds-button--black`）
2. **容器圆角**：零圆角/直角（`border-radius: 0`）
3. **容器阴影**：无阴影（扁平化设计）
4. **图标使用**：必须从设计系统图标库加载
5. **对话框**：必须使用 YDS Dialog 组件
6. **网格布局**：必须使用 YDS 网格系统（12 列均分）
7. **按钮图标**：非白色按钮使用白色图标
8. **图标激活状态**：使用品牌色

## 业务逻辑检查

生成原型前，先检查核心业务逻辑是否闭环：
- 登录/注册流程
- 搜索商品流程
- 加购商品流程
- 收藏商品提示
- 其他关键交互流程

不闭环则补充相应产品逻辑。

## 文件分离

每个功能页面生成一个独立的 HTML 文件，方便后续修改。

## 参考文档

- 设计标准：`/Users/linyazhou/young-design-system/docs/design-standards.md`
- 对话框文档：`/Users/linyazhou/young-design-system/docs/dialog-guide.md`
- 图标演示：`/Users/linyazhou/young-design-system/docs/icons-demo.html`
