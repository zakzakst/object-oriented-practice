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
          <member-edit-form
            ref="memberEditForm"
            :id="uid"
          />
          <button @click="updateMemberItem" class="button is-link mt-6" :class="{'is-loading': memberIsBusy}">メンバー編集</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import MemberEditForm from '~/components/container/MemberEditForm';

export default {
  data() {
    return {
      uid: null,
    }
  },
  mixins: [
    actionBtnsMixin,
  ],
  components: {
    MemberEditForm,
  },
  methods: {
    setUserId() {
      this.uid = this.$route.params.id;
    },
    async updateMemberItem() {
      const formVal = this.$refs.memberEditForm.getFormValues();
      const updateItem = await this.$store.dispatch('member/updateItem', formVal);
      // 編集した社員ページに移動
      this.$router.push({
        path: `/member/${updateItem.id}`,
        query: {confirm: 'none'}
      });
      // 編集完了メッセージを表示
      this.$store.dispatch('toast/show', '社員データを編集しました');
    },
  },
  created() {
    this.setUserId();
  },
  computed: {
    memberIsBusy() {
      return this.$store.getters['member/isBusy'];
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
