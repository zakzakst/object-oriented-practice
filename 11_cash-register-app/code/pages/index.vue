<template>
  <div>
    <transaction-single />
    <!-- <transaction-collection /> -->
    <!-- <commodity-collection /> -->
  </div>
</template>

<script>
import TransactionSingle from '~/components/container/TransactionSingle';
import TransactionCollection from '~/components/container/TransactionCollection';
import CommodityCollection from '~/components/container/CommodityCollection';

export default {
  components: {
    TransactionSingle,
    TransactionCollection,
    CommodityCollection,
  }
}
</script>

<style lang="scss">
</style>
