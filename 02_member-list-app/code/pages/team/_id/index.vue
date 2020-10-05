<template>
  <div>
    <action-btns>
      <action-btn-back />
      <action-btn-sign-out @signOutEvent="actionSignOutEvent" />
      <action-btn-edit :to="`/team/${teamId}/edit`" />
      <action-btn-delete @deleteEvent="deleteTeamItem" />
    </action-btns>

    <div class="section">
      <div class="columns">
        <div class="column is-one-third-tablet">
          <team-single-item
            v-if="teamItem"
            :name="teamItem.name"
            :introduction="teamItem.introduction"
            :icon="teamItem.icon"
          />
        </div>
        <div class="column is-two-thirds-tablet">
          <member-collection
            :teamFilter="teamId"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import actionBtnsMixin from '~/mixins/actionBtns';
import TeamSingleItem from '~/components/presentational/TeamSingleItem';
import MemberCollection from '~/components/container/MemberCollection';

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
    MemberCollection,
  },
  methods: {
    setTeamId() {
      this.teamId = this.$route.params.id;
    },
    async deleteTeamItem() {
      const confirm = window.confirm('こちらのチームデータを削除します。よろしいですか。')
      if (confirm) {
        const deleteItem = await this.$store.dispatch('team/deleteItem', this.teamId);
        // チーム一覧ページに移動
        this.$router.push(`/team`);
        // 削除完了メッセージを表示
        this.$store.dispatch('toast/show', 'チームデータを削除しました');
      }
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
