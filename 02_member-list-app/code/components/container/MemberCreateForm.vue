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
    <div class="field">
      <label class="label">オンラインステータス</label>
      <div class="control">
        <label class="checkbox">
          <input v-model="memberItem.onlineStatus" type="checkbox">
          オンライン中
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import fireApp from '@/plugins/firebase';

export default {
  data() {
    return {
      memberItem: {
        onlineStatus: false
      },
      teamItems: [],
    }
  },
  methods: {
    async loadTeamItems() {
      // firebaseでチームデータを取得
      const teamSnapshot = await fireApp.database().ref(`${process.env.APP_DIR}/team`).once('value');
      // データを成形
      const teamSnapshotKeys = Object.keys(teamSnapshot.val());
      const teamSnapshotFormatted = teamSnapshotKeys.map(key => {
        const teamSnapshotItem = teamSnapshot.val()[key];
        teamSnapshotItem.id = key;
        return teamSnapshotItem;
      });
      // teamItemsを設定
      this.teamItems = teamSnapshotFormatted;
    },
    getFormValues() {
      return JSON.parse(JSON.stringify(this.memberItem));
    }
  },
  mounted() {
    this.loadTeamItems();
  }
}
</script>

<style lang="scss">
</style>
