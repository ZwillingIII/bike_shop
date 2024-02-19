import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      menu: false,
      bg: false,
      success: false,
      successText: '',
    }
  },
  getters: {
    getMenu(state) {
      return state.menu;
    },
    getBg(state) {
      return state.bg;
    },
    getSuccess(state) {
      return state.success;
    },
    getSuccessTxt(state) {
      return state.successText;
    }
  },
  mutations: {
    openMenu(state, options) {
      state.menu = options;
    },
    openBg(state, options) {
      state.bg = options;
    },
    openSuccess(state, options) {
      state.success = options;
    },
    changeSuccessTxt(state, text) {
      state.successText = text;
    }
  }
});

export default store;
