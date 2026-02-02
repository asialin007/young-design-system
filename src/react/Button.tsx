/**
 * 年轻版设计系统 2.0 - Button 组件 (React)
 * 支持的变体: solid-dark, solid-light, outlined
 * 支持的颜色: brand, black, white
 * 支持的尺寸: xl, large, medium, medium-small, small, mini
 * 支持的状态: default, disabled
 * 支持纯图标模式
 */

import React, { forwardRef, ReactNode, ButtonHTMLAttributes } from 'react';

/**
 * Button 变体类型
 */
export type ButtonVariant = 'solid-dark' | 'solid-light' | 'outlined';

/**
 * Button 颜色类型
 */
export type ButtonColor = 'brand' | 'black' | 'white';

/**
 * Button 尺寸类型
 */
export type ButtonSize = 'xl' | 'large' | 'medium' | 'medium-small' | 'small' | 'mini';

/**
 * Button 组件 Props
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'color'> {
  /** 组件类名 */
  className?: string;
  /** 子元素 */
  children?: ReactNode;
  /** 左侧图标 */
  leftIcon?: ReactNode;
  /** 右侧图标 */
  rightIcon?: ReactNode;
  /** 变体类型: solid-dark, solid-light, outlined */
  variant?: ButtonVariant;
  /** 颜色: brand, black, white */
  color?: ButtonColor;
  /** 尺寸: xl, large, medium, medium-small, small, mini */
  size?: ButtonSize;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否纯图标 */
  iconOnly?: boolean;
  /** 加载状态 */
  loading?: boolean;
  /** 点击事件 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Button 组件
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      children,
      leftIcon,
      rightIcon,
      variant = 'solid-dark',
      color = 'brand',
      size = 'large',
      disabled = false,
      iconOnly = false,
      loading = false,
      onClick,
      ...restProps
    },
    ref
  ) => {
    const baseClassName = 'yds-button';

    // 组合类名
    const classNames = [
      baseClassName,
      `yds-button--${variant}`,
      `yds-button--${color}`,
      `yds-button--${size}`,
      iconOnly && `yds-button--icon-only`,
      (disabled || loading) && 'yds-button--disabled',
      className
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || loading}
        onClick={onClick}
        {...restProps}
      >
        {loading && (
          <span className="yds-button__loading">
            {/* Loading spinner */}
          </span>
        )}
        {!loading && leftIcon && <span className="yds-button__icon">{leftIcon}</span>}
        {!iconOnly && children && <span className="yds-button__text">{children}</span>}
        {!loading && rightIcon && <span className="yds-button__icon">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
