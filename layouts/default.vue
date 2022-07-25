<template>
  <div class="app">
    <AppHeader />
    <main class="main">
      <div class="container">
        <Nuxt />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/core/organisms/AppHeader';
import layoutMixin from '@/mixins/layoutMixin';
import AppFooter from '@/components/core/organisms/AppFooter';

export default {
  name: 'DefaultLayout',
  components: { AppFooter, AppHeader },
  mixins: [layoutMixin],
};
</script>

<style scoped lang="scss">
.main {
  min-height: $content-min-height;
}
</style>
