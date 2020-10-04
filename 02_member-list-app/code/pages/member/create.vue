<template>
  <div>
    <action-btns>
      <action-btn-back />
    </action-btns>

    <member-create-form
      ref="memberCreateForm"
    />
    <button @click="createMemberItem" class="button" :class="{'is-loading': memberIsBusy}">メンバー作成</button>
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
      this.$router.push(`/member/${uid}`);
    },
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
