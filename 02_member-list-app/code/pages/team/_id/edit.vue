<template>
  <div>
    <action-btns>
      <action-btn-back />
    </action-btns>

    <team-edit-form
      ref="teamEditForm"
      :id="teamId"
    />
    <button @click="updateTeamItem" class="button" :class="{'is-loading': teamIsBusy}">チーム編集</button>
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
    async updateTeamItem() {
      const formVal = this.$refs.teamEditForm.getFormValues();
      const updateItem = await this.$store.dispatch('team/updateItem', formVal);
      this.$router.push(`/team/${updateItem.id}`);
    },
  },
  created() {
    this.setTeamId();
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
