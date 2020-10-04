<template>
  <div>
    <action-btns>
      <action-btn-back />
      <action-btn-sign-out @signOutEvent="actionSignOutEvent" />
      <action-btn-edit :to="`/member/${uid}/edit`" />
      <action-btn-delete @deleteEvent="deleteMemberItem" />
    </action-btns>

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
        this.$router.push(`/member`);
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
