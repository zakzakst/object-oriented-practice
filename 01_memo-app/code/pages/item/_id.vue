<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <div class="memo-item-date mb-4">
      <div class="tags has-addons">
        <span class="tag is-dark">作成日</span>
        <span class="tag is-light">{{ dateCreate }}</span>
      </div>
      <div class="tags has-addons">
        <span class="tag is-dark">最終更新日</span>
        <span class="tag is-light">{{ dateUpdated }}</span>
      </div>
    </div>
    <p class="content" v-html="$md.render(text)"></p>
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
      text: '',
      dateCreate: null,
      dateUpdated: null,
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
        const dateCreateObj = new Date(itemData.dateCreate);
        this.dateCreate = dateCreateObj.toLocaleDateString();
        const dateUpdatedObj = new Date(itemData.dateUpdated);
        this.dateUpdated = dateUpdatedObj.toLocaleDateString();
      }
    },
    deleteMemo() {
      this.$store.dispatch('memo/deleteMemo', this.id);
    }
  },
  created() {
    this.setItemData();
  },
}
</script>

<style lang="scss">
.memo-item-date {
  display: flex;
  & > .tags {
    margin-bottom: 0;
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.memo-item-btn {
  position: fixed;
  display: flex;
  top: 8px;
  right: 8px;
}
</style>
