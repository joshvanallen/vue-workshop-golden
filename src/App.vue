<template>
  <div id="app">
    <TheCalculator></TheCalculator>
  </div>
</template>

<script>
import TheCalculator from "./components/TheCalculator.vue";

export default {
  name: "app",
  components: {
    TheCalculator
  }
};
</script>

<style>
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
</style>
