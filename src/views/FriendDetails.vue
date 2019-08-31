<template>
  <div>
    <router-view v-if="friend" :friend="friend" />
    <router-view
      v-if="notes"
      :notes="notes"
      :friendId="friend.id"
      name="notes"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      friend: null,
      notes: null
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
      this.notes = friend.notes || [];
    }
  }
};
</script>

<style scoped></style>
