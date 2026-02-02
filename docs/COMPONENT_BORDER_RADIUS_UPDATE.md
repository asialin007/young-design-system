# 设计系统更新日志 - 交互组件直角设计

## 更新时间
2025-01-31

## 更新版本
v2.5.0

## 📋 更新内容

### 核心原则更新

**更新核心设计原则：按钮、复选框等交互组件改为默认使用直角设计**

这是一项重要的设计系统更新,进一步强化了年轻版设计系统的直角设计理念。

---

## 🎯 详细更新内容

### 1. 更新"容器圆角规范"

**位置**: `docs/design-standards.md` 第2点

**更新内容**:
- ✅ 按钮组件改为直角设计（`border-radius: 0`）
- ✅ 复选框组件改为直角设计（`border-radius: 0`）
- ⚠️ 明确说明例外情况：单选框保持圆形、开关保持圆角

**代码示例**:
```css
/* ✅ 正确：按钮使用直角 */
.yds-button {
  border-radius: var(--yds-radius-none, 0); /* 直角 */
}

/* ✅ 正确：复选框使用直角 */
.yds-checkbox__box {
  border-radius: var(--yds-radius-none, 0); /* 直角 */
}

/* ❌ 错误：不要使用圆角 */
.yds-button {
  border-radius: 8px; /* ❌ 不要使用圆角 */
}
```

**适用范围**:
- ✅ 按钮 (Button) - 直角
- ✅ 复选框 (Checkbox) - 直角
- ⚠️ 单选框 (Radio) - 保持圆形（例外：设计特性）
- ⚠️ 开关 (Switch) - 保持圆角（例外：设计特性）

---

### 2. 更新按钮组件 CSS

**位置**: `css/button.css`

**更新内容**:
在 `.yds-button` 基础样式中添加直角设计：

```css
.yds-button {
  /* ... 其他样式 ... */

  /* 年轻版设计系统：直角设计 */
  border-radius: var(--yds-radius-none, 0);
}
```

**影响的按钮变体**:
- ✅ 所有尺寸（XL, Large, Medium, Medium-Small, Small, Mini）
- ✅ 所有变体（solid-dark, solid-light, outlined）
- ✅ 所有颜色（black, white, brand）

---

### 3. 更新复选框组件 CSS

**位置**: `css/checkbox.css`

**更新内容**:
在 `.yds-checkbox__box` 样式中更新为直角设计：

```css
.yds-checkbox__box {
  /* ... 其他样式 ... */
  border-radius: var(--yds-radius-none, 0); /* 年轻版设计系统：直角设计 */
}
```

---

### 4. 更新"容器样式速查表"

**位置**: `docs/design-standards.md` 快速参考部分

| 组件类型 | 圆角值 | 边框 | 阴影 |
|---------|-------|------|------|
| **按钮** | **0px** | **无边框** | **无阴影** |
| **复选框** | **0px** | **1px 边框** | **无阴影** |
| 单选框 | 50% | 1px 边框 | 无阴影 (例外：必须保持圆形) |
| 开关 | 72px | 无边框 | 无阴影 (例外：必须保持圆角) |

**重要说明**:
- ✅ 内容容器和交互组件默认使用**直角设计**（`border-radius: 0`）
- ⚠️ **例外**：单选框必须保持圆形（`border-radius: 50%`），开关必须保持圆角（设计特性）

---

### 5. 更新 README 主文档

**位置**: `README.md` 核心设计原则部分

**更新内容**:
```markdown
### 2. 直角设计
- ✅ **内容容器使用直角** - `border-radius: 0`
- ✅ **按钮使用直角** - `border-radius: 0`
- ✅ **复选框使用直角** - `border-radius: 0`
- ⚠️ **例外**：单选框保持圆形（`border-radius: 50%`），开关保持圆角（设计特性）
```

---

## 🎨 设计理念说明

### 为什么交互组件也使用直角？

1. **统一视觉语言**
   - 所有容器和交互组件使用统一的直角设计
   - 创建一致的视觉体验
   - 强化年轻版设计系统的现代感

2. **强化品牌识别度**
   - 直角设计成为年轻版的标志性特征
   - 与其他设计系统形成差异化
   - 提升品牌识别度

3. **设计简洁性**
   - 直角设计更简洁、更现代
   - 减少视觉元素的复杂度
   - 提升设计的清晰度

4. **保持设计一致性**
   - 内容容器和交互组件保持一致的设计语言
   - 避免混合使用直角和圆角造成的视觉混乱
   - 创建更统一的设计系统

### 为什么单选框和开关保持圆角？

**单选框 (Radio) - 保持圆形**
- 单选框的本质是"圆形"设计元素
- 圆形是单选框的通用设计语言
- 用户认知中单选框就是圆形的
- 保持圆形符合用户期望和可用性

