<template>
  <!-- 社員のコレクションビュー要素 -->
  <nuxt-link :to="`/member/${id}`" class="media">
    <div class="media-left">
      <span class="icon is-large">
        <fa :icon="['fas', 'user']" class="fa-lg" />
      </span>
    </div>
    <div class="media-content">
      <div class="content">
        <p class="has-text-weight-bold mb-1">{{ name }}</p>
        <p class="is-size-7">{{ teamName }}</p>
      </div>
    </div>
    <div class="media-left">
      <p v-if="onlineStatus" class="is-size-7">オンライン</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {type: String, required: true},
    name: {type: String, required: true},
    onlineStatus: {type: Boolean, required: true},
    teamName: {type: String, required: true},
  },
}
</script>

<style lang="scss">
</style>
