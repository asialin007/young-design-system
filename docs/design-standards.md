# 年轻版设计系统 - 设计规范

本文档记录年轻版设计系统的核心设计规范和默认约定。

## 📋 核心规范

### 1. 按钮默认样式规范

**规则 1：项目的主行动按钮默认使用超大黑色按钮（XL）**

**项目级主按钮标准：**
- **尺寸**：XL（超大）- 48px 高度
- **颜色**：黑色（`yds-button--solid-dark yds-button--black`）
- **最小宽度**：359px（移动端全屏宽度）
- **图标尺寸**：18px × 18px（自动应用）

**适用场景：**
- ✅ 页面/屏幕的主要操作按钮
- ✅ 表单提交按钮
- ✅ 确认/同意按钮
- ✅ 重要的行动按钮（CTA）

**代码示例：**
```html
<!-- ✅ 正确：项目主行动按钮使用 XL 黑色按钮 -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl" style="width: 100%;">
  <img src="../icons/y_icon_line_edit_add.svg" class="yds-icon" style="filter: brightness(0) invert(1);" alt="添加">
  添加新任务
</button>

<!-- ✅ 正确：表单提交使用 XL 黑色按钮 -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl" style="width: 100%;">
  提交
</button>

<!-- ❌ 错误：主行动按钮不要使用其他尺寸 -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--large">
  提交
</button>
```

---

**规则 2：其他按钮使用黑色按钮作为默认选择**

**按钮选择优先级：**
1. **项目主行动按钮**：**XL 黑色按钮**（`yds-button--xl yds-button--black`）
2. **默认首选**：黑色按钮 `yds-button--black`（其他尺寸）
3. **次要选择**：白色按钮 `yds-button--white`
4. **特殊场景**：品牌色按钮 `yds-button--brand`（仅用于品牌强相关、营销等特殊场景）

**代码示例：**
```html
<!-- 主行动按钮 - XL 黑色 -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl">
  提交
</button>

<!-- 常规操作按钮 - Large 黑色 -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--large">
  确认
</button>

<!-- 次要操作按钮 - 白色 -->
<button class="yds-button yds-button--solid-light yds-button--white yds-button--large">
  取消
</button>

<!-- 特殊场景 - 品牌色（需明确理由） -->
<button class="yds-button yds-button--solid-dark yds-button--brand yds-button--large">
  立即抢购
</button>
```

#### 按钮内图标尺寸规范

按钮内嵌的左侧图标尺寸根据按钮尺寸自动调整：

| 按钮尺寸 | 按钮高度 | 图标尺寸 | 使用场景 |
|---------|---------|---------|---------|
| **XL（超大）** | 48px | **18px × 18px** | 全屏主按钮 |
| **Large（大）** | 38px | 16px × 16px | 主要操作 |
| **Medium（中）** | 32px | 16px × 16px | 常规操作 |
| **Medium-Small** | 28px | 14px × 14px | 次要操作 |
| **Small（小）** | 24px | 14px × 14px | 紧凑操作 |
| **Mini（迷你）** | 20px | 12px × 12px | 极简操作 |

**实现方式：**
```css
/* 自动应用 - 无需额外类名 */
.yds-button--xl .yds-icon {
  width: 18px;
  height: 18px;
}

/* 使用示例 */
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl">
  <img src="../icons/y_icon_line_edit_add.svg" class="yds-icon" style="filter: brightness(0) invert(1);" alt="添加">
  添加新任务
</button>
```

**重要说明：**
- ✅ 图标尺寸自动继承自按钮尺寸，无需手动设置
- ✅ 深色按钮的图标自动变白（`filter: brightness(0) invert(1);`）
- ✅ 所有图标必须从设计系统图标库调用（`/icons/` 目录）

```html
<!-- ✅ 正确：默认使用黑色按钮 -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--large">
  确认
</button>

<!-- ❌ 错误：不要默认使用品牌色按钮 -->
<button class="yds-button yds-button--solid-dark yds-button--brand yds-button--large">
  确认
</button>
```

**按钮选择优先级：**
1. **默认首选**：黑色按钮 `yds-button--black`
2. **次要选择**：白色按钮 `yds-button--white`
3. **特殊场景**：品牌色按钮 `yds-button--brand`（仅用于品牌强相关、营销等特殊场景）

**代码示例：**
```html
<!-- 主操作按钮 - 黑色 -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--large">
  提交
</button>

<!-- 次要操作按钮 - 白色 -->
<button class="yds-button yds-button--solid-light yds-button--white yds-button--large">
  取消
</button>

<!-- 特殊场景 - 品牌色（需明确理由） -->
<button class="yds-button yds-button--solid-dark yds-button--brand yds-button--large">
  立即抢购
</button>
```

### 2. 容器圆角规范

**规则：年轻版项目的内容容器和交互组件默认使用直角（无圆角）**

```css
/* ✅ 正确：内容容器使用直角 */
.card {
  border-radius: var(--yds-radius-none); /* 0px */
}

/* ✅ 正确：按钮使用直角 */
.yds-button {
  border-radius: var(--yds-radius-none); /* 0px */
}

/* ✅ 正确：复选框使用直角 */
.yds-checkbox__box {
  border-radius: var(--yds-radius-none); /* 0px */
}

/* ❌ 错误：不要默认使用圆角 */
.card {
  border-radius: var(--yds-radius-lg); /* 8px */
}
```

**适用范围：**
- ✅ 卡片容器 (Card) - 直角
- ✅ 内容区域 (Content Area) - 直角
- ✅ 列表项 (List Item) - 直角
- ✅ 模态框 (Dialog/Modal) - 直角
- ✅ 面板 (Panel) - 直角
- ✅ **按钮 (Button) - 直角** ⭐
- ✅ **复选框 (Checkbox) - 直角** ⭐

**例外情况（保持圆角）：**
- **单选框 (Radio)** - 必须保持圆形（`border-radius: 50%`）
- **开关 (Switch)** - 保持圆角（设计特性）
- 标签/徽章（Tag/Badge）- 小圆角（`var(--yds-radius-sm)`）
- 图片/头像 - 圆角（根据设计需求）
- 浮动元素（Popover/Tooltip）- 小圆角

