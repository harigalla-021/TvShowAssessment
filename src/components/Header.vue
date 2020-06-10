<template>
  <div>
    <v-app-bar app color="primary" dark class="hidden-sm-and-down">
      <v-toolbar-title>
        <v-btn href="/" class="primary">HOME</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-col cols="12" sm="2">
        <v-btn href="/search" text class="btn-1">
          <span>Search for a Show</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-app-bar>
    <div class="hidden-md-and-up">
      <v-toolbar dark>
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Tv Shows Page</v-toolbar-title>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute temporary dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Tv Shows Page</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item link href="/">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link href="/search">
            <v-list-item-icon>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Search</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data: () => ({
    drawer: false
  })
};
</script>