import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Problem1View from '../views/Problem1View.vue'
import Problem2View from '../views/Problem2View.vue'
import Problem3View from '../views/Problem3View.vue'
import Problem4View from '../views/Problem4View.vue'
import Problem5View from '../views/Problem5View.vue'
import Problem6View from '../views/Problem6View.vue'
import Problem7View from '../views/Problem7View.vue'
import Problem8View from '../views/Problem8View.vue'
import Problem9View from '../views/Problem9View.vue'
import Problem10View from '../views/Problem10View.vue'
import Problem11View from '../views/Problem11View.vue'
import Problem12View from '../views/Problem12View.vue'
import Problem13View from '../views/Problem13View.vue'
import Problem14View from '../views/Problem14View.vue'
import Problem15View from '../views/Problem15View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/prob1',
    name: 'prob1',
    component: Problem1View
  },
  {
    path: '/prob2',
    name: 'prob2',
    component: Problem2View
  },
  {
    path: '/prob3',
    name: 'prob3',
    component: Problem3View
  },
  {
    path: '/prob4',
    name: 'prob4',
    component: Problem4View
  },
  {
    path: '/prob5',
    name: 'prob5',
    component: Problem5View
  },
  {
    path: '/prob6',
    name: 'prob6',
    component: Problem6View
  },
  {
    path: '/prob7',
    name: 'prob7',
    component: Problem7View
  },
  {
    path: '/prob8',
    name: 'prob8',
    component: Problem8View
  },
  {
    path: '/prob9',
    name: 'prob9',
    component: Problem9View
  },
  {
    path: '/prob10',
    name: 'prob10',
    component: Problem10View
  },
  {
    path: '/prob11',
    name: 'prob11',
    component: Problem11View
  },
  {
    path: '/prob12',
    name: 'prob12',
    component: Problem12View
  },
  {
    path: '/prob13',
    name: 'prob13',
    component: Problem13View
  },
  {
    path: '/prob14',
    name: 'prob14',
    component: Problem14View
  },
  {
    path: '/prob15',
    name: 'prob15',
    component: Problem15View
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
