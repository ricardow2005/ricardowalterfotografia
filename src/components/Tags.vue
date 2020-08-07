<template>
  <v-container class="pa-0">
    <baseSubheading>Tags</baseSubheading>

    <v-chip
      v-for="(category, i) in categories"
      :key="i"
      class="mr-2"
      color="secondary"
      label
      small
      tag
      text-color="white"
    >{{ category.text }}</v-chip>
  </v-container>
</template>

<script>
// Utilities
import baseSubheading from "./base/Subheading.vue";
import { mapGetters } from "vuex";
import system_backend from "../data/system.json";

export default {
  name: "Tags",
  components: { baseSubheading },

  computed: {},

  data: () => ({
    categories: [],
  }),

  mounted() {
    this.getHttp();
  },
  methods: {
    getHttp: function () {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      };

      fetch(system_backend[0].backend + "/categoria/", { headers })
        .then((response) => response.json())
        .then((data) => {
          for (const line of data) {
            this.categories.push({
              text: line.nome,
            });
          }
        })
        .catch((error) => {
          console.error("Não carregou o serviço de portfolios", error);
        });
    },
  },
};
</script>
