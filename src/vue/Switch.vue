<template>
  <button
    :class="classes"
    type="button"
    :disabled="disabled"
    :aria-checked="checked"
    role="switch"
    @click="handleClick"
    v-bind="$attrs"
  >
    <span class="yds-switch__dot"></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'YDSSwitch',
  props: {
    /** 是否开启 */
    checked: {
      type: Boolean,
      default: false
    },
    /** 尺寸：'small' | 'medium' | 'large' */
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large'].includes(value)
    },
    /** 是否禁用 */
    disabled: {
      type: Boolean,
      default: false
    },
    /** 自定义类名 */
    className: {
      type: String,
      default: ''
    }
  },
  emits: ['change', 'update:checked'],
  computed: {
    classes() {
      return [
        'yds-switch',
        `yds-switch--${this.size}`,
        this.checked ? 'yds-switch--checked' : '',
        this.disabled ? 'yds-switch--disabled' : '',
        this.className
      ].filter(Boolean).join(' ');
    }
  },
  methods: {
    handleClick(event: MouseEvent) {
      if (!this.disabled) {
        const newChecked = !this.checked;
        this.$emit('change', newChecked, event);
        this.$emit('update:checked', newChecked);
      }
    }
  }
});
</script>
