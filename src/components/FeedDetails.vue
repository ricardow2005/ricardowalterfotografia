<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <slot />
      </v-col>
    </v-row>

    <v-row>
      <v-card class="mx-auto" :loading="isLoad" height="100%" width="100%">
        <v-container fluid>
          <v-row dense>
            <v-col v-for="card in portfolio" :key="card.title">
              <h1 class="text-center subheading">{{ card.title }}</h1>
              <br />

              <h4 class="text-center subheading">{{ card.description }}</h4>

              <v-row align="center" justify="center">
                <template v-for="(item, i) in imagesUrl">
                  <v-col :key="i" md="6">
                    <v-hover v-slot:default="{ hover }">
                      <v-card
                        :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }"
                        max-height="225"
                        max-width="500"
                        contain
                      >
                        <v-img
                          :src="item.src"
                          max-height="225"
                          max-width="500"
                          contain
                          @click="dialog = true; itemIndex=item"
                        >
                          <v-card-title class="title white--text">
                            <v-row class="fill-height flex-column" justify="space-between">
                              <div class="align-self-center">
                                <v-btn
                                  v-for="(icon, index) in icons"
                                  :key="index"
                                  :class="{ 'show-btns': hover }"
                                  icon
                                >
                                  <v-icon
                                    :class="{ 'show-btns': hover }"
                                    color="transparent"
                                  >{{ icon }}</v-icon>
                                </v-btn>
                              </div>
                            </v-row>
                          </v-card-title>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                </template>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialog" width="600px" :fullscreen="isFull">
        <v-card align="center" justify="center">
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false;isFull=false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>{{ this.itemIndex.description }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="isFull = !isFull">
                <v-icon>mdi-fullscreen</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list three-line subheader>
            <v-carousel hide-delimiters>
              <v-carousel-item contain v-for="(item,i) in imagesUrl" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>
          </v-list>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
<script>
// Utilities
import { mapState } from "vuex";

import baseBtn from "./base/Btn.vue";
import baseSubheading from "./base/Subheading.vue";

//import portfolioJson from "../data/portfolio.json";
import system_backend from "../data/system.json";

export default {
  name: "FeedDetails",
  params: [],
  portfolio: [],
  imagesUrl: [],

  components: {
    baseBtn,
    FeedDetailCard: () => import("@/components/FeedDetailCard"),
  },

  mounted() {


    /*    
    for (const item of portfolioJson) {
      if (this.$attrs.id == 1) {
        this.portfolio.push({
          title: item.title,
          description: item.description,
          local: item.local,
          images: item.images,
        });

        for (const item2 of item.images) {
          this.imagesUrl.push({
            src: item2.src,
            description: item2.description,
          });
        }
      }
    } */

    this.getHttp();
  },
  methods: {
    getHttp: function () {
      const headers = { "Content-Type": "application/json" ,  'Access-Control-Allow-Origin':'*' , 'Access-Control-Allow-Credentials': 'true'};

      fetch(
        system_backend[0].backend + this.$router.history.current.path,
        {  headers }
      )
        .then((response) => response.json())
        .then((data) => {
          for (const line of data) {

            this.portfolio.push({
              title: line.titulo,
              description: line.descricao,
              local: line.local,
            });

            for (const line2 of line.images) {
              this.imagesUrl.push({
                src: line2.src,
                description: "teste",
              });
            }
          }
          this.isLoad = false;
        })
        .catch((error) => {
          console.error("Não carregou o serviço", error);
        });
    },
  },

  data: () => ({
    isLoad: true,
    isFull: false,
    dialog: false,
    icons: ["mdi-magnify"],
    transparent: "rgba(255, 255, 255, 0)",
    layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
    page: 1,
    portfolio: [],
    imagesUrl: [],
    itemIndex: [],
  }),

  computed: {},

  watch: {
    page() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
