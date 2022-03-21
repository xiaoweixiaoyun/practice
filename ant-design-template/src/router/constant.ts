export default [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/components/pages/login.vue')
  },
  {
    path: '/404',
    name: 'Error',
    hidden: true,
    component: () => import('@/components/pages/error/404.vue')
  }
];