<template>
  <section class="faq">
    <h2 class="faq__title">Частые вопросы /</h2>
    <Accordion :items="faq" title-field="question" content-field="answer" />
  </section>
</template>

<script>
import faq from '@/const/faq';
import Accordion from '@/components/core/organisms/Accordion';
export default {
  name: 'FAQ',
  components: { Accordion },
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
  margin-bottom: 5.625rem;
  &__title {
    @include section-title;
  }
}
</style>
