<!--
  年轻版设计系统 2.0 - ButtonGroup 按钮组合组件 (Vue)
  支持单个按钮、两个按钮组合、三个按钮组合、四个按钮组合
  支持多种对齐方式：均分、右侧对齐、文字混合、图标混合
  支持不同排列方向：水平、垂直
-->

<template>
  <div :class="containerClassName" v-bind="$attrs">
    <!-- 单个按钮 -->
    <div v-if="count === 1 && primaryButton" :class="`${baseClassName}__item ${baseClassName}__item--full`">
      <YDSButton
        :variant="primaryButton.variant || 'solid-dark'"
        :color="primaryButton.color || 'brand'"
        :size="isSmall ? 'medium' : 'large'"
        :disabled="primaryButton.disabled"
        @click="primaryButton.onClick"
      >
        <template #left v-if="primaryButton.leftIcon">
          <slot name="leftIcon"></slot>
        </template>
        {{ primaryButton.text || '主按钮' }}
        <template #right v-if="primaryButton.rightIcon">
          <slot name="rightIcon"></slot>
        </template>
      </YDSButton>
    </div>

    <!-- 两个按钮 -->
    <div v-if="count === 2 && primaryButton && secondaryButton" :class="containerClassName">
      <div :class="`${baseClassName}__item ${isTextMixAlign ? `${baseClassName}__item--primary` : ''}`">
        <YDSButton
          :variant="primaryButton.variant || 'solid-dark'"
          :color="primaryButton.color || 'brand'"
          :size="isSmall ? 'medium' : 'large'"
          :disabled="primaryButton.disabled"
          @click="primaryButton.onClick"
        >
          <template #left v-if="primaryButton.leftIcon">
            <slot name="leftIcon"></slot>
          </template>
          {{ primaryButton.text || '主按钮' }}
        </YDSButton>
      </div>

      <div v-if="showDivider && isHorizontal" :class="`${baseClassName}__divider`"></div>

      <div :class="`${baseClassName}__item ${isTextMixAlign ? `${baseClassName}__item--secondary` : ''}`">
        <YDSButton
          :variant="secondaryButton.variant || 'solid-light'"
          :color="secondaryButton.color || 'black'"
          :size="isSmall ? 'medium' : 'large'"
          :disabled="secondaryButton.disabled"
          @click="secondaryButton.onClick"
        >
          <template #right v-if="secondaryButton.rightIcon">
            <slot name="rightIcon"></slot>
          </template>
          {{ secondaryButton.text || '次按钮' }}
        </YDSButton>
      </div>
    </div>

    <!-- 三个按钮 -->
    <div v-if="count === 3 && primaryButton && secondaryButton && moreButton" :class="containerClassName">
      <div :class="`${baseClassName}__item ${baseClassName}__item--primary`">
        <YDSButton
          :variant="primaryButton.variant || 'solid-dark'"
          :color="primaryButton.color || 'brand'"
          :size="isSmall ? 'medium' : 'large'"
          :disabled="primaryButton.disabled"
          @click="primaryButton.onClick"
        >
          <template #left v-if="primaryButton.leftIcon">
            <slot name="leftIcon"></slot>
          </template>
          {{ primaryButton.text || '主按钮' }}
        </YDSButton>
      </div>

      <div v-if="showDivider && isHorizontal" :class="`${baseClassName}__divider`"></div>

      <div :class="`${baseClassName}__item ${baseClassName}__item--secondary`">
        <YDSButton
          :variant="secondaryButton.variant || 'solid-light'"
          :color="secondaryButton.color || 'black'"
          :size="isSmall ? 'medium' : 'large'"
          :disabled="secondaryButton.disabled"
          @click="secondaryButton.onClick"
        >
          {{ secondaryButton.text || '次按钮' }}
        </YDSButton>
      </div>

      <div v-if="showDivider && isHorizontal" :class="`${baseClassName}__divider`"></div>

      <div :class="`${baseClassName}__item ${isTextMixAlign || isIconMixAlign ? `${baseClassName}__item--more` : ''}`">
        <YDSButton
          :variant="moreButton.variant || 'solid-light'"
          :color="moreButton.color || 'black'"
          :size="isSmall ? 'medium' : 'large'"
          :disabled="moreButton.disabled"
          @click="moreButton.onClick"
        >
          <template #right v-if="moreButton.rightIcon">
            <slot name="rightIcon"></slot>
          </template>
          {{ moreButton.text || '更多' }}
        </YDSButton>
      </div>
    </div>

    <!-- 四个按钮 -->
    <div v-if="count === 4 && primaryButton && secondaryButton && tertiaryButton && quaternaryButton" :class="containerClassName">
      <div :class="`${baseClassName}__item ${baseClassName}__item--full`">
        <YDSButton
          :variant="primaryButton.variant || 'solid-dark'"
          :color="primaryButton.color || 'brand'"
          :size="isSmall ? 'medium' : 'large'"
          :disabled="primaryButton.disabled"
          @click="primaryButton.onClick"
        >
          {{ primaryButton.text }}
        </YDSButton>
      </div>

      <div v-if="showDivider && isHorizontal" :class="`${baseClassName}__divider`"></div>

      <div :class="`${baseClassName}__item ${baseClassName}__item--full`">
        <YDSButton
          :variant="secondaryButton.variant || 'solid-light'"
          :color="secondaryButton.color || 'black'"
          :size="isSmall ? 'medium' : 'large'"
          :disabled="secondaryButton.disabled"
          @click="secondaryButton.onClick"
        >
          {{ secondaryButton.text }}
        </YDSButton>
      </div>

      <div v-if="showDivider && isHorizontal" :class="`${baseClassName}__divider`"></div>

      <div :class="`${baseClassName}__item ${baseClassName}__item--full`">
        <YDSButton
          :variant="tertiaryButton.variant || 'solid-light'"
          :color="tertiaryButton.color || 'brand'"
          :size="isSmall ? 'medium' : 'large'"
          :disabled="tertiaryButton.disabled"
          @click="tertiaryButton.onClick"
        >
          {{ tertiaryButton.text }}
        </YDSButton>
      </div>

      <div v-if="showDivider && isHorizontal" :class="`${baseClassName}__divider`"></div>

      <div :class="`${baseClassName}__item ${isTextMixAlign || isIconMixAlign ? `${baseClassName}__item--more` : ''}`">
        <YDSButton
          :variant="quaternaryButton.variant || 'solid-light'"
          :color="quaternaryButton.color || 'black'"
          :size="isSmall ? 'medium' : 'large'"
          :disabled="quaternaryButton.disabled"
          @click="quaternaryButton.onClick"
        >
          <template #right v-if="quaternaryButton.rightIcon">
            <slot name="rightIcon"></slot>
          </template>
          {{ quaternaryButton.text }}
        </YDSButton>
      </div>
    </div>
  </div>
