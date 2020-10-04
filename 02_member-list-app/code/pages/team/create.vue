<template>
  <div>
    <action-btns>
      <action-btn-back />
    </action-btns>

    <team-create-form
      ref="teamCreateForm"
    />
    <button @click="createTeamItem" class="button" :class="{'is-loading': teamIsBusy}">チーム作成</button>
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
    async createTeamItem() {
      const formVal = this.$refs.teamCreateForm.getFormValues();
      const teamId = await this.$store.dispatch('team/createItem', formVal);
      this.$router.push(`/team/${teamId}`);
    }
  },
  computed: {
    teamIsBusy() {
      return this.$store.getters['team/isBusy'];
    }
  },
  beforeRouteLeave(to, from, next) {
    const confirm = window.confirm('ページを離れると、入力した内容が破棄されます。よろしいですか。')
    if (confirm) {
      next();
    } else {
      next(false);
    }
  }
}
</script>

<style lang="scss">
</style>
