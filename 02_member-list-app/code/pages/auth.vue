<template>
  <div>
    <auth-form
      ref="authForm"
    />
    <button @click="signUp" class="button" :class="{'is-loading': authIsBusy}">サインアップ</button>
    <button @click="signIn" class="button" :class="{'is-loading': authIsBusy}">サインイン</button>
  </div>
</template>

<script>
import AuthForm from '~/components/container/AuthForm';

export default {
  layout: 'plain',
  components: {
    AuthForm,
  },
  methods: {
    async signIn() {
      const formVal = this.$refs.authForm.getFormValues();
      const uid = await this.$store.dispatch('auth/signIn', formVal);
      // トップページに移動
      this.$router.push('/');
      // 削除完了メッセージを表示
      this.$store.dispatch('toast/show', 'サインインしました');
    },
    async signUp() {
      const formVal = this.$refs.authForm.getFormValues();
      const uid = await this.$store.dispatch('auth/signUp', formVal);
      // トップページに移動
      this.$router.push('/');
      // 削除完了メッセージを表示
      this.$store.dispatch('toast/show', 'サインアップしました');
    }
  },
  computed: {
    authIsBusy() {
      return this.$store.getters['auth/isBusy'];
    }
  }
}
</script>

<style lang="scss">
</style>
