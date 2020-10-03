<template>
  <!-- ユーザー認証 -->
  <div>
    <div class="field">
      <label class="label">メールアドレス</label>
      <div class="control has-icons-left">
        <input v-model="authItem.mail" class="input" type="email" placeholder="sample@mail.com">
        <span class="icon is-small is-left">
          <fa :icon="['fas', 'envelope']" />
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">パスワード</label>
      <div class="control has-icons-left">
        <input v-model="authItem.password" class="input" type="password">
        <span class="icon is-small is-left">
          <fa :icon="['fas', 'lock']" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authItem: {},
    }
  },
  methods: {
    getFormValues() {
      return JSON.parse(JSON.stringify(this.authItem));
    }
  },
}
</script>

<style lang="scss">
</style>
