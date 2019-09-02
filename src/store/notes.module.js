import {
  FETCH_NOTES,
  ADD_NOTE,
  UPDATE_NOTE,
  REMOVE_NOTE
} from "./actions.type";
import NoteService from "@/api/note.service";
import {
  SET_NOTES,
  UPDATE_NOTE_IN_LIST,
  REMOVE_NOTE_IN_LIST,
  ADD_NOTE_TO_LIST
} from "./mutations.type";

export const state = {
  note: {
    title: "",
    content: ""
  },
  notes: []
};

export const actions = {
  async [FETCH_NOTES](context, friendId) {
    const { data } = await NoteService.getAllByFriend(friendId);
    context.commit(SET_NOTES, data);
  },
  async [ADD_NOTE](context, { note, friendId }) {
    console.log(friendId);
    const { data } = await NoteService.create(friendId, note);
    context.commit(ADD_NOTE_TO_LIST, data);
  },
  async [UPDATE_NOTE](context, note) {
    const { data } = await NoteService.update(note.id, note);
    context.commit(UPDATE_NOTE_IN_LIST, data);
  },
  async [REMOVE_NOTE](context, noteId) {
    await NoteService.delete(noteId);
    context.commit(REMOVE_NOTE_IN_LIST, noteId);
  }
};

export const mutations = {
  [SET_NOTES](state, notes) {
    state.notes = notes;
  },
  [REMOVE_NOTE_IN_LIST](state, noteId) {
    state.notes = state.notes.filter(note => note.id !== noteId);
  },
  [UPDATE_NOTE_IN_LIST](state, data) {
    state.notes = state.notes.map(note => {
      if (note !== data.id) {
        return note;
      }

      note.title = data.title;
      note.content = data.content;
      return note;
    });
  },
  [ADD_NOTE_TO_LIST](state, data) {
    state.notes.push(data);
  }
};

const getters = {
  notes(state) {
    return state.notes;
  }
};
export default {
  state,
  actions,
  mutations,
  getters
};
