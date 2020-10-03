<template>
  <nuxt-link :to="to" class="button is-light">
    <span class="icon">
      <fa :icon="['fas', 'pen']" class="fa-lg" />
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
  //     to: '/team/edit'
  //   }
  // }
}
</script>

<style lang="scss">
</style>
