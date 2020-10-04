<template>
  <!-- チームのコレクションビュー要素 -->
  <nuxt-link :to="`/team/${id}`">
    <img :src="`/img/${icon}`" :alt="name">
    <p>{{ name }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {type: String, required: true},
    name: {type: String, required: true},
    icon: {type: String, required: true},
  },
}
</script>

<style lang="scss">
</style>
