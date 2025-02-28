import Vue from 'vue'
import * as VueRouter from 'vue-router'
// import Overview from '../views/OverviewView.vue'

Vue.use(VueRouter)

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Xuefei Shi'
      },
      component: () => import('../views/Landing.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   meta: {
    //     title: 'About'
    //   },
    //   component: () => import('../views/About.vue')
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   meta: {
    //     title: 'Contact'
    //   },
    //   component: () => import('../views/Contact.vue')
    // },
    // {
    //   path: '/fr',
    //   name: 'comingsoon',
    //   meta: {
    //     title: 'Coming soon'
    //   },
    //   component: () => import('../views/ComingSoon.vue')
    // },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        top: 90,
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'CITF dashboard'

  if(to.path === '/fr'){
    localStorage.setItem('lang', 'fr');
  }
  else{
    localStorage.setItem('lang', 'en');
  }
})

export default router
