<template>
  <div>
    <transaction-collection />
    <!-- <commodity-collection /> -->
  </div>
</template>

<script>
import TransactionCollection from '~/components/container/TransactionCollection';
import CommodityCollection from '~/components/container/CommodityCollection';

export default {
  components: {
    TransactionCollection,
    CommodityCollection,
  }
}
</script>

<style lang="scss">
</style>
