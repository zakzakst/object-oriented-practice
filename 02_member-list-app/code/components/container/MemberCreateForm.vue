<template>
  <!-- 社員の新規作成 -->
  <div>
    <div class="field">
      <label class="label">名前</label>
      <div class="control">
        <input v-model="memberItem.name" class="input" type="text" placeholder="山田太郎">
      </div>
    </div>
    <div class="field">
      <label class="label">電話番号</label>
      <div class="control">
        <input v-model="memberItem.tel" class="input" type="text" placeholder="000-0000-0000">
      </div>
    </div>
    <div class="field">
      <label class="label">メールアドレス</label>
      <div class="control">
        <input v-model="memberItem.mail" class="input" type="email" placeholder="sample@mail.com">
      </div>
    </div>
    <div class="field">
      <label class="label">メッセンジャー</label>
      <div class="control">
        <input v-model="memberItem.messenger" class="input" type="text" placeholder="@sample00">
      </div>
    </div>
    <div class="field">
      <label class="label">チーム</label>
      <div class="control">
        <div class="select">
          <select v-model="memberItem.teamId">
            <option v-for="item in teamItems"
              :key="item.id"
              :value="item.id"
            >{{ item.name }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberItem: {},
    }
  },
  methods: {
    getFormValues() {
      return JSON.parse(JSON.stringify(this.memberItem));
    }
  },
  computed: {
    teamItems() {
      return this.$store.getters['team/items'];
    }
  },
}
</script>

<style lang="scss">
</style>
