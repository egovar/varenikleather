<template>
  <div class="accordion">
    <PrivateAccordionItem
      v-for="item in items"
      :key="item[titleField]"
      :title="item[titleField]"
      :content="item[contentField]"
      class="accordion__item"
    />
  </div>
</template>

<script>
import PrivateAccordionItem from '@/components/core/molecules/PrivateAccordionItem';
export default {
  name: 'Accordion',
  components: { PrivateAccordionItem },
  props: {
    items: {
      type: Array,
      required: true,
    },
    titleField: {
      type: String,
      default: 'title',
    },
    contentField: {
      type: String,
      default: 'content',
    },
  },
};
</script>

<style scoped lang="scss">
.accordion {
  border-top: 1px solid $main-text-color;
  border-bottom: 1px solid $main-text-color;

  &__item {
    &:not(:first-child) {
      border-top: 1px solid $main-text-color;
    }
  }
}
</style>
