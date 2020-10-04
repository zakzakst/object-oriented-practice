<template>
  <div>
    <global-nav />
    <div class="container">
      <Nuxt />
    </div>
    <toast />
  </div>
</template>

<script>
import GlobalNav from '~/components/presentational/GlobalNav';
import Toast from '~/components/container/Toast';

export default {
  name: 'layout-default',
  components: {
    GlobalNav,
    Toast,
  },
}
</script>

<style lang="scss">
</style>
