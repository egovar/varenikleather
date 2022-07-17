<template>
  <header class="header">
    <div class="container header__container">
      <NuxtLink to="/" class="header__logo">
        <svg-icon name="logo" />
      </NuxtLink>
      <nav class="header__navigation">
        <NuxtLink
          v-for="page in pages"
          :key="page.link"
          :to="page.link"
          class="header__navigation-link"
        >
          {{ page.name }}
        </NuxtLink>
      </nav>
      <div class="header__pseudo-logo"></div>
    </div>
  </header>
</template>

<script>
import pages from '@/const/pages';
export default {
  name: 'AppHeader',
  data() {
    return {
      pages,
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  padding: $header-padding-top-desktop 0 $header-padding-bottom-desktop;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo,
  &__pseudo-logo {
    display: block;
    width: $logo-width-desktop;
    height: $logo-height-desktop;
  }

  &__navigation-link + &__navigation-link {
    margin-left: 1.3125rem;
    line-height: 122%;
  }

  &__navigation-link.nuxt-link-active {
    font-weight: $bold-font-weight;
  }
}
</style>
