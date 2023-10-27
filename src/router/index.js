import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue' // Asegúrate de que la ruta al componente Login sea correcta

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login', // La ruta que quieres usar
      name: 'Login', // El nombre de la ruta
      component: () => import('@/components/Login.vue') // El componente de inicio de sesión
    },
    // Otras rutas...
  ]
})
