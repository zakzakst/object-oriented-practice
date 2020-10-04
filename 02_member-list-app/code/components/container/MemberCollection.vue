<template>
  <!-- 社員のコレクションビュー -->
  <div v-if="memberItems.length">
    <member-collection-item
      v-for="item in memberItems"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :onlineStatus="item.onlineStatus"
      :teamName="item.teamName"
    />
  </div>
  <div v-else>
    <p v-if="memberLoadState === 'COMPLETED'">メンバーデータがない</p>
    <p v-if="memberLoadState === 'PROCESS'">ロード中</p>
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
  methods: {
    loadMemberItems() {
      this.$store.dispatch('member/loadItems');
    }
  },
  created() {
    this.loadMemberItems();
  },
  computed: {
    memberItems() {
      return this.$store.getters['member/filterItemsByTeamId'](this.teamFilter);
    },
    memberLoadState() {
      return this.$store.getters['member/loadState'];
    }
  },
}
</script>

<style lang="scss">
</style>
