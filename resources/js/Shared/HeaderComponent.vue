<template>
<div>
    <v-app-bar app :clipped-left="clippedLeft" class="align-center" :class="flat&&route().current('home') ? 'bgTranparente' : 'white'" :flat="flat">
        <inertia-link :href="route('home')" class="d-flex align-center justify-center text-decoration-none mr-1">
            <v-avatar flat size="80" color="transparent" :aspect-ratio="1">
                <v-img style="max-height:80px; " :src="logo" contain />
            </v-avatar>

            <span v-if="(!flat&&route().current('home'))||!flat" class="font-weight-black text-uppercase text-h5 text-truncate hidden-sm-and-down" :class="{'white--text':flat,'primary--text':!flat}">
                Cootransvig
            </span>

        </inertia-link>


        <v-spacer></v-spacer>


        <v-toolbar-items>
            <nav class="d-flex justify-end text-end align-center">

                <inertia-link v-for="item in links" :key="item.name" :href="route(item.route)" :class="{'active': route().current(item.route)}" v-if="$vuetify.breakpoint.mdAndUp||route().current(item.route)">

                    <v-hover v-slot="{ hover }">
                        <v-btn :text="!route().current(item.route) || $vuetify.breakpoint.smAndDown" depressed rounded class="text-none"
                          :class="{ 'active primary--text font-weight-bold grey lighten-3 mr-2': route().current(item.route) && $vuetify.breakpoint.mdAndUp,'black--text':!flat, 'white--text':flat}">
                            <v-icon :left="$vuetify.breakpoint.mdAndUp">
                                {{ item.icon }}
                            </v-icon>
                            <v-expand-x-transition>
                              <transition name="fab-transition">
                                <span  v-if="$vuetify.breakpoint.lgAndUp || hover || route().current(item.route)">
                                    {{ item.title }}
                                </span>
                                </transition>
                            </v-expand-x-transition>
                        </v-btn>
                    </v-hover>

                </inertia-link>
            </nav>
        </v-toolbar-items>


        <div class="text-center" v-if="$page.user==null">
            <v-menu :close-on-content-click="false" :nudge-width="200" offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-app-bar-nav-icon v-bind="attrs" v-on="on" class="ml-2 hidden-sm-and-down" :class="{'white--text': flat,'black--text': flat}">
                    </v-app-bar-nav-icon>
                </template>

                <v-card>
                    <v-list>
                        <template v-if="$page.user==null">
                            <v-subheader>Authentication</v-subheader>
                            <v-divider></v-divider>
                            <v-list-item v-for="item in items" :key="item.title" :href="item.route">
                                <v-list-item-icon>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                        </template>
                    </v-list>
                </v-card>
            </v-menu>
        </div>

        <v-app-bar-nav-icon class="hidden-md-and-up" :class="{'white--text': flat,'black--text': flat}" @click="drawer?setDrawer(false):setDrawer(true)"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right @click="toTop" color="primary">
        <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
</div>
</template>

<script>
import {
    mapMutations,
    mapState
} from "vuex";
import logo from '@/../images/logo.png'

export default {
    name: "Header",
    props: {
        clippedLeft: {
            default: () => {
                return true
            }
        },
        showItems: {
            default: () => {
                return true
            }
        }
    },
    data() {
        return {
            logo: logo,
            fab: false,
            flat: false,
            localApp: false,
            item: 1,
            authenticated: null,
            user: null,
            items: [{
                    title: 'Login',
                    icon: 'mdi-account-lock',
                    route: "/login"
                },
                {
                    title: 'Sign Up',
                    icon: 'mdi-account-plus',
                    route: "/register"
                },
            ],

        };
    },
    computed: {
        ...mapState(["drawer", "numero", "menu", "links"]),

        desplazamiento() {
            return document.documentElement.clientHeight - 200;
        },
        getRoute() {
            return this.route.path;
        },
    },
    methods: {
        ...mapMutations(["setDrawer", "aumentar"]),
        chainFlat() {
            //console.log('ejecuto chainFlat');
            if (this.route().current('home')) {
                this.flat = true;
            }
        },
        toTop() {
            this.$vuetify.goTo(0);
        },

        onScroll(e) {
            //console.log('ejecuto onScroll');

            if (typeof window === "undefined") return;

            const top = window.pageYOffset || e.target.scrollTop || 0;
            if (top > 50) {
                this.fab = true;
            } else {
                this.fab = false;
            }

            if (this.route().current('home')) {
                if (top > this.desplazamiento) {
                    this.flat = false;
                } else {
                    this.flat = true;
                }
            }
        },
        logout() {
            axios.post(route('logout').url()).then(response => {
                window.location = '/';
            })
        },
    },
    mounted() {
        this.chainFlat();
    }
};
</script>

<style>
.bgTranparente {
    background-color: transparent !important;
}

.expand-x-transition-enter-active,
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0
}
</style>