</template>

<script>
import YDSButton from './Button';

/**
 * 单个按钮组件 Props
 */
const SingleButtonProps = {
  children: String,
  leftIcon: Object,
  rightIcon: Object,
  variant: {
    type: String,
    default: 'solid-dark',
    validator: (value) => ['solid-dark', 'solid-light', 'outlined'].includes(value)
  },
  color: {
    type: String,
    default: 'brand',
    validator: (value) => ['brand', 'black', 'white'].includes(value)
  },
  size: {
    type: String,
    default: 'large',
    validator: (value) => ['xl', 'large', 'medium', 'medium-small', 'small', 'mini'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
};

/**
 * 按钮组合对齐方式
 */
const Alignment = {
  equal: 'equal',
  right: 'right',
  textMix: 'text-mix',
  iconMix: 'icon-mix'
};

/**
 * 按钮组合排列方向
 */
const Direction = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

/**
 * 按钮组合尺寸
 */
const GroupSize = {
  small: 'small',
  large: 'large'
};

/**
 * 按钮组按钮数量
 */
const GroupCount = {
  1: '1',
  2: '2',
  3: '3',
  4: '4'
};

export default {
  name: 'YDSButtonGroup',

  components: {
    YDSButton
  },

  props: {
    /** 组件类名 */
    class: {
      type: String,
      default: ''
    },

    /** 对齐方式：均分、右侧对齐、文字混合、图标混合 */
    alignment: {
      type: String,
      default: 'equal',
      validator: (value) => ['equal', 'right', 'text-mix', 'icon-mix'].includes(value)
    },

    /** 排列方向：水平、垂直 */
    direction: {
      type: String,
      default: 'horizontal',
      validator: (value) => ['horizontal', 'vertical'].includes(value)
    },

    /** 尺寸：小、大 */
    size: {
      type: String,
      default: 'large',
      validator: (value) => ['small', 'large'].includes(value)
    },

    /** 按钮数量：1-2-3-4 */
    count: {
      type: Number,
      default: 1,
      validator: (value) => [1, 2, 3, 4].includes(value)
    },

    /** 主按钮 */
    primaryButton: {
      type: Object,
      default: null
    },

    /** 次按钮 */
    secondaryButton: {
      type: Object,
      default: null
    },

    /** 更多按钮 */
    moreButton: {
      type: Object,
      default: null
    },

    /** 三级按钮 */
    tertiaryButton: {
      type: Object,
      default: null
    },

    /** 四级按钮 */
    quaternaryButton: {
      type: Object,
      default: null
    },

    /** 是否显示分割线 */
    showDivider: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    /**
     * 某础类名
     */
    baseClassName() {
      return 'yds-button-group';
    },

    /**
     * 判断对齐方式
     */
    isEqualAlign() {
      return this.alignment === 'equal';
    },

    isRightAlign() {
      return this.alignment === 'right';
    },

    isTextMixAlign() {
      return this.alignment === 'text-mix';
    },

    isIconMixAlign() {
      return this.alignment === 'icon-mix';
    },

    /**
     * 判断方向
     */
    isHorizontal() {
      return this.direction === 'horizontal';
    },

    isVertical() {
      return this.direction === 'vertical';
    },

    /**
     * 判断尺寸
     */
    isSmall() {
      return this.size === 'small';
    },

    isLarge() {
      return this.size === 'large';
    },

    /**
     * 组合容器类名
     */
    containerClassName() {
      const classes = [
        this.baseClassName,
        this.isEqualAlign && `${this.baseClassName}--equal`,
        this.isRightAlign && `${this.baseClassName}--right`,
        this.isTextMixAlign && `${this.baseClassName}--text-mix`,
        this.isIconMixAlign && `${this.baseClassName}--icon-mix`,
        this.isHorizontal && `${this.baseClassName}--horizontal`,
        this.isVertical && `${this.baseClassName}--vertical`,
        this.isSmall && `${this.baseClassName}--small`,
        this.isLarge && `${this.baseClassName}--large`,
        this.class
      ].filter(Boolean);

      return classes.join(' ');
    }
  },

  methods: {
    /**
     * 处理主按钮点击事件
     */
    handlePrimaryClick(event) {
      if (this.primaryButton && !this.primaryButton.disabled) {
        this.$emit('primary-click', event);
      }
    },

    /**
     * 处理次按钮点击事件
     */
    handleSecondaryClick(event) {
      if (this.secondaryButton && !this.secondaryButton.disabled) {
        this.$emit('secondary-click', event);
      }
    },

    /**
     * 处理更多按钮点击事件
     */
    handleMoreClick(event) {
      if (this.moreButton && !this.moreButton.disabled) {
        this.$emit('more-click', event);
      }
    },

    /**
     * 处理三级按钮点击事件
     */
    handleTertiaryClick(event) {
      if (this.tertiaryButton && !this.tertiaryButton.disabled) {
        this.$emit('tertiary-click', event);
      }
    },

    /**
     * 处理四级按钮点击事件
     */
    handleQuaternaryClick(event) {
      if (this.quaternaryButton && !this.quaternaryButton.disabled) {
        this.$emit('quaternary-click', event);
      }
    }
  }
};
</script>

<style scoped>
/* 组件样式由 YDS CSS 和 ButtonGroup CSS 提供 */
</style>
