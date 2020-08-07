<template>
  <v-container>
    <v-row>
      <v-col cols="12" >
        <slot />
      </v-col>
    </v-row>

    <v-row align="center"  id="portfolio">
      <h1 class="text-center subheading">Nosso Portfólio</h1>
    </v-row>

    <v-row>
      <feed-card
        v-for="(article, i) in paginatedArticles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-row>

    <v-row align="center">
      <v-col cols="3">
        <baseBtn v-if="page !== 1" class="ml-0" square title="Previous page" @click="page--">
          <v-icon>mdi-chevron-left</v-icon>
        </baseBtn>
      </v-col>

      <v-col class="text-center subheading" cols="6">PAGE {{ page }} OF {{ pages }}</v-col>

      <v-col class="text-right" cols="3">
        <baseBtn
          v-if="pages > 1 && page < pages"
          class="mr-0"
          square
          title="Next page"
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </baseBtn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Utilities
import { mapState } from "vuex";

import baseBtn from "./base/Btn.vue";
import baseSubheading from "./base/Subheading.vue";

import system_backend from "../data/system.json";

export default {
  name: "Feed",

  components: {
    baseBtn,
    FeedCard: () => import("@/components/FeedCard"),
  },

  data: () => ({
    isLoad: false,
    layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
    page: 1,
  }),

  computed: {
    ...mapState(["articles"]),
    pages() {
      return Math.ceil(this.articles.length / 11);
    },
    paginatedArticles() {
      const start = (this.page - 1) * 11;
      const stop = this.page * 11;

      return this.articles.slice(start, stop);
    },
  },

  methods: {
    getHttp: function () {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      };
      var psta = ''
      var image_capa = ""
      fetch(system_backend[0].backend + "/portfoliolist/", { headers })
        .then((response) => response.json())
        .then((data) => {
          for (const line of data) {
            if(line.pasta_bucket != '')
              this.pasta = '/'+line.pasta_bucket
            if(line.old_portfolio_name != '')
               this.pasta = '/'+line.old_portfolio_name
              

            this.articles.push({
              title: line.titulo,
              author: line.local,
              category: line.ds_categoria,
              hero: "moroccandays.jpg",
              href: this.pasta,
              src: line.image_capa,
            });
          }
          this.isLoad = false;
        })
        .catch((error) => {
          console.error("Não carregou o serviço de portfolios", error);
        });
    },
  },

  mounted() {
    if( this.articles.length <= 0 )
      this.getHttp();
  },

  watch: {
    page() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
