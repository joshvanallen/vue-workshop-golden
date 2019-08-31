<template>
  <div class="friend">
    <v-col md="8" offset-md="2">
      <search-bar
        :onlyFavs="initFavsFilter"
        @search="filterFriends"
      ></search-bar>
      <v-card>
        <friend-list
          @edit-friend="editFriend"
          @fav="patchFav"
          @show-details="showDetails"
          :friends="filteredFriends"
        ></friend-list>
      </v-card>
      <v-btn
        id="add-friend"
        :to="{ name: 'addFriend' }"
        pa-1
        color="primary"
        block
        large
        >Add Friend</v-btn
      >
    </v-col>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "@/components/SearchBar";
import FriendList from "@/components/FriendList";
import { checkFriendValues, getFavQueryParam } from "@/shared/helper-functions";

export default {
  components: {
    SearchBar,
    FriendList
  },
  data: () => {
    return {
      filteredFriends: [],
      friends: []
    };
  },
  methods: {
    filterFriends(value) {
      this.filteredFriends = this.friends.filter(friend =>
        checkFriendValues(friend, value)
      );
    },
    editFriend(friend) {
      this.$router.push({ path: `details/${friend.id}/edit` });
    },
    patchFav(friend) {
      axios
        .patch(`http://localhost:3000/friends/${friend.id}`, {
          fav: !friend.fav
        })
        .then(() => {
          this.$set(friend, "fav", !friend.fav);
        });
    },
    showDetails(friend) {
      this.$router.push({ name: "friendDetails", params: { id: friend.id } });
    }
  },
  computed: {
    initFavsFilter() {
      return getFavQueryParam(this.$route);
    }
  },
  mounted() {
    axios.get("http://localhost:3000/friends").then(response => {
      this.filteredFriends = this.friends = response.data;
      this.filterFriends({
        text: null,
        favs: this.initFavsFilter
      });
    });
  }
};
</script>

<style scoped>
#add-friend {
  margin-top: 15px;
}
</style>
