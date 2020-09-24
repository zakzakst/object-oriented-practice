<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <p>{{ text }}</p>
    <div class="memo-item-btn buttons">
      <nuxt-link :to="`/edit/${$route.params.id}`" class="button is-light">
        <span class="icon">
          <fa :icon="['fas', 'pen']" class="fa-lg" />
        </span>
      </nuxt-link>
      <button class="button is-light" @click.prevent="deleteMemo">
        <span class="icon">
          <fa :icon="['fas', 'trash']" class="fa-lg" />
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    setItemData() {
      this.id = this.$route.params.id;
      // 対応するメモデータを取得
      const itemData = this.$store.getters['memo/getMemoItem'](this.id);
      // TODO:読込前の状態でデータを取りにいった場合の処理
      if(itemData) {
        this.title = itemData.title;
        this.text = itemData.text;
      }
    },
    deleteMemo() {
      this.$store.dispatch('memo/deleteMemo', this.id);
      // TODO:削除後のページ遷移のタイミング・挙動検討
      this.$router.push('/');
    }
  },
  created() {
    this.setItemData();
    // TODO:マークダウンへの対応
  },
}
</script>

<style lang="scss">
.memo-item-btn {
  position: fixed;
  display: flex;
  top: 8px;
  right: 8px;
}
</style>
