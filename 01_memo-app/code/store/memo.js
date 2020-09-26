export const state = () => ({
  loadDone: false,
  memoList: []
})

export const mutations = {
  setLoadDone(state, payload) {
    state.loadDone = payload;
  },
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
    target.dateUpdated = Date.now();
  }
}

export const actions = {
  createMemo({commit, dispatch}, payload) {
    const dateNum = Date.now();
    // idは文字列に変換して登録（※あとでid参照を行う際のデータ型の関係上）
    payload.id = dateNum + '';
    payload.dateCreate = dateNum;
    payload.dateUpdated = dateNum;
    commit('setMemo', payload);
    // itemページに遷移
    this.$router.push(`/item/${payload.id}`);
    // 登録完了メッセージを表示
    dispatch('toast/setMessage', 'メモを登録しました', { root: true });
  },
  async loadMemoList({commit, state}, payload) {
    // 読込が完了していた場合は処理を終了
    if (state.loadDone) {
      console.log('メモデータロード済のため処理を終了');
      return;
    }
    // サンプル用のjsonデータ読み込み
    const res = await this.$axios.$get('sample-data.json');
    const memoListData = res['memo-app']['memo'][payload];
    // keyをメモのIDに設定して、memoListに追加
    Object.keys(memoListData).forEach(memoId => {
      const memoObj = {
        id: memoId,
        title: memoListData[memoId].title,
        text: memoListData[memoId].text,
        dateCreate: memoListData[memoId].dateCreate,
        dateUpdated: memoListData[memoId].dateUpdated,
      };
      commit('setMemo', memoObj);
      // 読込完了をtrueにする
      commit('setLoadDone', true);
    });
  },
  deleteMemo({commit, state, dispatch}, payload) {
    const list = state.memoList;
    // IDに対応するデータを取得
    const target = list.find(memo => {
      return memo.id === payload;
    });
    const targetIndex = list.indexOf(target);
    // 対象のメモを削除
    commit('deleteMemo', targetIndex);
    // トップページに遷移
    this.$router.push('/');
    // 削除メッセージを表示
    dispatch('toast/setMessage', 'メモを削除しました', { root: true });
  },
  updateMemo({commit, dispatch}, payload) {
    commit('updateMemo', payload);
    // itemページに遷移
    this.$router.push(`/item/${payload.id}`);
    // 更新メッセージを表示
    dispatch('toast/setMessage', 'メモを更新しました', { root: true });
  }
}

export const getters = {
  getMemoList(state) {
    console.log('メモデータ取得');
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
