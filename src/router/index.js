import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import DashboardHomeView from '@/views/DashboardHomeView.vue'
import AboutView from '../views/AboutView.vue'
import CarbonFootprintCalculator from '@/views/CarbonFootprintCalculator.vue'
import SettingsView from '@/views/SettingsView.vue'
import FAQView from '@/views/FAQView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import LettingUserKnowMonthly from '@/views/LettingUserKnowMonthly.vue'
import { supabase } from '@/Clients/Supabase'
import UnauthorizedView from '@/views/UnauthorizedView.vue'
import DashboardView from '@/views/DashboardView.vue'

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
          component: () => import('@/views/CarbonFootprintAnalysis.vue'),
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

// get user from Supabase
async function getUser() {
  let localUser = await supabase.auth.getSession();
  return localUser.data.session !== null;
}

router.beforeEach(async (to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("authToken");
  
  // 1) Redirect logged-in users away from home (landing page)
  if (isLoggedIn && to.name === "home") {
    return next({ name: "dashboard" });
  }

  // 2) Protect routes with requiresAuth
  if (to.meta.requiresAuth) {
    const hasUser = await getUser();

    if (!hasUser) return next("unauthorized");

    return next();   // allow
  }

  // 3) Default allow
  next();
});


export default router
