import { createWebHistory, createRouter } from "vue-router";
import home from '../pages/home.vue'
import login from '../pages/login.vue'
import register from '../pages/register.vue'
import dashboard from '../pages/dashboard.vue'
const routes = [

    {
        path: '/',
        name: 'Home',
        component: home,
    },
    {
        path: '/login',
        name: 'Login',
        component: login,
        meta:{
            'requireAuth' :false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: register,
        meta:{
            'requireAuth' :false
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: dashboard,
        meta:{
            'requireAuth' :true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to,from) => {
    if(to.meta.requireAuth && !localStorage.getItem('token')){
        router.push({name : 'Login'})
    }
    if(to.meta.requireAuth == false && localStorage.getItem('token')){
        router.push({name:'Dashboard'})
    }
});
export default router;