<template>
  <div>
    <v-card class="hidden-sm-and-up" :href="`/about/${show.id}`">
      <v-img
        v-if="show.image"
        :src="show.image.original"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        aspect-ratio="1"
      >
        <v-card-title v-text="show.name"></v-card-title>
        <div v-if="show.rating.average">
          <v-icon color="amber">mdi-star</v-icon>
          {{show.rating.average}}
        </div>
      </v-img>
      <v-img v-else src="@/assets/NoImageAvailable.png" aspect-ratio="1"></v-img>
    </v-card>

    <v-card class="hidden-md-and-up hidden-xs-only" :href="`/about/${show.id}`">
      <v-img :src="show.image.original" aspect-ratio="1.25" v-if="show.image"></v-img>
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
            >{{show.rating.average}}</v-rating>
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
    </v-card>

    <v-card max-width="374" elevation-15 class="hidden-sm-and-down">
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
            >{{show.rating.average}}</v-rating>
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
  </div>
</template>


<script>
export default {
  name: "ShowCard",
  props: ["show"]
};
</script>