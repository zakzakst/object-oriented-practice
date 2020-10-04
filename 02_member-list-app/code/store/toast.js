export const state = () => ({
  isActive: false,
  message: ''
})

export const mutations = {
  setMessage(state, payload) {
    state.message = payload;
  },
  clearMessage(state) {
    state.message = '';
  },
  setIsActive(state, payload) {
    state.isActive = payload;
  }
}

export const actions = {
  show({commit, dispatch, getters}, payload) {
    // 0.3秒後にメッセージを非表示
    setTimeout(() => {
      commit('setMessage', payload);
      commit('setIsActive', true);
      // 3秒後にメッセージを非表示
      setTimeout(() => {
        // メッセージが空の場合は処理を終了
        if (getters.message === '') return;
        dispatch('hide');
      }, 3000);
    }, 300);
  },
  hide({commit}) {
    commit('setIsActive', false);
    // CSSトランジションが完了してから文字をクリア
    setTimeout(() => {
      commit('clearMessage');
    }, 1000);
  }
}

export const getters = {
  message(state) {
    return state.message;
  },
  isActive(state) {
    return state.isActive;
  }
}
