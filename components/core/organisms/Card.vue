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
    width: 100%;
    height: 20rem;
    margin-bottom: 0.625rem;
  }

  &__title {
    width: 100%;
    font-size: 1.125rem;
    letter-spacing: 0.03em;
    line-height: 1;
    margin-bottom: 0.25rem;
    font-weight: $bold-font-weight;
    display: -webkit-box;
    -webkit-line-clamp: 2; // количество строк
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 2.25rem;
  }

  &__price {
    width: 100%;
    font-size: 1.125rem;
    letter-spacing: 0.03em;
    line-height: 1;
  }
  @include media(mobile) {
    &__photo {
      height: 12rem;
    }
  }
}
</style>
