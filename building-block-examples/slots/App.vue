<template>
  <div id="example-2">
    <OtherComponent></OtherComponent>
    <OtherComponent>
      <template v-slot>
        Default Slot
      </template>
      <template v-slot:button>
        Just a normal button
      </template>
    </OtherComponent>
  </div>
</template>

<script>
import OtherComponent from "./OtherComponent";
export default {
  components: {
    OtherComponent
  }
};
</script>
