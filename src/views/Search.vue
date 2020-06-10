<template>
  <div class="home">
    <v-container grid-list-xl>
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            v-model="search"
            label=" Show Name"
            outlined
            class="text-1"
            clearable
            autofocus
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="hidden-sm-and-down" v-if="shows">
        <v-col cols="4" v-for="(show,i) in shows" :key="i">
          <show-card :show="show.show"></show-card>
        </v-col>
      </v-row>

      <v-row class="hidden-sm-and-up">
        <v-col cols="6" v-for="(show,i) in shows" :key="i">
          <show-card :show="show.show"></show-card>
        </v-col>
      </v-row>

      <v-row class="hidden-md-and-up hidden-xs-only">
        <v-col cols="6" v-for="(show,i) in shows" :key="i">
          <show-card :show="show.show"></show-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getShowsByName } from "@/service/shows.service.js";
import ShowCard from "../components/ShowCard";
export default {
  name: "Search",

  components: {
    ShowCard
  },

  data: () => ({
    shows: null,
    search: null
  }),
  created() {
    getShowsByName("girls")
      .then(resp => {
        this.shows = resp.data;
      })
      .catch(err => this.alertErr(err));
  },
  watch: {
    search() {
      getShowsByName(this.search)
        .then(resp => {
          this.shows = resp.data;
        })
        .catch(err => this.alertErr(err));
    }
  },
  methods: {
    alertErr(err) {
      alert(err);
    }
  }
};
</script>


