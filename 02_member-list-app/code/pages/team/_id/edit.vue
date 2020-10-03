<template>
  <div>
    <action-btns>
      <action-btn-back />
    </action-btns>

    <team-edit-form
      ref="teamEditForm"
      :id="teamId"
    />
    <button @click="getTeamEditFormValue">チームフォーム情報取得</button>
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import TeamEditForm from '~/components/container/TeamEditForm';

export default {
  data() {
    return {
      teamId: null,
    }
  },
  mixins: [
    actionBtnsMixin,
  ],
  components: {
    TeamEditForm,
  },
  methods: {
    setTeamId() {
      this.teamId = this.$route.params.id;
    },
    getTeamEditFormValue() {
      const value = this.$refs.teamEditForm.getFormValues();
      console.log(value);
    },
  },
  created() {
    this.setTeamId();
  },
}
</script>

<style lang="scss">
</style>
