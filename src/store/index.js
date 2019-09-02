import Vue from "vue";
import Vuex from "vuex";
import home from "./home.module";
import friend from "./friend.module";
import notes from "./notes.module";
import cache from "@/storage/cache";
import connection from "./connection.module";
import { SET_CONNECTION_STATUS } from "./mutations.type";
Vue.use(Vuex);

window.addEventListener("online", () => {
  store.commit(SET_CONNECTION_STATUS, true);
});
window.addEventListener("offline", () => {
  store.commit(SET_CONNECTION_STATUS, false);
});
const store = new Vuex.Store({
  modules: {
    home,
    friend,
    notes,
    connection
  },
  plugins: [cache]
});

export default store;
