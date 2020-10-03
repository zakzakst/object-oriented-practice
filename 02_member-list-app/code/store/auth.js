import fireApp from '@/plugins/firebase'

export const state = () => ({
  id: null,
  isBusy: false,
})

export const mutations = {
  setId(state, payload) {
    state.id = payload;
  },
  setIsBusy(state, payload) {
    state.isBusy = payload;
  }
}

export const actions = {
  async signUp({commit}, payload) {
    // 新規ユーザー登録開始
    console.log('新規ユーザー登録開始');
    commit('setIsBusy', true);
    // firebaseにユーザー登録
    const res = await fireApp.auth().createUserWithEmailAndPassword(payload.mail, payload.password);
    // 登録したユーザーIDをstateにセット
    commit('setId', res.user.uid);
    // 新規ユーザー登録完了
    console.log('新規ユーザー登録完了');
    commit('setIsBusy', false);
    return res.user.uid;
  },

  async signIn({commit}, payload) {
    // ユーザー認証開始
    console.log('ユーザー認証開始');
    commit('setIsBusy', true);
    // firebaseでユーザー認証
    const res = await fireApp.auth().signInWithEmailAndPassword(payload.mail, payload.password);
    // サインインしたユーザーIDをstateにセット
    commit('setId', res.user.uid);
    // ユーザー認証完了
    console.log('ユーザー認証完了');
    commit('setIsBusy', false);
    return res.user.uid;
  },

  async signOut({commit}) {
    // サインアウト開始
    console.log('サインアウト開始');
    commit('setIsBusy', true);
    // firebaseでサインアウト
    await fireApp.auth().signOut();
    // stateのユーザーIDをクリア
    commit('setId', null);
    // サインアウト完了
    console.log('サインアウト完了');
    commit('setIsBusy', false);
    return true;
  },

  authCheck({commit}) {
    return new Promise(resolve => {
      // ユーザー認証状況チェック開始
      console.log('ユーザー認証状況チェック開始');
      commit('setIsBusy', true);
      // firebaseでチェック
      fireApp.auth().onAuthStateChanged(user => {
        if(user) {
          // ■ 認証されている場合
          // ユーザーIDをstateにセット
          commit('setId', user.uid);
          // ユーザー認証状況チェック完了
          console.log('ユーザー認証状況チェック完了：認証されている');
          commit('setIsBusy', false);
          resolve(user.uid);
        } else {
          // ■ 認証されていない場合
          // ユーザー認証状況チェック完了
          console.log('ユーザー認証状況チェック完了：認証されていない');
          commit('setIsBusy', false);
          resolve(false);
        }
      });
    });
  }
}

export const getters = {
  id(state) {
    return state.id;
  },
  isBusy(state) {
    return state.isBusy;
  }
}
