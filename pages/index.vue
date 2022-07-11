<template>
  <div class="ab">
    fkrejfj <span class="cd">hfh</span>
    <Logo />
  </div>
</template>

<script>
import Logo from '@/components/logo'

export default {
  name: 'Index',
  components: { Logo },
}
</script>

<style scoped lang="scss">
.ab {
  > .cd {
    color: $color;
  }
}
</style>
