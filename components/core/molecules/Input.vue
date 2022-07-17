<template>
  <label class="input">
    <span class="input__label" :class="{ 'input__label--focused': active }">
      {{ label }}
    </span>
    <PrivateInputBase
      :value="value"
      :active="active"
      @input="$emit('input', $event)"
      @focus="focused = true"
      @focusout="focused = false"
    />
  </label>
</template>

<script>
import PrivateInputBase from '@/components/core/atoms/PrivateInputBase';

export default {
  name: 'Input',
  components: { PrivateInputBase },
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    active() {
      return !!(this.focused || this.value);
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  position: relative;
  padding: $input-padding 0;
  width: 100%;
  &__label {
    position: absolute;
    top: $input-padding;
    color: $secondary-text-color;
    transition: all $transition-style;
    &--focused {
      color: $main-text-color;
      transform: translateY(-#{$input-padding});
      font-size: calc(#{$footer-font-size} / 2);
    }
  }
}
</style>
