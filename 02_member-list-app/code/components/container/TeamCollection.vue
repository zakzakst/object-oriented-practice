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
    <p v-if="teamLoadState === 'COMPLETED'" class="has-text-centered">現在登録されているチームはありません</p>
    <p v-if="teamLoadState === 'PROCESS'" class="has-text-centered">
      <loading-icon />
    </p>
  </div>
</template>

<script>
import TeamCollectionItem from '~/components/presentational/TeamCollectionItem';
import LoadingIcon from '~/components/presentational/LoadingIcon';

export default {
  components: {
    TeamCollectionItem,
    LoadingIcon,
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
