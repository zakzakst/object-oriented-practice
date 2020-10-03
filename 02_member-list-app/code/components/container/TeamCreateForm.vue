<template>
  <!-- チームの新規作成 -->
  <div>
    <div class="field">
      <label class="label">チーム名</label>
      <div class="control">
        <input v-model="teamItem.name" class="input" type="text" placeholder="エンジニアリング">
      </div>
    </div>
    <div class="field">
      <label class="label">紹介文</label>
      <div class="control">
        <textarea v-model="teamItem.introduction" class="textarea" placeholder="システムの作成を行っています"></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">アイコン画像</label>
      <div class="control">
        <input v-model="teamItem.icon" class="input" type="text" placeholder="icon-engineering.png">
      </div>
      <template v-if="teamItem.icon">
        <img :src="`/img/${teamItem.icon}`" alt="">
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamItem: {},
    }
  },
  methods: {
    getFormValues() {
      return JSON.parse(JSON.stringify(this.teamItem));
    }
  },
}
</script>

<style lang="scss">
</style>
