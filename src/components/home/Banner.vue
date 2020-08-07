<template>
  <section id="hero">
    <v-row no-gutters>
      <v-carousel hide-delimiters cycle>
        <v-carousel-item v-for="(item,i) in items" :key="i"  
          reverse-transition="fade-transition"
          transition="fade-transition"  >
          <v-img
             :src="require(`@/assets/banner/${item.src}`)"
              
              height="100%"
              width="100%"
             
              class="grey darken-4"
            >            <v-theme-provider dark>
              <v-container fill-height>
                <v-row  class="white--text mx-auto" justify="center">
                
                  <v-btn class="align-self-end"   fab outlined @click="$vuetify.goTo('#about')">
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
              </v-img>


         
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </section>
</template>

<script>

import banner from '../../data/bannerImages.json'

export default {
  name: "HomeBanner",
  data() {
    return {
      items: [
        { src: 'IMG_4011.jpg' },
        { src: 'IMG_4130.jpg' },
        { src: 'IMG_4618-Editar-Editar.jpg' },
        { src: 'IMG_6764.jpg' },
        { src: 'IMG_6821-Editar.jpg' },
        { src: 'IMG_9609.jpg' },
      ],
    };
  },
};
</script>
