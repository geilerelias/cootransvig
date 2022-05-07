<template>
    <app-layout>

        <v-carousel v-model="model">
            <v-carousel-item
                v-for="(color, i) in colors"
                :key="color"
            >
                <v-sheet
                    :color="color"
                    height="100%"
                    tile
                >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <div class="text-h2">
                            Oferta {{ i + 1 }}
                        </div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>

        <div class="container py-6">
            <div class="row">
                <div class="col-md-4 col-12">
                    <div class="pa-2 v-card v-card--flat v-sheet v-sheet--outlined theme--light">
                        <div class="d-flex align-center">
                            <div class="v-avatar mr-1" small="" style="height: 38px; min-width: 38px; width: 38px;">
                                <div aria-label="Robert Smith" role="img" class="v-image v-responsive theme--light">
                                    <div class="v-responsive__sizer" style="padding-bottom: 106.061%;"></div>
                                    <div class="v-image__image v-image__image--cover"
                                         style="background-image: url(&quot;https://carbon-ui.indielayer.com/images/avatars/avatar1.svg&quot;); background-position: center center;"></div>
                                    <div class="v-responsive__content" style="width: 264px;"></div>
                                </div>
                            </div>
                            <span class="font-weight-bold text-body-2">Robert Smith</span>
                            <div class="spacer"></div>
                            <div class="secondary--text text--lighten-1 text-body-2"> 14 mins</div>
                        </div><!---->
                        <div class="v-image v-responsive my-2 rounded theme--light" style="height: 200px;">
                            <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>
                            <div class="v-image__image v-image__image--cover"
                                 style="background-image: url(&quot;https://carbon-ui.indielayer.com/images/features/7.jpg&quot;); background-position: center center;"></div>
                            <div class="v-responsive__content" style="width: 3000px;"></div>
                        </div>
                        <div class="secondary--text text--lighten-1 text-body-1 my-1">Let's be productive! <a href="#"
                                                                                                              class="text-decoration-none">#productivity</a>
                        </div>
                        <hr role="separator" aria-orientation="horizontal" class="my-1 v-divider theme--light">
                        <div class="ml-n1 d-flex">
                            <div class="mr-1">
                                <button type="button"
                                        class="v-btn v-btn--fab v-btn--round v-btn--text theme--light v-size--small secondary--text text--lighten-1">
                                    <span class="v-btn__content"><i aria-hidden="true"
                                                                    class="v-icon notranslate mdi mdi-message theme--light"
                                                                    style="font-size: 16px;"></i> 4 </span></button>
                            </div>
                            <div class="mr-1">
                                <button type="button"
                                        class="v-btn v-btn--fab v-btn--round v-btn--text theme--light v-size--small secondary--text text--lighten-1">
                                    <span class="v-btn__content"><i aria-hidden="true"
                                                                    class="v-icon notranslate mdi mdi-heart theme--light"
                                                                    style="font-size: 16px;"></i> 32 </span></button>
                            </div>
                            <div class="mr-1">
                                <button type="button"
                                        class="v-btn v-btn--fab v-btn--round v-btn--text theme--light v-size--small secondary--text text--lighten-1">
                                    <span class="v-btn__content"><i aria-hidden="true"
                                                                    class="v-icon notranslate mdi mdi-share theme--light"
                                                                    style="font-size: 16px;"></i> 12 </span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="pa-2 v-card v-card--flat v-sheet v-sheet--outlined theme--light">
                        <div class="d-flex align-center">
                            <div class="v-avatar mr-1" small="" style="height: 38px; min-width: 38px; width: 38px;">
                                <div aria-label="Laura Smith" role="img" class="v-image v-responsive theme--light">
                                    <div class="v-responsive__sizer" style="padding-bottom: 106.061%;"></div>
                                    <div class="v-image__image v-image__image--cover"
                                         style="background-image: url(&quot;https://carbon-ui.indielayer.com/images/avatars/avatar3.svg&quot;); background-position: center center;"></div>
                                    <div class="v-responsive__content" style="width: 264px;"></div>
                                </div>
                            </div>
                            <span class="font-weight-bold text-body-2">Laura Smith</span>
                            <div class="spacer"></div>
                            <div class="secondary--text text--lighten-1 text-body-2"> 32 mins</div>
                        </div><!---->
                        <div class="v-image v-responsive my-2 rounded theme--light" style="height: 200px;">
                            <div class="v-responsive__sizer" style="padding-bottom: 66.6667%;"></div>
                            <div class="v-image__image v-image__image--cover"
                                 style="background-image: url(&quot;https://carbon-ui.indielayer.com/images/features/19.jpg&quot;); background-position: center center;"></div>
                            <div class="v-responsive__content" style="width: 2304px;"></div>
                        </div>
                        <div class="secondary--text text--lighten-1 text-body-1 my-1">Buy fresh local products. Sponsor
                            your local farmers. <a href="#" class="text-decoration-none">#freshlocal</a></div>
                        <hr role="separator" aria-orientation="horizontal" class="my-1 v-divider theme--light">
                        <div class="ml-n1 d-flex">
                            <div class="mr-1">
                                <button type="button"
                                        class="v-btn v-btn--fab v-btn--round v-btn--text theme--light v-size--small secondary--text text--lighten-1">
                                    <span class="v-btn__content"><i aria-hidden="true"
                                                                    class="v-icon notranslate mdi mdi-message theme--light"
                                                                    style="font-size: 16px;"></i> 2 </span></button>
                            </div>
                            <div class="mr-1">
                                <button type="button"
                                        class="v-btn v-btn--fab v-btn--round v-btn--text theme--light v-size--small secondary--text text--lighten-1">
                                    <span class="v-btn__content"><i aria-hidden="true"
                                                                    class="v-icon notranslate mdi mdi-heart theme--light"
                                                                    style="font-size: 16px;"></i> 7 </span></button>
                            </div>
                            <div class="mr-1">
                                <button type="button"
                                        class="v-btn v-btn--fab v-btn--round v-btn--text theme--light v-size--small secondary--text text--lighten-1">
                                    <span class="v-btn__content"><i aria-hidden="true"
                                                                    class="v-icon notranslate mdi mdi-share theme--light"
                                                                    style="font-size: 16px;"></i> 2 </span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="pa-2 v-card v-card--flat v-sheet v-sheet--outlined theme--light">
                        <div class="d-flex align-center">
                            <div class="v-avatar mr-1" small="" style="height: 38px; min-width: 38px; width: 38px;">
                                <div aria-label="Dave Chad" role="img" class="v-image v-responsive theme--light">
                                    <div class="v-responsive__sizer" style="padding-bottom: 106.061%;"></div>
                                    <div class="v-image__image v-image__image--cover"
                                         style="background-image: url(&quot;https://carbon-ui.indielayer.com/images/avatars/avatar16.svg&quot;); background-position: center center;"></div>
                                    <div class="v-responsive__content" style="width: 264px;"></div>
                                </div>
                            </div>
                            <span class="font-weight-bold text-body-2">Dave Chad</span>
                            <div class="spacer"></div>
                            <div class="secondary--text text--lighten-1 text-body-2"> 14 mins</div>
                        </div>
                        <div class="text-h5 my-1">We are preparing the feast. Come and join us at 5pm.</div><!---->
                        <div class="secondary--text text--lighten-1 text-body-1 my-1">Party! <a href="#"
                                                                                                class="text-decoration-none">#feast</a>
                        </div>
                        <hr role="separator" aria-orientation="horizontal" class="my-1 v-divider theme--light">
                        <div class="ml-n1 d-flex">
                            <div class="mr-1">
                                <button type="button"
                                        class="v-btn v-btn--fab v-btn--round v-btn--text theme--light v-size--small secondary--text text--lighten-1">
                                    <span class="v-btn__content"><i aria-hidden="true"
                                                                    class="v-icon notranslate mdi mdi-message theme--light"
                                                                    style="font-size: 16px;"></i> 23 </span></button>
                            </div>
                            <div class="mr-1">
                                <button type="button"
                                        class="v-btn v-btn--fab v-btn--round v-btn--text theme--light v-size--small secondary--text text--lighten-1">
                                    <span class="v-btn__content"><i aria-hidden="true"
                                                                    class="v-icon notranslate mdi mdi-heart theme--light"
                                                                    style="font-size: 16px;"></i> 2 </span></button>
                            </div>
                            <div class="mr-1">
                                <button type="button"
                                        class="v-btn v-btn--fab v-btn--round v-btn--text theme--light v-size--small secondary--text text--lighten-1">
                                    <span class="v-btn__content"><i aria-hidden="true"
                                                                    class="v-icon notranslate mdi mdi-share theme--light"
                                                                    style="font-size: 16px;"></i> 8 </span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-4 pt-md-8 pb-10">
            <div class="v-responsive mx-auto text-center" style="max-width: 1200px;">
                <div class="v-responsive__content"><h2 class="text-h3 text-lg-h2">A plan for every price</h2>
                    <div class="my-4 secondary mx-auto" style="width: 80px; height: 4px;"></div>
                    <div class="text-h6 text-lg-h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                        impedit error labore doloremque fugit.
                    </div>
                </div>
            </div>
            <div class="row mt-10 row--dense">
                <div class="col-lg-4 col-12">
                    <div class="text-body-1 pa-4 v-card v-sheet v-sheet--outlined theme--light elevation-2">
                        <div class="d-flex justify-space-between">
                            <div class="mr-2">
                                <div class="text-h4 font-weight-bold">Basic</div>
                                <div class="text-h5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                            <div class="text-right">
                                <div class="d-flex justify-center success--text">
                                    <div class="text-h4 mr-1" style="margin-top: 4px;">$</div>
                                    <div class="text-h1">9</div>
                                </div>
                                <div class="grey--text justify-end overline">/ month</div>
                            </div>
                        </div>
                        <hr role="separator" aria-orientation="horizontal" class="my-4 v-divider theme--light">
                        <div class="text-h6">
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><span class="font-weight-black mr-1">5</span><span
                                    class="text-truncate">Accounts</span></div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><span class="font-weight-black mr-1">100GB</span><span class="text-truncate">Bandwith</span>
                                </div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><span class="font-weight-black mr-1">10GB</span><span class="text-truncate">Disk Space</span>
                                </div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><!----><span class="text-truncate">Unlimited Emails</span></div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                        </div>
                        <hr role="separator" aria-orientation="horizontal" class="my-4 v-divider theme--light">
                        <button type="button"
                                class="v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--x-large success">
                            <span class="v-btn__content"> Subscribe </span></button>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="text-body-1 pa-4 v-card v-sheet v-sheet--outlined theme--light elevation-2">
                        <div class="d-flex justify-space-between">
                            <div class="mr-2">
                                <div class="text-h4 font-weight-bold">Startup</div>
                                <div class="text-h5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                            <div class="text-right">
                                <div class="d-flex justify-center success--text">
                                    <div class="text-h4 mr-1" style="margin-top: 4px;">$</div>
                                    <div class="text-h1">29</div>
                                </div>
                                <div class="grey--text justify-end overline">/ month</div>
                            </div>
                        </div>
                        <hr role="separator" aria-orientation="horizontal" class="my-4 v-divider theme--light">
                        <div class="text-h6">
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><span class="font-weight-black mr-1">20</span><span
                                    class="text-truncate">Accounts</span></div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><span class="font-weight-black mr-1">1TB</span><span
                                    class="text-truncate">Bandwith</span></div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><span class="font-weight-black mr-1">100GB</span><span class="text-truncate">Disk Space</span>
                                </div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><!----><span class="text-truncate">Unlimited Emails</span></div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                        </div>
                        <hr role="separator" aria-orientation="horizontal" class="my-4 v-divider theme--light">
                        <button type="button"
                                class="v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--x-large success">
                            <span class="v-btn__content"> Subscribe </span></button>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="text-body-1 pa-4 v-card v-sheet v-sheet--outlined theme--light elevation-2">
                        <div class="d-flex justify-space-between">
                            <div class="mr-2">
                                <div class="text-h4 font-weight-bold">Enterprise</div>
                                <div class="text-h5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                            <div class="text-right">
                                <div class="d-flex justify-center success--text">
                                    <div class="text-h4 mr-1" style="margin-top: 4px;">$</div>
                                    <div class="text-h1">149</div>
                                </div>
                                <div class="grey--text justify-end overline">/ month</div>
                            </div>
                        </div>
                        <hr role="separator" aria-orientation="horizontal" class="my-4 v-divider theme--light">
                        <div class="text-h6">
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><span class="font-weight-black mr-1">100</span><span
                                    class="text-truncate">Accounts</span></div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><span class="font-weight-black mr-1">10TB</span><span class="text-truncate">Bandwith</span>
                                </div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><span class="font-weight-black mr-1">10TB</span><span class="text-truncate">Disk Space</span>
                                </div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                            <div class="d-flex align-center justify-space-between my-1">
                                <div><!----><span class="text-truncate">Unlimited Emails</span></div>
                                <i aria-hidden="true"
                                   class="v-icon notranslate mdi mdi-check theme--light success--text"></i></div>
                        </div>
                        <hr role="separator" aria-orientation="horizontal" class="my-4 v-divider theme--light">
                        <button type="button"
                                class="v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--x-large success">
                            <span class="v-btn__content"> Subscribe </span></button>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";

export default {
    components: {
        AppLayout,
    },
    name: "Offers",
    data: () => ({
        model: 0,
        colors: [
            'primary',
            'secondary',
            'yellow darken-2',
            'red',
            'orange',
        ],
    }),
}
</script>

<style scoped>

</style>
