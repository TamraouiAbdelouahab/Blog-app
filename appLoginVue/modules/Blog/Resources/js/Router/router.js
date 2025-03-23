import { createRouter, createWebHistory } from 'vue-router';

// Importe tes composants Vue
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import NotFound from '../components/404/404.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/:pathMatch(.*)*', component: NotFound},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
