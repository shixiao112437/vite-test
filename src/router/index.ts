// import { router } from 'vue-rouer';
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] =[{
    path:"/login",
    component: () => import("../pages/login/index.vue")
}]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router