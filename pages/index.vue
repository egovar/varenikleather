<template>
  <div class="index">
    <Intro />
    <MostPopular />
    <AboutUs />
    <FAQ />
  </div>
</template>

<script>
import Intro from '@/components/Intro';
import AboutUs from '@/components/AboutUs';
import FAQ from '@/components/FAQ';
import MostPopular from '@/components/MostPopular';
export default {
  name: 'Index',
  components: { MostPopular, FAQ, AboutUs, Intro },
};
</script>

<style scoped lang="scss"></style>
