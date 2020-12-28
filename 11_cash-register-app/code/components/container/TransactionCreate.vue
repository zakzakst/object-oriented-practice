<template>
  <div>
    <p>合計料金：{{ fee }}</p>
    <p>受け取り：<input v-model="receive" type="number"></p>
    <p>おつり：{{ change }}</p>
    <div class="buttons has-addons">
      <button
        v-for="n in 10"
        :key="n - 1"
        class="button"
        @click="inputReceive(n - 1)"
      >{{ n - 1 }}</button>
      <button
        class="button"
        @click="deleteReceive"
      >&lt;</button>
      <button
        class="button"
        @click="clearReceive"
      >クリア</button>
    </div>
    <div class="columns is-multiline">
      <transaction-createItem
        v-for="item in items"
        :key="item.id"
        :data="item"
        @change="changeSum($event, item)"
      />
    </div>
  </div>
</template>

<script>
import CommodityData from '~/static/data/sample-commodities.json';
import TransactionCreateItem from '~/components/presentational/TransactionCreateItem';

export default {
  data() {
    return {
      items: null,
      receive: 0,
    }
  },
  components: {
    TransactionCreateItem,
  },
  methods: {
    changeSum(sum, item) {
      item.sum = sum;
    },
    inputReceive(num) {
      this.receive = Number(String(this.receive) + num);
    },
    deleteReceive() {
      this.receive = Number(String(this.receive).slice(0, -1));
    },
    clearReceive() {
      this.receive = 0;
    }
  },
  created() {
    const data = CommodityData.commodities.map(commodity => {
      return {
        id: commodity.id,
        name: commodity.name,
        price: commodity.price,
        sum: 0,
      };
    });
    this.items = data;
  },
  computed: {
    fee() {
      let result = 0;
      this.items.forEach(item => {
        result += item.sum;
      });
      return result;
    },
    change() {
      const diff = this.receive - this.fee;
      return diff >= 0 ? diff : 'お金が足りません';
    }
  }
}
</script>

<style lang="scss">
</style>
