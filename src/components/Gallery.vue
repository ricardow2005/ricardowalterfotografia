<template>
  <v-container>
 

    <v-row align="center">
      <h1 class="text-center subheading">Galeria</h1>
    </v-row>

    <v-row>
      <gallery-card
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
export default {
  name: "Feed",

  components: {
    baseBtn,
    GalleryCard: () => import("@/components/GalleryCard"),
  },

  data: () => ({
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

  watch: {
    page() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