**开关 (Switch) - 保持圆角**
- 开关的设计特性就是圆角的滑块
- 圆角让开关看起来更容易滑动
- 圆角是开关组件的标准设计语言
- 保持圆角符合用户对开关的认知

---

## ✅ 正确实现示例

### 按钮组件

```html
<!-- ✅ 按钮自动使用直角（设计系统组件已内置） -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--large">
  确认
</button>
```

```css
/* ✅ 正确：按钮使用直角（设计系统组件已内置） */
.yds-button {
  border-radius: var(--yds-radius-none, 0); /* 直角 */
}
```

### 复选框组件

```html
<!-- ✅ 复选框自动使用直角（设计系统组件已内置） -->
<label class="yds-checkbox yds-checkbox--checked">
  <input type="checkbox" class="yds-checkbox__input" checked>
  <span class="yds-checkbox__box">
    <svg class="yds-checkbox__check" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
    </svg>
  </span>
  <span class="yds-checkbox__label">选项</span>
</label>
```

```css
/* ✅ 正确：复选框使用直角（设计系统组件已内置） */
.yds-checkbox__box {
  border-radius: var(--yds-radius-none, 0); /* 直角 */
}
```

### 单选框组件（保持圆形）

```html
<!-- ✅ 单选框保持圆形（设计系统组件已处理） -->
<label class="yds-radio yds-radio--checked">
  <input type="radio" class="yds-radio__input" name="option" checked>
  <span class="yds-radio__circle">
    <span class="yds-radio__dot"></span>
  </span>
  <span class="yds-radio__label">选项</span>
</label>
```

```css
/* ✅ 正确：单选框保持圆形（例外：设计特性） */
.yds-radio__circle {
  border-radius: 50%; /* ✅ 必须保持圆形 */
}
```

---

## ❌ 避免的错误实现

### 错误1：给按钮添加圆角

```css
/* ❌ 错误：不要给按钮添加圆角 */
.yds-button {
  border-radius: 8px; /* ❌ */
}

/* ✅ 正确：使用直角 */
.yds-button {
  border-radius: var(--yds-radius-none, 0); /* 直角 */
}
```

### 错误2：给复选框添加圆角

```css
/* ❌ 错误：不要给复选框添加圆角 */
.yds-checkbox__box {
  border-radius: 4px; /* ❌ */
}

/* ✅ 正确：使用直角 */
.yds-checkbox__box {
  border-radius: var(--yds-radius-none, 0); /* 直角 */
}
```

### 错误3：修改单选框为直角

```css
/* ❌ 错误：不要修改单选框为直角 */
.yds-radio__circle {
  border-radius: 0; /* ❌ 单选框必须保持圆形 */
}

/* ✅ 正确：保持圆形 */
.yds-radio__circle {
  border-radius: 50%; /* ✅ 必须保持圆形 */
}
```

---

## 📚 相关文档

- [设计规范文档](./design-standards.md)
- [容器样式更新日志](./CONTAINER_STYLE_UPDATE.md)
- [按钮组件指南](./button-demo.html)

---

## 🔄 迁移指南

### 如果你的项目已经使用了圆角按钮和复选框

**建议逐步迁移**:

1. **更新设计系统CSS**
   - 升级到最新版本的设计系统 CSS
   - 按钮和复选框会自动变为直角

2. **检查自定义样式**
   - 检查是否有自定义的 `border-radius` 样式覆盖了设计系统
   - 移除不必要的圆角样式

3. **测试视觉效果**
   - 确保直角设计在所有场景下表现良好
   - 检查按钮的可点击区域和视觉反馈

4. **团队沟通**
   - 通知设计团队和开发团队关于设计系统的更新
   - 确保新开发的功能使用直角设计

---

## 🎯 总结

**核心更新**: 按钮、复选框等交互组件改为默认使用直角设计

**实现方式**:
- ✅ 按钮：使用 `border-radius: var(--yds-radius-none, 0)`
- ✅ 复选框：使用 `border-radius: var(--yds-radius-none, 0)`
- ⚠️ 单选框：保持 `border-radius: 50%`（例外：设计特性）
- ⚠️ 开关：保持 `border-radius: 72px`（例外：设计特性）

**设计理念**:
- 统一视觉语言
- 强化品牌识别度
- 设计简洁性
- 保持设计一致性

**适用范围**:
- 内容容器 - 直角
- 按钮 - 直角
- 复选框 - 直角
- 单选框 - 圆形（例外）
- 开关 - 圆角（例外）

---

**重要提示**: 本规范是年轻版设计系统的核心约定,所有新项目必须严格遵循!
