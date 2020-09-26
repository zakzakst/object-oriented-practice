<template>
  <div>
    <div class="memo-content-btn buttons">
      <nuxt-link to="/" class="button is-light">
        <span class="icon">
          <fa :icon="['fas', 'chevron-left']" class="fa-lg" />
        </span>
      </nuxt-link>
    </div>
    <h1 class="title">メモを作成する</h1>
    <div class="field">
      <label class="label">タイトル</label>
      <div class="control">
        <input v-model="title" :class="{'is-danger': titleValid}" class="input" type="text" placeholder="タイトル" @input="formInputCheck">
      </div>
      <p v-if="titleValid" class="help is-danger">タイトルを入力してください</p>
    </div>
    <div class="field">
      <label class="label">内容</label>
      <div class="control">
        <textarea v-model="text" :class="{'is-danger': textValid}" class="textarea" placeholder="内容" @input="formInputCheck"></textarea>
      </div>
      <p v-if="textValid" class="help is-danger">内容を入力してください</p>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click.prevent="createMemo">メモを作成</button>
      </div>
      <div class="control">
        <button class="button is-light" @click.prevent="formClear">クリア</button>
      </div>
    </div>
  </div>
</template>

<script>
import formMixin from '~/mixins/formMixin';

export default {
  data() {
    return {
      title: '',
      text: '',
      titleValid: false,
      textValid: false
    }
  },
  mixins: [
    formMixin,
  ],
  methods: {
    createMemo() {
      // バリデーションの返り値がfalseなら処理を終了
      if (!this.formValid()) return;
      const memoObj = {
        'title': this.title,
        'text': this.text
      };
      this.$store.dispatch('memo/createMemo', memoObj);
    },
  }
}
</script>

<style lang="scss">
</style>
