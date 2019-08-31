<template>
  <div>
    <friend-details-title v-if="friend" :friend="friend"></friend-details-title>
    <friend-notes v-if="friend" :notes="friend.notes" :friendId="friend.id"></friend-notes>
  </div>
</template>
<script>
import axios from "axios";
import FriendDetailsTitle from "@/components/FriendDetailsTitle";
import FriendNotes from "@/components/FriendNotes"
export default {
  components: {
    FriendDetailsTitle,
    FriendNotes
  },
  data() {
    return {
      friend: null
    };
  },
  beforeRouteEnter(to, from, next) {
    axios
      .get(`http://localhost:3000/friends/${to.params.id}?_embed=notes`)
      .then(
        response => {
          next(vm => vm.setData(response.data));
        },
        () => {
          next({ name: "friends" });
        }
      );
  },
  methods: {
    setData(friend) {
      this.friend = friend;
    }
  }
};
</script>