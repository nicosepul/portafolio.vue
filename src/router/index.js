import { createRouter, createWebHashHistory } from 'vue-router'

import Inicio from '../components/Inicio.vue'
import Perfil from '../components/Perfil.vue'
import Proyectos from '../components/Proyectos.vue'
import Contacto from '../components/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio,
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil,
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: Proyectos,
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto,
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
