<template>
  <div class="container">
    <!-- <member-collection /> -->

    <!-- <team-collection /> -->

    <!-- <member-single-item
      v-if="memberItem"
      :name="memberItem.name"
      :tel="memberItem.tel"
      :mail="memberItem.mail"
      :messenger="memberItem.messenger"
      :onlineStatus="memberItem.onlineStatus"
      :teamId="memberItem.teamId"
      :teamName="memberItem.teamName"
      :teamIcon="memberItem.teamIcon"
    /> -->
    <!-- <member-single-item
      name="山田太郎"
      tel="000-0000-0001"
      mail="tyamada@mail.com"
      messenger="@yamadataro001"
      onlineStatus
      teamId="team01"
      teamName="エンジニアリング"
      teamIcon="icon-engineering.png"
    /> -->

    <team-single-item
      v-if="teamItem"
      :name="teamItem.name"
      :introduction="teamItem.introduction"
      :icon="teamItem.icon"
    />
    <!-- <team-single-item
      name="エンジニアリング"
      introduction="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
      icon="icon-engineering.png"
    /> -->
    <member-collection
      :teamFilter="teamId"
    />
  </div>
</template>

<script>
import MemberCollection from '~/components/container/MemberCollection';
import TeamCollection from '~/components/container/TeamCollection';
import MemberSingleItem from '~/components/presentational/MemberSingleItem';
import TeamSingleItem from '~/components/presentational/TeamSingleItem';

export default {
  data() {
    return {
      uid: 'user02',
      teamId: 'team02',
    }
  },
  components: {
    MemberCollection,
    TeamCollection,
    MemberSingleItem,
    TeamSingleItem,
  },
  computed: {
    memberItem() {
      return this.$store.getters['member/findMemberItemById'](this.uid);
    },
    teamItem() {
      return this.$store.getters['team/findTeamItemById'](this.teamId);
    }
  },
}
</script>

<style lang="scss">
</style>
