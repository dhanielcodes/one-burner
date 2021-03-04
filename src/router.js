import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/signup',
            name: 'Signup',
            component: () => import('./views/SignUp.vue')
        },
        {
            path: '/enterprise',
            name: 'Enterprise',
            component: () => import('./views/Enterprise.vue')
        },
        {
            path: '/contact-sales',
            name: 'ContactSales',
            component: () => import('./views/ContactSales.vue')
        }
    ],
    history: createWebHistory()
})