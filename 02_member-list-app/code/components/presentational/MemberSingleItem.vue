<template>
  <!-- 社員のシングルビュー要素 -->
  <div>
    <p>{{ name }}</p>
    <p v-if="onlineStatus">オンライン</p>
    <p>所属チーム</p>
    <nuxt-link :to="`/team/${teamId}`">
      <img :src="`/img/${teamIcon}`" :alt="teamName">
      <p>{{ teamName }}</p>
    </nuxt-link>
    <p>電話番号</p>
    <p>{{ tel }}</p>
    <p>メールアドレス</p>
    <p>{{ mail }}</p>
    <p>メッセンジャー</p>
    <p>{{ messenger }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {type: String, required: true},
    tel: {type: String, required: true},
    mail: {type: String, required: true},
    messenger: {type: String, required: true},
    onlineStatus: {type: Boolean, required: true},
    teamId: {type: String, required: true},
    teamName: {type: String, required: true},
    teamIcon: {type: String, required: true},
  },
}
</script>

<style lang="scss">
</style>
