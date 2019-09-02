import Vue from "vue";
import Vuex from "vuex";
import home from "./home.module";
import friend from "./friend.module";
import notes from "./notes.module";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    home,
    friend,
    notes
  }
});
