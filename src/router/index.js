import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/páginas/Home.vue'
import Contacto from '../components/páginas/Contacto.vue'
import Productos from '../components/páginas/Productos.vue'
import Servicios from '../components/páginas/Servicios/Servicios.vue'
import PhdMaster from '../components/páginas/Servicios/PhdMaster.vue'
import Metroval from '../components/páginas/Servicios/Metroval.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto
  },

  {
    path: '/Productos',
    name: 'Productos',
    component: Productos
  },

  {
    path: '/Servicios',
    name: 'Servicios',
    component: Servicios
  },
  
  {
    path: '/PhdMaster',
    name: 'PhdMaster',
    component: PhdMaster
  },

  {
    path: '/Metroval',
    name: 'Metroval',
    component: Metroval
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
