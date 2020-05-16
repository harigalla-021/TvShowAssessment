<template>
  <div class="about">
    <v-container fluid v-if="show">
      <v-layout row>
        <v-col cols="12">
          <h1 class="display-3">{{show.name}}</h1>
        </v-col>
      </v-layout>
      <v-layout row>
        <v-col cols="12" md="6">
          <v-img :src="show.image.original" aspect-ratio="0.75" v-if="show.image"></v-img>
          <v-img
            v-if="show.image==null"
            src="@/assets/NoImageAvailable.png"
            aspect-ratio="1"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <p v-html="show.summary" class="headline font-weight-thin"></p>
        </v-col>
      </v-layout>
      <v-row>
        <v-col cols="6">
          <v-col>
            <v-icon class="display-1">mdi-volume-high</v-icon>
            {{show.language}}
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
          <v-col v-for="(genre,i) in show.genres" :key="i">
            <v-icon class="display-1">mdi-tag</v-icon>
            {{genre}}
          </v-col>
        </v-col>
      </v-row>

      <v-row>
        <strong>Official site:</strong>
        <a :href="show.officialSite" target="_blank">{{show.officialSite}}</a>
        <v-spacer></v-spacer>
        <strong>Status:</strong>
        <p>{{show.status}} &nbsp;</p>
      </v-row>

      <v-row>
        <v-btn :href="show.url" target="_blank">Click here for more info</v-btn>
        <v-spacer></v-spacer>
        <strong>First premiered on:</strong>
        <p>{{show.premiered}} {{this.$route.params.id}}</p>
      </v-row>
    </v-container>
    <v-container v-else> 
      <h1 class="display-3"> Sorry! Details not Avaliable </h1>
    </v-container>
  </div>
</template>


<script>
import { getShow } from "@/service/shows.service.js";
export default {
  name: "About",

  data: () => ({
    show: null
  }),
  created() {
    getShow(this.$route.params.id)
      .then(resp => (this.show = resp.data))
      .catch(err => alert(err));
  },
  methods: {}
};
</script>
