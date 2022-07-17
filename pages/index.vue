<template>
  <div class="index">
    <Intro />
    <AboutUs />
    <FAQ />
  </div>
</template>

<script>
import Intro from '@/components/Intro';
import AboutUs from '@/components/AboutUs';
import FAQ from '@/components/FAQ';
export default {
  name: 'Index',
  components: { FAQ, AboutUs, Intro },
};
</script>

<style scoped lang="scss"></style>
