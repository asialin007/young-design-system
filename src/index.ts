/**
 * 年轻版设计系统 2.0 - 主入口文件
 * 支持 React 和 Vue 框架
 */

// React 组件
export { Button, type ButtonProps, type ButtonVariant, type ButtonColor, type ButtonSize } from './react/Button';
export { ButtonGroup, type ButtonGroupProps, type ButtonGroupAlignment, type ButtonGroupDirection, type ButtonGroupSize, type ButtonGroupCount } from './react/ButtonGroup';
export { Dialog, type DialogProps } from './react/Dialog';
export { Switch, type SwitchProps } from './react/Switch';
export { default as YDSButton } from './react/Button';
export { default as YDSButtonGroup } from './react/ButtonGroup';
export { default as YDSDialog } from './react/Dialog';
export { default as YDSSwitch } from './react/Switch';

// Vue 组件
export { default as YDSButtonVue } from './vue/Button';
export { default as YDSButtonGroupVue } from './vue/ButtonGroup';
export { default as YDSDialogVue } from './vue/Dialog';
export { default as YDSSwitchVue } from './vue/Switch';

// 类型定义
export type { ButtonVariant, ButtonColor, ButtonSize };
export type { ButtonGroupAlignment, ButtonGroupDirection, ButtonGroupSize, ButtonGroupCount };

export default {
  Button,
  YDSButton: Button,
  ButtonGroup,
  YDSButtonGroup: ButtonGroup,
  Dialog,
  YDSDialog: Dialog,
  Switch,
  YDSSwitch: Switch
};
