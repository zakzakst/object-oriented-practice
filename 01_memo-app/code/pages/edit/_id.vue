<template>
  <div>
    <h1 class="title">メモを更新する</h1>
    <div class="field">
      <label class="label">タイトル</label>
      <div class="control">
        <input v-model="title" class="input" type="text" placeholder="タイトル">
      </div>
    </div>
    <div class="field">
      <label class="label">内容</label>
      <div class="control">
        <textarea v-model="text" class="textarea" placeholder="内容"></textarea>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click.prevent="updateMemo">メモを更新</button>
      </div>
      <div class="control">
        <button class="button is-link is-light" @click.prevent="formClear">クリア</button>
      </div>
      <div class="control">
        <nuxt-link :to="`/item/${$route.params.id}`" class="button is-link is-light">メモに戻る</nuxt-link>
      </div>
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
    updateMemo() {
      // バリデーションの返り値がfalseなら処理を終了
      if (!this.formValid()) return;
      const memoObj = {
        'id': this.id,
        'title': this.title,
        'text': this.text
      };
      this.$store.dispatch('memo/updateMemo', memoObj);
      // TODO:メモ更新後にそのメモのページに遷移させる
    },
    formValid() {
      // TODO:バリデーションの実装
      if (!this.title || !this.text) {
        console.log('入力欄が空白');
        return false;
      }
      return true;
    },
    formClear() {
      this.title = '';
      this.text = '';
    }
  },
  created() {
    this.setItemData();
    // TODO:マークダウンへの対応
  },
}
</script>

<style lang="scss">
</style>
