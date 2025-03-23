import '../css/app.css';
import './bootstrap';

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'admin-lte/dist/js/adminlte.min.js';


// import $ from 'jquery';
// import select2 from 'select2';
// import 'select2/dist/css/select2.min.css';

// select2();

// $(document).ready(function() {
//     console.log('jQuery et Select2 sont chargés');

//     $('#tags').select2({
//         placeholder: "Choisissez des options",
//         allowClear: true
//     });
// });

// !!!!!!!!!!!!

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../../../vendor/tightenco/ziggy/src/js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const pages = {
            ...import.meta.glob('./Pages/**/*.vue'), // Pages globales
            ...import.meta.glob('../../../**/Resources/js/Pages/**/*.vue'), // Pages du module Blog
            ...import.meta.glob('../../../**/Resources/js/Pages/*.vue'), // Pages du module Blog
            // ...import.meta.glob('../../../Profile/Resources/js/Pages/**/*.vue'), // Pages du module Profile
            // ...import.meta.glob('../../../Profile/Resources/js/Pages/*.vue'), // Pages du module Profile
        };


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            [
                `./Pages/${name}.vue`,
                `../../../Blog/Resources/js/Pages/${name}.vue`,
                `../../../Profile/Resources/js/Pages/${name}.vue`
            ],
            pages),



        // Fahd code
            // resolvePageComponent(`./pages/${name}.vue`, {
            //     ...import.meta.glob<DefineComponent>('./pages/**/*.vue'),
            //     ...import.meta.glob<DefineComponent>('../../../**/Resources/js/Pages/**/*.vue'),
            //     ...import.meta.glob<DefineComponent>('../../../**/Resources/js/Pages/*.vue'),
            // }),




        // resolvePageComponent(`./Pages/${name}.vue`, {
        //     ...import.meta.glob<DefineComponent>('./Pages/**/*.vue'),
        //     ...import.meta.glob<DefineComponent>('../../../**/Resources/js/Pages/*.vue'),
        // }),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});


