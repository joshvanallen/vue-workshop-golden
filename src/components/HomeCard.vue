<template>
  <v-card id="favs">
    <v-card-text class="pa-0">
      <v-container class="pa-0">
        <div class="layout row ma-0">
          <div class="sm6 xs6 flex">
            <div
              class="layout column ma-0 justify-center align-center icon-holder"
            >
              <slot name="icon"></slot>
            </div>
          </div>
          <div class="sm6 xs6 flex text-sm-center py-3">
            <div class="headline">
              <slot name="headline"></slot>
            </div>
            <span class="caption">
              <slot name="count"></slot>
            </span>
          </div>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.icon-holder {
  height: 100%;
}
</style>
