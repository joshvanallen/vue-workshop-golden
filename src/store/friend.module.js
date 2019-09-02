import Vue from "vue";
import { FETCH_FRIEND, ADD_FRIEND, UPDATE_FRIEND } from "./actions.type";
import {
  SET_FRIEND,
  RESET_FRIEND_FORM,
  DEFAULT_FRIEND_FORM
} from "./mutations.type";
import FriendService from "@/api/friend.service";

const defaultState = {
  friend: {
    firstName: "",
    lastName: "",
    fav: false,
    gender: ""
  }
};

let initialState = { ...defaultState };

export const state = { ...initialState };

export const actions = {
  async [FETCH_FRIEND](context, friendId) {
    const { data } = await FriendService.get(friendId);
    initialState = { friend: data };
    context.commit(SET_FRIEND, data);
  },
  [ADD_FRIEND]({ state }) {
    return FriendService.create(state.friend);
  },
  [UPDATE_FRIEND]({ state }) {
    return FriendService.update(state.friend.id, state.friend);
  }
};

export const mutations = {
  [SET_FRIEND](state, friend) {
    state.friend = friend;
  },
  [RESET_FRIEND_FORM]() {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  },
  [DEFAULT_FRIEND_FORM]() {
    for (let f in state) {
      Vue.set(state, f, defaultState[f]);
    }
  }
};

const getters = {
  friend(state) {
    return state.friend;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
