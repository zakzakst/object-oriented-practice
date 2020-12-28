<template>
  <div>
    <!-- <transaction-single /> -->
    <!-- <transaction-collection /> -->
    <!-- <commodity-collection /> -->
    <transaction-create />
  </div>
</template>

<script>
import TransactionSingle from '~/components/container/TransactionSingle';
import TransactionCollection from '~/components/container/TransactionCollection';
import CommodityCollection from '~/components/container/CommodityCollection';
import TransactionCreate from '~/components/container/TransactionCreate';

export default {
  components: {
    TransactionSingle,
    TransactionCollection,
    CommodityCollection,
    TransactionCreate,
  }
}
</script>

<style lang="scss">
</style>
