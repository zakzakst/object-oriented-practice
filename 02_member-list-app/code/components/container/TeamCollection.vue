<template>
  <!-- チームのコレクションビュー -->
  <div v-if="teamItems.length" class="columns is-mobile is-multiline">
    <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop"
      v-for="item in teamItems"
      :key="item.id"
    >
      <team-collection-item
        :id="item.id"
        :name="item.name"
        :icon="item.icon"
      />
    </div>
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
