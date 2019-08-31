<template>
  <div>
    <div @click="shake" class="ball" v-bind:class="ballColor">
      <transition name="component-fade" mode="out-in">
        <CoverSlot v-if="!this.clicked">{{ballNumber}}</CoverSlot>
      </transition>
      <transition name="component-fade" mode="out-in">
        <AnswerSlot v-if="this.clicked"></AnswerSlot>
      </transition>
    </div>
  </div>
</template>

<script>
import CoverSlot from "@/components/CoverSlot";
import AnswerSlot from "@/components/AnswerSlot";
export default {
  data() {
    return {
      clicked: false
    };
  },
  props: {
    ballNumber: {
      default: 8,
      type: Number
    },
    ballColor: {
      default: "black",
      type: String
    }
  },
  components: {
    CoverSlot,
    AnswerSlot
  },
  methods: {
    shake() {
      this.clicked = !this.clicked;
    }
  }
};
</script>
