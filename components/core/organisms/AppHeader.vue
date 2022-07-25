<template>
  <header class="header">
    <div class="container header__container">
      <NuxtLink to="/" class="header__logo">
        <svg-icon name="logo" />
      </NuxtLink>
      <nav v-if="!isMobile" class="header__navigation">
        <NuxtLink
          v-for="(page, i) in pages"
          :key="page.link"
          :to="page.link"
          :exact="!i"
          class="header__navigation-link"
          @click="toggleBurgerMenu"
        >
          {{ page.name }}
        </NuxtLink>
      </nav>
      <div v-if="isDesktop" class="header__pseudo-logo"></div>
      <button
        v-if="isMobile"
        class="header__burger-button burger"
        :class="{ 'burger--active': burgerMenu }"
        @click="toggleBurgerMenu"
      >
        <svg-icon name="burger" class="burger__icon" />
      </button>
    </div>
    <transition name="burger-menu">
      <div v-if="burgerMenu" class="burger__menu">
        <nav class="burger__content">
          <NuxtLink
            v-for="(page, i) in pages"
            :key="page.link"
            :to="page.link"
            :exact="!i"
            class="burger__navigation-link"
          >
            {{ page.name }}
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import pages from '@/const/pages';
export default {
  name: 'AppHeader',
  data() {
    return {
      pages,
      burgerMenu: false,
    };
  },
  computed: {
    ...mapGetters('core', ['isDesktop', 'isMobile']),
  },
  watch: {
    '$route.path': {
      handler() {
        this.burgerMenu = false;
      },
    },
  },
  methods: {
    toggleBurgerMenu() {
      this.burgerMenu = !this.burgerMenu;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  padding: $header-padding-top-desktop 0 $header-padding-bottom-desktop;
  font-size: $header-font-size;

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

  @include media(mobile) {
    width: 100%;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    background: $main-bg-color;
    box-shadow: 0px -4px 50px 5px rgba(0, 0, 0, 0.2);
    z-index: 20;

    &__logo {
      width: 2.5rem;
      height: 2.5rem;
    }
    &__container {
      padding: 0;
    }
    .burger {
      width: 2.5rem;
      height: 2.5rem;
      .icon {
        transition: all $transition-style;
      }
      &--active {
        .icon {
          transform: rotateZ(90deg);
        }
      }
      &__menu {
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(25px);
        position: fixed;
        top: 4.5rem;
        left: 0;
        z-index: 10;
        opacity: 1;
      }
      &__content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      &__navigation-link {
        margin-top: 1rem;
        color: #222222;
      }
    }

    .burger-menu-enter-active,
    .burger-menu-leave-active {
      transition: opacity $transition-style;
    }

    .burger-menu-enter-from,
    .burger-menu-leave-to {
      opacity: 0;
    }
  }
}
</style>
