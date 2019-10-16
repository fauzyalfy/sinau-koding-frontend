import Vue from 'vue'
import VueRouter from 'vue-router'

import nav from "./components/nav.vue"
import kontak from "./components/kontak.vue"
import gallery from "./components/gallery.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: nav
}, {
    path: '/kontak',
    component: kontak
},  {
    path: '/gallery',
    component: gallery

}];

const router = new VueRouter({
    routes: routes
});

export default router;