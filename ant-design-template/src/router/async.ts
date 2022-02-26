import Layout from '@/components/layout/index.vue';
export default [
  {
    path: '/',
    name: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/components/pages/Home/index.vue'),
        meta: { title: '首页', icon: 'fa fa-tachometer' }
      }
    ]
  },
  {
    path: '/my-conponents',
    name: 'MyConponents',
    component: Layout,
    meta: { title: '我的组件库', icon: 'fa fa-cubes' },
    redirect: 'loading',
    children: [
      {
        path: '/loading',
        name: 'Loading',
        component: () => import('@/components/pages/MyConponents/Loading/index.vue'),
        meta: { title: '全局等待组件' }
      },
      {
        path: '/import-excle',
        name: 'ImportExcle',
        component: () => import('@/components/pages/MyConponents/ImportExcle/index.vue'),
        meta: { title: '自定义Excel上传组件' }
      },
      {
        path: '/toast',
        name: 'Toast',
        component: () => import('@/components/pages/MyConponents/Toast/index.vue'),
        meta: { title: 'Toast组件' }
      }
    ]
  },
  {
    path: '/my-directives',
    name: 'MyDirectives',
    component: Layout,
    redirect: 'show-tips',
    meta: { title: '我的指令库', icon: 'fa fa-code' },
    children: [
      {
        path: '/show-tips',
        name: 'ShowTips',
        component: () => import('@/components/pages/MyDirectives/ShowTips/index.vue'),
        meta: { title: '文本显示省略号指令' }
      },
      {
        path: '/permission',
        name: 'Permission',
        component: () => import('@/components/pages/MyDirectives/Permission/index.vue'),
        meta: { title: '权限控制指令' }
      },
      {
        path: '/copy',
        name: 'Copy',
        component: () => import('@/components/pages/MyDirectives/Copy/index.vue'),
        meta: { title: '文本内容复制指令' }
      },
      {
        path: '/resize',
        name: 'Resize',
        component: () => import('@/components/pages/MyDirectives/Resize/index.vue'),
        meta: { title: '响应缩放指令' }
      }
    ]
  },
  {
    path: '/:path(.*)*',
    name: 'NotFound',
    hidden: true,
    component: () => import('@/components/pages/error/404.vue')
  }
];