**代码示例：**
```css
/* 卡片容器 - 直角 */
.todo-card {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none); /* 直角 */
  padding: var(--yds-spacing-16);
  border: none;
}

/* 内容区域 - 直角 */
.content-section {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none); /* 直角 */
  padding: var(--yds-spacing-20);
}

/* 列表项 - 直角 */
.list-item {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none); /* 直角 */
  padding: var(--yds-spacing-12) var(--yds-spacing-16);
  border-bottom: 1px solid var(--yds-border-default-light);
}

/* 按钮 - 直角（设计系统组件已内置） */
.yds-button {
  border-radius: var(--yds-radius-none, 0); /* 直角 */
}

/* 复选框 - 直角（设计系统组件已内置） */
.yds-checkbox__box {
  border-radius: var(--yds-radius-none, 0); /* 直角 */
}

/* 单选框 - 保持圆形（例外） */
.yds-radio__circle {
  border-radius: 50%; /* ✅ 必须保持圆形 */
}

/* 开关 - 保持圆角（例外） */
.yds-switch {
  border-radius: 72px; /* ✅ 必须保持圆角 */
}
```

### 3. 容器边框规范

**⚠️ 核心规则：所有内容容器原则上不默认添加边框**

```css
/* ✅ 正确：容器不添加边框 */
.card {
  background-color: var(--yds-bg-default-white);
  border: none;
}

/* ❌ 错误：不要默认添加边框 */
.card {
  border: 1px solid var(--yds-border-default-light);
}
```

**设计理念：**
- 年轻版设计系统采用**扁平化设计**风格
- 通过**间距**和**背景色**区分内容区域，而非边框
- 边框仅在特殊场景使用（如分隔线、特殊强调等）

**适用范围：**
- ✅ 卡片容器 (Card) - 无边框
- ✅ 内容区域 (Content Area) - 无边框
- ✅ 列表项 (List Item) - 无边框
- ✅ 模态框 (Dialog/Modal) - 无边框
- ✅ 面板 (Panel) - 无边框

**例外情况（可添加边框）：**
- 分隔线（使用 `<hr>` 或 `border-bottom`）
- 表单输入框（使用设计系统输入框组件）
- 特殊强调的容器（需明确理由）
- 外部链接卡片
- 需要明确边界的嵌套内容

**代码示例：**
```css
/* 卡片容器 - 无边框 */
.todo-card {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none);
  padding: var(--yds-spacing-16);
  border: none; /* 无边框 */
}

/* 内容区域 - 无边框 */
.content-section {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none);
  padding: var(--yds-spacing-20);
  border: none; /* 无边框 */
}

/* 列表项 - 使用底部边框作为分隔 */
.list-item {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none);
  padding: var(--yds-spacing-12) var(--yds-spacing-16);
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid var(--yds-border-default-light); /* 仅底部边框 */
}
```

**替代方案：使用间距和背景色区分内容**
```css
/* ✅ 推荐：使用间距 + 背景色区分 */
.section-primary {
  background-color: var(--yds-bg-default-white);
  padding: var(--yds-spacing-20);
}

.section-secondary {
  background-color: var(--yds-bg-default-gray);
  padding: var(--yds-spacing-20);
}

/* ❌ 避免：使用边框区分 */
.section-primary {
  background-color: var(--yds-bg-default-white);
  border: 1px solid var(--yds-border-default-light);
}
```

### 4. 容器阴影规范

**⚠️ 核心规则：所有内容容器默认不添加阴影效果**

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

**设计理念：**
- 年轻版设计系统采用**扁平化设计**风格
- 通过**间距**和**背景色**区分层级，而非阴影
- 阴影仅在特殊场景使用（如浮动元素、悬浮状态等）

**适用范围：**
- ✅ 卡片容器 (Card) - 无阴影
- ✅ 内容区域 (Content Area) - 无阴影
- ✅ 列表项 (List Item) - 无阴影
- ✅ 模态框 (Dialog/Modal) - 无阴影
- ✅ 面板 (Panel) - 无阴影

**例外情况（可使用阴影）：**
- 悬浮按钮（Floating Action Button）
- 下拉菜单（Dropdown Menu）
- 工具提示（Tooltip）
- 浮动元素（Popover）
- 悬停状态（Hover State）

**代码示例：**
```css
/* 卡片容器 - 无阴影 */
.todo-card {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none);
  padding: var(--yds-spacing-16);
  border: none;
  box-shadow: none; /* 无阴影 */
}

/* 内容区域 - 无阴影 */
.content-section {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none);
  padding: var(--yds-spacing-20);
  border: none;
  box-shadow: none; /* 无阴影 */
}

/* 列表项 - 无阴影 */
.list-item {
  background-color: var(--yds-bg-default-white);
  border-radius: var(--yds-radius-none);
  padding: var(--yds-spacing-12) var(--yds-spacing-16);
  border-bottom: 1px solid var(--yds-border-default-light);
  box-shadow: none; /* 无阴影 */
}
```

**替代方案：使用间距和背景色区分层级**
```css
/* ✅ 推荐：使用间距 + 背景色区分层级 */
.card-elevated {
  background-color: var(--yds-bg-default-white);
  margin-top: var(--yds-spacing-16);
  margin-bottom: var(--yds-spacing-16);
  padding: var(--yds-spacing-20);
}

/* ❌ 避免：使用阴影区分层级 */
.card-elevated {
  background-color: var(--yds-bg-default-white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### 5. 图标使用规范

**⚠️ 核心规则：所有图标必须从设计系统图标库中调用，项目中不要新增设计系统没有的图标**

```html
<!-- ✅ 正确：使用设计系统图标库 -->
<img src="/Users/linyazhou/young-design-system/icons/y_icon_line_direction_arrow_left.svg"
     class="yds-icon"
     alt="返回">

<!-- ❌ 错误：不要使用其他来源的图标 -->
<img src="https://example.com/icon.svg" alt="返回">
<svg>...</svg> <!-- 内联 SVG（除 TabBar 等特殊情况） -->

