<template>
  <div>
    <action-btns>
      <action-btn-back />
    </action-btns>

    <member-edit-form
      ref="memberEditForm"
      :id="uid"
    />
    <button @click="updateMemberItem" class="button" :class="{'is-loading': memberIsBusy}">メンバー編集</button>
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
      this.$router.push(`/member/${updateItem.id}`);
    },
  },
  created() {
    this.setUserId();
  },
  computed: {
    memberIsBusy() {
      return this.$store.getters['member/isBusy'];
    }
  }
}
</script>

<style lang="scss">
</style>
