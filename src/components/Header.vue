<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <v-btn href="/" class="primary" elevation-15>HOME</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-col cols="12" sm="4">
        <v-autocomplete
          v-model="showName"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          dark
          outlined
          hide-no-data
          hide-details
          label="Search Show"
        ></v-autocomplete>
      </v-col> -->
      <v-col cols="12" sm="2">
        <v-btn href="/search" text>
          <span class="mr-2">Search for a Show</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",

  data: () => ({}),

  methods: {},

  watch: {}
};
</script>