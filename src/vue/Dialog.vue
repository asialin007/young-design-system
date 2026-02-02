<template>
  <div v-if="open" class="yds-dialog-overlay" role="dialog" :aria-modal="open">
    <div :class="`yds-dialog ${className}`" v-bind="$attrs">
      <!-- 自定义内容 -->
      <div v-if="customContent" class="yds-dialog__content">
        <slot></slot>
      </div>

      <!-- 默认内容 -->
      <template v-else>
        <!-- 图片区域 -->
        <div v-if="showImage && imageUrl" class="yds-dialog__image">
          <img :src="imageUrl" alt="" />
        </div>

        <!-- 文本内容区域 -->
        <div v-if="title || subtitle || $slots.default" class="yds-dialog__content">
          <!-- 标题和副标题 -->
          <div v-if="title || subtitle" class="yds-dialog__title-section">
            <h2 v-if="title" class="yds-dialog__title">{{ title }}</h2>
            <p v-if="subtitle" class="yds-dialog__subtitle">{{ subtitle }}</p>
          </div>

          <!-- 正文内容 -->
          <div v-if="$slots.default" class="yds-dialog__body-text">
            <slot></slot>
          </div>
        </div>

        <!-- 底部按钮 -->
        <div v-if="buttonCount > 0" :class="`yds-dialog__buttons yds-dialog__buttons--${buttonDirection}`">
          <!-- 一个按钮 -->
          <button
            v-if="buttonCount === 1"
            class="yds-dialog__button yds-dialog__button--primary yds-dialog__button--full"
            @click="$emit('primary-click')"
            type="button"
          >
            {{ buttons[0]?.text || '主按钮' }}
          </button>

          <!-- 两个按钮（水平） -->
          <template v-if="buttonCount === 2 && buttonDirection === 'horizontal'">
            <button
              class="yds-dialog__button yds-dialog__button--secondary"
              @click="$emit('secondary-click')"
              type="button"
            >
              {{ buttons[1]?.text || '次按钮' }}
            </button>
            <button
              class="yds-dialog__button yds-dialog__button--primary"
              @click="$emit('primary-click')"
              type="button"
            >
              {{ buttons[0]?.text || '主按钮' }}
            </button>
          </template>

          <!-- 三个按钮（水平） -->
          <template v-if="buttonCount === 3 && buttonDirection === 'horizontal'">
            <button
              class="yds-dialog__button yds-dialog__button--secondary"
              @click="$emit('secondary-click')"
              type="button"
            >
              {{ buttons[1]?.text || '次按钮' }}
            </button>
            <button
              class="yds-dialog__button yds-dialog__button--primary"
              @click="$emit('primary-click')"
              type="button"
            >
              {{ buttons[0]?.text || '主按钮' }}
            </button>
          </template>

          <!-- 三个按钮（垂直） -->
          <template v-if="buttonCount === 3 && buttonDirection === 'vertical'">
            <div class="yds-dialog__buttons yds-dialog__buttons--vertical">
              <button
                class="yds-dialog__button yds-dialog__button--primary"
                @click="$emit('primary-click')"
                type="button"
              >
                {{ buttons[0]?.text }}
              </button>
              <button
                class="yds-dialog__button yds-dialog__button--secondary"
                @click="$emit('secondary-click')"
                type="button"
              >
                {{ buttons[1]?.text }}
              </button>
            </div>
          </template>
        </div>
      </template>

      <!-- 关闭按钮 -->
      <button
        v-if="showClose"
        class="yds-dialog__close"
        @click="$emit('close')"
        aria-label="关闭"
        type="button"
      >
        <svg width="21.6" height="21.6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 6L18 18M6 18L18 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export interface ButtonConfig {
  text: string;
  isPrimary?: boolean;
}

export default defineComponent({
  name: 'YDSDialog',
  props: {
    /** 是否打开 */
    open: {
      type: Boolean,
      default: false
    },
    /** 标题（18px，最多两行） */
    title: {
      type: String,
      default: ''
    },
    /** 副标题（13px，最多一行） */
    subtitle: {
      type: String,
      default: ''
    },
    /** 自定义内容 */
    customContent: {
      type: Boolean,
      default: false
    },
    /** 是否显示关闭按钮 */
    showClose: {
      type: Boolean,
      default: false
    },
    /** 底部按钮数量 */
    buttonCount: {
      type: Number as PropType<1 | 2 | 3>,
      default: 1,
      validator: (value: number) => [1, 2, 3].includes(value)
    },
    /** 底部按钮排列方向 */
    buttonDirection: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
      validator: (value: string) => ['horizontal', 'vertical'].includes(value)
    },
    /** 是否显示图片 */
    showImage: {
      type: Boolean,
      default: false
    },
    /** 图片 URL */
    imageUrl: {
      type: String,
      default: ''
    },
    /** 按钮配置 */
    buttons: {
      type: Array as PropType<ButtonConfig[]>,
      default: () => []
    },
    /** 自定义类名 */
    className: {
      type: String,
      default: ''
    }
  },
  emits: ['close', 'primary-click', 'secondary-click', 'tertiary-click']
});
</script>
