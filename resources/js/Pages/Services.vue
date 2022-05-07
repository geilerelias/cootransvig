<template>
    <app-layout>
        <section class="white">
            <v-container>
                <v-sheet class="theme--light">
                    <div class="d-flex flex-column flex-md-row">
                        <div class="w-full w-md-half d-flex align-center">
                            <div class="pr-6 pr-md-12">
                                <h1 class="text-h6 text-lg-h5 font-weight-bold mt-xl-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, officia?
                                </h1>
                                <div class=" text-lg-h6 mt-5 text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque dignissimos
                                    dolor
                                    doloremque dolorum ea eligendi labore laboriosam laborum minima nesciunt nisi
                                    pariatur
                                    possimus provident, quibusdam quisquam similique vitae voluptatem!

                                </div>
                                <div class="my-4">
                                    <inertia-link href="/contact-us"
                                                  class="text-decoration-none font-weight-bold text-h6 mt-3">
                                        Contactanos
                                    </inertia-link>
                                </div>
                            </div>
                        </div>
                        <div class="w-full w-md-half">
                            <v-img style="max-height: 600px;" cover
                                   src="https://carbon-ui.indielayer.com/images/features/14.jpg"
                                   :aspect-ratio="5/8">
                            </v-img>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row flex-md-row-reverse">
                        <div class="w-full w-md-half d-flex align-center">
                            <div class="pl-6 pl-md-12">
                                <h1 class="text-h6 text-lg-h5 font-weight-bold mt-xl-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, officia?
                                </h1>
                                <div class=" text-lg-h6 mt-5 text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque dignissimos
                                    dolor
                                    doloremque dolorum ea eligendi labore laboriosam laborum minima nesciunt nisi
                                    pariatur
                                    possimus provident, quibusdam quisquam similique vitae voluptatem!

                                </div>
                                <div class="my-4">
                                    <inertia-link href="/contact-us"
                                                  class="text-decoration-none font-weight-bold text-h6 mt-3">
                                        Contactanos
                                    </inertia-link>
                                </div>
                            </div>
                        </div>
                        <div class="w-full w-md-half">
                            <v-img style="max-height: 600px;" cover
                                   src="https://carbon-ui.indielayer.com/images/features/14.jpg"
                                   :aspect-ratio="5/8">
                            </v-img>
                        </div>
                    </div>
                </v-sheet>
            </v-container>
        </section>
        <v-sheet class="transparent">
            <v-container class="container py-8">
                <div class="text-center">
                    <div>
                        <div class=" primary--text">¿Quieres hablar con nosotros?</div>
                        <div class=" mt-1">Nuestro equipo esta aqui para ayudar.</div>
                    </div>
                    <div class="mt-4">
                        <inertia-link href="/about-us">
                            <v-btn elevated
                                   class="my-1 ">
                                Saber más
                            </v-btn>
                        </inertia-link>
                        <inertia-link href="/contact-us">
                            <v-btn elevated
                                   class="my-1 mx-sm-2  primary">
                                Contactanos
                            </v-btn>
                        </inertia-link>
                    </div>
                </div>
            </v-container>
        </v-sheet>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";

export default {
    components: {
        AppLayout,
    },
    name: "Services"
}
</script>

<style>
@media (min-width: 960px) {
    .v-application .w-md-half {
        width: 50% !important;
    }
}

.v-application .w-full {
    width: 100% !important;
}
</style>
