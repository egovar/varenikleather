<template>
  <section class="most-popular">
    <h2 class="most-popular__title">Наши изделия /</h2>
    <div class="most-popular__products">
      <Card
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="most-popular__card"
      />
    </div>
    <div class="most-popular__link-container">
      <NuxtLink to="/products" class="most-popular__link">
        Смотреть все
        <svg-icon name="arrow-right" />
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import Card from '@/components/core/organisms/Card';
import { getProducts } from '@/api/products';

export default {
  name: 'MostPopular',
  components: { Card },
  data() {
    return {
      products: [],
    };
  },
  async fetch() {
    const res = await getProducts();
    this.products = res.products;
  },
};
</script>

<style scoped lang="scss">
.most-popular {
  margin-top: 9.75rem;

  &__title {
    @include section-title;
  }

  &__products {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__card {
    width: calc(25% - calc(2rem * 3 / 4));
  }

  &__link-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  &__link {
    @include link-with-arrow;
    color: $highlight-text-color;
  }

  @include media(tablet) {
    margin-top: 5rem;
    &__card {
      width: calc(33.3% - calc(2rem * 2 / 3));
      &:not(:nth-child(-n + 3)) {
        display: none;
      }
    }
  }
  @include media(tablet) {
    margin-top: 3rem;
    &__products {
      flex-wrap: wrap;
    }
    &__card {
      width: calc(50% - calc(2rem * 1 / 2));
      margin-bottom: 1rem;
      &:not(:nth-child(-n + 3)) {
        display: unset;
      }
    }
  }
}
</style>
