<template>
  <section class="about-us">
    <h2 class="about-us__title">О бренде /</h2>
    <h3 class="about-us__subtitle">
      Мы работаем <strong>для вас</strong> уже 9 лет
    </h3>
    <div class="about-us__content">
      <div class="about-us__picture-container">
        <AdaptivePicture
          name="sewing.jpg"
          alt="Руки мастера сшивают несколько
        кусков кожи, закреплённых в тисках"
          class="about-us__picture"
        />
      </div>
      <p class="about-us__paragraph about-us__paragraph--first">
        В конце 80х годов я работал кожевником в доме быта. Люди приходили к
        нам, чтобы заказать себе красивые и надёжные вещи, которые бы идеально
        сидели по фигуре - в обычных магазинах такое не продавалось
      </p>
      <p class="about-us__paragraph about-us__paragraph--second">
        В стране начался экономический кризис, а рынок заполнили дешёвые и
        некачественные товары. Ателье закрыли - людям не всегда хватало на еду,
        не говоря уже про пошив одежды на заказ
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
  margin-top: 12.5rem;
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
    display: grid;
    grid-template-columns: 40.3125rem 20rem 20.9375rem;
    grid-template-rows: repeat(3, min-content);
  }

  &__picture-container {
    grid-column: 1;
    grid-row: 2 / 4;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  &__picture {
    width: 33.625rem;
  }

  &__paragraph {
    &--first {
      grid-column: 2 / 4;
      grid-row: 1;
      font-weight: $bold-font-weight;
      font-size: 1.5rem;
      padding-bottom: 1.1875rem;
    }
    &--second,
    &--third {
      padding-top: 3.6875rem;
      letter-spacing: 0.03em;
      line-height: 1.22;
    }
    &--second {
      grid-column: 2;
      grid-row: 2;
      padding-right: 0.2rem;
    }
    &--third {
      grid-column: 3;
      grid-row: 2;
      padding-left: 3.5rem;
    }
  }

  &__link {
    grid-column: 2;
    grid-row: 3;
    @include link-with-arrow;
    color: $highlight-text-color;
  }
}
</style>
