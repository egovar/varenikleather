<template>
  <input
    :value="value"
    class="input-base"
    :class="{ 'input-base--active': active }"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus')"
    @focusout="$emit('focusout')"
  />
</template>

<script>
export default {
  name: 'PrivateInputBase',
  props: {
    value: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.input-base {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid $secondary-text-color;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: $input-base-padding 0;
  transition: all $transition-style;
  &--active {
    border-color: $main-text-color;
  }
}
</style>
