/**
 * 年轻版设计系统 2.0 - Switch 开关组件 (React)
 * 用于控制某个功能的开启和关闭
 */

import React, { forwardRef, ChangeEvent } from 'react';

/**
 * Switch 组件 Props
 */
export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'checked' | 'onChange'> {
  /** 是否开启 */
  checked?: boolean;
  /** 尺寸：'small' | 'medium' | 'large' */
  size?: 'small' | 'medium' | 'large';
  /** 是否禁用 */
  disabled?: boolean;
  /** 变化事件 */
  onChange?: (checked: boolean, event: ChangeEvent<HTMLButtonElement>) => void;
  /** 自定义类名 */
  className?: string;
}

/**
 * Switch 开关组件
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked = false,
      size = 'medium',
      disabled = false,
      onChange,
      className = '',
      ...restProps
    },
    ref
  ) => {
    const handleClick = (e: ChangeEvent<HTMLButtonElement>) => {
      if (!disabled && onChange) {
        onChange(!checked, e);
      }
    };

    const classes = [
      'yds-switch',
      `yds-switch--${size}`,
      checked ? 'yds-switch--checked' : '',
      disabled ? 'yds-switch--disabled' : '',
      className
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type="button"
        className={classes}
        onClick={handleClick}
        disabled={disabled}
        aria-checked={checked}
        role="switch"
        {...restProps}
      >
        <span className="yds-switch__dot"></span>
      </button>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;
