<template>
  <div class="home">
    <v-container grid-list-xl>
      <v-row>
        <v-col>
          <v-text-field v-model="search" label=" Show Name" outlined></v-text-field>
        </v-col>
        <v-col offset-xl>
          <v-btn class="yellow" @click="searchShows">Search</v-btn>
        </v-col>
      </v-row>
      <v-layout row v-if="shows">
        <v-flex xs4 v-for="(show,i) in shows" :key="i">
          <v-card :loading="loading" max-width="374" elevation-15>
            <v-img v-if="show.show.image" :src="show.show.image.original" aspect-ratio="0.75"></v-img>
            <v-img
                v-if="show.show.image==null"
                src="@/assets/NoImageAvailable.png"
                aspect-ratio="1"
              ></v-img>
            <v-card-title v-if="show.show.name">
              {{show.show.name}}
              <v-spacer></v-spacer>
              <v-icon v-if="show.show.language">mdi-volume-high</v-icon>
              {{show.show.language}}
            </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <div>
                  <v-rating
              v-model="show.show.rating.average"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
              length="10"
              v-if="show.show.rating.average"
            ></v-rating>
                </div>
                <div class="grey--text ml-4" v-if="show.show.rating.average">{{show.show.rating.average}}</div>
                <div v-if="show.show.rating.average==null" class="grey--text ml-4">No Rating</div>
              </v-row>

              <v-row align="center" class="mx-0" v-if="show.show.genres">
                <div class="my-4 subtitle-1" v-for="(genre,j) in show.show.genres" :key="j">
                  <v-icon>mdi-tag</v-icon>
                  {{genre}}
                </div>
              </v-row>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-btn color="orange" text :href="`/about/${show.show.id}`">View Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- {{shows}} -->
    </v-container>
  </div>
</template>

<script>
import { getShowsByName } from "@/service/shows.service.js";
export default {
  name: "Home",

  data: () => ({
    shows: null,
    loading: false,
    flag: false,
    search: null
  }),
  created() {
    getShowsByName("girls")
      .then(resp => {
        this.shows = resp.data;
      })
      .catch(err => alert(`${err}`));
  },
  methods: {
    searchShows() {
      getShowsByName(this.search)
        .then(resp => {
          alert(`yes ${resp.data}`)
          this.shows = resp.data;
        })
        .catch(err => alert(`${err}`));
    }
  },
  watch: {
    search() {
      getShowsByName(this.search)
        .then(resp => {
          this.shows = resp.data;
        })
        .catch(err => alert(`${err}`));
    }
  }
};
</script>


