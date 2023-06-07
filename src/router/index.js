import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeView.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: import('../views/Dashboard.vue'),
  },

  {
    path: "/Email",
    name: "Email",
    component: import('../views/Email.vue'),
  },

  {
    path: "/SMS",
    name: "SMS",
    component: import('../views/sms.vue'),
  },

  {
    path: "/Members",
    name: "Members",
    component: import('../views/Members.vue'),
  },

  {
    path: "/Loans",
    name: "Loans",
    component: import('../views/Loans.vue'),
  },

  {
    path: "/Products",
    name: "Products",
    component: import('../views/Products.vue'),
  },

  {
    path: "/Savings",
    name: "Savings",
    component: import('../views/Savings.vue'),
  },

  {
    path: "/Expenses",
    name: "Expenses",
    component: import('../views/Expenses.vue'),
  },

  {
    path: "/Reports",
    name: "Reports",
    component: import('../views/Reports.vue'),
  },

  {
    path: "/addMember",
    name: "addMember",
    component: import('../views/addMember.vue'),
  },

    {
    path: "/logout",
    name: "logout",
    component: import('../views/logout.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;