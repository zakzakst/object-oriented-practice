import fireApp from '@/plugins/firebase'

export const state = () => ({
  items: [],
  isBusy: false,
  loadState: 'IDLE' // IDLE, PROCESS, COMPLETED, ERROR
})

export const mutations = {
  setItem(state, payload) {
    state.items.push(payload);
  },
  deleteItem(state, payload) {
    // IDに対応するデータを取得
    const targetItem = state.items.find(item => {
      return item.id === payload;
    });
    // データのitems内の位置を取得
    const targetIndex = state.items.indexOf(targetItem);
    // データを削除
    state.items.splice(targetIndex, 1);
  },
  updateItem(state, payload) {
    // IDに対応するデータを取得
    const targetItem = state.items.find(item => {
      return item.id === payload.id;
    });
    // 内容を変更
    targetItem.name = payload.name;
    targetItem.introduction = payload.introduction;
    targetItem.icon = payload.icon;
  },
  clearItems(state) {
    state.items = [];
  },
  setIsBusy(state, payload) {
    state.isBusy = payload;
  },
  setLoadState(state, payload) {
    state.loadState = payload;
  }
}

export const actions = {
  async createItem({commit, getters}, payload) {
    // ロード状態が「PROCESS」の場合は処理を終了
    if (getters.loadState === 'PROCESS') return;
    // チームデータの登録開始
    console.log('チームデータの登録開始');
    commit('setIsBusy', true);
    // firebaseにデータ登録
    const res = await fireApp.database().ref(`${process.env.APP_DIR}/team`).push(payload);
    // チームデータの登録完了
    console.log('チームデータの登録完了');
    commit('setIsBusy', false);
    return res.key;
  },

  loadItems({commit, getters}) {
    // ロード状態が「IDLE」以外の場合は処理を終了
    if (getters.loadState !== 'IDLE') return;
    // チームデータのロード開始
    console.log('チームデータのロード開始');
    commit('setIsBusy', true);
    commit('setLoadState', 'PROCESS');
    // firebaseでデータをロード
    fireApp.database().ref(`${process.env.APP_DIR}/team`).on('child_added', snapshot => {
      // 読み込んだデータにidプロパティを追加
      const item = snapshot.val();
      item.id = snapshot.key;
      // stateにデータをセット
      console.log('チームデータ追加：', snapshot.key);
      commit('setItem', item);
    });
    // チームデータのロード完了（「データが登録されていない」のか「データロード中」なのか判断できないため、一律で5秒後にフラグ変更。画面に表示する内容は、itemsの数との組み合わせで判断）
    setTimeout(() => {
      console.log('チームデータのロード完了');
      commit('setIsBusy', false);
      commit('setLoadState', 'COMPLETED');
    }, 5000);
  },

  deleteItem({commit}, payload) {
    return new Promise(resolve => {
      // ロード状態が「PROCESS」の場合は処理を終了
      if (getters.loadState === 'PROCESS') resolve(false);
      // チームデータの削除開始
      console.log('チームデータの削除開始');
      commit('setIsBusy', true);
      // firebaseでデータを削除
      fireApp.database().ref(`${process.env.APP_DIR}/team/${payload}`).remove(() => {
        // 削除したデータをstateから削除
        commit('deleteItem', payload);
        // チームデータの削除完了
        console.log('チームデータの削除完了');
        commit('setIsBusy', false);
        resolve(payload);
      });
    });
  },

  updateItem({commit}, payload) {
    return new Promise(resolve => {
      // ロード状態が「PROCESS」の場合は処理を終了
      if (getters.loadState === 'PROCESS') resolve(false);
      // チームデータの更新開始
      console.log('チームデータの更新開始');
      commit('setIsBusy', true);
      // 更新用データを作成
      const item = {
        name: payload.name,
        introduction: payload.introduction,
        icon: payload.icon,
      };
      // firebaseでデータを更新
      fireApp.database().ref(`${process.env.APP_DIR}/team/${payload.id}`).update(item, () => {
        // 更新したデータをstateにセット
        commit('updateItem', payload);
        // チームデータの更新完了
        console.log('チームデータの更新完了');
        commit('setIsBusy', false);
        resolve(payload);
      });
    })
  },

  clearItems({commit}) {
    commit('clearItems');
  },
}

export const getters = {
  items(state) {
    return state.items;
  },
  findItemById: (state) => (id) => {
    let result = state.items.find(item => item.id === id);
    if (result === undefined) {
      // ■ IDに対応するitemがない場合
      // デフォルトの値を返す
      result = {
        id: '',
        name: '',
        introduction: '',
        icon: '',
      }
    }
    return result;
  },
  isBusy(state) {
    return state.isBusy;
  },
  loadState(state) {
    return state.loadState;
  }
}
