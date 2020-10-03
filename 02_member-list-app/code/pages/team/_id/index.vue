<template>
  <div>
    <action-btns>
      <action-btn-back />
      <action-btn-sign-out @signOutEvent="actionSignOutEvent" />
      <action-btn-edit :to="`/team/${teamId}/edit`" />
      <action-btn-delete @deleteEvent="deleteTeamItem" />
    </action-btns>

    <team-single-item
      v-if="teamItem"
      :name="teamItem.name"
      :introduction="teamItem.introduction"
      :icon="teamItem.icon"
    />
  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import TeamSingleItem from '~/components/presentational/TeamSingleItem';

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
    TeamSingleItem,
  },
  methods: {
    setTeamId() {
      this.teamId = this.$route.params.id;
    },
    async deleteTeamItem() {
      const deleteItem = await this.$store.dispatch('team/deleteItem', this.teamId);
      this.$router.push(`/team`);
    },
  },
  created() {
    this.setTeamId();
  },
  computed: {
    teamItem() {
      return this.$store.getters['team/findItemById'](this.teamId);
    },
  },
}
</script>

<style lang="scss">
</style>
