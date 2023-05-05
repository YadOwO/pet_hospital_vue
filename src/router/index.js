import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '@/views/mainPage'
import userHandle from '@/views/user/userHandle'
import doctorHandle from '@/views/doctor/doctorHandle'
import petHandle from '@/views/pet/petHandle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mainPage'
  },
  {
    path: '/mainPage',
    component: mainPage,
    children: [
      {
        path: 'userHandle',
        component: userHandle
      },
      {
        path: 'doctorHandle',
        component: doctorHandle
      },
      {
        path: 'petHandle',
        component: petHandle
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
