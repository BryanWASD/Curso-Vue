import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
       {
        path: '/',
        name: 'Home',
        component: HomePage
       },
       {
        path: '/login',
        name: 'Login',
        component: Login
       },
       {
        path: '/signup',
        name: 'SignUp',
        component: Signup
       }
    ]
})

export default routes;