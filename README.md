# 项目 开始
## npm i vite 安装 
## 使用插件 vuex vue-router axios  element-plus less

### vue-router 基本使用

```javascript
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

    // main.ts 使用
    createApp(App).use(router).mount('#app')

```
### vue2.0对比
```javascript
    import Vue from "vue";
    import VueRouter from "vue-router";
    Vue.use(VueRouter);
    const  routes = []
    const router = new VueRouter({
        routes,
        // mode: "history"
    });
    export default router


    // main.js
    new Vue({
        router,
        i18n, // i18n
        render: h => h(App),
    }).$mount('#app')
```