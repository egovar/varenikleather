<template>
  <div v-if="product.name" class="listing">
    <section class="listing__info">
      <h1 class="listing__title">{{ product.name }}</h1>
      <p class="listing__price">От {{ product.price }} р.</p>
      <p class="listing__description">{{ product.description }}</p>
      <div class="listing__grid">
        <span class="listing__grid-label">Категория</span>
        <span class="listing__grid-value listing__grid-value--underlined">
          {{ product.categoryName }}
        </span>
        <span class="listing__grid-label">Цвет</span>
        <span class="listing__grid-value listing__grid-value--underlined">
          {{ product.color }}
        </span>
        <span class="listing__grid-label">Размер (мм)</span>
        <span class="listing__grid-value">{{ product.size }}</span>
      </div>
      <Btn text="Заказать" @click="toForm" />
    </section>
    <section class="listing__photos">
      <AdaptivePicture
        v-for="(photo, i) in product.photos"
        :key="i"
        :product-id="product.alias"
        :name="photo"
        :alt="product.description"
        folder="products"
        class="listing__photo"
      />
    </section>
  </div>
</template>

<script>
import AdaptivePicture from '@/components/core/molecules/AdaptivePicture';
import Btn from '@/components/core/atoms/Btn';
import { getProductById } from '@/api/products';

export default {
  name: 'Listing',
  components: { Btn, AdaptivePicture },
  data() {
    return {
      product: {},
    };
  },
  async fetch() {
    this.product = await getProductById(this.productId);
  },
  computed: {
    productId() {
      return this.$route.params.id;
    },
  },
  methods: {
    toForm() {
      this.$router.push({ hash: '#form' });
    },
  },
};
</script>

<style scoped lang="scss">
.listing {
  //height: $content-min-height;
  //overflow: hidden;
  display: flex;
  margin-bottom: 6.25rem;

  &__info {
    width: 33.625rem;
    margin-right: 6.125rem;
  }

  &__title {
    margin-bottom: 1.25rem;
    // Страшное
    display: -webkit-box;
    -webkit-line-clamp: 2; // количество строк
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__title,
  &__price {
    font-weight: $main-font-weight;
    font-size: 1.75rem;
    line-height: 1;
    letter-spacing: 0.03em;
  }

  &__description {
    margin: 3.125rem 0 9.375rem;
    word-wrap: break-word;
    line-height: 1;
    letter-spacing: 0.03em;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0.625rem 10rem;
    line-height: 1;
    letter-spacing: 0.03em;
    margin-bottom: 1.25rem;
  }

  &__grid-label {
    font-weight: $bold-font-weight;
  }

  &__grid-value {
    &--underlined {
      text-decoration: underline;
    }
  }

  &__photos {
    height: 55rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 25.125rem;
    gap: 1.25rem 1.875rem;
    overflow-x: hidden;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__photo {
    &:first-child {
      grid-column: 1/3;
      grid-row: 1/3;
    }
  }
}
</style>
