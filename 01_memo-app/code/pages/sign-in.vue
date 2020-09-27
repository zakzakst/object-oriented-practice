<template>
  <div class="sign-in">
    <h1 class="title is-4 has-text-centered">サインイン・サインアップ</h1>
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
            <input v-model="mail" :class="{'is-danger': mailValid}" class="input" type="email" placeholder="sample@mail.com" @input="formInputCheck">
            <span class="icon is-small is-left">
              <fa :icon="['fas', 'envelope']" />
            </span>
          </div>
          <p v-if="mailValid" class="help is-danger">メールアドレスを入力してください</p>
        </div>
        <div class="field">
          <label class="label">パスワード</label>
          <div class="control has-icons-left">
            <input v-model="password" :class="{'is-danger': passwordValid}" class="input" type="password" placeholder="パスワードを入力してください" @input="formInputCheck">
            <span class="icon is-small is-left">
              <fa :icon="['fas', 'lock']" />
            </span>
          </div>
          <p v-if="passwordValid" class="help is-danger">パスワードを入力してください</p>
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
      activeContent: 'signIn',
      mail: '',
      password: '',
      mailValid: false,
      passwordValid: false
    }
  },
  methods: {
    changeActiveContent(name) {
      this.activeContent = name;
    },
    signIn() {
      // バリデーションの返り値がfalseなら処理を終了
      if (!this.formValid()) return;
      this.$store.dispatch('auth/signIn', {
        mail: this.mail,
        password: this.password
      });
    },
    signUp() {
      // バリデーションの返り値がfalseなら処理を終了
      if (!this.formValid()) return;
      this.$store.dispatch('auth/signUp', {
        mail: this.mail,
        password: this.password
      });
    },
    formValid() {
      if (!this.mail || !this.password) {
        console.log('入力欄が空白');
        this.mailValid = this.mail.length > 0 ? false : true;
        this.passwordValid = this.password.length > 0 ? false : true;
        return false;
      }
      return true;
    },
    formInputCheck(e) {
      if(this.mailValid) {
        this.mailValid = this.mail.length > 0 ? false : true;
      }
      if(this.passwordValid) {
        this.passwordValid = this.password.length > 0 ? false : true;
      }
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
