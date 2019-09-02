<template>
  <div>
    <v-list-item @click="showDetails(friend)" :key="friend.id">
      <v-list-item-content>
        <v-list-item-title v-text="fullName"></v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn v-if="emitEvents" @click.stop="showEdit(friend)" text icon>
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn @click.stop="notifyFavorite(friend)" text icon :color="friend.fav ? 'red' : 'grey'">
          <v-icon>favorite</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-divider v-if="!isLast"></v-divider>
  </div>
</template>

<script>
export default {
  props: ["friend", "emitEvents", "isLast"],
  methods: {
    notifyFavorite(friend) {
      if (this.emitEvents) this.$emit("favorite", friend);
    },
    showEdit(friend) {
      this.$emit("edit-friend", friend);
    },
    showDetails(friend) {
      if (this.emitEvents) this.$emit("show-details", friend);
    }
  },
  computed: {
    fullName() {
      return `${this.friend.firstName} ${this.friend.lastName}`;
    }
  }
};
</script>

<style scoped>
.v-list-item__action.v-list-item__action--stack {
  flex-direction: row;
}
</style>
