<template>
  <!-- チームのコレクションビュー -->
  <div v-if="teamItems.length">
    <team-collection-item
      v-for="item in teamItems"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :icon="item.icon"
    />
  </div>
  <div v-else>
    <p v-if="teamLoadState === 'COMPLETED'">チームデータがない</p>
    <p v-if="teamLoadState === 'PROCESS'">ロード中</p>
  </div>
</template>

<script>
import TeamCollectionItem from '~/components/presentational/TeamCollectionItem';

export default {
  components: {
    TeamCollectionItem,
  },
  methods: {
    loadTeamItems() {
      this.$store.dispatch('team/loadItems');
    }
  },
  created() {
    this.loadTeamItems();
  },
  computed: {
    teamItems() {
      return this.$store.getters['team/items'];
    },
    teamLoadState() {
      return this.$store.getters['team/loadState'];
    }
  },
}
</script>

<style lang="scss">
</style>
