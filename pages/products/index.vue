<template>
  <div class="products">
    <div class="products__cards">
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/core/organisms/Card';
import products from '@/const/products';
export default {
  name: 'Products',
  components: { Card },
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped lang="scss">
.products {
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 25rem);
    grid-template-rows: repeat(4, 1fr);
    gap: 1.875rem 3.125rem;
  }
}
</style>
