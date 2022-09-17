import { asyncRoutes, constantRoutes } from '@/router/index';
import Layout from '@/components/layout/index.vue';

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasRoles(roles: any, route: any) {
  if (route.meta && route.meta.roles) {
    return roles.some((role: any) => route.meta.roles.includes(role));
  }
  return true;
}

/**
 * 把后台返回菜单组装成routes要求的格式
 * @param {*} routes
 */
export function getAsyncRoutes(routes: any) {
  const res = [] as any;
  const keys = ['path', 'name', 'children', 'redirect', 'meta', 'hidden'];
  routes.forEach((item: any) => {
    const newItem = {} as any;
    if (item.component) {
      if (item.component === 'Layout') {
        newItem.component = Layout;
      } else {
        newItem.component = () => import(`@/${item.component}`);
      }
    }
    for (const key in item) {
      if (keys.includes(key)) {
        newItem[key] = item[key];
      }
    }
    if (newItem.children && newItem.children.length) {
      newItem.children = getAsyncRoutes(item.children);
    }
    res.push(newItem);
  });
  return res;
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes: any, roles: any) {
  const res = [] as any;
  routes.forEach((route: any) => {
    const tmp = { ...route };
    if (hasRoles(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

const state = {
  routes: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (state: any, routes: any) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }: any, roles: any) {
    return new Promise(resolve => {
      let accessedRoutes;
      // const routes = await getRoutes(); // 获取到后台路由
      // const asyncRoutes = getAsyncRoutes(routes.data); // 对路由格式进行处理
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || [];
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      }
      commit('SET_ROUTES', filterAsyncRoutes(asyncRoutes, roles));
      resolve(accessedRoutes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
