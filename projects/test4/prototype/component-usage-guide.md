# YDS 组件使用指南 - 常见错误与正确用法

本文档记录了在使用年轻版设计系统（YDS）组件时常见的错误和正确的使用方法。

## 📋 目录

1. [单选框组件（Radio）](#单选框组件radio)
2. [复选框组件（Checkbox）](#复选框组件checkbox)
3. [按钮组件（Button）](#按钮组件button)
4. [对话框组件（Dialog）](#对话框组件dialog)

---

## 单选框组件（Radio）

### ⚠️ 最常见错误

#### 错误1：使用了错误的容器类名

```html
<!-- ❌ 错误：使用 .yds-radio__box -->
<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" id="agreement">
  <span class="yds-radio__box"></span>  <!-- ❌ 错误！-->
</label>

<!-- ✅ 正确：使用 .yds-radio__circle -->
<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" id="agreement">
  <span class="yds-radio__circle"></span>  <!-- ✅ 正确！-->
</label>
```

#### 错误2：不支持循环切换（选中→取消→选中）

```javascript
// ❌ 错误：不支持循环切换
radio.addEventListener('change', function() {
  if (this.checked) {
    this.closest('.yds-radio').classList.add('yds-radio--checked');
  } else {
    this.closest('.yds-radio').classList.remove('yds-radio--checked');
  }
  button.disabled = !this.checked;
});
// 结果：用户点击选中的单选框后无法取消，无法实现循环切换

// ❌ 错误：使用 wasChecked 变量（容易出错）
let wasChecked = false;
radio.addEventListener('click', function(e) {
  if (wasChecked) {
    e.preventDefault();
    this.checked = false;
    // 取消选中...
  }
  wasChecked = !wasChecked;
});
// 问题：状态管理复杂，容易出错

// ✅ 正确：支持循环切换（推荐方案）
const radio = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

// 阻止浏览器默认行为，完全手动控制
radio.addEventListener('click', function(e) {
  e.preventDefault(); // 阻止默认的单选框行为

  // 切换状态：未选中 → 选中 → 未选中 → 选中 ...
  if (this.checked) {
    // 当前选中，切换到未选中
    this.checked = false;
    this.closest('.yds-radio').classList.remove('yds-radio--checked');
    button.disabled = true;
  } else {
    // 当前未选中，切换到选中
    this.checked = true;
    this.closest('.yds-radio').classList.add('yds-radio--checked');
    button.disabled = false;
  }
});
```

#### 错误3：忘记设置 name 属性

```html
<!-- ❌ 错误：没有设置 name 属性 -->
<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" id="option1">
  <span class="yds-radio__circle"></span>
  选项1
</label>

<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" id="option2">
  <span class="yds-radio__circle"></span>
  选项2
</label>
<!-- 结果：两个单选框可以同时选中，无法实现互斥 -->

<!-- ✅ 正确：设置相同的 name 属性 -->
<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" id="option1" name="mygroup" value="1">
  <span class="yds-radio__circle"></span>
  选项1
</label>

<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" id="option2" name="mygroup" value="2">
  <span class="yds-radio__circle"></span>
  选项2
</label>
<!-- 结果：两个单选框互斥，只能选中一个 -->
```

### ✅ 循环切换说明

**复选框（Checkbox）**：
- ✅ 原生支持循环切换（选中→取消→选中）
- ✅ 无需特殊处理，HTML原生行为

**单选框（Radio）**：
- ⚠️ 需要JavaScript实现循环切换
- ⚠️ 必须使用 `click` + `change` 事件

### ✅ 完整的正确示例（支持循环切换）
<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" id="option1">
  <span class="yds-radio__circle"></span>
  选项1
</label>

<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" id="option2">
  <span class="yds-radio__circle"></span>
  选项2
</label>
<!-- 结果：两个单选框可以同时选中，无法实现互斥 -->

<!-- ✅ 正确：设置相同的 name 属性 -->
<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" id="option1" name="mygroup" value="1">
  <span class="yds-radio__circle"></span>
  选项1
</label>

<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" id="option2" name="mygroup" value="2">
  <span class="yds-radio__circle"></span>
  选项2
</label>
<!-- 结果：两个单选框互斥，只能选中一个 -->
```

#### 错误4：不支持取消选中（协议勾选场景）

```javascript
// ❌ 错误：不支持取消选中
radio.addEventListener('change', function() {
  if (this.checked) {
    this.closest('.yds-radio').classList.add('yds-radio--checked');
  } else {
    this.closest('.yds-radio').classList.remove('yds-radio--checked');
  }
  button.disabled = !this.checked;
});
// 结果：用户点击选中的单选框后无法取消，体验差

// ✅ 正确：支持取消选中（使用 click + change 事件）
const radio = document.getElementById('agreement');
const button = document.getElementById('submit-btn');
let wasChecked = false;

// click 事件：处理取消选中（在 change 之前触发）
radio.addEventListener('click', function(e) {
  if (wasChecked) {
    // 如果已经选中，则阻止默认行为并手动取消选中
    e.preventDefault();
    this.checked = false;
    this.closest('.yds-radio').classList.remove('yds-radio--checked');
    wasChecked = false;
    button.disabled = true;
  } else {
    // 记录即将选中的状态
    wasChecked = true;
  }
});

// change 事件：处理选中
radio.addEventListener('change', function() {
  if (this.checked) {
    this.closest('.yds-radio').classList.add('yds-radio--checked');
    button.disabled = false;
  }
});
```

### ✅ 完整的正确示例（支持循环切换，不使用按钮禁用状态）

```html
<!-- 协议勾选示例 -->
<label class="yds-radio yds-radio--small">
  <input type="radio" class="yds-radio__input" id="agreement" name="agreement" value="agree">
  <span class="yds-radio__circle"></span>
</label>
<span class="agreement-text">
  我已阅读并同意
  <a href="javascript:void(0)" class="agreement-link">《用户协议》</a>
  和
  <a href="javascript:void(0)" class="agreement-link">《隐私政策》</a>
</span>

<button id="submit-btn">提交</button>

<script>
const radio = document.getElementById('agreement');

// 阻止浏览器默认行为，完全手动控制
radio.addEventListener('click', function(e) {
  e.preventDefault(); // 阻止默认行为

  // 切换状态：未选中 → 选中 → 未选中 → 选中 ...
  if (this.checked) {
    // 当前选中，切换到未选中
    this.checked = false;
    this.closest('.yds-radio').classList.remove('yds-radio--checked');
  } else {
    // 当前未选中，切换到选中
    this.checked = true;
    this.closest('.yds-radio').classList.add('yds-radio--checked');
  }
});

// 提交按钮处理
document.getElementById('submit-btn').addEventListener('click', function() {
  // 验证协议勾选
  if (!radio.checked) {
    showToast('请先阅读并同意用户协议和隐私政策');
    return;
  }

  // 执行提交逻辑...
  console.log('提交成功');
});
</script>
```

### ⚠️ 重要：不要使用按钮禁用状态

**设计原则：**
- ✅ 按钮应该始终保持可点击状态
- ✅ 通过 Toast 提示引导用户完成必要操作
- ❌ 避免使用 `disabled` 属性禁用按钮

**用户体验优势：**
1. **清晰可见**：用户始终可以看到按钮，不会因为禁用状态而困惑
2. **即时反馈**：点击按钮后通过 Toast 提示了解需要完成什么操作
3. **更符合现代习惯**：符合现代 Web 应用的交互习惯

**错误示例（❌ 不要这样做）：**

```javascript
// ❌ 错误：根据协议勾选状态禁用按钮
radio.addEventListener('click', function() {
  if (this.checked) {
    button.disabled = false;  // ❌ 不要禁用按钮
  } else {
    button.disabled = true;   // ❌ 不要禁用按钮
  }
});
```

**正确示例（✅ 推荐做法）：**

```javascript
// ✅ 正确：始终保持按钮可点击，通过 Toast 提示
radio.addEventListener('click', function(e) {
  e.preventDefault();
  if (this.checked) {
    this.checked = false;
    this.closest('.yds-radio').classList.remove('yds-radio--checked');
  } else {
    this.checked = true;
    this.closest('.yds-radio').classList.add('yds-radio--checked');
  }
  // 不操作按钮的 disabled 状态
});

button.addEventListener('click', function() {
  // 验证所有必要条件
  if (!radio.checked) {
    showToast('请先阅读并同意用户协议和隐私政策');
    return;
  }

  // 验证其他输入（如手机号）
  const phone = document.getElementById('phone').value;
  const phoneRegex = /^1[3-9]\d{9}$/;
  if (!phone || phone.length !== 11 || !phoneRegex.test(phone)) {
    showToast('请输入正确的手机号');
    return;
  }

  // 所有条件满足，执行提交逻辑
  submitForm();
});
```

### 完整的按钮交互模式（登录场景）

**⚠️ 重要：这是一个标准的登录/注册场景交互模式，必须遵循！**

**交互流程示例：**

```javascript
// 登录按钮处理
function handleLogin() {
  const phone = document.getElementById('phone').value;
  const agreement = document.getElementById('agreement');
  const phoneRegex = /^1[3-9]\d{9}$/;

  // 1. 验证手机号（第一个验证点）
  if (!phone || phone.length !== 11 || !phoneRegex.test(phone)) {
    showToast('请输入正确的手机号');
    return;
  }

  // 2. 验证协议勾选（第二个验证点）
  if (!agreement.checked) {
    showToast('请先阅读并同意用户协议和隐私政策');
    return;
  }

  // 3. 所有验证通过，执行登录
  window.location.href = 'login-sms-step2.html?phone=' + phone;
}
```

**用户交互流程表：**

| 操作 | 系统响应 | 说明 |
|------|---------|------|
| 1. 直接点击"获取验证码"按钮 | Toast 提示："请输入正确的手机号" | 第一个验证点（手机号） |
| 2. 输入手机号后点击按钮 | Toast 提示："请先阅读并同意用户协议和隐私政策" | 第二个验证点（协议勾选） |
| 3. 勾选协议后点击按钮 | 跳转到验证码页面 | 所有验证通过 ✓ |
| 4. 取消勾选协议后点击按钮 | Toast 提示："请先阅读并同意用户协议和隐私政策" | 返回第二个验证点 |

**关键原则：**

1. **按钮始终可点击**：不使用 `disabled` 状态
2. **逐步引导用户**：每个验证点给出明确的 Toast 提示
3. **验证顺序清晰**：从上到下，从外到内
4. **即时反馈**：点击按钮后立即给出提示，无需等待

**验证顺序原则：**

| 原则 | 说明 | 示例 |
|------|------|------|
| **从上到下** | 按照页面布局从上到下验证 | 先验证手机号，再验证协议 |
| **先外后内** | 先验证外部条件，再验证内部条件 | 先验证协议勾选，再验证密码强度 |
| **优先级** | 根据业务重要性确定优先级 | 手机号 > 协议 > 验证码 |

**多条件验证示例（账号密码登录）：**

```javascript
function handleSubmit() {
  // 验证顺序：账号 → 密码 → 协议
  const account = document.getElementById('account').value.trim();
  const password = document.getElementById('password').value;
  const agreement = document.getElementById('agreement');

  // 1. 验证账号
  if (!account) {
    showToast('请输入账号');
    return;
  }

  // 2. 验证密码
  if (!password) {
    showToast('请输入密码');
    return;
  }

  // 3. 验证协议勾选
  if (!agreement.checked) {
    showToast('请先阅读并同意用户协议和隐私政策');
    return;
  }

  // 4. 所有验证通过，执行提交
  submitForm();
}
```

**常见场景验证顺序：**

| 场景 | 验证顺序 | 说明 |
|------|---------|------|
| **手机号登录** | 手机号 → 协议勾选 | 按页面从上到下 |
| **账号密码登录** | 账号 → 密码 → 协议勾选 | 按页面从上到下 |
| **注册流程** | 手机号 → 验证码 → 密码 → 协议勾选 | 按页面从上到下 |
| **一键登录** | 手机号（自动获取）→ 协议勾选 | 按页面从上到下 |

### 单选框循环切换的实现原理

HTML单选框默认行为是一旦选中就无法取消（除非选中同组的其他单选框）。要实现"点击已选中的单选框可以取消"，需要：

1. **阻止默认行为**：使用 `preventDefault()` 完全阻止浏览器默认行为
2. **手动控制状态**：完全手动控制 `checked` 属性和视觉类名
3. **切换逻辑**：根据当前 `this.checked` 状态进行切换

```javascript
radio.addEventListener('click', function(e) {
  e.preventDefault(); // 阻止默认行为

  // 切换状态：未选中 → 选中 → 未选中 → 选中 ...
  if (this.checked) {
    this.checked = false;
    this.closest('.yds-radio').classList.remove('yds-radio--checked');
  } else {
    this.checked = true;
    this.closest('.yds-radio').classList.add('yds-radio--checked');
  }
});
```

### 单选框 vs 复选框

| 特性 | 复选框（Checkbox） | 单选框（Radio） |
|------|-------------------|----------------|
| **类名** | `.yds-checkbox` | `.yds-radio` |
| **容器类名** | `.yds-checkbox__box` | `.yds-radio__circle` ⚠️ |
| **输入类型** | `type="checkbox"` | `type="radio"` |
| **视觉状态切换** | ✅ 需要 JavaScript | ✅ 需要 JavaScript |
| **name属性** | 可选 | **必需**（用于分组） |
| **取消选中** | 点击可取消 | 不可取消（一旦选中） |
| **使用场景** | 多选、协议勾选 | 单选、互斥选项 |

---

## 复选框组件（Checkbox）

### ⚠️ 最常见错误

#### 错误：忘记添加 JavaScript 切换视觉状态

```javascript
// ❌ 错误：只监听状态，没有更新视觉显示
checkbox.addEventListener('change', () => {
  button.disabled = !checkbox.checked;
  // 结果：复选框的实际状态改变了，但视觉上没有显示选中状态
});

// ✅ 正确：完整的复选框事件处理
checkbox.addEventListener('change', function() {
  // 1. 切换复选框选中状态的视觉显示（必须！）
  if (this.checked) {
    this.closest('.yds-checkbox').classList.add('yds-checkbox--checked');
  } else {
    this.closest('.yds-checkbox').classList.remove('yds-checkbox--checked');
  }

  // 2. 执行其他业务逻辑（如按钮禁用状态）
  button.disabled = !this.checked;
});
```

### ✅ 完整的正确示例

```html
<label class="yds-checkbox yds-checkbox--small">
  <input type="checkbox" class="yds-checkbox__input" id="agreement">
  <span class="yds-checkbox__box"></span>
  我同意《用户协议》
</label>

<button id="submit-btn" disabled>提交</button>

<script>
const checkbox = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

checkbox.addEventListener('change', function() {
  // 切换视觉状态
  if (this.checked) {
    this.closest('.yds-checkbox').classList.add('yds-checkbox--checked');
  } else {
    this.closest('.yds-checkbox').classList.remove('yds-checkbox--checked');
  }
  // 切换按钮状态
  button.disabled = !this.checked;
});
</script>
```

---

## 按钮组件（Button）

### ⚠️ 最常见错误

#### 错误：使用品牌色按钮作为默认

```html
<!-- ❌ 错误：使用品牌色作为默认按钮 -->
<button class="yds-button yds-button--solid-dark yds-button--brand yds-button--xl">
  确认
</button>

<!-- ✅ 正确：使用黑色作为默认按钮 -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl">
  确认
</button>
```

#### 错误：按钮内使用黑色图标

```html
<!-- ❌ 错误：黑色按钮内使用黑色图标（对比度差）-->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl">
  <img src="../icons/add.svg" class="yds-icon" alt="添加">
  添加
</button>

<!-- ✅ 正确：黑色按钮内使用白色图标 -->
<button class="yds-button yds-button--solid-dark yds-button--black yds-button--xl">
  <img src="../icons/add.svg" class="yds-icon" style="filter: brightness(0) invert(1);" alt="添加">
  添加
</button>
```

---

## 对话框组件（Dialog）

### ⚠️ 最常见错误

#### 错误：自定义对话框样式

```html
<!-- ❌ 错误：自定义对话框样式 -->
<div class="custom-modal">
  <div class="custom-modal__header">提示</div>
  <div class="custom-modal__body">确定要删除吗？</div>
  <div class="custom-modal__footer">
    <button>取消</button>
    <button>确定</button>
  </div>
</div>

<!-- ✅ 正确：使用 YDS Dialog 组件 -->
<div class="yds-dialog-overlay">
  <div class="yds-dialog">
    <div class="yds-dialog__title-section">
      <h3 class="yds-dialog__title">提示</h3>
    </div>
    <div class="yds-dialog__content">
      <p class="yds-dialog__body-text">确定要删除吗？</p>
    </div>
    <div class="yds-dialog__buttons yds-dialog__buttons--horizontal">
      <button class="yds-dialog__button yds-dialog__button--secondary">取消</button>
      <button class="yds-dialog__button yds-dialog__button--primary">确定</button>
    </div>
  </div>
</div>
```

---

## 快速检查清单

### 单选框组件（Radio）
- [ ] 使用 `.yds-radio__circle` 而不是 `.yds-radio__box`
- [ ] 添加 JavaScript 切换 `.yds-radio--checked` 类名
- [ ] **支持循环切换：选中→取消→选中（⚠️ 协议勾选场景必须！）**
- [ ] 设置 `name` 属性（用于分组）

### 复选框组件（Checkbox）
- [ ] 添加 JavaScript 切换 `.yds-checkbox--checked` 类名
- [ ] 不要只监听状态不更新视觉显示
- [ ] **支持循环切换：选中→取消→选中（⚠️ 必须！）**

### 按钮组件（Button）
- [ ] 默认使用黑色按钮 `yds-button--black`
- [ ] 黑色按钮内的图标使用白色 `filter: brightness(0) invert(1);`
- [ ] **不使用 `disabled` 属性禁用按钮（⚠️ 必须！）**
- [ ] **通过 Toast 提示引导用户完成必要操作（⚠️ 推荐！）**
- [ ] **登录/注册场景：按页面从上到下验证（⚠️ 必须！）**
- [ ] **每个验证点都要给出明确的 Toast 提示（⚠️ 必须！）**

### 对话框组件（Dialog）
- [ ] 使用 `.yds-dialog-overlay` 和 `.yds-dialog`
- [ ] 禁止自定义对话框样式

---

**文档版本**：v1.3
**创建日期**：2025-02-01
**最后更新**：2025-02-01
**维护者**：Claude Code

**更新日志**：
- v1.3 (2025-02-01): 添加"完整的按钮交互模式（登录场景）"规范，包含验证顺序、用户交互流程表
- v1.2 (2025-02-01): 添加"不使用按钮禁用状态"规范，改为通过 Toast 提示引导用户
- v1.1 (2025-02-01): 添加循环切换支持说明
- v1.0 (2025-02-01): 初始版本
