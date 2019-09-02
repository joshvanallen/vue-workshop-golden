<template>
  <div class="friend">
    <v-col md="8" offset-md="2">
      <search-bar :onlyFavs="initFavStatus" @search="filterFriends"></search-bar>
      <v-card>
        <friend-list
          @edit-friend="editFriend"
          @fav="patchFav"
          @show-details="showDetails"
          :friends="filteredFriends"
          :emitEditableEvents="online"
        ></friend-list>
      </v-card>
      <v-btn id="add-friend" v-if="online" :to="{ name: 'addFriend' }" pa-1 color="primary" block large>Add Friend</v-btn>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import store from "@/store";
import SearchBar from "@/components/SearchBar";
import FriendList from "@/components/FriendList";
import {
  FETCH_FRIENDS,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from "@/store/actions.type";
import { FILTER_FRIENDS } from "@/store/mutations.type";
import { getFavQueryParam } from "@/shared/helper-functions";

export default {
  components: {
    SearchBar,
    FriendList
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch(FETCH_FRIENDS).then(() => {
      next();
    });
  },
  methods: {
    filterFriends(value) {
      this.$store.commit(FILTER_FRIENDS, value);
    },
    editFriend(friend) {
      this.$router.push({ path: `details/${friend.id}/edit` });
    },
    patchFav(friend) {
      const action = friend.fav ? REMOVE_FAVORITE : ADD_FAVORITE;
      this.$store.dispatch(action, friend.id);
    },
    showDetails(friend) {
      this.$router.push({ name: "friendDetails", params: { id: friend.id } });
    }
  },
  computed: {
    initFavStatus() {
      return getFavQueryParam(this.$route);
    },
    ...mapGetters(["filteredFriends", "online"])
  }
};
</script>

<style scoped>
#add-friend {
  margin-top: 15px;
}
</style>
