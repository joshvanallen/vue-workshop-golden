import { SET_CONNECTION_STATUS } from "./mutations.type";

const state = {
  online: !!navigator.onLine,
  offline: !navigator.onLine
};

const mutations = {
  [SET_CONNECTION_STATUS](state, status) {
    state.online = status;
    state.offline = !status;
  }
};
const getters = {
  online(state) {
    return state.online;
  },
  offline(state) {
    return state.offline;
  }
};


export default {
  state,
  mutations,
  getters
};
