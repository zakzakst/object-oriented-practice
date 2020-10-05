<template>
  <!-- チームの編集 -->
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {type: String, required: true},
  },
  methods: {
    getFormValues() {
      return JSON.parse(JSON.stringify(this.teamItem));
    }
  },
  computed: {
    teamItem() {
      const teamItemBase = this.$store.getters['team/findItemById'](this.id);
      return JSON.parse(JSON.stringify(teamItemBase));
    }
  },
}
</script>

<style lang="scss">
</style>