<!-- ❌ 严禁：不要新增设计系统没有的图标 -->
<img src="custom-icon.svg" alt="自定义图标"> <!-- 新增图标违反规范 -->
```

**重要约束：**
- ✅ **仅使用设计系统图标库中已存在的图标**
- ✅ **项目中不要新增设计系统没有的图标**
- ✅ **如果需要新图标，先添加到设计系统图标库，再调用**
- ✅ 所有图标从设计系统图标库统一管理

**图标库位置：**
- 📁 `/Users/linyazhou/young-design-system/icons/`
- 📄 查看所有图标：`/Users/linyazhou/young-design-system/docs/icons-demo.html`

**新增图标流程：**
1. 如果项目中需要新图标
2. 先将图标添加到设计系统图标库（`/icons/` 目录）
3. 更新图标库文档（`icons-demo.html`）
4. 然后在项目中调用
5. **不要直接在项目中添加自定义图标**

**常用图标示例：**
```html
<!-- 返回箭头 -->
<img src="../icons/y_icon_line_direction_arrow_left.svg" class="yds-icon" alt="返回">

<!-- 下拉箭头 -->
<img src="../icons/y_icon_line_direction_arrow_down.svg" class="yds-icon" alt="下拉">

<!-- 关闭 -->
<img src="../icons/icon_line_generality_end.svg" class="yds-icon" alt="关闭">

<!-- 搜索 -->
<img src="../icons/y_icon_line_generality_search.svg" class="yds-icon" alt="搜索">

<!-- 购物车 -->
<img src="../icons/y_icon_line_business_shopping_cart.svg" class="yds-icon" alt="购物车">

<!-- 更多（三点） -->
<img src="../icons/y_icon_line_generality_more.svg" class="yds-icon" alt="更多">
```

**图标尺寸变体：**
```html
<!-- 超小图标 -->
<img src="..." class="yds-icon yds-icon--xs">

<!-- 小图标 -->
<img src="..." class="yds-icon yds-icon--sm">

<!-- 默认图标 (24px) -->
<img src="..." class="yds-icon yds-icon--md">

<!-- 大图标 -->
<img src="..." class="yds-icon yds-icon--lg">

<!-- 超大图标 -->
<img src="..." class="yds-icon yds-icon--xl">
```

### 6. 对话框/弹窗使用规范

**规则：所有弹窗必须使用设计系统的 Dialog 组件**

```html
<!-- ✅ 正确：使用 YDS Dialog 组件 -->
<div class="yds-dialog-overlay">
  <div class="yds-dialog">
    <div class="yds-dialog__title-section">
      <h3 class="yds-dialog__title">提示</h3>
    </div>
    <div class="yds-dialog__content">
      <p class="yds-dialog__body-text">确定要执行此操作吗？</p>
    </div>
    <div class="yds-dialog__buttons yds-dialog__buttons--horizontal">
      <button class="yds-dialog__button yds-dialog__button--secondary">取消</button>
      <button class="yds-dialog__button yds-dialog__button--primary">确认</button>
    </div>
  </div>
</div>

<!-- ❌ 错误：不要自定义弹窗样式 -->
<div class="custom-modal">
  <div class="modal-header">...</div>
  <div class="modal-body">...</div>
  <div class="modal-footer">...</div>
</div>
```

**Dialog 组件特性：**
- ✅ 280px 标准宽度（移动端）
- ✅ 直角设计（`border-radius: 0`）
- ✅ 扁平化设计（`box-shadow: none`）
- ✅ 模态遮罩层（`rgba(27, 27, 27, 0.85)`）
- ✅ 支持水平/垂直按钮布局
- ✅ 可选关闭按钮（右上角）
- ✅ 黑色主按钮 + 灰色次按钮

**代码示例：**
```html
<!-- 基础对话框 -->
<div class="yds-dialog-overlay">
  <div class="yds-dialog">
    <!-- 关闭按钮使用图标 -->
    <button class="yds-dialog__close">
      <img src="../icons/y_icon_line_edit_close.svg" class="yds-icon" alt="关闭">
    </button>
    <div class="yds-dialog__title-section">
      <h3 class="yds-dialog__title">删除确认</h3>
      <p class="yds-dialog__subtitle">此操作不可撤销</p>
    </div>
    <div class="yds-dialog__content">
      <p class="yds-dialog__body-text">确定要删除此项目吗？</p>
    </div>
    <div class="yds-dialog__buttons yds-dialog__buttons--horizontal">
      <button class="yds-dialog__button yds-dialog__button--secondary">取消</button>
      <button class="yds-dialog__button yds-dialog__button--primary">确认删除</button>
    </div>
  </div>
</div>

<!-- 垂直按钮布局 -->
<div class="yds-dialog__buttons yds-dialog__buttons--vertical">
  <button class="yds-dialog__button yds-dialog__button--secondary">选项一</button>
  <button class="yds-dialog__button yds-dialog__button--secondary">选项二</button>
  <button class="yds-dialog__button yds-dialog__button--primary">确认</button>
</div>
```

**使用场景：**
- 操作确认（删除、提交等）
- 重要信息提示
- 表单输入弹窗
- 警告/错误提示
- 📖 文档：`docs/dialog-guide.md`

#### Popup 弹出层（边缘弹出大型浮层）

用于展示复杂内容、表单、侧边栏等场景的边缘弹出层。

**Popup vs Dialog 对比：**

| 特性 | Popup 弹出层 | Dialog 对话框 |
|------|------------|--------------|
| 位置 | 从屏幕边缘弹出 | 屏幕中央显示 |
| 尺寸 | 占据较大屏幕空间 | 固定宽度 280px |
| 用途 | 展示复杂内容、表单、菜单 | 确认、警告、简单提示 |
| 方向 | 支持四个方向（底/顶/左/右） | 仅居中 |
| 导航栏 | 可选（带返回按钮） | 无 |

```html
<!-- ✅ 正确：使用 YDS Popup 组件（底部弹出 + 底部操作栏） -->
<div class="yds-popup-overlay">
  <div class="yds-popup yds-popup--bottom">
    <div class="yds-popup__navbar">
      <button class="yds-popup__back">
        <img src="icons/y_icon_line_direction_arrow_left.svg" alt="返回">
      </button>
      <div class="yds-popup__title">
        <div class="yds-popup__title-main">标题</div>
        <div class="yds-popup__title-sub">副标题</div>
      </div>
      <button class="yds-popup__close">
        <img src="icons/y_icon_line_edit_close.svg" alt="关闭">
      </button>
    </div>
    <div class="yds-popup__content">
      <!-- 内容区域 -->
    </div>
    <div class="yds-popup__footer">
      <!-- 底部操作栏（可选） -->
      <div class="yds-popup__footer-buttons">
        <button class="yds-popup__button yds-popup__button--secondary">
          取消
        </button>
        <button class="yds-popup__button yds-popup__button--primary">
          确认
        </button>
      </div>
      <div class="yds-popup__footer-divider"></div>
    </div>
  </div>
