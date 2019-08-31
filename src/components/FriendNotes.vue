<template>
  <div class="mt-2">
    <v-col md="8" offset-md="2">
      <v-card v-if="notes && notes.length > 0">
        <friend-note-list
          @edit="editNote"
          @delete="deleteNote"
          :notes="notes"
        ></friend-note-list>
      </v-card>
      <div v-else class="empty-text">
        Add a note!
      </div>
      <v-btn
        color="primary"
        class="mt-3"
        block
        large
        @click="$refs.modal.show()"
        >Add Notes</v-btn
      >
    </v-col>
    <friend-notes-modal
      ref="modal"
      @note="handleNote($event)"
      class="mt-4"
    ></friend-notes-modal>
  </div>
</template>
<script>
import axios from "axios";
import FriendNotesModal from "@/components/FriendNotesModal";
import FriendNoteList from "@/components/FriendNotesList";
export default {
  components: {
    FriendNoteList,
    FriendNotesModal
  },
  props: { notes: { default: [] }, friendId: { default: null, type: Number } },
  methods: {
    deleteNote(index) {
      const note = this.notes[index];
      axios.delete(`http://localhost:3000/notes/${note.id}`).then(() => {
        console.log(this.notes);
        this.notes.splice(index, 1);
      });
    },
    editNote(index) {
      this.$refs.modal.show(this.notes[index]);
    },
    handleNote(note) {
      if (typeof note.id === "number") {
        this.updateNote(note);
      } else {
        this.createNote(note);
      }
    },
    createNote(note) {
      note.friendId = this.friendId;
      axios.post(`http://localhost:3000/notes`, note).then(() => {
        this.notes.push(note);
      });
    },
    updateNote(updatedNote) {
      axios
        .put(`http://localhost:3000/notes/${updatedNote.id}`, updatedNote)
        .then(() => {
          const index = this.notes.findIndex(
            note => note.id === updatedNote.id
          );
          this.notes.splice(index, 1, updatedNote);
        });
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
