<template>
  <OtherComponent stringProp="Hello World!" :numberProp="2"></OtherComponent>
</template>

<script>
import OtherComponent from "./OtherComponent";
export default {
  components: {
    OtherComponent
  }
};
</script>
