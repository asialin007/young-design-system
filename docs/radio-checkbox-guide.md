# Radio 单选框 & Checkbox 复选框组件

## 概述

Radio 单选框和 Checkbox 复选框是表单中最基础的选择组件，用于用户在多个选项中进行选择。

- **Radio 单选框**：用于一组互斥选项中**选择一个**
- **Checkbox 复选框**：用于一组选项中**选择一个或多个**

## 特性

- ✅ 两种尺寸：大尺寸（20px）、小尺寸（16px）
- ✅ 两种配色：默认黑色、品牌粉色
- ✅ 多种状态：未选中、选中、禁用
- ✅ 支持键盘导航和无障碍访问
- ✅ 基于 Figma 设计规范实现
- ✅ 使用 CSS 变量，支持主题定制
- ✅ 纯 CSS 实现，无 JavaScript 依赖

## 尺寸规范

### 单选框（Radio）

| 尺寸 | 圆圈直径 | 边框宽度 | 对勾大小 |
|------|---------|---------|---------|
| 大尺寸 | 20px | 1px | 5px × 9px |
| 小尺寸 | 16px | 0.8px | 4px × 7px |

### 复选框（Checkbox）

| 尺寸 | 方框大小 | 边框宽度 | 圆角 | 对勾大小 |
|------|---------|---------|------|---------|
| 大尺寸 | 20px × 20px | 1px | 2px | 5px × 9px |
| 小尺寸 | 16px × 16px | 0.75px | 2px | 4px × 7px |

## 颜色规范

### 单选框

| 状态 | 背景色 | 边框色 | 对勾色 |
|------|--------|--------|--------|
| 未选中（默认色） | `#FFFFFF` | `rgba(27, 27, 27, 0.24)` | - |
| 未选中（品牌色） | `#FFFFFF` | `rgba(27, 27, 27, 0.24)` | - |
| 选中（默认色） | `#1B1B1B` | `#1B1B1B` | `#FFFFFF` |
| 选中（品牌色） | `#F74AD9` | `#F74AD9` | `#FFFFFF` |
| 禁用 | `#FFFFFF` | `rgba(27, 27, 27, 0.24)` | - |
| 禁用选中 | `rgba(27, 27, 27, 0.24)` | `rgba(27, 27, 27, 0.24)` | - |

### 复选框

| 状态 | 背景色 | 边框色 | 对勾色 |
|------|--------|--------|--------|
| 未选中（默认色） | `#FFFFFF` | `rgba(27, 27, 27, 0.24)` | - |
| 未选中（品牌色） | `#FFFFFF` | `rgba(27, 27, 27, 0.24)` | - |
| 选中（默认色） | `#1B1B1B` | `#1B1B1B` | `#FFFFFF` |
| 选中（品牌色） | `#F74AD9` | `#F74AD9` | `#FFFFFF` |
| 禁用 | `#FFFFFF` | `rgba(27, 27, 27, 0.24)` | - |
| 禁用选中 | `rgba(27, 27, 27, 0.24)` | `rgba(27, 27, 27, 0.24)` | - |

## 使用方法

### HTML 结构

#### Radio 单选框

```html
<!-- 大尺寸 - 默认色 -->
<label class="yds-radio yds-radio--large">
  <input type="radio" name="gender" class="yds-radio__input" value="male">
  <span class="yds-radio__circle"></span>
  <span class="yds-radio__label">男</span>
</label>

<!-- 小尺寸 - 品牌色 -->
<label class="yds-radio yds-radio--small yds-radio--brand yds-radio--checked">
  <input type="radio" name="gender" class="yds-radio__input" value="female" checked>
  <span class="yds-radio__circle"></span>
  <span class="yds-radio__label">女</span>
</label>

<!-- 禁用状态 -->
<label class="yds-radio yds-radio--large yds-radio--disabled">
  <input type="radio" name="gender" class="yds-radio__input" value="other" disabled>
  <span class="yds-radio__circle"></span>
  <span class="yds-radio__label">其他</span>
</label>
```

#### Checkbox 复选框

