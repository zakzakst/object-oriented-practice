<template>
  <nuxt-link :to="to" class="button is-light">
    <span class="icon">
      <fa :icon="['fas', 'plus']" class="fa-lg" />
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {type: String, required: true},
  },
  // data() {
  //   return {
  //     to: '/team/create'
  //   }
  // }
}
</script>

<style lang="scss">
</style>
