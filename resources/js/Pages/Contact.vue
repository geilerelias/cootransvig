<template>
  <app-layout>
      <v-sheet light class="rounded-0" style="padding: 56px 0px;">
          <v-container class="container">
              <v-row class="justify-space-between">
                  <v-col class="col-md-5 col-12">
                      <div>
                          <v-container class="container pa-0" pace="6">
                              <v-row class="no-gutters justify-start">
                                  <v-col class="col-12">
                                      <h3
                                          class="text-uppercase text-h6 font-weight-bold mb-1 text-left">
                                          MANTENTE EN CONTACTO CON NOSOTROS
                                      </h3>
                                      <v-responsive class=" base-divider primary mr-auto mb-6"
                                                    style="max-width: 28px;">
                                          <v-divider role="separator" aria-orientation="horizontal"
                                                     class="theme--light"/>
                                      </v-responsive>
                                      <p class="base-body text-body-1 grey--text text--darken-1 text-left mb-6">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis debitis dolor, ducimus, eligendi esse est facere fuga itaque magni maiores odio officia pariatur quasi quo voluptate. Quidem, voluptate?
                                      </p>
                                  </v-col>
                              </v-row>
                          </v-container>
                          <div>
                              <div class="pt-2 mb-0 d-flex">
                                  <div class="d-inline-flex mb-3 align-self-start">
                                      <v-avatar class="transparent"
                                                size="72"
                                      >
                                          <v-icon size="36">
                                              mdi-map-marker-outline
                                          </v-icon>
                                      </v-avatar>
                                  </div>
                                  <div class="d-flex justify-center align-center">
                                      <p class="base-body text-body-1 mx-auto grey--text text--darken-1 text-left mb-0"
                                         style="max-width: 700px;">
                                          Lorem ipsum dolor sit amet, consectetur.
                                      </p>
                                  </div>
                              </div>
                              <v-divider class="my-2"></v-divider>
                              <div class="pt-2 mb-0 d-flex">
                                  <div class="base-avatar d-inline-flex mb-3 align-self-start"><!---->
                                      <v-avatar class="transparent" size="72">
                                          <v-icon size="36">
                                              mdi-cellphone
                                          </v-icon>
                                      </v-avatar>
                                  </div>

                                  <div class="d-flex flex-column justify-center align-center">
                                      <a
                                          class="base-body text-body-1 mx-auto grey--text text--darken-1 text-left mb-0"
                                          href="tel:3004361660">
                                          +57 300 436 1660
                                      </a>
                                      <a
                                          class="base-body text-body-1 mx-auto grey--text text--darken-1 text-left mb-0"
                                          href="tel:3003285091"
                                      >
                                          +57 300 328 5091
                                      </a>
                                  </div>
                              </div>
                              <hr role="separator" aria-orientation="horizontal" class="my-2 v-divider theme--light">
                              <div class="pt-2 mb-0 d-flex align-center">
                                  <div class="base-avatar d-inline-flex mb-3 align-self-start">
                                      <v-avatar class="transparent" size="72">
                                          <v-icon size="36">
                                              mdi-email
                                          </v-icon>
                                      </v-avatar>
                                  </div>
                                  <div class="d-flex flex-column justify-center  align-center">
                                      <a
                                          href="mailto:contacto@cafeproducciones.com"
                                          class="text-body-1 grey--text text--darken-1 mb-0">
                                          contacto@cafeproducciones.com
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </v-col>

                  <v-col class="col-md-6 col-12">
                      <div>
                          <v-container class="container pa-0" space="4">
                              <v-row class="row no-gutters justify-start">
                                  <v-col class="col col-12">
                                      <h3
                                          class="text-uppercase text-h6 font-weight-bold mb-1 text-left">
                                          ENVÍENOS SU MENSAJE
                                      </h3>
                                      <div class="v-responsive base-divider primary mr-auto mb-6"
                                           style="max-width: 28px;">
                                          <div class="v-responsive__content">
                                              <hr role="separator" aria-orientation="horizontal"
                                                  class="v-divider theme--light">
                                          </div>
                                      </div>
                                  </v-col>
                              </v-row>
                          </v-container>

                          <v-text-field
                              dense
                              label="Nombre"
                              outlined
                          ></v-text-field>

                          <v-text-field
                              dense
                              label="Email"
                              outlined
                          ></v-text-field>

                          <v-text-field
                              dense
                              label="Tema"
                              outlined
                          ></v-text-field>

                          <v-textarea
                              dense
                              label="Descripción del mensaje"
                              outlined
                          ></v-textarea>

                          <v-btn class="font-weight-bold accent--text">
                              Enviar mensaje
                          </v-btn>

                      </div>
                  </v-col>
              </v-row>
          </v-container>
      </v-sheet>

      <v-sheet class="rounded-0" style="padding: 0px;width: 100%">
          <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=11.52277934403712,%20-72.90622382964963+(CAFE%20Producciones)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </v-sheet>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
export default {
    components: {
        AppLayout,
    },
    name: "Contact"
}
</script>

<style scoped>

</style>
