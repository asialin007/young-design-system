# 唯品会登录注册系统 - 高保真HTML原型

## 项目说明

本原型严格按照年轻版设计系统（YDS）规范开发，实现了唯品会登录注册系统的完整流程。

## 技术栈

- **HTML5** + **CSS3** + **原生JavaScript**
- **年轻版设计系统（YDS）**
- **移动端优先**（375px标准宽度）

## 设计规范遵循

✅ **严格遵循年轻版设计系统规范**：

### 组件使用
- ✅ 按钮：`.yds-button`（默认黑色，XL尺寸）
- ✅ 复选框：`.yds-checkbox`（带JavaScript状态切换）
- ✅ 对话框：`.yds-dialog`（底部浮层）
- ✅ 提示框：`.yds-toast`（禁止使用alert）
- ✅ 栅格系统：`.yds-grid`（12列均分）

### 颜色变量
- ✅ 背景色：`--yds-bg-*` 系列
- ✅ 文字色：`--yds-text-*` 系列
- ✅ 边框色：`--yds-border-*` 系列

### 移动端适配
- ✅ 最大宽度：375px
- ✅ 禁止水平滚动
- ✅ 桌面浏览器居中显示

### 图标使用
- ✅ 所有图标从YDS图标库加载
- ✅ 路径：`/Users/linyazhou/young-design-system/icons/`

## 页面清单

### 1. 手机验证码登录页面一（默认登录页）
**文件**：`login-sms-step1.html`

**功能**：
- 唯品会Logo展示
- 手机号输入（实时校验格式）
- 用户协议勾选（默认不勾选）
- 获取验证码按钮
- 第三方登录入口（微信、QQ、Apple）
- 其他登录方式入口
- 无法登录入口（右上角，唤起底部浮层）

**交互**：
- 手机号输入实时校验（1开头，11位数字）
- 格式正确时登录按钮高亮
- 未勾选协议时点击按钮提示勾选
- 复选框视觉状态自动切换

---

### 2. 手机验证码登录页面二
**文件**：`login-sms-step2.html`

**功能**：
- 显示手机号（脱敏）
- 6位验证码输入
- 重新获取验证码（60秒倒计时）
- 登录按钮

**交互**：
- 验证码自动跳转下一个输入框
- 支持粘贴6位验证码
- 删除键回退到上一个输入框
- 输入完成自动启用登录按钮
- 测试验证码：`123456`

---

### 3. 运营商一键登录页面
**文件**：`login-operator.html`

**功能**：
- 唯品会Logo展示
- 本机号码显示（支持编辑跳转）
- 用户协议勾选
- 一键登录按钮
- 换个方式登录入口

**交互**：
- 点击手机号可编辑，跳转到验证码登录
- 一键登录显示加载动画
- 模拟运营商认证（2秒）

---

### 4. 账号密码登录页面
**文件**：`login-password.html`

**功能**：
- 账号输入（用户名/手机号/邮箱）
- 密码输入（支持显示/隐藏切换）
- 用户协议勾选
- 登录按钮
- 返回按钮

**交互**：
- 密码可见性切换（眼睛图标）
- 输入框实时校验
- 格式正确时登录按钮启用
- 登录显示加载动画

---

### 5. 注册页面一
**文件**：`register-step1.html`

**功能**：
- 手机号输入（实时校验格式）
- 下一步按钮
- 已有账号？去登录入口

**交互**：
- 手机号格式校验
- 格式正确时下一步按钮启用

---

### 6. 注册页面二
**文件**：`register-step2.html`

**功能**：
- 显示手机号（脱敏）
- 6位验证码输入
- 重新获取验证码（60秒倒计时）
- 登录按钮（注册后自动登录）

**交互**：
- 验证码自动跳转下一个输入框
- 支持粘贴6位验证码
- 注册成功后自动登录
- 测试验证码：`123456`

---

### 7. 登录成功页面
**文件**：`login-success.html`

**功能**：
- 成功图标动画
- 登录成功提示
- 进入首页按钮
- 退出登录按钮
- 3秒自动跳转倒计时

**交互**：
- 成功图标缩放动画
- 对勾绘制动画
- 3秒倒计时后自动跳转

---

## 使用说明

### 1. 直接在浏览器中打开

```bash
# 使用默认浏览器打开
open /Users/linyazhou/young-design-system/projects/test4/prototype/login-sms-step1.html

# 或者使用Chrome浏览器
open -a "Google Chrome" /Users/linyazhou/young-design-system/projects/test4/prototype/login-sms-step1.html
```

### 2. 使用本地服务器（推荐）

由于浏览器安全策略，某些功能可能需要通过HTTP服务器访问：

```bash
# 使用Python启动HTTP服务器
cd /Users/linyazhou/young-design-system/projects/test4/prototype
python3 -m http.server 8000

# 然后在浏览器中访问
# http://localhost:8000/login-sms-step1.html
```

### 3. 使用VS Code Live Server

1. 安装Live Server插件
2. 右键点击HTML文件
3. 选择"Open with Live Server"

## 页面流程图

```
┌─────────────────────────────────────────┐
│    login-sms-step1.html（默认登录页）    │
│         ↓                               │
│    [第三方登录] → 功能开发中             │
│         ↓                               │
│    [账号密码登录] → login-password.html │
│         ↓                               │
│    [新用户注册] → register-step1.html   │
│                   ↓                     │
│          register-step2.html            │
│                   ↓                     │
│         login-success.html              │
│         ↑                               │
│    login-sms-step2.html                 │
│         ↑                               │
│    login-operator.html                  │
└─────────────────────────────────────────┘
```

