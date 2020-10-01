<template>
  <!-- チームのコレクションビュー -->
  <div>
    <team-collection-item
      v-for="item in teamItems"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :icon="item.icon"
    />
    <!-- <team-collection-item
      id="team01"
      name="エンジニアリング"
      icon="icon-engineering.png"
    /> -->
  </div>
</template>

<script>
import TeamCollectionItem from '~/components/presentational/TeamCollectionItem';

export default {
  components: {
    TeamCollectionItem,
  },
  computed: {
    teamItems() {
      return this.$store.getters['team/teamItems'];
    }
  },
}
</script>

<style lang="scss">
</style>
