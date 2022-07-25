<template>
  <div class="products">
    <div class="products__cards">
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/core/organisms/Card';
import { getProducts } from '@/api/products';

export default {
  name: 'Products',
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
.products {
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, calc(25% - calc(2rem * 3 / 4)));
    grid-auto-rows: 1fr;
    gap: 2rem 2rem;
  }
  margin-bottom: 3rem;
  @include media(tablet) {
    &__cards {
      grid-template-columns: repeat(3, calc(33.3% - calc(2rem * 2 / 3)));
    }
  }
  @include media(tablet) {
    margin-top: 6.5rem;
    &__cards {
      grid-template-columns: repeat(2, calc(50% - calc(2rem * 1 / 2)));
    }
  }
}
</style>
