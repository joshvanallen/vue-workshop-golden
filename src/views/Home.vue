<template>
  <v-layout row wrap>
    <v-flex md3 sm12>
      <router-link :to="{ name: 'friends' }">
        <home-card>
          <template v-slot:icon>
            <v-icon color="indigo" size="56px">contacts</v-icon>
          </template>
          <template v-slot:headline
            >Friends</template
          >
          <template v-slot:count>{{ friends.length }}</template>
        </home-card>
      </router-link>
    </v-flex>
    <v-flex md3 sm12>
      <router-link :to="{ name: 'friends', query: { favorites: true } }">
        <home-card>
          <template v-slot:icon>
            <v-icon color="red" size="56px">favorite</v-icon>
          </template>
          <template v-slot:headline
            >Favorites</template
          >
          <template v-slot:count>{{ favCount }}</template>
        </home-card>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
import HomeCard from "@/components/HomeCard";
const friends = [];
export default {
  components: {
    HomeCard
  },
  data: () => {
    return {
      friends
    };
  },
  computed: {
    favCount() {
      return this.friends ? this.friends.filter(f => f.fav).length : 0;
    }
  },
  mounted() {
    axios.get("http://localhost:3000/friends").then(response => {
      this.friends = response.data;
    });
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
