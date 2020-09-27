import fireApp from '@/plugins/firebase'

export const state = () => ({
  id: null,
  signInBusy: false,
})

export const mutations = {
  setId(state, payload) {
    state.id = payload;
  },
  setSignInBusy(state, payload) {
    state.signInBusy = payload;
  }
}

export const actions = {
  async signUp({commit}, payload) {
    commit('setSignInBusy', true);
    // firebaseにユーザー登録
    const res = await fireApp.auth().createUserWithEmailAndPassword(payload.mail, payload.password);
    // 登録したユーザーIDをstateにセット
    commit('setId', res.user.uid);
    commit('setSignInBusy', false);
    // トップページに移動
    this.$router.push('/');
  },
  async signIn({commit}, payload) {
    commit('setSignInBusy', true);
    // サインイン実行
    const res = await fireApp.auth().signInWithEmailAndPassword(payload.mail, payload.password);
    // サインインしたユーザーIDをstateにセット
    commit('setId', res.user.uid);
    commit('setSignInBusy', false);
    // トップページに移動
    this.$router.push('/');
  },
  async signOut({commit}) {
    // サインアウト実行
    await fireApp.auth().signOut();
    // サインアウト完了後、サインインページに移動
    this.$router.push('/sign-in');
    commit('setId', null);
  },
  setId({commit}) {
    fireApp.auth().onAuthStateChanged(user => {
      if(user) {
        commit('setId', user.uid);
        console.log('ユーザーIDセット', user.uid);
      } else {
        // this.$router.push('/sign-in');
      }
    });
  }
}

export const getters = {
  id(state) {
    return state.id;
  },
  signInBusy(state) {
    return state.signInBusy;
  }
}
