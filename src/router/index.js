import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Customers from '../views/Customers.vue';
import CustomerDetails from '../views/CustomerDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customers',
    name: 'Customers',
    component:Customers,
  }
  ,
  {
    path: '/customer/:id',
    name: 'CustomerDetails',
    component:CustomerDetails,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
