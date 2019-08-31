<template>
  <div>
    <h1>{{ stringProp }} {{ typeof stringProp }}</h1>
    <h2>{{ numberProp }} {{ typeof numberProp }}</h2>
    <h3>{{ unusedProp }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    stringProp: {
      type: String
    },
    numberProp: {
      type: Number
    },
    unusedProp: {
      default: "Default Value",
      type: String
    }
  }
};
</script>