</div>

<!-- ✅ 右侧弹出（侧边栏） -->
<div class="yds-popup-overlay">
  <div class="yds-popup yds-popup--right">
    <div class="yds-popup__navbar">
      <button class="yds-popup__back">
        <img src="icons/y_icon_line_direction_arrow_left.svg" alt="返回">
      </button>
      <div class="yds-popup__title">
        <div class="yds-popup__title-main">设置</div>
      </div>
    </div>
    <div class="yds-popup__content">
      <!-- 侧边栏内容 -->
    </div>
  </div>
</div>

<!-- ❌ 错误：不要自定义弹出层样式 -->
<div class="custom-sidebar">
  <div class="sidebar-header">...</div>
  <div class="sidebar-body">...</div>
</div>
```

**Popup 组件特性：**
- ✅ 支持四个方向：底部（默认）、顶部、左侧、右侧
- ✅ 底部/顶部弹出：宽度 100%，直角设计（无圆角）
- ✅ 左/右侧弹出：宽度 300px，直角设计（无圆角）
- ✅ 模态遮罩层（`rgba(27, 27, 27, 0.6)`）
- ✅ 可选导航栏（带返回按钮和标题）
- ✅ 可选底部操作栏（带按钮和指示器）
- ✅ 滑入/滑出动画效果
- ✅ **导航栏高度自适应**：54px（仅主标题）/ 58px（有副标题）
- ✅ **默认使用右侧关闭按钮**
- ✅ **左侧返回必须和右侧关闭同时存在**
- ✅ **底部操作栏按钮自适应**：`flex: 1 1 0` 等宽分配
- ✅ **底部按钮间距**：Footer 左右 padding 8px
- 📖 文档：`docs/popup-guide.md`
- 🎬 演示：`docs/popup-demo.html`

**底部操作栏规范：**
- Footer 容器：`padding: 0 8px 8px 8px`（按钮距离屏幕左右边缘 8px）
- 按钮容器：`padding: 12px 0`（按钮和指示器之间 12px 间距）
- 按钮自适应：`flex: 1 1 0`（等宽分配屏幕宽度）
- 指示器：宽 135px × 高 5px，距离底部 8px

**使用场景：**
- ✅ 展示表单（如筛选、搜索）→ 使用 Popup
- ✅ 展示详细内容（如商品详情、文章）→ 使用 Popup
- ✅ 侧边菜单导航 → 使用 Popup（左/右）
- ✅ 设置面板 → 使用 Popup（右）
- ✅ 快捷通知 → 使用 Popup（顶）
- ❌ 简单确认操作 → 使用 Dialog
- ❌ 警告提示 → 使用 Dialog

### 7. 栅格布局使用规范

**规则：所有页面（包括简单页面）必须使用设计系统的栅格系统，栅格列均分屏幕宽度**

```html
<!-- ✅ 正确：12列均分屏幕 -->
<div class="yds-grid" style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 8px; padding: 0 8px;">
  <div class="yds-grid__cell" style="grid-column: span 4;">...</div>
  <div class="yds-grid__cell" style="grid-column: span 4;">...</div>
  <div class="yds-grid__cell" style="grid-column: span 4;">...</div>
</div>

<!-- ✅ 正确：简单页面也使用栅格 -->
<div class="yds-grid" style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 8px; padding: 0 8px;">
  <div class="yds-grid__cell" style="grid-column: span 12;">
    <!-- 单列内容 -->
  </div>
</div>

<!-- ❌ 错误：不要自定义栅格 -->
<div class="custom-grid">
  <div class="col-4">...</div>
  <div class="col-4">...</div>
  <div class="col-4">...</div>
</div>

<!-- ❌ 错误：不要使用 flex 布局替代栅格 -->
<div style="display: flex;">
  <div>...</div>
  <div>...</div>
</div>

<!-- ❌ 错误：简单页面也不能跳过栅格 -->
<div class="main-content">
  <div class="card">...</div>
</div>
```

**栅格系统核心原则：**
- ✅ **12 列均分屏幕宽度**（`grid-template-columns: repeat(12, 1fr)`）
- ✅ 栅格间距 8px（`gap: var(--yds-spacing-8)`）
- ✅ **栅格容器本身不添加任何 padding**（无 padding，无 margin）
- ✅ 左右 8px 间距通过单元格内的 padding 实现
- ✅ 支持多列布局（`grid-column: span N`）
- ✅ **所有页面必须使用，无论简单或复杂**

**重要说明：**
- **栅格列使用 `fr` 单位均分屏幕，不是固定宽度**
- 即使是单列内容的简单页面，也必须使用栅格系统
- 栅格系统确保整体布局的一致性和可维护性
- 使用 `grid-column: span 12` 创建单列布局（占满整行）
- 不要因为"页面简单"就跳过栅格系统

**栅格容器 CSS：**
```css
/* 12列均分屏幕宽度 */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 均分屏幕 */
  gap: var(--yds-spacing-8); /* 栅格间距 */
  /* ⚠️ 栅格容器本身不添加任何 padding */
  box-sizing: border-box;
}

/* 单元格跨列 */
.yds-grid__cell {
  grid-column: span 12; /* 默认占满整行 */
}

/* 单元格跨列 */
.yds-grid__cell {
  grid-column: span 12; /* 默认占满整行 */
}

