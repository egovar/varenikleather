<template>
  <button
    :type="type"
    class="button"
    :disabled="disabled"
    @click.prevent="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    text: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: $button-padding;
  font-size: inherit;
  background-color: transparent;
  border-radius: 0;
  border: 1px solid $main-text-color;
  color: inherit;
  cursor: pointer;
  transition: all $transition-style;
  &[disabled] {
    opacity: 0.2;
    cursor: unset;
  }
  &:not([disabled]):hover {
    color: $main-bg-color;
    background-color: $main-text-color;
  }
}
</style>