```html
<!-- 大尺寸 - 默认色 -->
<label class="yds-checkbox yds-checkbox--large">
  <input type="checkbox" class="yds-checkbox__input">
  <span class="yds-checkbox__box"></span>
  <span class="yds-checkbox__label">阅读</span>
</label>

<!-- 小尺寸 - 品牌色 -->
<label class="yds-checkbox yds-checkbox--small yds-checkbox--brand yds-checkbox--checked">
  <input type="checkbox" class="yds-checkbox__input" checked>
  <span class="yds-checkbox__box"></span>
  <span class="yds-checkbox__label">运动</span>
</label>

<!-- 禁用状态 -->
<label class="yds-checkbox yds-checkbox--large yds-checkbox--disabled">
  <input type="checkbox" class="yds-checkbox__input" disabled>
  <span class="yds-checkbox__box"></span>
  <span class="yds-checkbox__label">音乐</span>
</label>
```

### CSS 类名说明

#### Radio 单选框

| 类名 | 说明 |
|------|------|
| `.yds-radio` | 基础容器类（必需） |
| `.yds-radio--large` | 大尺寸（20px） |
| `.yds-radio--small` | 小尺寸（16px） |
| `.yds-radio--brand` | 品牌色样式 |
| `.yds-radio--checked` | 选中状态 |
| `.yds-radio--disabled` | 禁用状态 |
| `.yds-radio__input` | input 元素（隐藏） |
| `.yds-radio__circle` | 圆圈容器 |
| `.yds-radio__label` | 标签文字 |

#### Checkbox 复选框

| 类名 | 说明 |
|------|------|
| `.yds-checkbox` | 基础容器类（必需） |
| `.yds-checkbox--large` | 大尺寸（20px） |
| `.yds-checkbox--small` | 小尺寸（16px） |
| `.yds-checkbox--brand` | 品牌色样式 |
| `.yds-checkbox--checked` | 选中状态 |
| `.yds-checkbox--disabled` | 禁用状态 |
| `.yds-checkbox__input` | input 元素（隐藏） |
| `.yds-checkbox__box` | 方框容器 |
| `.yds-checkbox__label` | 标签文字 |

### 引入 CSS

```html
<link rel="stylesheet" href="/path/to/young-design-system/css/index.css">
```

或者在 CSS 中导入：

```css
@import '/path/to/young-design-system/css/index.css';
```

## 设计指南

### 何时使用单选框（Radio）

- ✅ **互斥选择**：用户只能从选项中选择一个
- ✅ **选项较少**：通常 2-5 个选项
- ✅ **选项可见**：所有选项同时展示
- ✅ **表单填写**：如性别、婚姻状况等

**示例：**
- 性别选择：男 / 女 / 其他
- 支付方式：支付宝 / 微信 / 银行卡
- 配送时间：上午 / 下午 / 晚上

### 何时使用复选框（Checkbox）

- ✅ **多选场景**：用户可以选择零个、一个或多个选项
- ✅ **选项独立**：每个选项的选择互不影响
- ✅ **开关控制**：用于同意协议、启用功能等
- ✅ **筛选条件**：如商品分类、价格区间等

**示例：**
- 兴趣爱好：阅读 / 运动 / 音乐 / 旅行
- 商品筛选：新品 / 促销 / 免运费
- 协议确认：我已阅读并同意用户协议

### 使用建议

#### ✅ 推荐做法

1. **明确的标签文字**：每个选项都应有清晰的文字说明
   ```
   ✅ 性别：男  女  其他
   ```

2. **合理的默认值**：根据场景设置合理的默认选项
   ```
   ✅ 订阅新闻邮件（默认选中）
   ```

3. **水平排列选项**：当选项少于 5 个时，建议水平排列
   ```
   ✅ 男  女  其他
   ```

4. **垂直排列选项**：当选项较多或标签较长时，建议垂直排列
   ```
   ✅ 选项一：详细描述文字
      选项二：详细描述文字
      选项三：详细描述文字
   ```

#### ❌ 避免做法

