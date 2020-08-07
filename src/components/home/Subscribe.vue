<template>
  <v-container
    id="subscribe"
    tag="section"
  >
    <baseCard
      color="rgba(203, 170, 92, 0.51)"
      class="pa-3"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="5"
          >
            <baseSubheading class="mb-3">
              Incresva-se
            </baseSubheading>

            <p>
              Informe seu E-Mail para se inscrever e receber as novidades do Nosso Site e Promoções
        
            </p>

            <v-row class="pa-2">
              <v-responsive
                class="overflow-visible mr-2"
                max-width="400"
              >
                <v-text-field
                  hide-details
                  label="Informe se e-Mail"
                  solo
                />
              </v-responsive>

              <v-btn
                :block="$vuetify.breakpoint.xsOnly"
                class="ma-0"
                color="secondary"
                style="height: 48px"
              >
                Inscreva-se
              </v-btn>
            </v-row>
          </v-col>

          <v-col
            cols="12"
            md="6"
            offset-md="1"
          >
            <base-subheading>Contato</base-subheading>

            <v-list class="transparent">
              <v-list-item>
                <v-list-item-avatar
                  color="primary"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-email-outline
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>EMAIL</v-list-item-title>

                <v-list-item-subtitle>
                  RICARDOW2005@GMAIL.COM
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon
                    class="elevation-4"
                  
                  >
                    mdi-map-marker
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>ENDEREÇO</v-list-item-title>

                <v-list-item-subtitle>
                  Rua: Pastor Lotz n43 - Corupá - SC
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-phone
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>Telefone/WhatsApp</v-list-item-title>
                <v-list-item-subtitle>
                  (47)99134-9156
                </v-list-item-subtitle>

 

              </v-list-item>
              <v-list-item href="https://api.whatsapp.com/send?phone=554791349156&text=Ol%C3%A1%20tudo%20bem?,%20Acessei%20seu%20Site">
                <v-list-item-avatar color="primary">
                  <v-icon
                    class="elevation-4"
                    dark

                  >
                    mdi-whatsapp
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>Telefone/WhatsApp</v-list-item-title>
                <v-list-item-subtitle>
                  (47)99134-9156
                </v-list-item-subtitle>



              </v-list-item>              
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </baseCard>
  </v-container>
</template>

<script>
import baseCard from '../base/Card.vue'
import baseSubheading from '../base/Subheading.vue'

  export default {
    name: 'HomeSubscribe',
    components: { baseCard , baseSubheading},
  }
</script>