/* 跨N列 */
.yds-grid__cell--4 {
  grid-column: span 4; /* 占4列（1/3宽度） */
}

.yds-grid__cell--6 {
  grid-column: span 6; /* 占6列（1/2宽度） */
}
```

**HTML 结构示例：**
```html
<!-- 单列布局（占满整行） -->
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 12;">
    <!-- 内容占满整行 -->
  </div>
</div>

<!-- 3列布局（每列占4列，均分1/3） -->
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 4;">列1</div>
  <div class="yds-grid__cell" style="grid-column: span 4;">列2</div>
  <div class="yds-grid__cell" style="grid-column: span 4;">列3</div>
</div>

<!-- 2列布局（左6列，右6列，各占1/2） -->
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 6;">左</div>
  <div class="yds-grid__cell" style="grid-column: span 6;">右</div>
</div>
```

**栅格列布局：**
```html
<!-- 2列布局 -->
<div class="yds-grid yds-grid--2">
  <div class="yds-grid__cell yds-grid__cell--1">列1</div>
  <div class="yds-grid__cell yds-grid__cell--1">列2</div>
</div>

<!-- 3列布局 -->
<div class="yds-grid yds-grid--3">
  <div class="yds-grid__cell yds-grid__cell--1">列1</div>
  <div class="yds-grid__cell yds-grid__cell--1">列2</div>
  <div class="yds-grid__cell yds-grid__cell--1">列3</div>
</div>

<!-- 4列布局 -->
<div class="yds-grid yds-grid--4">
  <div class="yds-grid__cell yds-grid__cell--1">列1</div>
  <div class="yds-grid__cell yds-grid__cell--1">列2</div>
  <div class="yds-grid__cell yds-grid__cell--1">列3</div>
  <div class="yds-grid__cell yds-grid__cell--1">列4</div>
</div>

<!-- 自定义列宽（使用 span） -->
<div class="yds-grid">
  <div class="yds-grid__cell yds-grid__cell--4">占4列</div>
  <div class="yds-grid__cell yds-grid__cell--6">占6列</div>
  <div class="yds-grid__cell yds-grid__cell--2">占2列</div>
</div>
```

**响应式断点：**
- 📱 移动端：≤ 767px（375px 基准）
- 📱 平板：≥ 768px
- 💻 桌面：≥ 1440px

**使用场景：**
- 卡片网格布局
- 图库/图片列表
- 表单字段布局
- 仪表盘布局
- 多列内容展示

### 8. 按钮图标颜色规范

**规则：非白色按钮的图标默认使用白色（与按钮文字颜色一致）**

```html
<!-- ✅ 正确：深色/品牌色按钮使用白色图标 -->
<button class="yds-button yds-button--solid-dark yds-button--black">
  <img src="../icons/y_icon_line_edit_add.svg" class="yds-icon" style="filter: brightness(0) invert(1);" alt="添加">
  添加
</button>

<button class="yds-button yds-button--solid-dark yds-button--brand">
  <img src="../icons/y_icon_line_edit_add.svg" class="yds-icon" style="filter: brightness(0) invert(1);" alt="添加">
  立即购买
</button>

<!-- ✅ 正确：白色按钮使用默认黑色图标 -->
<button class="yds-button yds-button--solid-light yds-button--white">
  <img src="../icons/y_icon_line_edit_add.svg" class="yds-icon" alt="添加">
  取消
</button>

<!-- ❌ 错误：深色按钮使用黑色图标（对比度不足） -->
<button class="yds-button yds-button--solid-dark yds-button--black">
  <img src="../icons/y_icon_line_edit_add.svg" class="yds-icon" alt="添加">
  添加
</button>
```

**图标变色规则：**
- ✅ **黑色按钮**（`yds-button--black`）：图标使用白色 `filter: brightness(0) invert(1);`
- ✅ **品牌色按钮**（`yds-button--brand`）：图标使用白色 `filter: brightness(0) invert(1);`
- ✅ **白色按钮**（`yds-button--white`）：图标使用默认颜色（黑色/品牌色）
- ✅ **浅灰按钮**（`yds-button--black` + solid-light）：图标使用默认颜色（黑色）

**CSS 类实现：**
```css
/* 深色按钮图标自动变白 */
.yds-button--solid-dark .yds-icon {
  filter: brightness(0) invert(1);
}

/* 浅色按钮图标保持默认 */
.yds-button--solid-light .yds-icon {
  filter: none;
}
```

**代码示例：**
```html
<!-- 黑色按钮 - 图标变白 -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--large">
  <img src="../icons/y_icon_line_edit_add.svg" class="yds-icon" alt="添加">
  添加新任务
</button>

<!-- 品牌色按钮 - 图标变白 -->
<button class="yds-button yds-button--solid-dark yds-button--brand yds-button--large">
  <img src="../icons/y_icon_line_business_shopping_cart.svg" class="yds-icon" alt="购物车">
  立即抢购
</button>

<!-- 白色按钮 - 图标默认色 -->
<button class="yds-button yds-button--solid-light yds-button--white yds-button--large">
  <img src="../icons/y_icon_line_edit_close.svg" class="yds-icon" alt="取消">
  取消
</button>
```

### 9. 图标选中态颜色规范

**规则：图标有选中态时，选中状态应使用品牌色**

#### ⚠️ 重要：TabBar 必须使用内联 SVG

**TabBar 组件的图标必须使用内联 SVG + `fill="currentColor"` 实现，不能使用 `<img>` 标签。**

```html
<!-- ✅ 正确：TabBar 使用内联 SVG -->
<button class="yds-tabbar__item yds-tabbar__item--active">
  <div class="yds-tabbar__icon">
    <!-- 内联 SVG + fill="currentColor" -->
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 16.999H7V14.999H17V16.999Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6045 2.46973C12.6075 2.47203 12.6112 2.47422 12.6143 2.47656L20.6143 8.69824C20.6197 8.70249 20.6245 8.70756 20.6299 8.71191L21 9V21H3V9L3.36914 8.71191C3.37469 8.7074 3.38008 8.70265 3.38574 8.69824L11.3857 2.47656C11.3886 2.47438 11.3917 2.47188 11.3945 2.46973L12 2L12.6045 2.46973ZM5 9.97754V18.999H19V9.97754L12 4.5332L5 9.97754Z" fill="currentColor"/>
    </svg>
  </div>
  <span class="yds-tabbar__label">首页</span>
