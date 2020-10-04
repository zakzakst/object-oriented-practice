<template>
  <div>
    <action-btns>
      <action-btn-back />
    </action-btns>

    <team-edit-form
      ref="teamEditForm"
      :id="teamId"
    />
    <button @click="updateTeamItem" class="button" :class="{'is-loading': teamIsBusy}">チーム編集</button>
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import TeamEditForm from '~/components/container/TeamEditForm';

export default {
  data() {
    return {
      teamId: null,
    }
  },
  mixins: [
    actionBtnsMixin,
  ],
  components: {
    TeamEditForm,
  },
  methods: {
    setTeamId() {
      this.teamId = this.$route.params.id;
    },
    async updateTeamItem() {
      const formVal = this.$refs.teamEditForm.getFormValues();
      const updateItem = await this.$store.dispatch('team/updateItem', formVal);
      // 編集したチームページに移動
      this.$router.push({
        path: `/team/${updateItem.id}`,
        query: {confirm: 'none'}
      });
      // 編集完了メッセージを表示
      this.$store.dispatch('toast/show', 'チームデータを編集しました');
    },
  },
  created() {
    this.setTeamId();
  },
  computed: {
    teamIsBusy() {
      return this.$store.getters['team/isBusy'];
    }
  },
  beforeRouteLeave(to, from, next) {
    // 編集実行後の遷移かチェック
    if (to.query.confirm === 'none') {
      // ■ 編集実行後の場合
      next();
    } else {
      // ■ 編集実行後でない場合
      // 入力内容破棄の確認
      const confirm = window.confirm('ページを離れると、入力した内容が破棄されます。よろしいですか。')
      if (confirm) {
        next();
      } else {
        next(false);
      }
    }
  }
}
</script>

<style lang="scss">
</style>
