# 设计系统更新日志 - 容器样式规范

## 更新时间
2025-01-31

## 更新版本
v2.4.0

## 📋 更新内容

### 核心原则更新

**新增核心设计原则：所有容器原则上不默认添加边框和阴影效果**

这是一项重要的设计系统更新,强化了年轻版设计系统的扁平化设计理念。

---

## 🎯 详细更新内容

### 1. 新增"容器边框规范"

**位置**: `docs/design-standards.md` 第3点

**核心规则**:
```css
/* ✅ 正确：容器不添加边框 */
.card {
  border: none;
}

/* ❌ 错误：不要默认添加边框 */
.card {
  border: 1px solid var(--yds-border-default-light);
}
```

**适用范围**:
- ✅ 卡片容器 (Card) - 无边框
- ✅ 内容区域 (Content Area) - 无边框
- ✅ 列表项 (List Item) - 无边框
- ✅ 模态框 (Dialog/Modal) - 无边框
- ✅ 面板 (Panel) - 无边框

**例外情况（可添加边框）**:
- 分隔线（使用 `<hr>` 或 `border-bottom`）
- 表单输入框（使用设计系统输入框组件）
- 特殊强调的容器（需明确理由）
- 外部链接卡片
- 需要明确边界的嵌套内容

**替代方案**:
使用**间距**和**背景色**区分内容区域,而非边框

---

### 2. 强化"容器阴影规范"

**位置**: `docs/design-standards.md` 第4点

**核心规则**:
```css
/* ✅ 正确：容器不添加阴影 */
.card {
  box-shadow: none;
}

/* ❌ 错误：不要默认添加阴影 */
.card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
```

**适用范围**:
- ✅ 卡片容器 (Card) - 无阴影
- ✅ 内容区域 (Content Area) - 无阴影
- ✅ 列表项 (List Item) - 无阴影
- ✅ 模态框 (Dialog/Modal) - 无阴影
- ✅ 面板 (Panel) - 无阴影

**例外情况（可使用阴影）**:
- 悬浮按钮（Floating Action Button）
- 下拉菜单（Dropdown Menu）
- 工具提示（Tooltip）
- 浮动元素（Popover）
- 悬停状态（Hover State）

**替代方案**:
使用**间距**和**背景色**区分层级,而非阴影

---

### 3. 更新"使用检查清单"

**新增检查项**:
- [ ] **内容容器原则上不添加边框（`border: none`）**
- [ ] **内容容器不添加阴影效果（`box-shadow: none`）**

---

### 4. 更新"容器样式速查表"

**位置**: `docs/design-standards.md` 快速参考部分

| 组件类型 | 圆角值 | 边框 | 阴影 | CSS 变量 |
|---------|-------|------|------|---------|
| **内容容器** | **0px** | **无边框** | **无阴影** | `var(--yds-radius-none)`, `border: none`, `box-shadow: none` |
| **卡片容器** | **0px** | **无边框** | **无阴影** | `var(--yds-radius-none)`, `border: none`, `box-shadow: none` |
| **列表项** | **0px** | **仅底部边框** | **无阴影** | `var(--yds-radius-none)`, `border-bottom: 1px solid`, `box-shadow: none` |

---

### 5. 更新"设计原则"

**位置**: `docs/design-standards.md` 设计原则部分

**视觉风格更新**:
- **扁平化设计**：无阴影效果、无默认边框，通过间距和背景色区分层级
- **清晰层级**：使用间距、颜色、背景色区分层级，而非圆角、边框和阴影
- **容器极简**：内容容器原则上不添加边框和阴影，保持视觉简洁

---

## 📝 规范编号调整

由于新增了"容器边框规范",后续规范编号相应调整:

| 原编号 | 新编号 | 规范名称 |
|--------|--------|----------|
| - | **3** | **容器边框规范** (新增) |
| 3 | **4** | **容器阴影规范** (强化) |
| 4 | 5 | 图标使用规范 |
| 5 | 6 | 对话框/弹窗使用规范 |
| 6 | 7 | 栅格布局使用规范 |
| 7 | 8 | 按钮图标颜色规范 |
| 8 | 9 | 图标选中态颜色规范 |
| 9 | 10 | 移动端布局规范 |

