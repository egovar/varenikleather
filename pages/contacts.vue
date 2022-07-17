<template>
  <div class="contacts">
    <p class="contacts__text">
      Вы всегда можете связаться с нами в соцсетях или посмотреть наши изделия
    </p>
    <div class="contacts__items">
      <a
        v-for="media in socialMedia"
        :key="media.iconName"
        :href="media.link"
        target="_blank"
        class="contacts__item"
      >
        <svg-icon
          :name="media.iconName"
          class="contacts__icon"
          :class="`contacts__icon--${media.iconName}`"
        />
        <span class="contacts__nickname">{{ media.nickName }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import socialMedia from '@/const/socialMedia';
export default {
  name: 'Contacts',
  data() {
    return {
      socialMedia,
    };
  },
};
</script>

<style scoped lang="scss">
.contacts {
  display: flex;
  justify-content: space-between;
  &__text {
    width: 41.6875rem;
    font-size: 2.625rem;
    line-height: 1.2142857;
    font-family: $landing-title-font;
    font-weight: $landing-title-font-weight;
    text-transform: uppercase;
  }
  &__items {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: repeat(2, min-content);
    gap: 3.125rem;
    .contacts__item {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
    .contacts__icon {
      margin-right: 0.625rem;
      @include icons;
    }
  }
}
</style>
