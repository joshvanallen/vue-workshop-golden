<template>
  <div>
    <h2>With an Array</h2>
    <ul>
      <li :key="currentNumber" v-for="(currentNumber) in numbers">{{currentNumber}}</li>
    </ul>

    <h2>With an Object</h2>
    <ul>
      <li :key="value" v-for="(value, name) in objectKeys">{{name}}: {{value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
      objectKeys: {
        fistName: "John",
        lastName: "Doe",
        job: "foobar"
      }
    };
  }
};
</script>
