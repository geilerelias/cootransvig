<template>
    <app-layout>
        <v-sheet style="margin-top: -65px">
            <v-img :src="bg"
                   gradient="to top, rgb(13 3 29 / 64%), rgb(25 25 38 / 65%)"
                   :height="'90vh'">
                <div class=" fill-height">
                    <v-responsive class="d-flex align-end  fill-height"
                                  style="height: 100%; width: 100%;">
                        <v-row class="align-end"
                               style="height: 100%; width: 100%; margin: 0px !important;padding: 0px !important;">
                            <v-col class="col-12 d-flex align-end flex-column pt-12"
                                   style="margin: 0px !important;padding: 0px !important;">
                                <v-container class="px-5 pt-12 mt-12 d-flex align-center justify-center">

                                    <v-row class="align-end align-bottom">
                                        <v-col class="col-md-6 col-12">
                                            <p :class="$vuetify.breakpoint.smAndDown?'display-1':'display-2'"
                                               class="mb-4 text-left white--text">
                                                Cootransvig
                                            </p>
                                            <p class="title font-weight-light mb-4 text-left white--text ">
                                                Somos una cooperativa que ofrece
                                                <span class="font-weight-bold ">Servicios de Transportes</span>
                                                especiales, empresariales, turísticos y escolares.
                                            </p>
                                            <inertia-link :href="route('about-us')">
                                                <v-btn class="primary--text font-weight-bold  mr-4 mb-1  white"
                                                       contained dark
                                                       outlined
                                                       rounded style="height: 50px;">
                                                    saber más
                                                </v-btn>
                                            </inertia-link>
                                            <inertia-link :href="route('contact')">
                                                <v-btn
                                                    class="font-weight-bold  mr-4 mb-1  v-btn--depressed white--text"
                                                    dark
                                                    outlined
                                                    rounded
                                                    style="height: 50px;">
                                                    Contáctenos
                                                </v-btn>
                                            </inertia-link>
                                        </v-col>

                                    </v-row>

                                </v-container>
                                <svg style="height: 100% !important; width:100% !important;"
                                     viewBox="0 0 1428 174"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                        <g fill="#FFFFFF" fill-rule="nonzero"
                                           transform="translate(-2.000000, 44.000000)">
                                            <path
                                                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                                                opacity="0.100000001"></path>
                                            <path
                                                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                                opacity="0.100000001"></path>
                                            <path id="Path-4"
                                                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                                                  opacity="0.200000003"></path>
                                        </g>
                                        <g fill="#FFFFFF" fill-rule="nonzero"
                                           transform="translate(-4.000000, 76.000000)">
                                            <path
                                                d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </v-col>
                        </v-row>
                    </v-responsive>
                </div>
            </v-img>
        </v-sheet>


        <v-sheet light class="white">
            <v-container class="py-2">
                <div class="text-center my-2">
                    <div class="d-inline-flex mb-4">
                        <v-avatar class="primary"
                                  size="56">
                            <v-icon dark
                                    size="28">
                                mdi-file-tree
                            </v-icon>
                        </v-avatar>
                    </div>
                    <h1 class="text-uppercase text-h5 font-weight-bold mb-2 text-center">
                        Nuestros servicios
                    </h1>
                    <v-responsive class="primary mx-auto mb-2" style="max-width: 28px;">
                        <v-divider role="separator" aria-orientation="horizontal" class=" theme--light"/>
                    </v-responsive>
                </div>
                <v-responsive class="mx-auto" style="max-width: 1200px;">
                    <div class="v-responsive__content">
                        <div class="text-h6 text-lg-h5 mt-4">
                            Servicios especializados de “c” en su calidad de empresa
                            integrada en soluciones de transporte para el sector Caribe, los cuales pone
                            a su disposición como posible solución a los requerimientos identificados en
                            su organización así
                        </div>
                    </div>
                </v-responsive>
            </v-container>
            <v-container class=" py-4 py-lg-8">
                <v-row class="row">
                    <v-col v-for="item in services" :key="item.id"
                           class="col-sm-4 col-lg-3 col-12">
                        <v-card class="py-4 px-2  theme--light">
                            <v-responsive class=" mx-auto text-center"
                                          style="max-width: 300px;">
                                <div class="mb-2">
                                    <v-icon size="60"
                                            class="text-h1 primary--text" v-text="item.icon">

                                    </v-icon>
                                </div>
                                <div class="text-h6 mt-3">{{ item.name }}</div>
                                <div class="font-weight-regular mt-2">
                                    {{ item.description }}
                                </div>
                            </v-responsive>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>


        <div class="v-sheet theme--light transparent">
            <v-container class=" py-4 py-lg-8">
                <div class="text-center">
                    <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Trabajando con nosotros</div>
                    <h1 class="text-uppercase text-h5 font-weight-bold mb-2 text-center">
                        Conoce nuestro equipo
                    </h1>
                    <v-responsive class="primary mx-auto mb-2" style="max-width: 28px;">
                        <v-divider role="separator" aria-orientation="horizontal" class=" theme--light"/>
                    </v-responsive>
                    <v-responsive class="mx-auto" style="max-width: 1200px;">
                        <div class="text-h6 text-lg-h5 mt-4 text-justify">
                            Contamos con un grupo de profesionales altamente
                            comprometidos y calificados que ponen su experiencia al servicio de los
                            usuarios, empresas e instituciones
                        </div>
                    </v-responsive>
                </div>

                <div class="row mt-6 text-center d-flex justify-center">
                    <div class="text-center col-sm-6 col-lg-3 col-12">
                        <div class="v-avatar" style="height: 220px; min-width: 220px; width: 220px;">
                            <div class="v-image v-responsive theme--light">
                                <div class="v-responsive__sizer" style="padding-bottom: 125%;"></div>
                                <div class="v-image__image v-image__image--cover"
                                     style="background-image: url(&quot;https://carbon-ui.indielayer.com/images/team/1.jpeg&quot;); background-position: center center;"></div>
                                <div class="v-responsive__content" style="width: 300px;"></div>
                            </div>
                        </div>
                        <div class="text-h5 mt-3">Mary Blench</div>
                        <div class="text-h6 secondary--text">Co-Founder &amp; CEO</div>
                    </div>
                    <div class="text-center col-sm-6 col-lg-3 col-12">
                        <div class="v-avatar" style="height: 220px; min-width: 220px; width: 220px;">
                            <div class="v-image v-responsive theme--light">
                                <div class="v-responsive__sizer" style="padding-bottom: 66.6667%;"></div>
                                <div class="v-image__image v-image__image--cover"
                                     style="background-image: url(&quot;https://carbon-ui.indielayer.com/images/team/2.jpeg&quot;); background-position: center center;"></div>
                                <div class="v-responsive__content" style="width: 300px;"></div>
                            </div>
                        </div>
                        <div class="text-h5 mt-3">John Sothcott</div>
                        <div class="text-h6 secondary--text">Co-Founder &amp; CTO</div>
                    </div>
                    <div class="text-center col-sm-6 col-lg-3 col-12">
                        <div class="v-avatar" style="height: 220px; min-width: 220px; width: 220px;">
                            <div class="v-image v-responsive theme--light">
                                <div class="v-responsive__sizer" style="padding-bottom: 140.667%;"></div>
                                <div class="v-image__image v-image__image--cover"
                                     style="background-image: url(&quot;https://carbon-ui.indielayer.com/images/team/4.jpeg&quot;); background-position: center center;"></div>
                                <div class="v-responsive__content" style="width: 300px;"></div>
                            </div>
                        </div>
                        <div class="text-h5 mt-3">Nadia Meigh</div>
                        <div class="text-h6 secondary--text">Director of Operations</div>
                    </div>
                </div>
            </v-container>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import bg from '@/../images/bg-home.jpg'

export default {
    components: {
        AppLayout,
    },
    name: "Home",
    data: () => ({
        bg,
        services: [
            {
                name: 'Viajes',
                icon: 'mdi-car-side',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, repudiandae, rerum! Facere facilis, nemo? Ad animi debitis nemo nihil provident'
            },
            {
                name: 'Encomiendas',
                icon: 'mdi-package-variant-closed',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, repudiandae, rerum! Facere facilis, nemo? Ad animi debitis nemo nihil provident'
            },
            {
                name: 'Servicio especial',
                icon: 'mdi-car-estate',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, repudiandae, rerum! Facere facilis, nemo? Ad animi debitis nemo nihil provident'
            }, {
                name: 'Servicio escolar',
                icon: 'mdi-bus-school',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, repudiandae, rerum! Facere facilis, nemo? Ad animi debitis nemo nihil provident'
            },
        ]
    }),
}
</script>

<style scoped>

</style>
