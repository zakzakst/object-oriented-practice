<template>
  <div class="sign-in">
    <h1 class="title is-4 has-text-centered">サインイン</h1>
    <div class="box">
      <div class="tabs is-fullwidth">
        <ul>
          <li :class="[activeContent === 'signIn' ? 'is-active' : '']">
            <a @click.prevent="changeActiveContent('signIn')">
              <span class="icon">
                <fa :icon="['fas', 'user']" />
              </span>
              <span>サインイン</span>
            </a>
          </li>
          <li :class="[activeContent === 'signUp' ? 'is-active' : '']">
            <a @click.prevent="changeActiveContent('signUp')">
              <span class="icon">
                <fa :icon="['fas', 'edit']" />
              </span>
              <span>サインアップ</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div class="field">
          <label class="label">メールアドレス</label>
          <div class="control has-icons-left">
            <input v-model="mail" class="input is-danger" type="email" placeholder="sample@mail.com">
            <span class="icon is-small is-left">
              <fa :icon="['fas', 'envelope']" />
            </span>
          </div>
          <p class="help is-danger">必須項目です</p>
        </div>
        <div class="field">
          <label class="label">パスワード</label>
          <div class="control has-icons-left">
            <input v-model="password" class="input" type="password" placeholder="パスワードを入力してください">
            <span class="icon is-small is-left">
              <fa :icon="['fas', 'lock']" />
            </span>
          </div>
          <p class="help">必須項目です</p>
        </div>
        <div class="field is-grouped is-grouped-centered mt-5">
          <p v-show="activeContent === 'signIn'" class="control">
            <button class="button is-link" @click="signIn">サインイン</button>
          </p>
          <p v-show="activeContent === 'signUp'" class="control">
            <button class="button is-link" @click="signUp">サインアップ</button>
          </p>
          <p class="control">
            <button class="button is-light" @click="formClear">クリア</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'plain',
  data() {
    return {
      activeContent: 'signUp',
      mail: '',
      password: ''
    }
  },
  methods: {
    changeActiveContent(name) {
      this.activeContent = name;
    },
    signIn() {
      this.$router.push('/');
    },
    signUp() {
      this.$router.push('/');
    },
    formClear() {
      this.mail = '';
      this.password = '';
    }
  }
}
</script>

<style lang="scss">
.sign-in {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
