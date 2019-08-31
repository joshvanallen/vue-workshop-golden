<template>
  <div @click="bubbleClick" id="example-2">
    <button type="button" @click="btnClick('Button #1')">Button #1</button>
    <button type="button" @click.stop="btnClick('Button #2')">Button #2</button>
    <button type="button" @click.prevent="btnClick('Button #3')">
      Button #3
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    bubbleClick: function(event) {
      alert(
        "Bubble Event Click. \n prevent default: " + event.defaultPrevented
      );
    },
    btnClick: function(name) {
      alert(name);
    }
  }
};
</script>
