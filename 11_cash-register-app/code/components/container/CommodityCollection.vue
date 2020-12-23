<template>
  <div class="columns is-multiline">
    <commodity-collection-item
      v-for="item in items"
      :key="item.id"
      :data="item"
    />
  </div>
</template>

<script>
import CommodityData from '~/static/data/sample-commodities.json';
import CommodityCollectionItem from '~/components/presentational/CommodityCollectionItem';

export default {
  data() {
    return {
      items: CommodityData.commodities,
    }
  },
  components: {
    CommodityCollectionItem,
  }
}
</script>

<style lang="scss">
</style>
