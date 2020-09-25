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
    const list = state.memoList;
    // IDに対応するデータを取得
    const target = list.find(memo => {
      return memo.id === payload;
    });
    // 配列内の位置を取得して、削除
    const targetIndex = list.indexOf(target);
    list.splice(targetIndex, 1);
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
  }
}

export const actions = {
  createMemo({commit}, payload) {
    payload.id = Date.now();
    commit('setMemo', payload);
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
        'id': memoId,
        'title': memoListData[memoId].title,
        'text': memoListData[memoId].text,
      };
      commit('setMemo', memoObj);
      // 読込完了をtrueにする
      commit('setLoadDone', true);
    });
  },
  deleteMemo({commit}, payload) {
    commit('deleteMemo', payload);
  },
  updateMemo({commit}, payload) {
    commit('updateMemo', payload);
  }
}

export const getters = {
  getMemoList(state) {
    console.log('メモデータ取得');
    return state.memoList;
  },
  getMemoItem: (state) => (id) => {
    const memoItem = state.memoList.find(memo => {
      return memo.id === id;
    });
    return memoItem;
  }
}