<template>
    <div>
        <svg data-v-49310640="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 163" class="logos-bg">
            <path data-v-49310640=""
                  d="m-3.90909,6l48.30303,16c48.30303,16 144.90908,48 241.51514,48c96.60606,0 193.21211,-32 289.81817,-32c96.60606,0 193.21211,32 289.81817,53.3c96.60606,21.7 193.21211,31.7 289.81817,16c96.60606,-16.3 193.21211,-58.3 241.51514,-80l48.30303,-21.3l0,160l-48.30303,0c-48.30303,0 -144.90908,0 -241.51514,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -241.51514,0l-48.30303,0l0,-160z">
            </path>
        </svg>
        <v-footer class="white v-sheet theme--light" data-booted="true">
            <v-container class=" py-5">
                <v-row class="row">
                    <v-col class="col-md-4 col-lg-4 col-xl-4 col-12">
                        <div class="mb-2">
                            <a href="/"
                               class="d-flex align-center text-decoration-none mr-2">
                                <span
                                    class="font-weight-black text-uppercase text-h5 text-truncate"> Cootransvig
                                </span>
                            </a>
                        </div>
                        <div class="text-body-1">


                            <div class="d-flex mb-2 font-weight-bold">
                              <i aria-hidden="true" class="v-icon notranslate mr-2 mdi mdi-map-marker-outline theme--light grey--text text--lighten-1"></i>
                              Calle 14 N° 7-10 Barrio San Luis Villanueva – Guajira
                            </div>

                            <div class="d-flex mb-2">
                              <i aria-hidden="true" class="v-icon notranslate mr-2 mdi mdi-phone-outline theme--light grey--text text--lighten-1"></i>
                              <a href="tel:+573003655682" class="text-decoration-none black--text  text--lighten-2">
                                +57 3003655682
                              </a>
                            </div>

                            <div class="d-flex mb-2">
                              <i aria-hidden="true" class="v-icon notranslate mr-2 mdi mdi-email-outline theme--light grey--text text--lighten-1"></i>
                              <a href="mailto:cootransvigadm1@gmail.com" class="text-decoration-none black--text  text--lighten-2">
                                cootransvigadm1@gmail.com
                              </a>
                            </div>
                        </div>
                    </v-col>
                    <div class="col-md-2 col-lg-3 col-12">
                        <div class="mb-3 body-1 font-weight-bold">Servicios</div>
                        <div v-for="item in services" :key="item.id" class="my-1 body-1">
                            <a class="justify-md-start mt-2 caption text-decoration-none primary--text text--lighten-2">
                                <v-icon color="primary" light left size="18">
                                   {{item.icon}}
                                </v-icon>
                                {{item.name}}
                            </a>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 col-12">
                        <div class="mb-3 body-1 font-weight-bold">Enlaces utiles</div>

                        <div v-for="item in links" :key="item.id" class="my-1 body-1">
                            <a :href="item.route" class=" caption text-decoration-none primary--text text--lighten-2">
                                {{item.title}}
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-2 col-12">
                        <div class="font-weight-bold mb-3">Descarga nuestra APP</div>
                        <v-btn block outlined x-large class="justify-md-start secondary--text">
                            <v-icon left light class="" size="36">
                                mdi-google-play
                            </v-icon>
                            <div class="d-flex flex-column text-left pl-2">
                                <div class="textbase--text">Google Play</div>
                                <div class="caption">Consiguelo ahora</div>
                            </div>

                        </v-btn>

                        <v-btn block outlined x-large light class="justify-md-start mt-2 secondary--text">
                            <v-icon light left size="36">
                                mdi-apple
                            </v-icon>
                            <div class="d-flex flex-column text-left pl-2">
                                <div class="textbase--text">App Store</div>
                                <div class="caption">Consiguelo ahora</div>
                            </div>
                        </v-btn>
                    </div>
                </v-row>

            </v-container>

        </v-footer>

        <v-container class="my-0">
            <div fluid class="d-flex align-center justify-center" >
                <p class="d-inline ">
                    <a href="#" >Términos y Condiciones</a>
                    |  <a href="#modalPoliticas" data-toggle="modal">Políticas de Privacidad</a>
                    |  Diseñado por: &nbsp;<span class="secondary--text "> Kendy Liceth Alfaro & Eynys Mcken Perez</span> © 2022
                </p>
            </div>
        </v-container>
    </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import WhatsappMessageButton from '@/components/WhatsappMessageButton'

export default {
    name: "footeer-component",
    components: {
        WhatsappMessageButton
    },
    data() {
        return {
            absolute: true,
            redesSociales: [
                {
                    name: 'facebook',
                    icon: 'mdi-facebook',
                    route: 'https://www.facebook.com/jenis.sagbini.9'
                },
                {
                    name: 'twitter',
                    icon: 'mdi-twitter',
                    route: 'https://twitter.com/JenisSagbini'
                },
                {
                    name: 'inkedin',
                    icon: 'mdi-linkedin',
                    route: 'https://www.linkedin.com/in/jenis-del-carmen-sagbini-ech%C3%A1vez-b66a1410a/'
                },
                {
                    name: 'instagram',
                    icon: 'mdi-instagram',
                    route: 'https://www.instagram.com/jenis_sagbini/'
                },
                // {
                //     name: 'whatsapp',
                //     icon: 'mdi-whatsapp',
                //     route: 'https://api.whatsapp.com/send?phone=573002900321'
                // },
            ],
        };
    },
    computed: {
        ...mapState(["links", "services"]),
    },
    methods: {
        cambiarAbsolute() {
            if (screen.width < 1024) {
                console.log(screen.width);
                this.absolute = false;
            } else {
                this.absolute = true;
            }
        }
    },
    mounted() {
        console.log("Component mounted.");
        this.cambiarAbsolute();
    }
};
</script>

<style>
.logos-bg {
    fill: white;
}

.w-half {
    width: 50% !important;
}
</style>
