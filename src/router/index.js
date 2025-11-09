import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import DashboardView from '@/views/DashboardView.vue'
import DashboardHomeView from '@/views/DashboardHomeView.vue'
import AboutView from '../views/AboutView.vue'
import CarbonFootprintCalculator from '@/views/CarbonFootprintCalculator.vue'
import SettingsView from '@/views/SettingsView.vue'
import FAQView from '@/views/FAQView.vue'
import CarbonFootprintAnalysis from '@/views/CarbonFootprintAnalysis.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPageView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children: [
        {
          path: "",
          name: 'dashboardHome',
          component: DashboardHomeView,
        },
        {
          path: "about",
          name: "aboutDashboard",
          component: AboutView,
          props: {showNavbar: false},
        },
        {
          path: "carbonFootprintCalculator",
          name: "CarbonFootprintCalculator",
          component:CarbonFootprintCalculator,
        },
        {
          path: "settings",
          name: "settings",
          component:SettingsView,
        },
        {
          path: 'FAQ',
          name: "FAQ",
          component: FAQView,
        },
        {
          path: "carbonFootprintAnalysis",
          name: "CarbonFootprintAnalysis",
          component: CarbonFootprintAnalysis,
        }
      ]
    },
  ],
})

export default router
