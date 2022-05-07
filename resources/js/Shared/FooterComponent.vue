<template>
    <div>
        <svg data-v-49310640="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 163" class="logos-bg">
            <path data-v-49310640=""
                  d="m-3.90909,6l48.30303,16c48.30303,16 144.90908,48 241.51514,48c96.60606,0 193.21211,-32 289.81817,-32c96.60606,0 193.21211,32 289.81817,53.3c96.60606,21.7 193.21211,31.7 289.81817,16c96.60606,-16.3 193.21211,-58.3 241.51514,-80l48.30303,-21.3l0,160l-48.30303,0c-48.30303,0 -144.90908,0 -241.51514,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -241.51514,0l-48.30303,0l0,-160z"></path>
        </svg>
        <v-footer class="white v-sheet theme--light" data-booted="true">
            <v-container class=" py-5">
                <v-row class="row">
                    <v-col class="col-md-2 col-lg-3 col-xl-4 col-12">
                        <div class="mb-2">
                            <a href="/ui/landing/footer/footer3#"
                                             class="d-flex align-center text-decoration-none mr-2"><span
                            class="font-weight-black text-uppercase text-h5 text-truncate"> Cootransvig </span></a></div>
                        <div class="text-body-1">
                            <div>W Shoreline Dr, Long Beach, Los Angeles, CA 90802 USA</div>
                            <div class="font-weight-bold mt-2">Email</div>
                            <div><a href="#" class="text-decoration-none caption">hello@loremcompany.com</a></div>
                        </div>
                    </v-col>
                    <div class="col-md-2 col-12">
                        <div class="mb-3 body-1 font-weight-bold">Product</div>
                        <div v-for="item in 4" :key="item.id" class="my-1 body-1">
                            <a href="#"
                               class="text-decoration-none primary--text text--lighten-2">
                                Product {{item}}
                            </a>
                        </div>

                    </div>
                    <v-col class="col-md-2 col-12">
                        <div class="mb-3 body-1 font-weight-bold">Resources</div>
                        <div class="my-1 body-1"><a href="/ui/landing/footer/footer3#"
                                                    class="text-decoration-none primary--text text--lighten-2">Documentation</a>
                        </div>
                        <div class="my-1 body-1"><a href="/ui/landing/footer/footer3#"
                                                    class="text-decoration-none primary--text text--lighten-2">News</a>
                        </div>
                        <div class="my-1 body-1"><a href="/ui/landing/footer/footer3#"
                                                    class="text-decoration-none primary--text text--lighten-2">FAQ</a>
                        </div>
                        <div class="my-1 body-1"><a href="/ui/landing/footer/footer3#"
                                                    class="text-decoration-none primary--text text--lighten-2">Packages</a>
                        </div>
                        <div class="my-1 body-1"><a href="/ui/landing/footer/footer3#"
                                                    class="text-decoration-none primary--text text--lighten-2">Components</a>
                        </div>
                    </v-col>
                    <div class="col-md-2 col-12">
                        <div class="mb-3 body-1 font-weight-bold">Company</div>
                        <div class="my-1 body-1"><a href="/ui/landing/footer/footer3#"
                                                    class="text-decoration-none primary--text text--lighten-2">About
                            us</a></div>
                        <div class="my-1 body-1"><a href="/ui/landing/footer/footer3#"
                                                    class="text-decoration-none primary--text text--lighten-2">Carrers</a>
                        </div>
                        <div class="my-1 body-1"><a href="/ui/landing/footer/footer3#"
                                                    class="text-decoration-none primary--text text--lighten-2">Press</a>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-2 col-12">
                        <div class="font-weight-bold mb-3">Download Apps</div>
                        <button type="button"
                                class="justify-md-start v-btn v-btn--block v-btn--outlined theme--light v-size--x-large secondary--text">
                            <span class="v-btn__content"><i aria-hidden="true"
                                                            class="v-icon notranslate v-icon--left mdi mdi-google-play theme--light"
                                                            style="font-size: 36px;"></i><div
                                class="d-flex flex-column text-left pl-2"><div class="textbase--text">Google Play</div><div
                                class="caption">Get it Now</div></div></span></button>
                        <button type="button"
                                class="justify-md-start mt-2 v-btn v-btn--block v-btn--outlined theme--light v-size--x-large secondary--text">
                            <span class="v-btn__content"><i aria-hidden="true"
                                                            class="v-icon notranslate v-icon--left mdi mdi-apple theme--light"
                                                            style="font-size: 36px;"></i><div
                                class="d-flex flex-column text-left pl-2"><div class="textbase--text">App Store</div><div
                                class="caption">Get it Now</div></div></span></button>
                    </div>
                </v-row>
            </v-container>
        </v-footer>
    </div>
</template>

<script>
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
            services: [
                {name: 'Desarrollo Web', src: '', route: ''},
                {name: 'Auditoría de Sistemas', src: '', route: ''},
                {name: 'Marketing', src: '', route: ''},
                {name: 'Emprendimiento', src: '', route: ''},
                {name: 'Capacitaciones', src: '', route: ''},
                {name: 'Investigación', src: '', route: ''},
                {name: 'Asesorías', src: '', route: ''},
            ]

        };
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
