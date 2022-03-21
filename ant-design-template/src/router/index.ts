import { createRouter, createWebHashHistory } from 'vue-router';
import constant from './constant';
import async from './async';

// 静态路由表
export const constantRoutes = constant;
// 动态路由表
export const asyncRoutes = async;

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
});

export const setupRouter = (app: any) => {
  app.use(router);
};

export const resetRouter = () => {
  const resetWhiteNameList = ['Login','Error'] as any;
  router.getRoutes().forEach(route => {
    const { name } = route;
    if (name && !resetWhiteNameList.includes(name)) {
      router.removeRoute(name);
    }
  });
};

export default router;
