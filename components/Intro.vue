<template>
  <section class="intro">
    <div class="intro__part intro__part--left">
      <h1 class="intro__title">
        <strong>Идеальный</strong>
        <span>подарок</span>
      </h1>
      <p class="intro__description">
        Для любимого человека нужны особые подарки! Конечно, можно подарить
        дежурные носки/цветы, ведь любой знак внимания важен — но это ведь будет
        не ТОТ подарок. Вы можете придумать то, что нужно именно ВАШЕМУ человеку
        — мы легко воплотим это в жизнь! Меня зовут Игорь, я занимаюсь
        изготовлением изделий из кожи уже около 10 лет. В 2013 году мы с моей
        женой Надеждой открыли собственную мастерскую, где каждый может заказать
        эксклюзивную вещь из натуральной кожи, подходящую именно ему
      </p>
      <NuxtLink to="/products" class="intro__link">
        Изделия
        <svg-icon name="arrow_right" />
      </NuxtLink>
    </div>
    <div class="intro__part intro__part--right">
      <!--      <div class="intro__spot"></div>-->
      <AdaptivePicture
        name="intro.jpg"
        alt="Фото наших мастеров: Игоря и Надежды"
        class="intro__photo"
      />
    </div>
  </section>
</template>

<script>
import AdaptivePicture from '@/components/core/molecules/AdaptivePicture';

export default {
  name: 'Intro',
  components: { AdaptivePicture },
};
</script>

<style scoped lang="scss">
.intro {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-family: $landing-title-font;
    font-size: 5.5rem;
    font-weight: $landing-title-font-weight;
    text-transform: uppercase;

    > strong {
      @include highlighted(5.5rem);
    }

    > span {
      display: block;
      margin-left: 7.625rem;
    }
  }

  &__description {
    line-height: 1.22;
    margin: 1.875rem 0 0;
    max-width: 39.75rem;
  }

  &__link {
    @include link-with-arrow;
  }

  &__spot {
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(255, 230, 0, 0.8) -1.21%,
      rgba(255, 122, 0, 0.8) 99.35%
    );
    filter: blur(260px);
    transform: rotate(150deg);
    width: 47rem;
    height: 7.5rem;
    top: 50%;
    right: 45%;
    z-index: 1;
  }

  &__photo {
    width: 25rem;
    //padding: 1.5rem;
    border-radius: 1rem;
    //border: 2px solid $main-text-color;
    //background: transparent;

    ::v-deep(img) {
      border-radius: 1rem;
    }
  }

  @include media(tablet) {
    flex-direction: column;
    align-items: stretch;
    &__title {
      font-size: 4rem;
      text-align: center;
      margin: 0 auto 3rem -3.8125rem;
    }
    &__description {
      margin: auto;
    }
    &__photo {
      width: 100%;
      height: 40rem;
      border-radius: 0;

      ::v-deep(img) {
        border-radius: 0;
      }

      margin-top: 2rem;
    }
    &__link {
      display: none;
    }
  }
  @include media(mobile) {
    margin-top: 6.5rem;
    &__title {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
    &__photo {
      height: 20rem;
    }
  }
}
</style>
