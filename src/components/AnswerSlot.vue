<template>
  <div class="answer-slot">{{response()}}</div>
</template>
<script>
import magicRespones from "@/assets/responses.json";
export default {
  methods: {
    response() {
      return magicRespones.responses[
        Math.floor(Math.random() * magicRespones.responses.length)
      ];
    }
  }
};
</script>