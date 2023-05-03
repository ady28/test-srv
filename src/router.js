import { createRouter, createWebHistory } from 'vue-router'
import TestPage from './components/Test'
import OverviewPage from './components/Overview'
import NewHV from './components/NewHV'

const routes = [
  {
    path: '/',
    name: 'overviewpage',
    component: OverviewPage
  },
  {
    path: '/newhv',
    name: 'newhv',
    component: NewHV
  },
  {
    path: '/test',
    name: 'testpage',
    component: TestPage
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router