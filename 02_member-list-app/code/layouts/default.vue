<template>
  <div>
    <global-nav />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import GlobalNav from '~/components/presentational/GlobalNav';
export default {
  name: 'layout-default',
  components: {
    GlobalNav,
  },
}
</script>

<style lang="scss">
</style>
