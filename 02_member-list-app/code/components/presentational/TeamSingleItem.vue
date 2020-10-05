<template>
  <!-- チームのシングルビュー要素 -->
  <div class="has-text-centered mb-5">
    <div class="team-single-item__img">
      <img :src="`${appDir}/img/${icon}`" :alt="name">
    </div>
    <h1 class="title is-4 mb-2">{{ name }}</h1>
    <p>{{ introduction }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {type: String, required: true},
    introduction: {type: String, required: true},
    icon: {type: String, required: true},
  },
  computed: {
    appDir() {
      return process.env.APP_DIR !== '' ? `/${process.env.APP_DIR}` : '';
    }
  }
}
</script>

<style lang="scss">
.team-single-item__img {
  width: 128px;
  height: 128px;
  margin: 0 auto 1rem;
  padding: 32px;
  background: $color-icon-bg;
  border-radius: 50%;
}
</style>
