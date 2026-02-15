# Figma Channel 连接配置

本项目已配置连接 **91zl2n** Channel（Figma 设计源）。

## 配置说明

| 项     | 值       | 说明                     |
|--------|----------|--------------------------|
| Channel / File Key | `91zl2n` | Figma 文件或 Channel 标识 |
| 用途   | 设计稿同步、Code Connect、实现对照 | 年轻版设计系统 / 原型设计源 |

## 如何使用

### 1. 在 Figma 中打开对应文件

- 若 `91zl2n` 为 **Figma 文件 Key**，完整链接格式示例：
  - `https://www.figma.com/design/91zl2n/文件名?node-id=xxx-xxx`
- 在 Figma 中打开该文件后，即可基于该设计做实现或 Code Connect。

### 2. Code Connect（设计 ↔ 代码映射）

需要建立 Figma 组件与代码组件映射时：

1. 确保已连接 **Figma MCP**（Cursor/Claude 中启用 Figma MCP 服务）。
2. 提供带 **node-id** 的 Figma 链接，例如：
   - `https://www.figma.com/design/91zl2n/页面名?node-id=1-2`
3. 说明要连接的组件或页面，即可进行 Code Connect 映射。

### 3. 按设计稿实现（1:1 还原）

根据你的规则，实现前应：

1. 使用 `get_design_context` 获取节点设计结构。
2. 使用 `get_screenshot` 获取视觉参考。
3. 按项目 YDS 规范（颜色、栅格、组件）实现并校验与 Figma 一致。

## 当前环境说明

- **Figma MCP**：若当前会话中未出现 `get_design_context`、`get_screenshot`、`get_code_connect_map` 等 Figma 工具，请先在 Cursor 中连接 Figma MCP 服务器（如 figma / figma-desktop）。
- **91zl2n**：已在本项目中固定为该 Channel/文件 Key，对话时可直接说「连 91zl2n」「用 91zl2n 的设计」等。

---

**最后更新**：2025-02-05
