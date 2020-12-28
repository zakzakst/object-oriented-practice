<template>
  <div>
    <p>{{ id }}</p>
    <p>日付：{{ content.date }}</p>
    <ul>
      <transaction-single-item
        v-for="item in content.items"
        :key="item.key"
        :data="getCommodityData(item.id)"
        :num="item.num"
      />
    </ul>
    <p>合計金額：{{ content.sum }}円</p>
  </div>
</template>

<script>
import TransactionData from '~/static/data/sample-transactions.json';
import CommodityData from '~/static/data/sample-commodities.json';
import TransactionSingleItem from '~/components/presentational/TransactionSingleItem';

export default {
  data() {
    return {
      id: 't001',
      transactions: TransactionData.transactions,
      commodities: CommodityData.commodities,
      // content: {
      //   'id': 't001',
      //   'date': '2020/12/23',
      //   'items': [
      //     {
      //       'id': 'i001',
      //       'num': 2
      //     },
      //     {
      //       'id': 'i003',
      //       'num': 1
      //     }
      //   ],
      //   'sum': 1100
      // }
    }
  },
  components: {
    TransactionSingleItem,
  },
  computed: {
    content() {
      const result = this.transactions.find(transaction => {
        return transaction.id === this.id;
      });
      return result;
    },
  },
  methods: {
    getCommodityData(id) {
      const result = this.commodities.find(commodity => {
        return commodity.id === id;
      });
      return result;
    },
  }
}
</script>

<style lang="scss">
</style>
