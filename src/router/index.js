import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import DashboardView from '@/views/DashboardView.vue'
import DashboardHomeView from '@/views/DashboardHomeView.vue'
import AboutView from '../views/AboutView.vue'
import CarbonFootprintCalculator from '@/views/CarbonFootprintCalculator.vue'
import SettingsView from '@/views/SettingsView.vue'
import FAQView from '@/views/FAQView.vue'
import CarbonFootprintAnalysis from '@/views/CarbonFootprintAnalysis.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import LettingUserKnowMonthly from '@/views/LettingUserKnowMonthly.vue'
import { supabase } from '@/Clients/Supabase'
import UnauthorizedView from '@/views/UnauthorizedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPageView,
      children: [
        {
          path: '',
          name: 'login',
          component: LoginView,
        },
        {
          path: 'signup',
          name: 'signup',
          component: SignupView,
        }
      ]
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
          meta: {requiresAuth: true}
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
          component: SettingsView,
          meta: {requiresAuth: true}
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
        },
        {
          path: "monthlyCarbonFootprint",
          name: "MonthlyCarbonFootprint",
          component: LettingUserKnowMonthly,
        },
        {
          path: "unauthorized",
          name: "Unauthorized",
          component: UnauthorizedView,
        }
      ]
    },
  ],
})

//get user
async function getUser(next) {
  let localUser = await supabase.auth.getSession();
  if (localUser.data.session == null) {
    next("unauthorized")
  }
  else {
    next();
  }
}

//auth requirements
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next);
  }
  else {
    next();
  }
})

export default router
