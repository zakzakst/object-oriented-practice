<template>
  <div>
    <auth-form
      ref="authForm"
    />
    <button @click="getAuthFormValue">ユーザー認証フォーム情報取得</button>
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
    getAuthFormValue() {
      const value = this.$refs.authForm.getFormValues();
      console.log(value);
    },
  }
}
</script>

<style lang="scss">
</style>