---

## 🎨 设计理念说明

### 为什么不默认添加边框和阴影?

1. **扁平化设计趋势**
   - 现代UI设计趋向扁平化、极简化
   - 减少视觉噪音,提升内容可读性
   - 符合年轻版设计系统的整体风格定位

2. **使用间距和背景色区分内容**
   - 通过间距（spacing）创建内容之间的呼吸感
   - 通过背景色（background-color）区分不同内容区域
   - 更清晰、更现代的视觉层次

3. **性能和可维护性**
   - 减少CSS属性的使用,提升性能
   - 简化组件样式,提高可维护性
   - 统一的设计语言,降低开发成本

4. **移动端友好**
   - 扁平化设计在移动端表现更好
   - 减少视觉元素的复杂度
   - 提升移动端用户体验

---

## ✅ 正确实现示例

### 卡片容器

```css
/* ✅ 正确：无边框、无阴影 */
.todo-card {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none); /* 直角 */
  padding: var(--yds-spacing-16);
  border: none; /* 无边框 */
  box-shadow: none; /* 无阴影 */
}
```

### 内容区域

```css
/* ✅ 正确：使用背景色区分 */
.section-primary {
  background-color: var(--yds-bg-default-white);
  padding: var(--yds-spacing-20);
}

.section-secondary {
  background-color: var(--yds-bg-default-gray);
  padding: var(--yds-spacing-20);
}
```

### 列表项

```css
/* ✅ 正确：仅使用底部边框作为分隔 */
.list-item {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none);
  padding: var(--yds-spacing-12) var(--yds-spacing-16);
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid var(--yds-border-default-light);
  box-shadow: none;
}
```

---

## ❌ 避免的错误实现

### 错误1：给卡片添加边框

```css
/* ❌ 错误：不要给卡片添加边框 */
.card {
  background-color: var(--yds-bg-default-white);
  border: 1px solid var(--yds-border-default-light); /* ❌ */
}
```

### 错误2：给容器添加阴影

```css
/* ❌ 错误：不要给容器添加阴影 */
.card {
  background-color: var(--yds-bg-default-white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); /* ❌ */
}
```

### 错误3：使用边框区分内容

```css
/* ❌ 错误：应该使用背景色和间距区分 */
.section-primary {
  background-color: var(--yds-bg-default-white);
  border: 1px solid var(--yds-border-default-light); /* ❌ */
}

/* ✅ 正确：使用背景色区分 */
.section-primary {
  background-color: var(--yds-bg-default-white);
}
.section-secondary {
  background-color: var(--yds-bg-default-gray);
}
```

---

## 📚 相关文档

- [设计规范文档](./design-standards.md)
- [颜色系统指南](./colors-guide.md)
- [栅格系统指南](./grid-guide.md)
- [对话框组件文档](./dialog-guide.md)

---

## 🔄 迁移指南

### 如果你的项目已经使用了边框和阴影

**建议逐步迁移**:

1. **评估现有容器样式**
   - 列出所有使用边框和阴影的组件
   - 评估是否可以移除这些样式

2. **使用背景色和间距替代**
   - 使用不同的背景色区分内容区域
   - 增加间距（padding/margin）创建呼吸感

3. **测试视觉效果**
   - 确保移除边框和阴影后,视觉层次依然清晰
   - 检查在不同场景下的可读性

4. **特殊情况保留**
   - 对于确实需要边框的场景（如分隔线）,保留必要的样式
   - 在代码注释中说明保留边框/阴影的理由

---

## 🎯 总结

**核心原则**: 所有容器原则上不默认添加边框和阴影效果

**实现方式**:
- ✅ 使用 `border: none` 移除边框
- ✅ 使用 `box-shadow: none` 移除阴影
- ✅ 使用 `background-color` 和 `spacing` 区分内容

**设计理念**:
- 扁平化设计
- 简洁现代
- 清晰层级

**适用范围**:
- 卡片容器
- 内容区域
- 列表项
- 模态框
- 面板

---

**重要提示**: 本规范是年轻版设计系统的核心约定,所有新项目必须严格遵循!
