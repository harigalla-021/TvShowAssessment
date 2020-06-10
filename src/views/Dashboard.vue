<template>
  <div class="home">
    <v-container grid-list-xl>
      <v-row>
        <v-col cols="12">
          <h1 class="display-1 font-weight-light">Pick your poison</h1>
        </v-col>
        <v-col md="8" cols="12" class="mt-3">
          <v-select
            v-model="genreChoice"
            :items="genres"
            filled
            label="Genre"
            @change="genrePicker"
            prepend-inner-icon="mdi-tag"
          ></v-select>
        </v-col>
      </v-row>

      <v-layout row class="hidden-sm-and-down mt-5">
        <v-flex xs4 v-for="(show,i) in shows.slice(0,15)" :key="i">
          <show-card :show="show"></show-card>
        </v-flex>
      </v-layout>

      <v-layout class="hidden-sm-and-up mt-3">
        <v-carousel cycle height="500" hide-delimiters>
          <v-carousel-item v-for="(show,i) in shows.slice(0,15)" :key="i">
            <show-card :show="show"></show-card>
          </v-carousel-item>
        </v-carousel>
      </v-layout>

      <v-container class="hidden-md-and-up hidden-xs-only">
        <v-carousel cycle hide-delimiters height="800" max-width="500">
          <v-carousel-item v-for="(show,i) in shows" :key="i">
            <show-card :show="show"></show-card>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-container>
  </div>
</template>


<script>
import { getAllShows } from "@/service/shows.service.js";
import ShowCard from "../components/ShowCard";
export default {
  name: "Dashboard",

  components: {
    ShowCard
  },
  data: () => ({
    shows: [],
    data: [],
    genreChoice: null,
    genres: [
      "Drama",
      "Crime",
      "Comedy",
      "Action",
      "Thriller",
      "Science-Fiction",
      "Horror",
      "Anime",
      "Adventure",
      "Mystery"
    ] // few popular genres
  }),
  created() {
    getAllShows()
      .then(resp => {
        this.data = resp.data;
        this.data.forEach(element => {
          if (element.rating.average > 8) {
            // display shows only above 8 rating
            this.shows.push(element);
          }
          this.shows = this.shuffleArray(this.shows);
        });
      })
      .catch(err => {
        alert(err);
      });
  },
  methods: {
    shuffleArray(arr) {
      // to get random shows everytime
      let counter = arr.length;

      while (counter > 0) {
        let i = Math.floor(Math.random() * counter);
        counter--;
        let temp = arr[counter];
        arr[counter] = arr[i];
        arr[i] = temp;
      }
      return arr;
    },
    genrePicker() {
      if (this.genreChoice != null) {
        this.shows = [];
        this.data.forEach(e => {
          if (e.genres.includes(this.genreChoice)) {
            this.shows.push(e);
          }
        });
        this.shows = this.shuffleArray(this.shows);
      }
    }
  }
};
</script>