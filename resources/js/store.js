import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        drawer: false,
        search: "",
        links: [
            {
                route: "home",
                icon: "mdi-home",
                title: "Inicio",
                array: null
            },
            {
                route: "about-us",
                icon: "mdi-account-question",
                title: "¿Quienes somos?",
                array: null
            },
            {
                route: "services",
                icon: "mdi-file-tree",
                title: "Servicios",
                array: null
            },
            {
                route: "offers",
                icon: "mdi-shopping",
                title: "Ofertas",
                array: null
            },
            {
                route: "contact",
                icon: "mdi-card-account-mail",
                title: "Contacto",
                array: null
            },
        ],
        linksWithAuth: [
            {
                route: "dashboard",
                icon: 'mdi-view-dashboard',
                title: "Dashboard",
                can: 'view dashboard',
                array: null
            }

        ],
        expand: false,
    },
    getters: {
        getDrawer(state) {
            return state.drawer;
        },
        getSearch(state) {
            return state.search;
        },
        getExpand(state) {
            return state.expand;
        },
    },
    mutations: {
        setDrawer(state, v) {
            state.drawer = v;
        },
        setSearch(state, v) {
            state.search = v;
        },
        setExpand(state, v) {
            state.expand = v;
        },
    },
    actions: {}
});

export default store;
