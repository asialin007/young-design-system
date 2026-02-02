/**
 * 年轻版设计系统 2.0 - ButtonGroup 按钮组合组件 (React)
 * 支持单个按钮、两个按钮组合、三个按钮组合
 * 支持多种对齐方式：均分、右侧对齐、文字混合、图标混合
 * 支持不同排列方向：水平、垂直
 */

import React, { forwardRef, ReactNode, ButtonHTMLAttributes } from 'react';

/**
 * 单个按钮组件 Props
 */
export interface SingleButtonProps {
  /** 按钮文本 */
  children?: ReactNode;
  /** 左侧图标 */
  leftIcon?: ReactNode;
  /** 右侧图标 */
  rightIcon?: ReactNode;
  /** 变体类型 */
  variant?: 'solid-dark' | 'solid-light' | 'outlined';
  /** 颜色 */
  color?: 'brand' | 'black' | 'white';
  /** 尺寸 */
  size?: 'xl' | 'large' | 'medium' | 'medium-small' | 'small' | 'mini';
  /** 是否禁用 */
  disabled?: boolean;
  /** 点击事件 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * 按钮组合对齐方式
 */
export type ButtonGroupAlignment = 'equal' | 'right' | 'text-mix' | 'icon-mix';

/**
 * 按钮组合排列方向
 */
export type ButtonGroupDirection = 'horizontal' | 'vertical';

/**
 * 按钮组合尺寸
 */
export type ButtonGroupSize = 'small' | 'large';

/**
 * 按钮组按钮数量 */
export type ButtonGroupCount = 1 | 2 | 3 | 4;

/**
 * 按钮组合 Props
 */
export interface ButtonGroupProps extends Omit<ButtonHTMLAttributes<HTMLDivElement>, 'size'> {
  /** 组件类名 */
  className?: string;
  /** 对齐方式：均分、右侧对齐、文字混合、图标混合 */
  alignment?: ButtonGroupAlignment;
  /** 排列方向：水平、垂直 */
  direction?: ButtonGroupDirection;
  /** 尺寸：小、大 */
  size?: ButtonGroupSize;
  /** 按钮数量：1-2-3-4 */
  count?: ButtonGroupCount;
  /** 主按钮 */
  primaryButton?: {
    text?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    variant?: 'solid-dark' | 'solid-light' | 'outlined';
    color?: 'brand' | 'black' | 'white';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
  /** 次按钮 */
  secondaryButton?: {
    text?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    variant?: 'solid-dark' | 'solid-light' | 'outlined';
    color?: 'brand' | 'black' | 'white';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
  /** 更多按钮 */
  moreButton?: {
    text?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    variant?: 'solid-light' | 'outlined';
    color?: 'brand' | 'black';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
  /** 三级按钮 */
  tertiaryButton?: {
    text?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    variant?: 'solid-light' | 'outlined';
    color?: 'brand' | 'black';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
  /** 四级按钮 */
  quaternaryButton?: {
    text?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    variant?: 'solid-light' | 'outlined';
    color?: 'brand' | 'black';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
  /** 是否显示分割线 */
  showDivider?: boolean;
}

/**
 * 单个按钮
 */
const SingleButton = forwardRef<HTMLButtonElement, SingleButtonProps>(
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
      onClick,
      ...restProps
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={className}
        disabled={disabled}
        onClick={onClick}
        {...restProps}
      >
        {leftIcon && <span className="yds-button__icon">{leftIcon}</span>}
        {children && <span className="yds-button__text">{children}</span>}
        {rightIcon && <span className="yds-button__icon">{rightIcon}</span>}
      </button>
    );
  }
);

SingleButton.displayName = 'SingleButton';

/**
 * 按钮组合组件
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      className = '',
      alignment = 'equal',
      direction = 'horizontal',
      size = 'large',
      count = 1,
      primaryButton,
      secondaryButton,
      moreButton,
      tertiaryButton,
      quaternaryButton,
      showDivider = false,
      ...restProps
    },
    ref
  ) => {
    // 判断对齐方式
    const isEqualAlign = alignment === 'equal';
    const isRightAlign = alignment === 'right';
    const isTextMixAlign = alignment === 'text-mix';
    const isIconMixAlign = alignment === 'icon-mix';

    // 判断方向
    const isHorizontal = direction === 'horizontal';
    const isVertical = direction === 'vertical';

    // 判断尺寸
    const isSmall = size === 'small';
    const isLarge = size === 'large';

    // 基础类名
    const baseClassName = 'yds-button-group';

    // 构建按钮容器样式
    const containerClassName = [
      baseClassName,
      isEqualAlign && `${baseClassName}--equal`,
      isRightAlign && `${baseClassName}--right`,
      isTextMixAlign && `${baseClassName}--text-mix`,
      isIconMixAlign && `${baseClassName}--icon-mix`,
      isHorizontal && `${baseClassName}--horizontal`,
      isVertical && `${baseClassName}--vertical`,
      isSmall && `${baseClassName}--small`,
      isLarge && `${baseClassName}--large`,
      className
    ].filter(Boolean).join(' ');

    // 渲染单个按钮
    if (count === 1 && primaryButton) {
      return (
        <div ref={ref} className={containerClassName} {...restProps}>
          <div className={`${baseClassName}__item ${baseClassName}__item--full`}>
            <SingleButton
              variant={primaryButton.variant || 'solid-dark'}
              color={primaryButton.color || 'brand'}
              size={isSmall ? 'medium' : 'large'}
              disabled={primaryButton.disabled}
              onClick={primaryButton.onClick}
              leftIcon={primaryButton.leftIcon}
              rightIcon={primaryButton.rightIcon}
            >
              {primaryButton.text}
            </SingleButton>
          </div>
        </div>
      );
    }

    // 渲染两个按钮
    if (count === 2 && primaryButton && secondaryButton) {
      return (
        <div ref={ref} className={containerClassName} {...restProps}>
          <div className={`${baseClassName}__item ${isTextMixAlign ? `${baseClassName}__item--primary` : ''}`}>
            <SingleButton
              variant={primaryButton.variant || 'solid-dark'}
              color={primaryButton.color || 'brand'}
              size={isSmall ? 'medium' : 'large'}
              disabled={primaryButton.disabled}
              onClick={primaryButton.onClick}
              leftIcon={primaryButton.leftIcon}
            >
              {primaryButton.text || '主按钮'}
            </SingleButton>
          </div>
          {showDivider && isHorizontal && <div className={`${baseClassName}__divider`} />}
          <div className={`${baseClassName}__item ${isTextMixAlign ? `${baseClassName}__item--secondary` : ''}`}>
            <SingleButton
              variant={secondaryButton.variant || 'solid-light'}
              color={secondaryButton.color || 'black'}
              size={isSmall ? 'medium' : 'large'}
              disabled={secondaryButton.disabled}
              onClick={secondaryButton.onClick}
              rightIcon={secondaryButton.rightIcon}
            >
              {secondaryButton.text || '次按钮'}
            </SingleButton>
          </div>
        </div>
      );
    }

    // 渲染三个按钮
    if (count === 3 && primaryButton && secondaryButton && moreButton) {
      return (
        <div ref={ref} className={containerClassName} {...restProps}>
          <div className={`${baseClassName}__item ${baseClassName}__item--primary`}>
            <SingleButton
              variant={primaryButton.variant || 'solid-dark'}
              color={primaryButton.color || 'brand'}
              size={isSmall ? 'medium' : 'large'}
              disabled={primaryButton.disabled}
              onClick={primaryButton.onClick}
              leftIcon={primaryButton.leftIcon}
            >
              {primaryButton.text || '主按钮'}
            </SingleButton>
          </div>
          {showDivider && isHorizontal && <div className={`${baseClassName}__divider`} />}
          <div className={`${baseClassName}__item ${baseClassName}__item--secondary`}>
            <SingleButton
              variant={secondaryButton.variant || 'solid-light'}
              color={secondaryButton.color || 'black'}
              size={isSmall ? 'medium' : 'large'}
              disabled={secondaryButton.disabled}
              onClick={secondaryButton.onClick}
              leftIcon={secondaryButton.leftIcon}
            >
              {secondaryButton.text || '次按钮'}
            </SingleButton>
          </div>
          {showDivider && isHorizontal && <div className={`${baseClassName}__divider`} />}
          <div className={`${baseClassName}__item ${isTextMixAlign || isIconMixAlign ? `${baseClassName}__item--more` : ''}`}>
            <SingleButton
              variant={moreButton.variant || 'solid-light'}
              color={moreButton.color || 'black'}
              size={isSmall ? 'medium' : 'large'}
              disabled={moreButton.disabled}
              onClick={moreButton.onClick}
              rightIcon={moreButton.rightIcon}
            >
              {moreButton.text || '更多'}
            </SingleButton>
          </div>
        </div>
      );
    }

    // 渲染四个按钮
    if (count === 4 && primaryButton && secondaryButton && tertiaryButton && quaternaryButton) {
      return (
        <div ref={ref} className={containerClassName} {...restProps}>
          <div className={`${baseClassName}__item ${baseClassName}__item--full`}>
            <SingleButton
              variant={primaryButton.variant || 'solid-dark'}
              color={primaryButton.color || 'brand'}
              size={isSmall ? 'medium' : 'large'}
              disabled={primaryButton.disabled}
              onClick={primaryButton.onClick}
              leftIcon={primaryButton.leftIcon}
            >
              {primaryButton.text}
            </SingleButton>
          </div>
          {showDivider && isHorizontal && <div className={`${baseClassName}__divider`} />}
          <div className={`${baseClassName}__item ${baseClassName}__item--full`}>
            <SingleButton
              variant={secondaryButton.variant || 'solid-light'}
              color={secondaryButton.color || 'black'}
              size={isSmall ? 'medium' : 'large'}
              disabled={secondaryButton.disabled}
              onClick={secondaryButton.onClick}
              leftIcon={secondaryButton.leftIcon}
            >
              {secondaryButton.text}
            </SingleButton>
          </div>
          {showDivider && isHorizontal && <div className={`${baseClassName}__divider`} />}
          <div className={`${baseClassName}__item ${baseClassName}__item--full`}>
            <SingleButton
              variant={tertiaryButton.variant || 'solid-light'}
              color={tertiaryButton.color || 'brand'}
              size={isSmall ? 'medium' : 'large'}
              disabled={tertiaryButton.disabled}
              onClick={tertiaryButton.onClick}
            >
              {tertiaryButton.text}
            </SingleButton>
          </div>
          {showDivider && isHorizontal && <div className={`${baseClassName}__divider`} />}
          <div className={`${baseClassName}__item ${isTextMixAlign || isIconMixAlign ? `${baseClassName}__item--more` : ''}`}>
            <SingleButton
              variant={quaternaryButton.variant || 'solid-light'}
              color={quaternaryButton.color || 'black'}
              size={isSmall ? 'medium' : 'large'}
              disabled={quaternaryButton.disabled}
              onClick={quaternaryButton.onClick}
              rightIcon={quaternaryButton.rightIcon}
            >
              {quaternaryButton.text}
            </SingleButton>
          </div>
        </div>
      );
    }

    // 默认返回两个按钮
    return (
      <div ref={ref} className={containerClassName} {...restProps}>
        <div className={`${baseClassName}__item ${baseClassName}__item--primary`}>
          <SingleButton
            variant={primaryButton?.variant || 'solid-dark'}
            color={primaryButton?.color || 'brand'}
            size={isSmall ? 'medium' : 'large'}
            disabled={primaryButton?.disabled}
            onClick={primaryButton?.onClick}
            leftIcon={primaryButton?.leftIcon}
          >
            {primaryButton?.text || '主按钮'}
          </SingleButton>
        </div>
        {showDivider && isHorizontal && <div className={`${baseClassName}__divider`} />}
        <div className={`${baseClassName}__item ${baseClassName}__item--secondary`}>
          <SingleButton
            variant={secondaryButton?.variant || 'solid-light'}
            color={secondaryButton?.color || 'black'}
            size={isSmall ? 'medium' : 'large'}
            disabled={secondaryButton?.disabled}
            onClick={secondaryButton?.onClick}
            rightIcon={secondaryButton?.rightIcon}
          >
            {secondaryButton?.text || '次按钮'}
          </SingleButton>
        </div>
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
