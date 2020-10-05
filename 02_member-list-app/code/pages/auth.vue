<template>
  <div class="auth-page">
    <h1 class="title is-4 has-text-centered">サインイン・サインアップ</h1>
    <div class="box">
      <div class="tabs is-fullwidth">
        <ul>
          <li :class="{'is-active': activeAuth === 'signIn'}">
            <a @click.prevent="changeActiveAuth('signIn')">
              <span class="icon">
                <fa :icon="['fas', 'user']" />
              </span>
              <span>サインイン</span>
            </a>
          </li>
          <li :class="{'is-active': activeAuth === 'signUp'}">
            <a @click.prevent="changeActiveAuth('signUp')">
              <span class="icon">
                <fa :icon="['fas', 'edit']" />
              </span>
              <span>サインアップ</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <auth-form
          ref="authForm"
        />
        <div class="buttons is-centered mt-5">
          <button v-show="activeAuth === 'signIn'" @click="signIn" class="button is-link" :class="{'is-loading': authIsBusy}">サインイン</button>
          <button v-show="activeAuth === 'signUp'" @click="signUp" class="button is-link" :class="{'is-loading': authIsBusy}">サインアップ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthForm from '~/components/container/AuthForm';

export default {
  layout: 'plain',
  data() {
    return {
      activeAuth: 'signIn'
    }
  },
  components: {
    AuthForm,
  },
  methods: {
    async signIn() {
      const formVal = this.$refs.authForm.getFormValues();
      const uid = await this.$store.dispatch('auth/signIn', formVal);
      // トップページに移動
      this.$router.push('/member');
      // 削除完了メッセージを表示
      this.$store.dispatch('toast/show', 'サインインしました');
    },
    async signUp() {
      const formVal = this.$refs.authForm.getFormValues();
      const uid = await this.$store.dispatch('auth/signUp', formVal);
      // トップページに移動
      this.$router.push('/member');
      // 削除完了メッセージを表示
      this.$store.dispatch('toast/show', 'サインアップしました');
    },
    changeActiveAuth(name) {
      this.activeAuth = name;
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
.auth-page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
