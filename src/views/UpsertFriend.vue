<template>
  <div class="upsert-form" @change="markAsDirty">
    <v-btn text @click="navigateBack" color="primary">Go Back</v-btn>
    <friend-form :enabled="enabled" :friend="friend" @reset="reset" @submit="upsertFriend"></friend-form>
  </div>
</template>

<script>
import store from "@/store";
import { mapGetters } from "vuex";

import FriendForm from "@/components/FriendForm";
import { FETCH_FRIEND, ADD_FRIEND, UPDATE_FRIEND } from "@/store/actions.type";
import { RESET_FRIEND_FORM, DEFAULT_FRIEND_FORM } from "@/store/mutations.type";

export default {
  components: {
    FriendForm
  },
  data() {
    return {
      enabled: true,
      dirty: false
    };
  },
  async beforeRouteUpdate(to, from, next) {
    try {
      if (to.params.id) {
        await store.dispatch(FETCH_FRIEND, to.params.id);
      }
      return next();
    } catch (e) {
      return next(false);
    }
  },
  async beforeRouteEnter(to, from, next) {
    try {
      if (to.params.id) {
        await store.dispatch(FETCH_FRIEND, to.params.id);
      } else {
        store.commit(DEFAULT_FRIEND_FORM);
      }
      return next();
    } catch (e) {
      return next(false);
    }
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
  computed: {
    ...mapGetters(["friend"])
  },
  methods: {
    upsertFriend() {
      this.enabled = false;
      const action = this.friend.id ? UPDATE_FRIEND : ADD_FRIEND;
      this.$store.dispatch(action).then(
        () => {
          this.reset();
          this.navigateBack();
        },
        () => {
          this.enabled = true;
        }
      );
    },
    navigateBack() {
      this.$router.go(-1);
    },
    markAsDirty() {
      this.dirty = true;
    },
    reset() {
      this.dirty = false;
      this.$store.commit(RESET_FRIEND_FORM);
    }
  }
};
</script>

<style scoped>
.upsert-form button {
  margin-bottom: 10px;
}
</style>
