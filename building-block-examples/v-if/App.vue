<template>
  <div>
    <h1 v-if="showTitle">Hello World!</h1>
    <h1 v-else>Hello Other World!</h1>
    <button type="button" @click="toggleTitle">Toggle Title</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTitle: true
    };
  },
  methods: {
    toggleTitle() {
      this.showTitle = !this.showTitle;
    }
  }
};
</script>
