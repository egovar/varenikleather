<template>
  <div class="item" :class="{ 'item--active': active }">
    <div class="item__activator" @click="toggleItem">
      <p class="item__title">
        {{ title }}
      </p>
      <svg-icon name="plus" />
    </div>
    <div class="item__content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivateAccordionItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleItem() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped lang="scss">
.item {
  width: 100%;
  line-height: 1.22;
  &__activator {
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: $bold-font-weight;
    > .icon {
      width: 1.75rem;
      height: 1.75rem;
      transition: all $transition-style;
    }
  }
  &__title,
  &__content {
    max-width: 31.25rem;
  }

  &__content {
    letter-spacing: 0.03em;
    padding-bottom: 0;
    max-height: 0;
    overflow: hidden;
    transition: all $transition-style;
  }

  &--active {
    .item__activator {
      > .icon {
        transform: rotateZ(45deg);
      }
    }
    .item__content {
      max-height: 20rem;
      padding-bottom: 2.5rem;
    }
  }

  @include media(tablet) {
    &__title,
    &__content {
      max-width: 70%;
    }
  }
  @include media(mobile) {
    &__title,
    &__content {
      max-width: 90%;
    }
    &--active {
      .item__content {
        max-height: 30rem;
      }
    }
  }
}
</style>
