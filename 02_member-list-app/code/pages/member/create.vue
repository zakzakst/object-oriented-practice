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
          <member-create-form
            ref="memberCreateForm"
          />
          <button @click="createMemberItem" class="button is-link mt-6" :class="{'is-loading': memberIsBusy}">メンバー作成</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import MemberCreateForm from '~/components/container/MemberCreateForm';

export default {
  mixins: [
    actionBtnsMixin,
  ],
  components: {
    MemberCreateForm,
  },
  methods: {
    async createMemberItem() {
      const formVal = this.$refs.memberCreateForm.getFormValues();
      const uid = await this.$store.dispatch('member/createItem', formVal);
      // 作成した社員ページに移動
      this.$router.push({
        path: `/member/${uid}`,
        query: {confirm: 'none'}
      });
      // 作成完了メッセージを表示
      this.$store.dispatch('toast/show', '社員データを作成しました');
    },
  },
  computed: {
    memberIsBusy() {
      return this.$store.getters['member/isBusy'];
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
