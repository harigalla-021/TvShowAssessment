<template>
  <div>
    <v-app-bar app color="primary" dark>
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
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>