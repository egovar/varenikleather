<template>
  <section class="faq">
    <h2 class="faq__title">Частые вопросы /</h2>
  </section>
</template>

<script>
import faq from '@/const/faq';
export default {
  name: 'FAQ',
  data() {
    return {
      faq,
    };
  },
};
</script>

<style scoped lang="scss">
.faq {
  margin-top: 12.5rem;
  &__title {
    @include section-title;
  }
}
</style>
