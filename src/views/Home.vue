<template>
  <v-layout row wrap>
    <v-flex md3 sm12>
      <router-link :to="{ name: 'friends' }">
        <home-card>
          <template v-slot:icon>
            <v-icon color="indigo" size="56px">contacts</v-icon>
          </template>
          <template v-slot:headline>Friends</template>
          <template v-slot:count>{{ friendsCount }}</template>
        </home-card>
      </router-link>
    </v-flex>
    <v-flex md3 sm12>
      <router-link :to="{ name: 'friends', query: { favorites: true } }">
        <home-card>
          <template v-slot:icon>
            <v-icon color="red" size="56px">favorite</v-icon>
          </template>
          <template v-slot:headline>Favorites</template>
          <template v-slot:count>{{ favFriendsCount }}</template>
        </home-card>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

import HomeCard from "@/components/HomeCard";
import { FETCH_FRIENDS } from "@/store/actions.type";

export default {
  components: {
    HomeCard
  },
  computed: {
    ...mapGetters(["friendsCount", "favFriendsCount"])
  },
  mounted() {
    this.$store.dispatch(FETCH_FRIENDS);
  }
};
</script>

<style scoped>
a,
a:any-link,
a:-webkit-any-link {
  text-decoration: none;
}
</style>