1. **避免单选项使用单选框**：如果是开/关场景，应使用 Switch 组件
   ```
   ❌ 开启通知：○ 开  ○ 关
   ✅ 开启通知：[Toggle Switch]
   ```

2. **避免选项过多**：超过 7 个选项时，考虑使用下拉选择器
   ```
   ❌ 单选框列出 30 个省份
   ✅ 使用 Select 下拉选择器
   ```

3. **避免默认选中误导**：不要在非必需场景中设置默认选中
   ```
   ❌ 订阅营销短信（默认选中）
   ✅ 订阅营销短信（不默认选中）
   ```

### 间距规范

- **组件与文字**：12px（`var(--yds-spacing-12)`）
- **选项之间**：16px - 32px（根据布局密度）
- **分组之间**：24px（`var(--yds-spacing-24)`）

### 可访问性

#### 键盘导航

- `Tab` / `Shift + Tab`：聚焦到下一个/上一个单选框或复选框
- `Space` / `Enter`：切换选中状态
- `↑` / `↓`：在同组单选框中切换

#### ARIA 属性

```html
<!-- Radio 单选框 -->
<fieldset>
  <legend>性别</legend>
  <label class="yds-radio yds-radio--large">
    <input
      type="radio"
      name="gender"
      value="male"
      aria-label="男"
      aria-checked="false"
    >
    <span class="yds-radio__circle"></span>
    <span class="yds-radio__label">男</span>
  </label>
</fieldset>

<!-- Checkbox 复选框 -->
<label class="yds-checkbox yds-checkbox--large">
  <input
    type="checkbox"
    aria-label="同意用户协议"
    aria-checked="false"
  >
  <span class="yds-checkbox__box"></span>
  <span class="yds-checkbox__label">我已阅读并同意用户协议</span>
</label>
```

## CSS 变量

### 主题定制

可以通过覆盖 CSS 变量来自定义样式：

```css
:root {
  /* 边框颜色 */
  --yds-border-default-secondary: rgba(27, 27, 27, 0.5);
  --yds-border-default-tertiary: rgba(27, 27, 27, 0.24);

  /* 背景颜色 */
  --yds-bg-default-white: #FFFFFF;
  --yds-btn-bg-default-primary02: #1B1B1B;

  /* 品牌色 */
  --yds-bg-brand-default02: #F74AD9;
  --yds-icon-transp-brand-50: rgba(255, 119, 231, 0.5);

  /* 禁用状态 */
  --yds-btn-bg-default-disabled02: rgba(27, 27, 27, 0.24);
  --yds-text-default-disabled: #B9BBBF;

  /* 间距 */
  --yds-spacing-8: 8px;
  --yds-spacing-12: 12px;
  --yds-spacing-16: 16px;
  --yds-spacing-24: 24px;

  /* 文字 */
  --yds-font-size-14: 14px;
  --yds-line-height-20: 20px;
}
```

## 暗色模式

组件支持暗色模式，自动适配暗色主题：

```css
[data-theme="dark"] {
  --yds-border-default-secondary: rgba(255, 255, 255, 0.5);
  --yds-border-default-tertiary: rgba(255, 255, 255, 0.24);
  /* ... 其他暗色主题变量 */
}
```

## 演示

查看完整演示：[radio-checkbox-demo.html](./radio-checkbox-demo.html)

## 更新日志

### v2.0.0 (2025-01-30)

- ✅ 新增 Radio 单选框组件
- ✅ 新增 Checkbox 复选框组件
- ✅ 支持大/小两种尺寸
- ✅ 支持默认色和品牌色两种配色
- ✅ 基于 Figma 设计规范实现
- ✅ 使用 CSS 变量，支持主题定制
- ✅ 支持暗色模式
- ✅ 完整的无障碍支持

## 相关资源

- [Figma 设计稿](https://www.figma.com/design/BepKKgfdECcLIBi5bvkMbp/)
- [Button 按钮](./button-guide.md)
- [Switch 开关](./switch-guide.md)
- [Dialog 对话框](./dialog-guide.md)
