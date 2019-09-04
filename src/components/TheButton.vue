<template>
  <button
    class="calculator-btn"
    :disabled="disable && button.value !== 'all-clear'"
    :style="cssStyle"
    :class="cssClasses"
    @click="emitValue"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["button", "active", "disable"],
  methods: {
    emitValue() {
      this.$emit("pressed", this.button.value);
    }
  },
  computed: {
    cssClasses() {
      return `${this.button.class}${this.active ? " active" : ""}`;
    },
    cssStyle() {
      return {
        "grid-area": `${this.button.row ? this.button.row : "auto"}/${
          this.button.column ? this.button.column : "auto"
        }/${this.button.rowEnd ? this.button.rowEnd : "auto"}/${
          this.button.columnEnd ? this.button.columnEnd : "auto"
        }`
      };
    }
  }
};
</script>
<style scoped>
button {
  height: 60px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #c4c4c4;
  background-color: transparent;
  font-size: 2rem;
  color: #333;
}

button:hover {
  background-color: #eaeaea;
}

.operator {
  color: #337cac;
}

.operator.active {
  background-color: lightgray;
  border-color: gray;
}

.red {
  background-color: #f0595f;
  border-color: #b0353a;
  color: #fff;
}

.red:hover {
  background-color: #f17377;
}

button:disabled {
  background-color: gray !important;
}

.blue {
  background-color: #2e86c0;
  border-color: #337cac;
  color: #fff;
  height: 100%;
}

.blue:hover {
  background-color: #4e9ed4;
}
</style>