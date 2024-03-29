/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'Charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true }
    },
    {
      path: 'market-spread',
      component: () => import('@/views/charts/MarketSpread'),
      name: 'market spread',
      meta: { title: 'market spread', noCache: true }
    },
    {
      path: 'market-spread-show',
      component: () => import('@/views/charts/MarketSpreadShow'),
      name: 'market spread*',
      meta: { title: 'market spread*', noCache: true }
    }
  ]
}

export default chartsRouter
