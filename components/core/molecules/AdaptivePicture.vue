<template>
  <picture class="adaptive-picture">
    <source
      :media="`(max-width: ${minTabletWidth - 1}px)`"
      :srcset="path('small')"
    />
    <source
      :media="`(max-width: ${minDesktopWidth - 1}px)`"
      :srcset="path('medium')"
    />
    <source
      :media="`(min-width: ${minDesktopWidth}px)`"
      :srcset="path('large')"
    />
    <img :src="path('large')" :alt="alt" />
  </picture>
</template>

<script>
import { minTabletWidth, minDesktopWidth } from '@/const/displayWidth';

export default {
  name: 'AdaptivePicture',
  props: {
    name: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    folder: {
      type: String,
      default: 'landing',
    },
    productId: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      minTabletWidth,
      minDesktopWidth,
    };
  },
  computed: {
    picture() {
      const [name, type] = this.name.split('.');
      return { name, type };
    },
  },
  methods: {
    path(size) {
      // 'small' | 'medium' | 'large'
      if (this.folder === 'landing') {
        return `/img/${this.folder}/${this.picture.name}/${this.picture.name}-${size}.${this.picture.type}`;
      }
      return `/img/${this.folder}/${this.productId}/${this.picture.name}.${this.picture.type}`;
    },
  },
};
</script>

<style scoped lang="scss">
.adaptive-picture {
  display: block;
  background-color: $placeholder-color;

  > img {
    display: block;
    width: 100%;
    height: 100%;
    background-color: $placeholder-color;
    object-fit: cover;
  }
}
</style>
