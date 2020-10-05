<template>
  <!-- チームのコレクションビュー要素 -->
  <nuxt-link :to="`/team/${id}`" class="team-collection-item has-text-centered">
    <div class="team-collection-item__img">
      <img :src="`/img/${icon}`" :alt="name">
    </div>
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
.team-collection-item {
  display: block;
  color: $color-text--default;
  transition: color $transition--default;
  &:hover {
    color: $color-text--link;
    .team-collection-item__img {
      background: $color-icon-bg--link;
    }
  }
}
.team-collection-item__img {
  width: 128px;
  height: 128px;
  margin: 0 auto 1rem;
  padding: 32px;
  background: $color-icon-bg;
  border-radius: 50%;
  transition: background-color $transition--default;
}
</style>
