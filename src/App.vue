<template>
  <v-app id="sandbox">
    <v-navigation-drawer app v-model="primaryDrawerState" overflow width="300">
      <div class="pa-4 text-sm-center teal white--text app-drawer-header">
        <div class="display-2 py-6 app-drawer-header-name">Friends HQ</div>
        <p>Together, we are stronger</p>
      </div>
      <v-spacer></v-spacer>
      <v-list dense>
        <template v-for="(item, i) in navItems">
          <v-divider dark v-if="item.divider" class="my-3" :key="i"></v-divider>
          <v-list-item :key="i" v-else :to="{ name: item.routeName }" :id="item.text.toLowerCase()">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="primaryDrawerState = !primaryDrawerState"></v-app-bar-nav-icon>
      <v-toolbar-title>
        {{
        $route.meta && $route.meta.title ? $route.meta.title : $route.name
        }}
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container grid-list-xl fluid>
        <v-alert
          color="blue-grey"
          dark
          dense
          icon="signal_wifi_off"
          prominent
          v-if="offline"
        >You are offline. Some features may be disabled.</v-alert>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-content>

    <v-footer app inset>
      <span class="px-3">&copy; Looselytyped & Michael Carducci {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data: () => ({
    primaryDrawerState: true,
    navItems: [
      { icon: "home", text: "Home", routeName: "home" },
      { icon: "contacts", text: "Friends", routeName: "friends" },
      { divider: true },
      { icon: "info", text: "About", routeName: "about" }
    ]
  }),
  computed:{
    ...mapGetters(["offline"])
  }
};
</script>