</button>

<!-- ❌ 错误：不要使用 img 标签 -->
<button class="yds-tabbar__item yds-tabbar__item--active">
  <div class="yds-tabbar__icon">
    <img src="../icons/y_icon_line_generality_index.svg"
         class="yds-icon"
         style="filter: brightness(0) invert(1);"
         alt="首页">
  </div>
  <span class="yds-tabbar__label">首页</span>
</button>
```

**为什么 TabBar 必须使用内联 SVG？**
- `<img>` 标签无法响应 CSS `color` 属性
- TabBar 需要通过 CSS 控制选中状态的图标颜色（`#F74AD9`）
- `fill="currentColor"` 让 SVG 继承父元素的 `color` 属性
- 选中状态自动显示品牌粉色，无需额外处理

#### 其他场景的图标选中态

对于非 TabBar 场景（如收藏按钮、筛选选项等），可以使用 `<img>` 标签：

```html
<!-- ✅ 收藏按钮选中态 -->
<button class="favorite-button favorite-button--active">
  <img src="../icons/y_icon_line_edit_favorites.svg"
       class="yds-icon yds-icon--brand"
       style="filter: brightness(0) invert(1);"
       alt="收藏">
</button>

<!-- ✅ 筛选选项选中态 -->
<div class="filter-option filter-option--active">
  <img src="../icons/y_icon_line_edit_check.svg"
       class="yds-icon yds-icon--brand"
       style="filter: brightness(0) invert(1);"
       alt="选中">
  <span>价格从低到高</span>
</div>
```

**品牌色图标 CSS 变量：**
```css
/* TabBar 自动应用（不需要额外 CSS） */
.yds-tabbar__item--active .yds-tabbar__icon {
  color: var(--yds-icon-brand-default, #F74AD9);
}

.yds-tabbar__item--active .yds-tabbar__label {
  color: var(--yds-text-brand-default, #E52EC5);
}

/* 其他场景的品牌色图标（可选） */
.yds-icon--brand,
.yds-icon--active {
  filter: brightness(0) invert(1);
  color: var(--yds-icon-brand-default);
}
```

**使用场景：**
- **底部 TabBar 选中态** → 使用内联 SVG（见上述说明）
- 侧边栏导航选中态 → 使用内联 SVG 或 `<img>` + filter
- 收藏/点赞按钮选中态 → 使用 `<img>` + filter
- 筛选/排序选项选中态 → 使用 `<img>` + filter
- 图标菜单选中态 → 使用内联 SVG 或 `<img>` + filter

### 10. 移动端布局规范

**规则：移动端页面必须遵循 100% 宽度 + 栅格系统的布局原则**

**核心布局原则：**
- ✅ **Navbar 和 TabBar 填充整个屏幕宽度**（100%，无左右边距）
- ✅ **页面内容使用栅格系统布局**（栅格系统自带左右 8px padding）
- ✅ **8px 间距是栅格系统的 padding**，不是额外的 margin
- ✅ **根据屏幕宽度自适应**，在任何尺寸下都保持全宽

**布局结构：**
```
┌─────────────────────────────────┐
│  Navbar（100% 宽度）              │  ← 固定顶部，z-index: 100
├─────────────────────────────────┤
│  Main Content（100% 宽度）       │
│  ┌───────────────────────────┐  │
│  │ 栅格系统（12列）            │  │
│  │ padding: 0 8px           │  │  ← 左右 8px padding
│  │ gap: 8px                 │  │
│  └───────────────────────────┘  │
├─────────────────────────────────┤
│  TabBar（100% 宽度）             │  ← 固定底部，z-index: 100
└─────────────────────────────────┘
```

**重要说明：**
- **Navbar 和 TabBar**：宽度 100%，使用 `left: 0; right: 0;` 固定定位
- **栅格系统**：12 列均分屏幕，**容器本身无 padding**，通过单元格内容 padding 实现左右 8px 间距
- **不要额外添加 margin**：页面容器、栅格系统都不要额外添加左右 margin
- **响应式设计**：使用 `width: 100%` 而非 `max-width`，保持全宽自适应

**正确实现示例：**
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>移动端页面</title>
  <link rel="stylesheet" href="css/index.css">
</head>
<body>
  <!-- Navbar（100% 宽度） -->
  <nav class="yds-navbar yds-navbar--fixed">
    <div class="yds-navbar__statusbar"></div>
    <div class="yds-navbar__content">
      <!-- Navbar 内容 -->
    </div>
  </nav>

  <!-- 主要内容区域（100% 宽度） -->
  <main class="main-content">
    <!-- 栅格系统（自带 padding: 0 8px） -->
    <div class="yds-grid">
      <div class="yds-grid__cell" style="grid-column: span 12;">
        <!-- 内容卡片 -->
      </div>
    </div>
  </main>

  <!-- TabBar（100% 宽度） -->
  <nav class="yds-tabbar yds-tabbar--fixed">
    <div class="yds-tabbar__content">
      <!-- TabBar 内容 -->
    </div>
    <div class="yds-tabbar__safe-area">
      <div class="yds-tabbar__indicator"></div>
    </div>
  </nav>
</body>
</html>
```

**CSS 实现示例：**
```css
/* 页面容器 - 100% 宽度，无 margin */
body {
  margin: 0;
  padding: 0;
  width: 100%;
}

/* Navbar 固定定位 - 100% 宽度 */
.yds-navbar--fixed {
  position: fixed;
  top: 0;
  left: 0;          /* ✅ 贴合左边 */
  right: 0;         /* ✅ 贴合右边 */
  width: 100%;      /* ✅ 100% 宽度 */
  z-index: 100;
}

