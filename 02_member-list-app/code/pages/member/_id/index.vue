<template>
  <div>
    <action-btns>
      <template #left>
        <action-btn-back />
        <action-btn-sign-out @signOutEvent="actionSignOutEvent" />
      </template>
      <template #right>
        <action-btn-edit :to="`/member/${uid}/edit`" />
        <action-btn-delete @deleteEvent="deleteMemberItem" />
      </template>
    </action-btns>

    <div class="section">
      <div class="columns is-centered">
        <div class="column is-two-thirds-tablet is-half-desktop">
          <member-single-item
            v-if="memberItem"
            :name="memberItem.name"
            :tel="memberItem.tel"
            :mail="memberItem.mail"
            :messenger="memberItem.messenger"
            :onlineStatus="memberItem.onlineStatus"
            :teamId="memberItem.teamId"
            :teamName="memberItem.teamName"
            :teamIcon="memberItem.teamIcon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import MemberSingleItem from '~/components/presentational/MemberSingleItem';

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
    MemberSingleItem,
  },
  methods: {
    setUserId() {
      this.uid = this.$route.params.id;
    },
    async deleteMemberItem() {
      const confirm = window.confirm('こちらの社員データを削除します。よろしいですか。')
      if (confirm) {
        const deleteItem = await this.$store.dispatch('member/deleteItem', this.uid);
        // 社員一覧ページに移動
        this.$router.push(`/member`);
        // 削除完了メッセージを表示
        this.$store.dispatch('toast/show', '社員データを削除しました');
      }
    }
  },
  created() {
    this.setUserId();
  },
  computed: {
    memberItem() {
      return this.$store.getters['member/findItemById'](this.uid);
    },
  },
}
</script>

<style lang="scss">
</style>
