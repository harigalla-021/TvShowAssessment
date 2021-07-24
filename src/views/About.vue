<template>
  <div class="about">
    <v-container fluid v-if="show && !showSpinner">
      <v-layout row>
        <v-col cols="12">
          <h1 class="display-3">{{show.name}}</h1>
        </v-col>
      </v-layout>
      <v-layout row>
        <v-col cols="12" md="6">
          <v-img :src="show.image.original" aspect-ratio="0.75" v-if="show.image"></v-img>
          <v-img v-else src="@/assets/NoImageAvailable.png" aspect-ratio="1"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <p v-html="show.summary" class="headline font-weight-thin" v-if="show.summary"></p>
        </v-col>
      </v-layout>
      <v-row>
        <v-col cols="12">
          <v-col>
            <div v-if="show.language">
              <v-icon class="display-1">mdi-volume-high</v-icon>
              {{show.language}}
            </div>
            <v-rating
              v-model="show.rating.average"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
              length="10"
            >{{show.rating.average}}</v-rating>
            <div v-if="show.rating.average">{{show.rating.average}}</div>
            <div v-else>No Rating</div>
          </v-col>
          <div v-if="show.genres" class="d-inline align-right">
            <v-col v-for="(genre,i) in show.genres" :key="i" class="d-inline">
              <v-chip class="ma-2" color="white" label text-color="black">
                <v-icon left>mdi-tag</v-icon>
                {{genre}}
              </v-chip>
            </v-col>
          </div>
        </v-col>
      </v-row>

      <v-row class="hidden-xs-only">
        <strong>Official site:</strong>
        <a :href="show.officialSite" target="_blank" v-if="show.officialSite">{{show.officialSite}}</a>
        <v-spacer></v-spacer>
        <strong>Status:</strong>
        <p v-if="show.status">{{show.status}} &nbsp;</p>
      </v-row>

      <v-row>
        <v-btn :href="show.url" target="_blank" v-if="show.url">Click here for more info</v-btn>
        <v-spacer></v-spacer>
        <strong>First premiered on:</strong>
        <p v-if="show.premiered">{{show.premiered}}</p>
      </v-row>
      <h1 class="display-2 hidden-xs-only mt-12">Cast</h1>
      <v-container grid-list-xl class="hidden-xs-only">
        <v-layout row>
          <v-flex xs3 v-for="(cast,i) in crew" :key="i">
            <v-card
              class="d-inline-block mx-auto"
              shaped
              outlined
              :href="cast.person.url"
              target="_blank"
              v-if="cast.person.url"
            >
              <v-container>
                <v-row justify="space-between">
                  <v-col cols="auto">
                    <v-img
                      height="200"
                      width="200"
                      :src="cast.person.image.medium"
                      v-if="cast.person.image"
                    ></v-img>
                    <v-img v-else src="@/assets/NoImageAvailable.png"></v-img>
                    <p align="center" v-if="cast.person.name">{{cast.person.name}}</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
    <div v-if="showSpinner" class="spinner"></div>
  </div>
</template>


<script>
import { getShow } from "@/service/shows.service.js";
export default {
  name: "About",

  data: () => ({
    show: null,
    crew: null,
    showSpinner: false,
  }),
  created() {
    this.displayShow();
  },
  methods: {
    displayShow() {
      this.showSpinner = true;
      getShow(this.$route.params.id) // getting show data using id from url
        .then(resp => {
          this.show = resp.data;
          if (resp.data._embedded) {
            this.crew = resp.data._embedded.cast;
            this.showSpinner = false;
          }
        })
        .catch(err => alert(err));
    }
  }
};
</script>

<style scoped>
.spinner {
  position: absolute;
  left: 35%;
  top: 35%;
  height: 120px;
  width: 120px;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
