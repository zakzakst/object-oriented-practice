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
    targetItem.tel = payload.tel;
    targetItem.mail = payload.mail;
    targetItem.messenger = payload.messenger;
    targetItem.onlineStatus = payload.onlineStatus;
    targetItem.teamId = payload.teamId;
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
    // メンバーデータの登録開始
    console.log('メンバーデータの登録開始');
    commit('setIsBusy', true);
    // firebaseにデータ登録
    const res = await fireApp.database().ref(`${process.env.APP_DIR}/member`).push(payload);
    // メンバーデータの登録完了
    console.log('メンバーデータの登録完了');
    commit('setIsBusy', false);
    return res.key;
  },

  loadItems({commit, getters}) {
    // ロード状態が「IDLE」以外の場合は処理を終了
    if (getters.loadState !== 'IDLE') return;
    // メンバーデータのロード開始
    console.log('メンバーデータのロード開始');
    commit('setIsBusy', true);
    commit('setLoadState', 'PROCESS');
    // firebaseでデータをロード
    fireApp.database().ref(`${process.env.APP_DIR}/member`).on('child_added', snapshot => {
      // 読み込んだデータにidプロパティを追加
      const item = snapshot.val();
      item.id = snapshot.key;
      // teamIDからチームのデータを取得
      fireApp.database().ref(`${process.env.APP_DIR}/team/${item.teamId}`).once('value').then(teamSnapshot => {
        const teamItem = teamSnapshot.val();
        item.teamName = teamItem.name;
        item.teamIcon = teamItem.icon;
        // stateにデータをセット
        console.log('メンバーデータ追加：', snapshot.key);
        commit('setItem', item);
      });
    });
    // メンバーデータのロード完了（「データが登録されていない」のか「データロード中」なのか判断できないため、一律で5秒後にフラグ変更。画面に表示する内容は、itemsの数との組み合わせで判断）
    setTimeout(() => {
      console.log('メンバーデータのロード完了');
      commit('setIsBusy', false);
      commit('setLoadState', 'COMPLETED');
    }, 5000);
  },

  deleteItem({commit}, payload) {
    return new Promise(resolve => {
      // ロード状態が「PROCESS」の場合は処理を終了
      if (getters.loadState === 'PROCESS') resolve(false);
      // メンバーデータの削除開始
      console.log('メンバーデータの削除開始');
      commit('setIsBusy', true);
      // firebaseでデータを削除
      fireApp.database().ref(`${process.env.APP_DIR}/member/${payload}`).remove(() => {
        // 削除したデータをstateから削除
        commit('deleteItem', payload);
        // メンバーデータの削除完了
        console.log('メンバーデータの削除完了');
        commit('setIsBusy', false);
        resolve(payload);
      });
    });
  },

  updateItem({commit}, payload) {
    return new Promise(resolve => {
      // ロード状態が「PROCESS」の場合は処理を終了
      if (getters.loadState === 'PROCESS') resolve(false);
      // メンバーデータの更新開始
      console.log('メンバーデータの更新開始');
      commit('setIsBusy', true);
      // 更新用データを作成
      const item = {
        name: payload.name,
        tel: payload.tel,
        mail: payload.mail,
        messenger: payload.messenger,
        onlineStatus: payload.onlineStatus,
        teamId: payload.teamId,
      };
      // firebaseでデータを更新
      fireApp.database().ref(`${process.env.APP_DIR}/member/${payload.id}`).update(item, () => {
        // 更新したデータをstateにセット
        commit('updateItem', payload);
        // メンバーデータの更新完了
        console.log('メンバーデータの更新完了');
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
  memberItems(state) {
    return state.items;
  },
  findItemById: (state) => (id) => {
    return state.items.find(item => item.id === id);
  },
  filterItemsByTeamId: (state) => (teamId) => {
    // teamIdの指定がない場合はメンバー全体を返す
    if (!teamId) return state.items;
    return state.items.filter(item => item.teamId === teamId);
  },
  isBusy(state) {
    return state.isBusy;
  },
  loadState(state) {
    return state.loadState;
  }
}
