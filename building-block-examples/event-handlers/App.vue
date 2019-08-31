<template>
  <div id="example-2">
    <button v-on:click="greet">Greet</button>
    <button v-on:click="inlineHandler('World')">Inline Greet</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Vue.js"
    };
  },
  // define methods under the `methods` object
  methods: {
    greet: function(event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
    inlineHandler: function(providedString) {
      alert("Hello " + providedString + "!");
    }
  }
};
</script>