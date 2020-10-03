<template>
  <div>
    <action-btns>
      <action-btn-back />
      <action-btn-create to="/member/create" />
      <action-btn-sign-out @signOutEvent="actionSignOutEvent" />
    </action-btns>

    <member-collection />
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import MemberCollection from '~/components/container/MemberCollection';

export default {
  mixins: [
    actionBtnsMixin,
  ],
  components: {
    MemberCollection,
  },
}
</script>

<style lang="scss">
</style>
