import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'views.myquran',
        component: () => import("@/views/myQuran.vue")
    },
    {
        path: '/contacts',
        name: 'views.contacts',
        component: () => import("@/views/myContact.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;