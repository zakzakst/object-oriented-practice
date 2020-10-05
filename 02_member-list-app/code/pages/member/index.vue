<template>
  <div>
    <action-btns>
      <template #left>
        <action-btn-back />
        <action-btn-sign-out @signOutEvent="actionSignOutEvent" />
      </template>
      <template #right>
        <action-btn-create to="/member/create" />
      </template>
    </action-btns>

    <div class="section">
      <div class="columns is-centered">
        <div class="column is-two-thirds-tablet is-half-desktop">
          <member-collection />
        </div>
      </div>
    </div>
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