## 测试说明

### 手机号验证
- 测试手机号：任意1开头的11位数字（如：13800138000）
- 错误示例：12345678901（非1开头）、13800138000（10位）

### 验证码验证
- 正确验证码：`123456`（所有页面统一）
- 错误验证码：其他任意6位数字

### 登录成功后
- 自动跳转到 `login-success.html`
- 3秒后自动跳转回登录页面一（演示用）

### 运营商一键登录
- 模拟手机号：`138****8888`
- 点击手机号可编辑，跳转到验证码登录

## 技术要点

### 1. 复选框状态切换（必须）

所有复选框必须添加JavaScript来切换视觉状态：

```javascript
checkbox.addEventListener('change', function() {
  // 切换复选框选中状态的视觉显示（必须！）
  if (this.checked) {
    this.closest('.yds-checkbox').classList.add('yds-checkbox--checked');
  } else {
    this.closest('.yds-checkbox').classList.remove('yds-checkbox--checked');
  }

  // 执行其他业务逻辑
  loginBtn.disabled = !this.checked;
});
```

### 2. Toast提示（禁止使用alert）

所有提示必须使用YDS Toast组件：

```javascript
function showToast(message, duration = 2000) {
  const toast = document.getElementById('yds-toast');
  const toastText = toast.querySelector('.yds-toast__text');

  toastText.textContent = message;
  toast.style.display = 'flex';
  toast.classList.add('yds-toast--fade-in');

  setTimeout(() => {
    toast.classList.remove('yds-toast--fade-in');
    toast.classList.add('yds-toast--fade-out');

    setTimeout(() => {
      toast.style.display = 'none';
      toast.classList.remove('yds-toast--fade-out');
    }, 300);
  }, duration);
}
```

### 3. 验证码输入框自动跳转

```javascript
inputs.forEach((input, index) => {
  input.addEventListener('input', function(e) {
    const value = e.target.value;

    // 只允许数字
    if (!/^\d*$/.test(value)) {
      e.target.value = '';
      return;
    }

    // 自动跳转到下一个输入框
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }

    // 检查是否输入完成
    checkComplete();
  });
});
```

### 4. 密码可见性切换

```javascript
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.getElementById('password-toggle-icon');

  isPasswordVisible = !isPasswordVisible;

  if (isPasswordVisible) {
    passwordInput.type = 'text';
    toggleIcon.src = '/Users/linyazhou/young-design-system/icons/y_icon_line_edit_passwordvisible.svg';
  } else {
    passwordInput.type = 'password';
    toggleIcon.src = '/Users/linyazhou/young-design-system/icons/y_icon_line_edit_invisible.svg';
  }
}
```

### 5. 移动端视口设置（必须）

所有页面必须包含以下meta标签：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

### 6. 禁止水平滚动（必须）

```css
html {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

.mobile-container {
  width: 100%;
  max-width: var(--yds-screen-mobile); /* 375px */
  margin: 0 auto;
  overflow-x: hidden;
}
```

## 浏览器兼容性

| 浏览器 | 版本 | 支持情况 |
|--------|------|----------|
| Safari | 13+ | ✅ 完全支持 |
| Chrome | 90+ | ✅ 完全支持 |
| 微信内置浏览器 | 最新版 | ✅ 完全支持 |
| Firefox | 88+ | ✅ 完全支持 |

## 已知限制

1. **第三方登录**：微信、QQ、Apple登录功能未实现（仅展示UI）
2. **运营商一键登录**：模拟功能，实际需要接入运营商SDK
3. **后端接口**：所有API调用均为模拟，实际需要对接后端接口
4. **验证码发送**：模拟功能，实际需要接入短信服务

## 后续开发建议

### 前端
- [ ] 对接后端登录/注册API
- [ ] 对接短信验证码API
- [ ] 对接运营商一键登录SDK
- [ ] 对接第三方登录SDK（微信、QQ、Apple）
- [ ] 添加Token存储和管理
- [ ] 添加路由管理（React Router / Vue Router）

### 后端
- [ ] 实现手机验证码登录API
- [ ] 实现账号密码登录API
- [ ] 实现注册API
- [ ] 实现运营商一键登录API
- [ ] 实现第三方登录API
- [ ] 实现JWT Token生成和验证
- [ ] 实现用户信息管理API

## 项目结构

```
prototype/
├── login-sms-step1.html      # 手机验证码登录页面一（默认）
├── login-sms-step2.html      # 手机验证码登录页面二
├── login-operator.html       # 运营商一键登录页面
├── login-password.html       # 账号密码登录页面
├── register-step1.html       # 注册页面一
├── register-step2.html       # 注册页面二
├── login-success.html        # 登录成功页面
└── README.md                 # 本文档
```

## 维护说明

**版本**：v1.0
**创建日期**：2025-02-01
**维护者**：Claude Code
**设计系统**：年轻版设计系统（YDS）

## 更新日志

- **v1.0** (2025-02-01)
  - 初始版本创建
  - 实现所有7个登录注册页面
  - 严格遵循年轻版设计系统规范

---

**相关文档**：
- [PRD文档](../prd/PRD-唯品会登录注册系统-v1.0.md)
- [年轻版设计系统文档](/Users/linyazhou/young-design-system/docs/design-standards.md)
- [年轻版设计系统 - 按钮演示](/Users/linyazhou/young-design-system/docs/button-demo.html)
- [年轻版设计系统 - 图标演示](/Users/linyazhou/young-design-system/docs/icons-demo.html)
