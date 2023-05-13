import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '@/views/mainPage'
import userHandle from '@/views/user/userHandle'
import doctorHandle from '@/views/doctor/doctorHandle'
import petHandle from '@/views/pet/petHandle'
import loginPage from '@/views/loginPage'
import erweima from '@/views/erweima/erweimaShow'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/loginPage'
  },
  {
    path: '/loginPage',
    component: loginPage
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
      },
      {
        path: 'erweima',
        component: erweima
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
