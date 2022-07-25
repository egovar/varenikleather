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
    width: 40%;
    font-size: 1.875rem;
    line-height: 1.2142857;
    //font-family: $landing-title-font;
    font-weight: $landing-title-font-weight;
    //text-transform: uppercase;
  }
  &__items {
    width: 50%;
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

  @include media(tablet) {
    flex-direction: column;
    align-items: stretch;
    &__text {
      width: 100%;
    }
    &__items {
      margin-top: 2rem;
      width: 80%;
    }
  }
  @include media(mobile) {
    margin: 6.5rem 0;
    &__items {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
