<template>
  <div>
    <action-btns>
      <action-btn-back />
      <action-btn-sign-out @signOutEvent="actionSignOutEvent" />
    </action-btns>

    エラーページ
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
export default {
  name: 'layout-error',
  mixins: [
    actionBtnsMixin,
  ],
}
</script>

<style lang="scss">
</style>
