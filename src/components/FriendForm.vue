<template>
  <v-form ref="form" v-model="valid" id="add-friend-form">
    <v-text-field
      v-model="friendData.firstName"
      :rules="nameRules"
      label="First name"
      id="firstName"
      required
    ></v-text-field>

    <v-text-field
      v-model="friendData.lastName"
      :rules="nameRules"
      label="Last name"
      id="lastName"
      required
    ></v-text-field>

    <v-checkbox
      v-model="friendData.fav"
      label="Fav?"
      id="fav"
      required
    ></v-checkbox>

    <v-radio-group v-model="friendData.gender" id="gender" row>
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
      friendData: {
        firstName: "",
        lastName: "",
        fav: false,
        gender: null
      },
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
      this.$set(this.friendData, "firstName", this.friend.firstName);
      this.$set(this.friendData, "lastName", this.friend.lastName);
      this.$set(this.friendData, "fav", this.friend.fav);
      this.$set(this.friendData, "gender", this.friend.gender);
      this.$emit("reset");
    },
    submit() {
      const friend = {
        firstName: this.friendData.firstName,
        lastName: this.friendData.lastName,
        gender: this.friendData.gender,
        fav: this.friendData.fav
      };

      this.$emit("submit", friend);
    }
  },
  mounted() {
    if (this.friend) {
      this.reset();
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
