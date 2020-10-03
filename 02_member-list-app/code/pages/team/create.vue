<template>
  <div>
    <action-btns>
      <action-btn-back />
    </action-btns>

    <team-create-form
      ref="teamCreateForm"
    />
    <button @click="getTeamCreateFormValue">チーム作成フォーム情報取得</button>
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import TeamCreateForm from '~/components/container/TeamCreateForm';

export default {
  mixins: [
    actionBtnsMixin,
  ],
  components: {
    TeamCreateForm,
  },
  methods: {
    getTeamCreateFormValue() {
      const value = this.$refs.teamCreateForm.getFormValues();
      console.log(value);
    },
  },
}
</script>

<style lang="scss">
</style>
