<template>
  <div>
    <action-btns>
      <template #left>
        <action-btn-back />
      </template>
    </action-btns>

    <div class="section">
      <div class="columns is-centered">
        <div class="column is-two-thirds-tablet is-half-desktop">
          <team-create-form
            ref="teamCreateForm"
          />
          <button @click="createTeamItem" class="button is-link mt-6" :class="{'is-loading': teamIsBusy}">チーム作成</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import TeamCreateForm from '~/components/container/TeamCreateForm';

export default {
  mixins: [
    actionBtnsMixin,
  ],
  components: {
    TeamCreateForm,
  },
  methods: {
    async createTeamItem() {
      const formVal = this.$refs.teamCreateForm.getFormValues();
      const teamId = await this.$store.dispatch('team/createItem', formVal);
      // 作成したチームページに移動
      this.$router.push({
        path: `/team/${teamId}`,
        query: {confirm: 'none'}
      });
      // 作成完了メッセージを表示
      this.$store.dispatch('toast/show', 'チームデータを作成しました');
    }
  },
  computed: {
    teamIsBusy() {
      return this.$store.getters['team/isBusy'];
    }
  },
  beforeRouteLeave(to, from, next) {
    // 作成実行後の遷移かチェック
    if (to.query.confirm === 'none') {
      // ■ 作成実行後の場合
      next();
    } else {
      // ■ 作成実行後でない場合
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
