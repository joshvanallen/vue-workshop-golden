<template>
  <div class="upsert-form" @change="dirty = true">
    <v-btn text @click="navigateBack" color="primary">Go Back</v-btn>
    <friend-form
      :enabled="enabled"
      :friend="friend"
      @reset="dirty = false"
      @submit="upsertFriend"
    ></friend-form>
  </div>
</template>

<script>
import FriendForm from "@/components/FriendForm";
import { handleFriend } from "@/shared/helper-functions";

export default {
  components: {
    FriendForm
  },
  props: ["friend"],
  data() {
    return {
      enabled: true,
      dirty: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.dirty) {
      next(
        confirm("This form is dirty. Are you sure you want to navigate way?")
      );
    } else {
      next();
    }
  },
  methods: {
    upsertFriend(friend) {
      this.enabled = false;
      handleFriend(friend, this.friend)
        .then(() => {
          this.dirty = false;
          this.navigateBack();
        })
        .finally(() => {
          this.enabled = true;
        });
    },
    navigateBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.upsert-form button {
  margin-bottom: 10px;
}
</style>
