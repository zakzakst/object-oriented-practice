<template>
  <div>
    <h1 class="title">メモを作成する</h1>
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
        <button class="button is-link" @click.prevent="createMemo">メモを作成</button>
      </div>
      <div class="control">
        <button class="button is-link is-light" @click.prevent="formClear">クリア</button>
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
    createMemo() {
      // バリデーションの返り値がfalseなら処理を終了
      if (!this.formValid()) return;
      const memoObj = {
        'title': this.title,
        'text': this.text
      };
      this.$store.dispatch('memo/createMemo', memoObj);
      // TODO:ページ作成後にそのメモのページに遷移させる
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
  }
}
</script>

<style lang="scss">
</style>
