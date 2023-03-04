// index.js => index.ts 
// typescript = js + 强类型  type 类型  script 脚本 js 超集
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue'

const router =  createRouter({
    history: createWebHistory(),
    // 每个路由 配置  满足RouterRecordRaw  类型的约束
    routes: [
        {
            path:'/',
            name:'home',
            component: HomeView,

        }
    ]as RouteRecordRaw[]
})
// 路由管理对象
export default router