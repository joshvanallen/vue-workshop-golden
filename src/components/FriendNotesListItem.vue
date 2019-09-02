<template>
  <div>
    <v-list-item :key="note.id">
      <v-list-item-content>
        <v-list-item-title
          class=""
          v-text="note.title ? note.title : '(No Title Note)'"
        ></v-list-item-title>
        <v-list-item-subtitle v-text="note.content"></v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn @click.stop="editNote(note)" text icon>
          <v-icon>edit</v-icon>
        </v-btn>
      </v-list-item-action>
      <v-list-item-action>
        <v-btn @click.stop="deleteNote(note)" text icon>
          <v-icon>delete</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-divider v-if="!isLast"></v-divider>
  </div>
</template>
<script>
export default {
  props: ["note", "isLast"],
  methods: {
    editNote(note) {
      this.$emit("edit", note);
    },
    deleteNote(note) {
      this.$emit("delete", note);
    }
  }
};
</script>
<style scoped>
.v-list-item__title {
  font-weight: bold;
}
</style>
