/**
 * 年轻版设计系统 2.0 - Dialog 对话框组件 (React)
 * 移动端专用对话框
 */

import React, { forwardRef, ReactNode } from 'react';

/**
 * Dialog 组件 Props
 */
export interface DialogProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'open'> {
  /** 是否打开 */
  open?: boolean;
  /** 标题（18px，最多两行） */
  title?: string;
  /** 副标题（13px，最多一行） */
  subtitle?: string;
  /** 内容（14px） */
  children?: ReactNode;
  /** 自定义内容 */
  customContent?: ReactNode;
  /** 是否显示关闭按钮 */
  showClose?: boolean;
  /** 底部按钮数量：1, 2, 3 */
  buttonCount?: 1 | 2 | 3;
  /** 底部按钮排列方向：'horizontal' | 'vertical' */
  buttonDirection?: 'horizontal' | 'vertical';
  /** 是否显示图片 */
  showImage?: boolean;
  /** 图片 URL */
  imageUrl?: string;
  /** 按钮配置 */
  buttons?: ButtonConfig[];
  /** 主按钮点击事件 */
  onPrimaryClick?: () => void;
  /** 次按钮点击事件 */
  onSecondaryClick?: () => void;
  /** 三级按钮点击事件 */
  onTertiaryClick?: () => void;
  /** 关闭事件 */
  onClose?: () => void;
}

/**
 * 按钮配置
 */
export interface ButtonConfig {
  /** 按钮文本 */
  text: string;
  /** 是否为主按钮（深色填充） */
  isPrimary?: boolean;
  /** 点击事件 */
  onClick?: () => void;
}

/**
 * Dialog 组件
 */
export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      open = false,
      title = '',
      subtitle = '',
      children,
      customContent,
      showClose = false,
      buttonCount = 1,
      buttonDirection = 'horizontal',
      showImage = false,
      imageUrl,
      buttons = [],
      onPrimaryClick,
      onSecondaryClick,
      onTertiaryClick,
      onClose,
      className = '',
      ...restProps
    },
    ref
  ) => {
    if (!open) return null;

    // 生成按钮
    const renderButtons = () => {
      if (buttonDirection === 'vertical' && buttonCount === 3) {
        // 三个按钮垂直排列：两个按钮在同一个容器内
        return (
          <div className="yds-dialog__buttons yds-dialog__buttons--vertical">
            <button
              className="yds-dialog__button yds-dialog__button--primary"
              onClick={onPrimaryClick}
              type="button"
            >
              {buttons[0]?.text || '主按钮'}
            </button>
            <button
              className="yds-dialog__button yds-dialog__button--secondary"
              onClick={onSecondaryClick}
              type="button"
            >
              {buttons[1]?.text || '次按钮'}
            </button>
          </div>
        );
      }

      if (buttonDirection === 'horizontal') {
        // 水平排列
        return (
          <div className="yds-dialog__buttons yds-dialog__buttons--horizontal">
            {buttonCount === 1 && (
              <button
                className="yds-dialog__button yds-dialog__button--primary yds-dialog__button--full"
                onClick={onPrimaryClick}
                type="button"
              >
                {buttons[0]?.text || '主按钮'}
              </button>
            )}
            {buttonCount === 2 && (
              <>
                <button
                  className="yds-dialog__button yds-dialog__button--secondary"
                  onClick={onSecondaryClick}
                  type="button"
                >
                  {buttons[1]?.text || '次按钮'}
                </button>
                <button
                  className="yds-dialog__button yds-dialog__button--primary"
                  onClick={onPrimaryClick}
                  type="button"
                >
                  {buttons[0]?.text || '主按钮'}
                </button>
              </>
            )}
            {buttonCount === 3 && (
              <>
                <button
                  className="yds-dialog__button yds-dialog__button--secondary"
                  onClick={onSecondaryClick}
                  type="button"
                >
                  {buttons[1]?.text || '次按钮'}
                </button>
                <button
                  className="yds-dialog__button yds-dialog__button--primary"
                  onClick={onPrimaryClick}
                  type="button"
                >
                  {buttons[0]?.text || '主按钮'}
                </button>
              </>
            )}
          </div>
        );
      }

      return null;
    };

    return (
      <div className="yds-dialog-overlay">
        <div
          ref={ref}
          className={`yds-dialog ${className ? ` ${className}` : ''}`}
          role="dialog"
          aria-modal="true"
          {...restProps}
        >
          {/* 自定义内容 */}
          {customContent ? (
            <div className="yds-dialog__content">
              {customContent}
            </div>
          ) : (
            <>
              {/* 图片区域 */}
              {showImage && imageUrl && (
                <div className="yds-dialog__image">
                  <img src={imageUrl} alt="" />
                </div>
              )}

              {/* 文本内容区域 */}
              {(title || subtitle || children) && (
                <div className="yds-dialog__content">
                  {/* 标题和副标题 */}
                  {(title || subtitle) && (
                    <div className="yds-dialog__title-section">
                      {title && <h2 className="yds-dialog__title">{title}</h2>}
                      {subtitle && <p className="yds-dialog__subtitle">{subtitle}</p>}
                    </div>
                  )}

                  {/* 正文内容 */}
                  {children && <div className="yds-dialog__body-text">{children}</div>}
                </div>
              )}

              {/* 底部按钮 */}
              {renderButtons()}
            </>
          )}

          {/* 关闭按钮 */}
          {showClose && (
            <button
              className="yds-dialog__close"
              onClick={onClose}
              aria-label="关闭"
              type="button"
            >
              <svg width="21.6" height="21.6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }
);

Dialog.displayName = 'Dialog';

export default Dialog;
