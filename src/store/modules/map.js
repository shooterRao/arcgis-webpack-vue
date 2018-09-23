const map = {
  namespaced: true,
  state: {
    map: null,
    mapView: null
  },
  actions: {
    setMap({ commit }, value) {
      commit('SET_MAP', value);
    },
    setView({ commit }, value) {
      commit('SET_VIEW', value);
    }
  },
  mutations: {
    SET_MAP(state, value) {
      state.map = value;
    },
    SET_VIEW(state, value) {
      state.mapView = value;
    }
  }
};

export default map;