/* TabBar 固定定位 - 100% 宽度 */
.yds-tabbar--fixed {
  position: fixed;
  bottom: 0;
  left: 0;          /* ✅ 贴合左边 */
  right: 0;         /* ✅ 贴合右边 */
  width: 100%;      /* ✅ 100% 宽度 */
  z-index: 100;
}

/* 栅格系统 - 容器本身无 padding */
.yds-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);  /* 12列均分 */
  gap: 8px;                                  /* 栅格间距 */
  /* ⚠️ 栅格容器本身不添加 padding */
  width: 100%;                                /* ✅ 100% 宽度 */
}
```

**❌ 错误实现（不要这样做）：**
```css
/* ❌ 错误：给页面容器添加 margin */
body {
  margin: 0 16px;  /* 不要添加 margin */
}

/* ❌ 错误：限制 Navbar 和 TabBar 宽度 */
.yds-navbar--fixed {
  max-width: 375px;    /* 不要限制宽度 */
  margin: 0 auto;      /* 不要居中 */
}

/* ❌ 错误：给栅格系统额外添加 margin */
.yds-grid {
  padding: 0 8px;
  margin: 0 16px;      /* 不要额外添加 margin */
}
```

**布局规范速查表：**

| 元素 | width | left/right | padding | 说明 |
|------|-------|-----------|---------|------|
| 页面容器 | 100% | - | 0 | 无 margin，无 padding |
| Navbar | 100% | 0 | 内容区域 | 固定顶部，贴合边框 |
| TabBar | 100% | 0 | 内容区域 | 固定底部，贴合边框 |
| 栅格系统 | 100% | - | 0 8px | **唯一左右间距来源** |
| 栅格单元格 | span N | - | 0 | N 列（1-12） |

**详细文档：** [移动端布局指南](./MOBILE_LAYOUT_GUIDE.md)

---

## 🎯 设计原则

### 视觉风格
- **现代简约**：直角容器体现现代感和专业性
- **扁平化设计**：无阴影效果、无默认边框，通过间距和背景色区分层级
- **清晰层级**：使用间距、颜色、背景色区分层级，而非圆角、边框和阴影
- **品牌克制**：品牌色（粉色）仅用于特定场景，不过度使用
- **容器极简**：内容容器原则上不添加边框和阴影，保持视觉简洁

### 交互体验
- **明确引导**：黑色按钮提供明确的操作引导
- **视觉平衡**：黑/白/灰为主色调，品牌色点缀
- **一致性**：所有项目遵循相同的设计规范

## 📝 使用检查清单

在创建新页面或组件时，请确认：

- [ ] **项目主行动按钮使用 XL 黑色按钮（`yds-button--xl yds-button--black`）**
- [ ] 其他按钮默认使用 `yds-button--black`
- [ ] **内容容器原则上不添加边框（`border: none`）**
- [ ] **内容容器不添加阴影效果（`box-shadow: none`）**
- [ ] 内容容器使用 `border-radius: var(--yds-radius-none)` （直角）
- [ ] 品牌色按钮仅在特殊场景使用
- [ ] **所有图标必须从设计系统图标库调用（`/icons/` 目录）**
- [ ] **项目中不要新增设计系统没有的图标**
- [ ] **如需新图标，先添加到设计系统图标库，再调用**
- [ ] 所有弹窗根据场景使用 YDS Dialog 或 Popup 组件
  - 简单确认/警告 → 使用 Dialog
  - 复杂内容/表单/侧边栏 → 使用 Popup
- [ ] **所有页面（包括简单页面）必须使用 YDS 栅格系统（`.yds-grid`）**
- [ ] **移动端页面 Navbar 和 TabBar 必须填充屏幕宽度（100%）**
- [ ] **栅格系统的 padding: 0 8px 是唯一的左右间距**，不要额外添加 margin
- [ ] 非白色按钮的图标使用白色（`filter: brightness(0) invert(1);`）
- [ ] 图标选中态使用品牌色（`var(--yds-text-brand-default)`）
- [ ] 所有样式使用设计系统的 CSS 变量

## 🔧 快速参考

### 按钮组件速查

| 场景 | 按钮类型 | 尺寸 | 类名 |
|------|---------|------|------|
| **项目主行动按钮** | **黑色按钮** | **XL（48px）** | **`yds-button--solid-dark yds-button--black yds-button--xl`** |
| 常规主操作 | 黑色按钮 | Large | `yds-button--solid-dark yds-button--black yds-button--large` |
| 次要操作 | 白色按钮 | Large | `yds-button--solid-light yds-button--white yds-button--large` |
| 特殊/营销 | 品牌色按钮 | Large | `yds-button--solid-dark yds-button--brand yds-button--large` |

### 容器样式速查

| 组件类型 | 圆角值 | 边框 | 阴影 | CSS 变量 |
|---------|-------|------|------|---------|
| **内容容器** | **0px** | **无边框** | **无阴影** | `var(--yds-radius-none)`, `border: none`, `box-shadow: none` |
| **卡片容器** | **0px** | **无边框** | **无阴影** | `var(--yds-radius-none)`, `border: none`, `box-shadow: none` |
| **列表项** | **0px** | **仅底部边框** | **无阴影** | `var(--yds-radius-none)`, `border-bottom: 1px solid`, `box-shadow: none` |
| **按钮** | **0px** | **无边框** | **无阴影** | `var(--yds-radius-none)`, `border: none`, `box-shadow: none` |
| **复选框** | **0px** | **1px 边框** | **无阴影** | `var(--yds-radius-none)`, `border: 1px solid`, `box-shadow: none` |
| 单选框 | 50% | 1px 边框 | 无阴影 | `border-radius: 50%` (例外：必须保持圆形) |
| 开关 | 72px | 无边框 | 无阴影 | `border-radius: 72px` (例外：必须保持圆角) |
| 标签/徽章 | 小圆角 | 无边框 | 无阴影 | `var(--yds-radius-sm)`, `border: none`, `box-shadow: none` |

**重要说明：**
- ✅ 内容容器默认**不添加边框**和**不添加阴影**
- ✅ 内容容器和交互组件默认使用**直角设计**（`border-radius: 0`）
- ✅ 使用**间距**和**背景色**区分内容区域
- ✅ 列表项可以使用**底部边框**作为分隔线
- ✅ 分隔线使用 `<hr>` 或 `border-bottom`
- ⚠️ **例外**：单选框必须保持圆形（`border-radius: 50%`），开关必须保持圆角（设计特性）

### 图标使用速查

| 场景 | 图标路径 | 说明 |
|------|---------|------|
| 返回 | `y_icon_line_direction_arrow_left.svg` | 返回箭头 |
| 下拉 | `y_icon_line_direction_arrow_down.svg` | 下拉箭头 |
| 关闭 | `y_icon_line_edit_close.svg` | 关闭按钮/X（用于Dialog） |
| 搜索 | `y_icon_line_edit_search.svg` | 搜索图标 |
| 购物车 | `y_icon_line_generality_shoppingcart.svg` | 购物车 |
| 更多 | `y_icon_line_generality_more.svg` | 更多（三点） |
| 查看所有图标 | `/icons/` 或 `docs/icons-demo.html` | 图标库 |

### 对话框使用速查

| 场景 | 组件类名 | 说明 |
|------|---------|------|
| 遮罩层 | `.yds-dialog-overlay` | 模态遮罩 |
| 对话框容器 | `.yds-dialog` | 280px 宽度，直角，无阴影 |
| 关闭按钮 | `.yds-dialog__close` | 右上角 X（使用图标库 `y_icon_line_edit_close.svg`） |
| 水平按钮 | `.yds-dialog__buttons--horizontal` | 按钮横向排列 |
| 垂直按钮 | `.yds-dialog__buttons--vertical` | 按钮纵向排列 |
| 主按钮 | `.yds-dialog__button--primary` | 黑色按钮 |
| 次按钮 | `.yds-dialog__button--secondary` | 灰色按钮 |
| 文档 | `docs/dialog-guide.md` | Dialog 组件文档 |

### 弹出层使用速查

| 场景 | 组件类名 | 说明 |
|------|---------|------|
| 遮罩层 | `.yds-popup-overlay` | 模态遮罩（60% 黑色透明） |
| 底部弹出 | `.yds-popup--bottom` | 从底部滑入，宽度 100%，直角设计 |
| 顶部弹出 | `.yds-popup--top` | 从顶部滑入，宽度 100%，直角设计 |
| 左侧弹出 | `.yds-popup--left` | 从左侧滑入，宽度 300px，直角设计 |
| 右侧弹出 | `.yds-popup--right` | 从右侧滑入，宽度 300px，直角设计 |
| 导航栏 | `.yds-popup__navbar` | 可选导航栏（高度自适应：54px/58px） |
| 左侧返回按钮 | `.yds-popup__back` | **必须和右侧关闭同时使用** |
| 右侧关闭按钮 | `.yds-popup__close` | 默认关闭方式，可独立使用 |
| 标题 | `.yds-popup__title` | 居中标题（支持主副标题，宽度自适应） |
| 内容区域 | `.yds-popup__content` | 可滚动内容区域 |
| 底部操作栏 | `.yds-popup__footer` | 可选底部操作栏 |
| 文档 | `docs/popup-guide.md` | Popup 组件文档 |
| 演示 | `docs/popup-demo.html` | Popup 组件演示 |

**导航栏高度规则**：
- 只有主标题：54px
- 有主副标题：58px（自动增高）

**导航栏按钮使用规则**：
- ✅ 默认使用右侧关闭按钮（独立使用）
- ✅ 左侧返回必须和右侧关闭同时存在
- ❌ 禁止单独使用左侧返回按钮

### 栅格布局使用速查

| 属性 | 值 | 说明 |
|------|------|------|
| **栅格列** | `repeat(12, 1fr)` | **12列均分屏幕** |
| **栅格间距** | `gap: 8px` | 栅格间距8px |
| **容器边距** | `padding: 0 8px` | 左右边距8px |
| **单列** | `grid-column: span 12` | 占满整行 |
| **1/2宽度** | `grid-column: span 6` | 占6列（50%） |
| **1/3宽度** | `grid-column: span 4` | 占4列（33.33%） |
| **1/4宽度** | `grid-column: span 3` | 占3列（25%） |

**代码示例：**
```html
<!-- 单列布局 -->
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 12;">
    <div class="card">...</div>
  </div>
