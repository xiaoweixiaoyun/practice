import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

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
        name: 'Home',
        component: () => import('@/components/pages/Home/index.vue'),
        meta: { title: '首页', icon: 'fa fa-home'}
      },
      {
        path: '/my-conponents',
        name: 'MyConponents',
        component: () => import('@/components/pages/MyConponents/index.vue'),
        redirect: '/loading',
        meta: { title: '我的组件库', icon: 'fa fa-cubes'},
        children: [
          {
            path: '/my-conponents/loading',
            name: 'Loading',
            component: () => import('@/components/pages/MyConponents/Loading/index.vue'),
            meta: { title: '全局等待组件'}
          },
          {
            path: '/my-conponents/importExcle',
            name: 'ImportExcle',
            component: () => import('@/components/pages/MyConponents/ImportExcle/index.vue'),
            meta: { title: '自定义Excel上传组件'}
          }
        ]
      },
      {
        path: '/my-directives',
        name: 'MyDirectives',
        component: () => import('@/components/pages/MyDirectives/index.vue'),
        redirect: '/my-directives/show-tips',
        meta: { title: '我的指令库', icon: 'fa fa-code'},
        children: [
          {
            path: '/my-directives/show-tips',
            name: 'ShowTips',
            component: () => import('@/components/pages/MyDirectives/ShowTips/index.vue'),
            meta: { title: '文本显示省略号指令'}
          },
          {
            path: '/my-directives/permission',
            name: 'Permission',
            component: () => import('@/components/pages/MyDirectives/Permission/index.vue'),
            meta: { title: '权限控制指令'}
          },
          {
            path: '/my-directives/copy',
            name: 'Copy',
            component: () => import('@/components/pages/MyDirectives/Copy/index.vue'),
            meta: { title: '文本内容复制指令'}
          },
          {
            path: '/my-directives/resize',
            name: 'Resize',
            component: () => import('@/components/pages/MyDirectives/Resize/index.vue'),
            meta: { title: '响应缩放指令'}
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export { router, routes };
