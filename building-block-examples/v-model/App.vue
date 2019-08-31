<template>
  <div>
    <h1>{{foobar}}</h1>
    <input type="text" v-model="foobar" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      foobar:''
    }
  }
};
</script>
