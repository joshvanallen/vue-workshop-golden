<template>
  <div>
    <FriendDetailsTitle :friend="friend"></FriendDetailsTitle>
    <FriendNotes :notes="notes" @save="saveNote" @delete-note="deleteNote"></FriendNotes>
  </div>
</template>
<script>
import store from "@/store";
import FriendDetailsTitle from "@/components/FriendDetailsTitle";
import FriendNotes from "@/components/FriendNotes";
import { FETCH_FRIEND, FETCH_NOTES, ADD_NOTE, UPDATE_NOTE, REMOVE_NOTE } from "@/store/actions.type";
import { mapGetters } from "vuex";

async function handleRouting(to, from, next) {
  let shouldContinue = true;
  try {
    if (to.params.id) {
      await store.dispatch(FETCH_FRIEND, to.params.id);
      await store.dispatch(FETCH_NOTES, to.params.id);
    } else {
      shouldContinue = "/";
    }
  } catch (e) {
    shouldContinue = "/";
  }
  return next(shouldContinue);
}

export default {
  components: {
    FriendDetailsTitle,
    FriendNotes
  },
  async beforeRouteUpdate(to, from, next) {
    return handleRouting(to, from, next);
  },
  async beforeRouteEnter(to, from, next) {
    return handleRouting(to, from, next);
  },
  computed: {
    ...mapGetters(["friend", "notes"])
  },
  methods: {
    saveNote(note){
      const action = note.id ? UPDATE_NOTE : ADD_NOTE;
      this.$store.dispatch(action, {note, friendId: this.friend.id});
    },
    deleteNote(noteId){
      this.$store.dispatch(REMOVE_NOTE, noteId);
    }
  }
};
</script>
