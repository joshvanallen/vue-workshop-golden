<template>
  <div class="mt-2">
    <v-col md="8" offset-md="2">
      <v-card v-if="notes && notes.length > 0">
        <friend-note-list @edit="editNote" @delete="deleteNote" :notes="notes"></friend-note-list>
      </v-card>
      <div v-else class="empty-text">Add a note!</div>
      <v-btn color="primary" class="mt-3" block large @click="$refs.modal.show()">Add Notes</v-btn>
    </v-col>
    <friend-notes-modal ref="modal" @save="saveNote($event)" class="mt-4"></friend-notes-modal>
  </div>
</template>
<script>
import FriendNotesModal from "@/components/FriendNotesModal";
import FriendNoteList from "@/components/FriendNotesList";
export default {
  components: {
    FriendNoteList,
    FriendNotesModal
  },
  props: {
    notes: { default: () => [] },
    friendId: { default: null, type: Number }
  },
  methods: {
    deleteNote(index) {
      this.$emit("delete-note", this.notes[index].id);
    },
    editNote(index) {
      this.$refs.modal.show(this.notes[index]);
    },
    saveNote(note) {
      this.$emit("save", note);
    }
  }
};
</script>
<style scoped>
.empty-text {
  font-size: 3rem;
  text-align: center;
  color: gray;
}
</style>
