import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: () => import('../views/NotFound.vue')
        },

        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/pictures',
            name: 'pictures',
            component: () => import('../views/PicturesView.vue')
        },
        {
            path: '/collections',
            name: 'collections',
            component: () => import('../views/CollectionsView.vue')
        },
    ]
})

export default router
