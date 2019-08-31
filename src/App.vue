<template>
  <v-app id="sandbox">
    <v-navigation-drawer app v-model="primaryDrawerState" overflow width="300">
      <div class="pa-4 text-sm-center teal white--text">
        <div class="display-2 py-6">Friends HQ</div>
        <p>Together, we are stronger</p>
      </div>
      <v-spacer></v-spacer>
      <v-list dense>
        <template v-for="(item, i) in navItems">
          <v-divider dark v-if="item.divider" class="my-3" :key="i"></v-divider>
          <v-list-item
            :key="i"
            v-else
            :to="{ name: item.routeName }"
            :id="item.text.toLowerCase()"
          >
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
      <v-app-bar-nav-icon
        @click.stop="primaryDrawerState = !primaryDrawerState"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <v-container grid-list-xl fluid>
        <h1>Hello World!</h1>
      </v-container>
    </v-content>

    <v-footer app inset>
      <span class="px-3"
        >&copy; Looselytyped & Michael Carducci {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    primaryDrawerState: true,
    navItems: []
  })
};
</script>