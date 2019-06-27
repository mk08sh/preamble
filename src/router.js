import Vue from 'vue'
import Router from 'vue-router'
import Preamble from './components/Preamble'
import Payment from '@/components/Payment'
import Review from '@/components/Review'
import Confirmation from '@/components/Confirmation'
import Registration from '@/components/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'preamble',
      component: Preamble
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/review',
      name: 'review',
      component: Review
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: Confirmation
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
  ]
})
