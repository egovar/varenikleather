<template>
  <NuxtLink :to="`/products/${product.alias}`" class="card">
    <figure>
      <AdaptivePicture
        :product-id="product.alias"
        :name="product.main_photo"
        :alt="product.description"
        folder="products"
        class="card__photo"
      />
      <figcaption class="card__caption">
        <h2 class="card__title">{{ product.name }}</h2>
        <p class="card__price">От {{ product.price }} р.</p>
      </figcaption>
    </figure>
  </NuxtLink>
</template>

<script>
import AdaptivePicture from '@/components/core/molecules/AdaptivePicture';

export default {
  name: 'Card',
  components: { AdaptivePicture },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  &__photo {
    width: 25rem;
    height: 31.25rem;
    margin-bottom: 1.25rem;
  }

  &__title {
    font-size: 1.5rem;
    letter-spacing: 0.03em;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.125rem;
    font-weight: $bold-font-weight;
  }

  &__price {
    font-size: 1.5rem;
    letter-spacing: 0.03em;
    line-height: 1;
  }
}
</style>
