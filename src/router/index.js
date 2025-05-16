import {createRouter, createWebHistory} from 'vue-router';
import HomveView from '../views/HomeView.vue'
import GallaryView from '../views/GallaryView.vue'
import WorkView from '../views/WorkView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASEURL),
    routes:[
        {
            path:"/",
            name:"home",
            component: HomveView
        },
        {
            path:"/galary",
            name:"galary",
            component: GallaryView
        },
        {
            path:"/work",
            name:"work",
            component: WorkView
        }
    ]

})


export default router