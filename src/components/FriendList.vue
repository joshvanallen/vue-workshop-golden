<template>
  <v-list>
    <friend-list-item
      v-for="(friend, index) in friends"
      :key="friend.id"
      :friend="friend"
      :isLast="index + 1 === friends.length"
      @show-details="navigateToDetails"
      @edit-friend="navigateToEdit"
      @favorite="fav"
    ></friend-list-item>
  </v-list>
</template>

<script>
import FriendListItem from "./FriendListItem";

export default {
  components: {
    FriendListItem
  },
  props: {
    friends: {
      default: () => []
    }
  },
  methods: {
    fav(friend) {
      this.$emit("fav", friend);
    },
    navigateToEdit(friend) {
      this.$emit("edit-friend", friend);
    },
    navigateToDetails(friend) {
      this.$emit("show-details", friend);
    }
  }
};
</script>

<style scoped></style>
