<template>
  <div class="carousel">
    <AdaptivePicture
      :name="photos[currentPhoto]"
      :product-id="productId"
      alt=""
      class="carousel__main-picture"
      folder="products"
    />
    <AdaptivePicture
      v-for="(photo, i) in photos"
      :key="photo"
      :product-id="productId"
      alt=""
      :name="photo"
      folder="products"
      class="carousel__bottom-photo"
      @click.native="currentPhoto = i"
    />
    <div
      class="carousel__slider"
      :style="{
        transform: `translateX(calc((100% + 0.5rem) * ${currentPhoto}))`,
      }"
    ></div>
  </div>
</template>

<script>
import AdaptivePicture from '@/components/core/molecules/AdaptivePicture';

export default {
  name: 'Carousel',
  components: { AdaptivePicture },
  props: {
    photos: {
      type: Array,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentPhoto: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.carousel {
  display: grid;
  grid-template-columns: repeat(5, calc(20% - 0.5rem * 4 / 5));
  grid-template-rows: 5fr 1fr 5px;
  gap: 0.5rem;

  &__main-picture {
    grid-column: 1/6;
  }
  &__slider {
    height: 100%;
    width: calc(20% - 0.5rem * 4 / 5);
    grid-column: 1/6;
    background-color: $highlight-text-color;
    transition: all $transition-style;
  }
  &__bottom-photo {
    cursor: pointer;
  }
}
</style>
