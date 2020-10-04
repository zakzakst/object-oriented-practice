<template>
  <!-- チームのシングルビュー要素 -->
  <div>
    <p>{{ name }}</p>
    <p>{{ introduction }}</p>
    <img :src="`/img/${icon}`" :alt="name">
  </div>
</template>

<script>
export default {
  props: {
    name: {type: String, required: true},
    introduction: {type: String, required: true},
    icon: {type: String, required: true},
  },
}
</script>

<style lang="scss">
</style>
