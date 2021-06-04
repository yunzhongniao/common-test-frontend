/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const computeCenterRouter = {
  path: '/computeCenter',
  component: Layout,
  redirect: '/table/computeCenter-table',
  name: 'computeCenter',
  meta: {
    title: 'computeCenter',
    icon: 'table'
  },
  children: [
    {
      path: 'compute-task',
      component: () => import('@/views/computeCenter/computeTask-table'),
      name: 'computeCenterTask',
      meta: { title: 'Task列表' }
    },
    {
      path: 'computeCenter-table',
      component: () => import('@/views/computeCenter/computeCenter-table'),
      name: 'computeCenterTable',
      meta: { title: 'Task属性' }
    }
  ]
}
export default computeCenterRouter
