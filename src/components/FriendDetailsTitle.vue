<template>
  <div style="display:flex; flex-direction:row; justify-content:center">
    <h1>{{ fullName }}</h1>
  </div>
</template>
<script>
export default {
  props: ["friend"],
  computed: {
    fullName() {
      return this.friend
        ? `${this.friend.firstName} ${this.friend.lastName}`
        : "";
    }
  }
};
</script>