</div>

<!-- 2列均分布局 -->
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 6;">左</div>
  <div class="yds-grid__cell" style="grid-column: span 6;">右</div>
</div>

<!-- 3列均分布局 -->
<div class="yds-grid">
  <div class="yds-grid__cell" style="grid-column: span 4;">列1</div>
  <div class="yds-grid__cell" style="grid-column: span 4;">列2</div>
  <div class="yds-grid__cell" style="grid-column: span 4;">列3</div>
</div>
```

### 按钮图标颜色速查

| 按钮类型 | 图标颜色 | CSS |
|---------|---------|-----|
| 黑色按钮 | 白色 | `filter: brightness(0) invert(1);` |
| 品牌色按钮 | 白色 | `filter: brightness(0) invert(1);` |
| 白色按钮 | 默认（黑色） | `filter: none;` |
| 浅灰按钮 | 默认（黑色） | `filter: none;` |

### 图标选中态颜色速查

| 场景 | 颜色 | CSS 变量 |
|------|------|---------|
| TabBar 选中 | 品牌色 | `var(--yds-text-brand-default)` |
| 导航选中 | 品牌色 | `var(--yds-icon-brand-default)` |
| 收藏按钮选中 | 品牌色 | `var(--yds-text-brand-default)` |
| 筛选选项选中 | 品牌色 | `var(--yds-icon-brand-default)` |

## 📚 相关文档

- [颜色系统指南](./colors-guide.md)
- [按钮组件指南](./button-demo.html)
- [图标库演示](./icons-demo.html)
- [对话框组件文档](./dialog-guide.md)
- [对话框组件演示](./dialog-demo.html)
- [弹出层组件文档](./popup-guide.md)
- [弹出层组件演示](./popup-demo.html)
- [Figma 集成指南](./figma-integration.md)

---

**重要提示**：本规范是年轻版设计系统的核心约定，所有项目必须严格遵循！
