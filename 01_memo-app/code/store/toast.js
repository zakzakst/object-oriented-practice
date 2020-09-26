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
  setMessage({commit, dispatch}, payload) {
    commit('setMessage', payload);
    commit('setIsActive', true);
    // 3秒後にメッセージを非表示
    setTimeout(() => {
      // メッセージが空の場合は処理を終了
      if (state.message === '') return;
      dispatch('clearMessage');
    }, 3000);
  },
  clearMessage({commit}) {
    commit('setIsActive', false);
    // CSSトランジションが完了してから文字をクリア
    setTimeout(() => {
      commit('clearMessage');
    }, 1000);
  }
}

export const getters = {
  getMessage(state) {
    return state.message;
  },
  getIsActive(state) {
    return state.isActive;
  }
}
