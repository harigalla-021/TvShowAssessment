<template>
  <div class="home">
    <v-container grid-list-xl>
      <v-layout-row>
        <h1 class="display-1 font-weight-light">A few popular shows for you</h1>
      </v-layout-row>
      <br />
      <br />
      <v-layout row>
        <v-flex xs4 v-for="(show,i) in shows.slice(0,15)" :key="i">
          <v-card max-width="374" elevation-15>
            <v-img :src="show.image.original" aspect-ratio="0.75" v-if="show.image"></v-img>
            <v-img v-else src="@/assets/NoImageAvailable.png" aspect-ratio="1"></v-img>
            <v-card-title v-if="show.name">
              {{show.name}}
              <v-spacer></v-spacer>
              <v-icon v-if="show.language">mdi-volume-high</v-icon>
              {{show.language}}
            </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <div>
                  <v-rating
              v-model="show.rating.average"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
              length="10"
              v-if="show.rating.average"
            ></v-rating>
                </div>
                <div class="grey--text ml-4" v-if="show.rating.average">{{show.rating.average}}</div>
                <div v-else class="grey--text ml-4">No Rating</div>
              </v-row>

              <v-row align="center" class="mx-0" v-if="show.genres">
                <div class="my-4 subtitle-1" v-for="(genre,j) in show.genres" :key="j">
                  <v-icon>mdi-tag</v-icon>
                  {{genre}}
                </div>
              </v-row>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-btn color="orange" text :href="`/about/${show.id}`">View Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import { getAllShows } from "@/service/shows.service.js";
export default {
  name: "Home",

  data: () => ({
    shows: [],
    data: []
  }),
  created() {
    getAllShows()
      .then(resp => {
        this.data = resp.data;
        this.data.forEach(element => {
          if (element.rating.average > 8) {      // display shows only above 8 rating
            this.shows.push(element);
          }
        });
      })
      .catch(err => {
        alert(err);
      });
  }
};
</script>