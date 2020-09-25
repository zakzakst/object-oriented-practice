<template>
  <div>
    <h1 class="title">メモを更新する</h1>
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
    setItemData() {
      this.id = this.$route.params.id;
      // 対応するメモデータを取得
      const itemData = this.$store.getters['memo/getMemoItem'](this.id);
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
    },
  },
  created() {
    this.setItemData();
  },
}
</script>

<style lang="scss">
</style>
