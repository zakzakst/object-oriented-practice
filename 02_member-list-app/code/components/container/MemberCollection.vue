<template>
  <!-- 社員のコレクションビュー -->
  <div>
    <member-collection-item
      v-for="item in memberItems"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :onlineStatus="item.onlineStatus"
      :teamName="item.teamName"
    />
    <!-- <member-collection-item
      id="user01"
      name="山田太郎"
      onlineStatus
      teamName="エンジニアリング"
    /> -->
  </div>
</template>

<script>
import MemberCollectionItem from '~/components/presentational/MemberCollectionItem';

export default {
  props: {
    teamFilter: {type: String, default: ''}
  },
  components: {
    MemberCollectionItem,
  },
  computed: {
    memberItems() {
      return this.$store.getters['member/filterMemberItemByTeamId'](this.teamFilter);
    }
  },
}
</script>

<style lang="scss">
</style>
