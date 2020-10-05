<template>
  <div>
    <action-btns>
      <template #left>
        <action-btn-back />
        <action-btn-sign-out @signOutEvent="actionSignOutEvent" />
      </template>
      <template #right>
        <action-btn-create to="/team/create" />
      </template>
    </action-btns>

    <div class="section">
      <team-collection />
    </div>
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
