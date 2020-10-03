<template>
  <div>
    <action-btns>
      <action-btn-back />
      <action-btn-create to="/team/create" />
      <action-btn-sign-out @signOutEvent="actionSignOutEvent" />
    </action-btns>

    <team-collection />
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import TeamCollection from '~/components/container/TeamCollection';

export default {
  mixins: [
    actionBtnsMixin,
  ],
  components: {
    TeamCollection,
  },
}
</script>

<style lang="scss">
</style>
