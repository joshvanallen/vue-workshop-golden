<template>
    <input type="text" class="calculator-screen" v-model="value" value disabled />
</template>
<script>
export default {
  props: ["value"]
};
</script>
<style scoped>
.calculator-screen {
  width: 100%;
  font-size: 5rem;
  height: 80px;
  border: none;
  background-color: #252525;
  color: #fff;
  text-align: right;
  padding-right: 20px;
  padding-left: 10px;
}
</style>