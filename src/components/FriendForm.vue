<template>
  <v-form ref="form" v-model="valid" id="add-friend-form">
    <v-text-field
      v-model="friend.firstName"
      :rules="nameRules"
      label="First name"
      id="firstName"
      required
    ></v-text-field>

    <v-text-field
      v-model="friend.lastName"
      :rules="nameRules"
      label="Last name"
      id="lastName"
      required
    ></v-text-field>

    <v-checkbox
      v-model="friend.fav"
      label="Fav?"
      id="fav"
      required
    ></v-checkbox>

    <v-radio-group v-model="friend.gender" id="gender" row>
      <v-radio label="Male" :value="genders.male"></v-radio>
      <v-radio label="Female" :value="genders.female"></v-radio>
      <v-radio label="Undisclosed" :value="genders.undisclosed"></v-radio>
    </v-radio-group>

    <div class="form-actions">
      <v-btn
        color="success"
        :disabled="!(valid && enabled)"
        id="submit"
        @click="submit"
        >Submit</v-btn
      >
      <v-btn color="error" @click="reset">Reset Form</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      genders: {
        male: "male",
        female: "female",
        undisclosed: "undisclosed"
      },
      nameRules: [v => !!v || "Name is required"]
    };
  },
  props: ["enabled", "friend"],
  methods: {
    reset() {
      this.$emit("reset");
    },
    submit() {
      this.$emit("submit");
    }
  }
};
</script>

<style scoped>
.form-actions {
  display: flex;
  flex-direction: row;
}

.form-actions button {
  margin-right: 10px;
}
</style>
