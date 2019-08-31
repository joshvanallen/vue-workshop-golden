<template>
  <v-list>
    <friend-notes-list-item
      v-for="(note, index) in notes"
      :key="note.id"
      :note="note"
      :isLast="index + 1 === notes.length"
      @edit="editNote(index)"
      @delete="deleteNote(index)"
    ></friend-notes-list-item>
  </v-list>
</template>
<script>
import FriendNotesListItem from "@/components/FriendNotesListItem";
export default {
  components: {
    FriendNotesListItem
  },
  methods: {
    editNote(index) {
      this.$emit("edit", index);
    },
    deleteNote(index) {
      this.$emit("delete", index);
    }
  },
  props: ["notes"]
};
</script>
<style scoped></style>
