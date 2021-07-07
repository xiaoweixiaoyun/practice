import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/components/pages/login.vue')
  },
  {
    path: '/',
    component: () => import('@/components/pages/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: '首页',
        component: () => import('@/components/pages/Home/index.vue'),
        meta: { index: 1, title: '首页', icon: 'fa fa-home' }
      },
      {
        path: '/my-conponents',
        name: '我的组件库',
        component: () => import('@/components/pages/MyConponents/index.vue'),
        redirect: '/my-conponents/loading',
        meta: { title: '我的组件库', icon: 'fa fa-cubes' },
        children: [
          {
            path: '/my-conponents/loading',
            name: '全局等待组件',
            component: () => import('@/components/pages/MyConponents/Loading/index.vue'),
            meta: { index: 2, title: '全局等待组件', icon: '' }
          }
        ]
      },
      {
        path: '/my-directives',
        name: '我的指令库',
        component: () => import('@/components/pages/MyDirectives/index.vue'),
        redirect: '/my-directives/show-tips',
        meta: { title: '我的指令库', icon: 'fa fa-code' },
        children: [
          {
            path: '/my-directives/show-tips',
            name: '文本显示省略号指令',
            component: () => import('@/components/pages/MyDirectives/ShowTips/index.vue'),
            meta: { index: 3, title: '文本显示省略号指令', icon: '' }
          },
          {
            path: '/my-directives/permission',
            name: '权限控制指令',
            component: () => import('@/components/pages/MyDirectives/Permission/index.vue'),
            meta: { index: 4, title: '权限控制指令', icon: '' }
          },
          {
            path: '/my-directives/copy',
            name: '文本内容复制指令',
            component: () => import('@/components/pages/MyDirectives/Copy/index.vue'),
            meta: { index: 5, title: '文本内容复制指令', icon: '' }
          },
          {
            path: '/my-directives/resize',
            name: '响应缩放指令',
            component: () => import('@/components/pages/MyDirectives/Resize/index.vue'),
            meta: { index: 6, title: '响应缩放指令', icon: '' }
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/my-app/'),
  routes
});

export { router, routes };
