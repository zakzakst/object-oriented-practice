import fireApp from '@/plugins/firebase'

export const state = () => ({
  memoList: []
})

export const mutations = {
  setMemo(state, payload) {
    state.memoList.push(payload);
  },
  deleteMemo(state, payload) {
    state.memoList.splice(payload, 1);
  },
  updateMemo(state, payload) {
    const list = state.memoList;
    // IDに対応するデータを取得
    const target = list.find(memo => {
      return memo.id === payload.id;
    });
    // 内容を変更
    target.title = payload.title;
    target.text = payload.text;
    target.dateUpdated = payload.dateUpdated;
  },
  clearMemoList(state) {
    state.memoList = [];
  }
}

export const actions = {
  async createMemo({dispatch, rootState}, payload) {
    // ユーザーIDがない場合は処理を終了
    const userId = rootState.auth.id;
    if(!userId) return;
    // 作成日・更新日を設定
    const dateNum = Date.now() + '';
    payload.dateCreate = dateNum;
    payload.dateUpdated = dateNum;
    // firebaseにデータ登録
    const res = await fireApp.database().ref(`01_memo-app/${userId}`).push(payload);
    // 登録したitemページに遷移
    this.$router.push(`/item/${res.key}`);
    // 登録完了メッセージを表示
    dispatch('toast/setMessage', 'メモを登録しました', { root: true });
  },
  loadMemoList({commit, rootState}) {
    // ユーザーIDがない場合は処理を終了
    const userId = rootState.auth.id;
    if(!userId) return;
    fireApp.database().ref(`01_memo-app/${userId}`).on('child_added', snapshot => {
      // 読み込んだデータから項目セット用のオブジェクトを作成
      const memoObj = snapshot.val();
      memoObj.id = snapshot.key;
      // stateにデータをセット
      commit('setMemo', memoObj);
      console.log('項目セット');
    });
  },
  deleteMemo({commit, state, dispatch, rootState}, payload) {
    // ユーザーIDがない場合は処理を終了
    const userId = rootState.auth.id;
    if(!userId) return;
    // firebaseのデータを削除
   fireApp.database().ref(`01_memo-app/${userId}/${payload}`).remove(() => {
      // IDに対応するデータを取得
      const list = state.memoList;
      const target = list.find(memo => {
        return memo.id === payload;
      });
      const targetIndex = list.indexOf(target);
      // 対象のメモをstateから削除
      commit('deleteMemo', targetIndex);
      // トップページに遷移
      this.$router.push('/');
      // 削除メッセージを表示
      dispatch('toast/setMessage', 'メモを削除しました', { root: true });
    });
  },
  updateMemo({commit, dispatch, rootState}, payload) {
    // ユーザーIDがない場合は処理を終了
    const userId = rootState.auth.id;
    if(!userId) return;
    // 更新日を設定
    payload.dateUpdated = Date.now() + '';
    // 更新用データを作成
    const updateObj = {
      title: payload.title,
      text: payload.text,
      dateUpdated: payload.dateUpdated
    };
    // firebaseのデータを更新
    fireApp.database().ref(`01_memo-app/${userId}/${payload.id}`).update(updateObj, () => {
      // 対象のメモのstateを更新
      commit('updateMemo', payload);
      // itemページに遷移
      this.$router.push(`/item/${payload.id}`);
      // 更新メッセージを表示
      dispatch('toast/setMessage', 'メモを更新しました', { root: true });
    });
  },
  clearMemoList({commit}) {
    commit('clearMemoList');
  }
}

export const getters = {
  getMemoList(state) {
    return state.memoList;
  },
  getMemoListSorted(state) {
    const list = state.memoList;
    const listSorted = list.slice().sort(function(a, b) {
      return b.dateUpdated - a.dateUpdated;
    });
    return listSorted;
  },
  getMemoItem: (state) => (id) => {
    const memoItem = state.memoList.find(memo => {
      return memo.id === id;
    });
    return memoItem;
  }
}
