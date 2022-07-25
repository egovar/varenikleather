<template>
  <div v-if="product.name" class="listing">
    <section class="listing__info">
      <h1 class="listing__title">{{ product.name }}</h1>
      <p class="listing__price">От {{ product.price }} р.</p>
      <p class="listing__description">{{ product.description }}</p>
      <!--      <div class="listing__grid">-->
      <!--        <span class="listing__grid-label">Категория</span>-->
      <!--        <span class="listing__grid-value listing__grid-value&#45;&#45;underlined">-->
      <!--          {{ product.categoryName }}-->
      <!--        </span>-->
      <!--        <span class="listing__grid-label">Цвет</span>-->
      <!--        <span class="listing__grid-value listing__grid-value&#45;&#45;underlined">-->
      <!--          {{ product.color }}-->
      <!--        </span>-->
      <!--        <span class="listing__grid-label">Размер (мм)</span>-->
      <!--        <span class="listing__grid-value">{{ product.size }}</span>-->
      <!--      </div>-->
      <Btn text="Заказать" @click="toForm" />
    </section>
    <Carousel
      :product-id="product.alias"
      :photos="product.photos"
      class="listing__photos"
    />
  </div>
</template>

<script>
import Btn from '@/components/core/atoms/Btn';
import { getProductById } from '@/api/products';
import Carousel from '@/components/core/organisms/Carousel';

export default {
  name: 'Listing',
  components: { Carousel, Btn },
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
  justify-content: space-between;
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
    font-size: 1.25rem;
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
    width: 40%;
  }

  @include media(tablet) {
    flex-direction: column-reverse;
    &__photos {
      width: 100%;
    }
    &__info {
      width: 100%;
    }
    &__title {
      margin-top: 1.25rem;
    }
  }
  @include media(mobile) {
    margin-top: 6.5rem;
  }
}
</style>
