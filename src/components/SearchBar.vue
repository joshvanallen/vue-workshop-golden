<template>
  <div class="search-bar">
    <v-text-field
      :placeholder="placeholder"
      @input="onInput($event)"
      @click:clear="onCleared()"
      clearable
      solo
    ></v-text-field>
    <v-switch
      :input-value="defaultFavs"
      @change="favoriteFilter"
      label="Favorites Only"
    ></v-switch>
  </div>
</template>

<script>
import {
  trimSearchInput,
  generateSearchCriteria
} from "@/shared/helper-functions";
let searchCriteria = generateSearchCriteria(null, false);

export default {
  methods: {
    onInput(event) {
      const trimmedValue = trimSearchInput(event);
      searchCriteria = generateSearchCriteria(
        trimmedValue,
        searchCriteria.favoriteStatus
      );
      this.$emit("search", searchCriteria);
    },
    favoriteFilter(value) {
      searchCriteria = generateSearchCriteria(searchCriteria.text, value);
      this.$emit("search", searchCriteria);
    },
    onCleared() {
      searchCriteria = generateSearchCriteria(null, searchCriteria.favoriteStatus);
      this.$emit("search", searchCriteria);
    }
  },
  computed: {
    defaultFavs() {
      return this.onlyFavs;
    }
  },
  mounted() {
    this.favoriteFilter(this.defaultFavs);
  },
  props: {
    placeholder: {
      default: "Search...",
      type: String
    },
    onlyFavs: {
      default: false,
      type: [Boolean]
    }
  }
};
</script>

<style>
.search-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.search-bar .v-text-field {
  width: 100%;
}
.search-bar .v-text-field__details {
  display: none;
}

.search-bar .v-input--switch {
  margin-top: 0;
}
</style>
