import { FETCH_FRIENDS, ADD_FAVORITE, REMOVE_FAVORITE } from "./actions.type";
import {
  SET_FRIENDS,
  FILTER_FRIENDS,
  UPDATE_FAVORITE_IN_LIST
} from "./mutations.type";
import FriendService from "@/api/friend.service";
import { checkFriendValues } from "@/shared/helper-functions";

const initialState = {
  filteredFriends: [],
  friends: [],
  friendsCount: 0,
  favFriendsCount: 0
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_FRIENDS](context) {
    const { data } = await FriendService.getAll();
    context.commit(SET_FRIENDS, data);
  },
  async [ADD_FAVORITE](context, id) {
    await FriendService.patchFavorite(id, true);
    context.commit(UPDATE_FAVORITE_IN_LIST, { id, fav: true });
  },
  async [REMOVE_FAVORITE](context, id) {
    await FriendService.patchFavorite(id, false);
    context.commit(UPDATE_FAVORITE_IN_LIST, { id, fav: false });
  }
};

export const mutations = {
  [SET_FRIENDS](state, friends) {
    state.friends = friends;
    state.filteredFriends = friends;
    state.friendsCount = friends.length;
    state.favFriendsCount = friends.filter(friend => friend.fav).length;
  },
  [FILTER_FRIENDS](state, filterCriteria) {
    state.filteredFriends = state.friends.filter(friend =>
      checkFriendValues(friend, filterCriteria)
    );
  },
  [UPDATE_FAVORITE_IN_LIST](state, data) {
    state.friends = state.friends.map(friend => {
      if (friend.id !== data.id) {
        return friend;
      }

      friend.fav = data.fav;
      return friend;
    });
  }
};

const getters = {
  filteredFriends(state) {
    return state.filteredFriends;
  },
  friends(state) {
    return state.friends;
  },
  friendsCount(state) {
    return state.friendsCount;
  },
  favFriendsCount(state) {
    return state.favFriendsCount;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
