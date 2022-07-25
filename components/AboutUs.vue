<template>
  <section class="about-us">
    <h2 class="about-us__title">О бренде /</h2>
    <h3 class="about-us__subtitle">
      Мы работаем <strong>для вас</strong> уже 9 лет
    </h3>
    <div class="about-us__content">
      <AdaptivePicture
        name="with-pipe.jpg"
        alt="Руки мастера сшивают несколько
        кусков кожи, закреплённых в тисках"
        class="about-us__picture"
      />
      <div class="about-us__text">
        <p class="about-us__paragraph about-us__paragraph--first">
          В конце 80х годов я работал скорняком в доме быта. Люди приходили к
          нам, чтобы заказать себе красивые и надёжные вещи, которые бы идеально
          сидели по фигуре - в обычных магазинах такое не продавалось
        </p>
        <p class="about-us__paragraph about-us__paragraph--second">
          В стране начался экономический кризис, а рынок заполнили дешёвые и
          некачественные товары. Ателье закрыли - людям не всегда хватало на
          еду, не говоря уже про пошив одежды на заказ
        </p>
        <p class="about-us__paragraph about-us__paragraph--third">
          После этого я несколько раз пробовал начать свое дело: торговал
          продуктами, инструментами, крепежом. Некоторые идеи были не очень
          удачными, а некоторые...
        </p>
        <NuxtLink to="/history" class="about-us__link">
          История бренда
          <svg-icon name="arrow-right" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import AdaptivePicture from '@/components/core/molecules/AdaptivePicture';

export default {
  name: 'AboutUs',
  components: { AdaptivePicture },
};
</script>

<style scoped lang="scss">
.about-us {
  margin-top: 9.5rem;

  &__title {
    @include section-title;
  }

  &__subtitle {
    font-size: 2.625rem;
    line-height: $landing-title-line-height;
    font-family: $landing-title-font;
    font-weight: $landing-title-font-weight;
    text-transform: uppercase;
    margin-bottom: 6.25rem;

    > strong {
      @include highlighted(2.625rem);
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__picture {
    width: 35%;
    margin-left: 3rem;
    clip-path: polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%);
  }

  &__text {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, min-content);
    gap: 1rem 1.1875rem;
    width: 50%;
  }

  &__paragraph {
    &--first {
      grid-column: 1 / 3;
      grid-row: 1;
      font-weight: $bold-font-weight;
      font-size: 1.5rem;
    }

    &--second,
    &--third {
      letter-spacing: 0.03em;
      line-height: 1.22;
    }

    &--second {
      grid-column: 1;
      grid-row: 2;
    }

    &--third {
      grid-column: 2;
      grid-row: 2;
    }
  }

  &__link {
    grid-column: 1;
    grid-row: 3;
    width: max-content;
    @include link-with-arrow;
    margin-top: 1rem;
    color: $highlight-text-color;
  }

  @include media(tablet) {
    margin-top: 5rem;
    &__paragraph {
      &--second {
        grid-column: 1/3;
        grid-row: 2;
      }

      &--third {
        grid-column: 1/3;
        grid-row: 3;
      }
    }
    &__link {
      grid-column: 1/3;
      grid-row: 4;
    }
    &__subtitle {
      font-size: 2.25rem;
      margin-bottom: 3.5rem;
    }
  }
  @include media(mobile) {
    margin-top: 3rem;
    &__subtitle {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 2rem;
    }
    &__content {
      flex-direction: column-reverse;
    }
    &__picture {
      width: 100%;
      margin-left: 0;
      clip-path: unset;
      margin-top: 1.5rem;
    }
    &__text {
      width: 100%;
    }
  }
}
</style>
