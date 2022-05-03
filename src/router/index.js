import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'views.myquran',
        component: () => import("@/views/myQuran.vue")
    },
    {
        path: '/quran2',
        name: 'views.quran2',
        component: () => import("@/views/QuranType.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;