<template>
  <table class="table is-fullwidth is-striped">
    <thead>
      <tr>
        <th>日付</th>
        <th>合計金額</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <transaction-collection-item
        v-for="item in items"
        :key="item.id"
        :data="item"
      />
    </tbody>
  </table>
</template>

<script>
import TransactionData from '~/static/data/sample-transactions.json';
import TransactionCollectionItem from '~/components/presentational/TransactionCollectionItem';

export default {
  data() {
    return {
      items: TransactionData.transactions,
    }
  },
  components: {
    TransactionCollectionItem,
  }
}
</script>

<style lang="scss">
</style>
