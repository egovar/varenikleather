<template>
  <section class="history">
    <div class="history__part history__part--first grid">
      <AdaptivePicture
        name="pipe.jpg"
        alt="Курительная трубка на кожаном чехле
      для курительных принадлежностей"
        class="grid__item grid__item--first"
      />
      <h2
        class="history__text history__text--bold grid__item grid__item--second"
      >
        Начало пути
      </h2>
      <p class="history__text grid__item grid__item--third">
        В конце 80х годов я работал кожевником в доме быта. Люди приходили к
        нам, чтобы заказать себе красивые и надёжные вещи, которые бы идеально
        сидели по фигуре - в обычных магазинах такое не продавалось
      </p>
      <p class="history__text grid__item grid__item--fourth">
        Через несколько лет советский союз распался, в стране начался
        экономический кризис, а рынок заполнили дешёвые и некачественные товары.
        Ателье закрыли - людям не всегда хватало на еду, не говоря уже про пошив
        одежды на заказ
      </p>
      <AdaptivePicture
        name="watch.jpg"
        alt="Часы с кожаным ремешком лежат на деревянном столе рядом с
      кошельком из натуральной кожи"
        class="grid__item grid__item--fifth"
      />
      <AdaptivePicture
        name="wallet.jpg"
        alt="Грубо сшитый кошелёк из натуральной кожи лежит на деревянном столе в окружении инструментов кожевника"
        class="grid__item grid__item--sixth"
      />
      <p
        class="history__text history__text--bold grid__item grid__item--seventh"
      >
        После этого я несколько раз пробовал начать свое дело: торговал
        продуктами, инструментами, крепежом.
      </p>
      <p class="history__text grid__item grid__item--eighth">
        Некоторые идеи были не очень удачными - некоторые работали более 10 лет.
        Но когда я решил, что основные трудности позади, на рынок вышли крупные
        компании - они продавали откровенный мусор, но подкупали людей низкими
        ценами и вездесущей рекламой. Мои старые методы больше не работали, а
        продавать людям то, чем я бы сам побрезговал пользоваться - это
        противоречит моим принципам
      </p>
    </div>
  </section>
</template>

<script>
import AdaptivePicture from '@/components/core/molecules/AdaptivePicture';
export default {
  name: 'History',
  components: { AdaptivePicture },
};
</script>

<style scoped lang="scss">
.history {
  &__text {
    letter-spacing: 0.03em;
    line-height: 1.22;
    &--bold {
      font-size: 1.5rem;
      font-weight: $bold-font-weight;
      line-height: 1;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 39.75rem 19.1875rem 1fr;
    grid-template-rows: repeat(7, min-content);
    &__item {
      &--first {
        grid-column: 1;
        grid-row: 1 / 5;
        margin-bottom: 3.125rem;
      }
      &--second {
        grid-column: 2;
        grid-row: 1;
        margin-bottom: 1.25rem;
      }
      &--third {
        grid-column: 2/4;
        grid-row: 2;
        width: 37rem;
      }
      &--second,
      &--third {
        margin-left: 0.75rem;
      }
      &--fourth {
        grid-column: 1;
        grid-row: 5;
      }
      &--first,
      &--fourth {
        width: 33.625rem;
      }
      &--fifth {
        grid-column: 2;
        grid-row: 4/6;
      }
      &--sixth {
        grid-column: 3;
        grid-row: 4/6;
        margin-left: 3.125rem;
      }
      &--fifth,
      &--sixth {
        width: 19.1875rem;
        height: 21.75rem;
      }
      &--seventh {
        grid-column: 2/4;
        grid-row: 6;
        margin-top: 3.125rem;
      }
      &--eighth {
        grid-column: 2/4;
        grid-row: 7;
        margin-top: 1.25rem;
      }
    }
  }
}
</style>
