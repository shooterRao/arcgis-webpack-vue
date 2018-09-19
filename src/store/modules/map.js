const map = {
  namespaced: true,
  state: {
    map: null,
    view: null
  },
  actions: {
    setMap({ commit }, value) {
      commit('SETMAP', value);
    },
    setView({ commit }, value) {
      commit('SETVIEW', value);
    }
  },
  mutations: {
    SETMAP(state, value) {
      state.map = value;
    },
    SETVIEW(state, value) {
      state.view = value;
    }
  }
};

export default map;
