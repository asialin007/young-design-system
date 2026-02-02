<!--
  年轻版设计系统 2.0 - Button 组件 (Vue)
  支持的变体: solid-dark, solid-light, outlined
  支持的颜色: brand, black, white
  支持的尺寸: xl, large, medium, medium-small, small, mini
  支持的状态: default, disabled
  支持纯图标模式
-->

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="yds-button__loading">
      <!-- Loading spinner -->
    </span>
    <span v-if="!loading && $slots.left" class="yds-button__icon">
      <slot name="left"></slot>
    </span>
    <span v-if="!iconOnly" class="yds-button__text">
      <slot></slot>
    </span>
    <span v-if="!loading && $slots.right" class="yds-button__icon">
      <slot name="right"></slot>
    </span>
  </button>
</template>

<script lang="ts">
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

export interface ButtonProps {
  /** 组件类名 */
  class?: string;
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
}

export default {
  name: 'YDSButton',

  props: {
    /** 组件类名 */
    class: {
      type: String,
      default: ''
    },
    /** 变体类型: solid-dark, solid-light, outlined */
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'solid-dark' as ButtonVariant,
      validator: (value: ButtonVariant) => ['solid-dark', 'solid-light', 'outlined'].includes(value)
    },
    /** 颜色: brand, black, white */
    color: {
      type: String as PropType<ButtonColor>,
      default: 'brand' as ButtonColor,
      validator: (value: ButtonColor) => ['brand', 'black', 'white'].includes(value)
    },
    /** 尺寸: xl, large, medium, medium-small, small, mini */
    size: {
      type: String as PropType<ButtonSize>,
      default: 'large' as ButtonSize,
      validator: (value: ButtonSize) => ['xl', 'large', 'medium', 'medium-small', 'small', 'mini'].includes(value)
    },
    /** 是否禁用 */
    disabled: {
      type: Boolean,
      default: false
    },
    /** 是否纯图标 */
    iconOnly: {
      type: Boolean,
      default: false
    },
    /** 加载状态 */
    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    /**
     * 组合 Button 类名
     */
    buttonClasses(): string {
      const classes = [
        'yds-button',
        `yds-button--${this.variant}`,
        `yds-button--${this.color}`,
        `yds-button--${this.size}`,
        this.iconOnly && 'yds-button--icon-only',
        (this.disabled || this.loading) && 'yds-button--disabled',
        this.class
      ].filter(Boolean);

      return classes.join(' ');
    }
  },

  methods: {
    /**
     * 处理点击事件
     */
    handleClick(event: MouseEvent) {
      if (!this.disabled && !this.loading) {
        this.$emit('click', event);
      }
    }
  }
};
</script>

<style scoped>
/* 组件样式由 YDS CSS 提供,无需额外样式 */
</style>
