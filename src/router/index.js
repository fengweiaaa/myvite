import {createRouter,createWebHistory} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Test from "../components/Test.vue";
import Com from "../components/Com.vue";

const routes = [
    {
        path:'/',
        name:'HelloWorld',
        component:HelloWorld
    },
    {
        path:'/test',
        name:'Test',
        component:Test
    },
    {
        path:'/com',
        name:'Com',
        component:Com
    }
]

const router = createRouter({
    history:createWebHistory('/'),
    routes
})
router.beforeEach((to, from, next) => {
    console.log('路由跳转了')
    next()
})

export default router

