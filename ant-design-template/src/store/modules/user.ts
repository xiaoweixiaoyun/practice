import { login, findInfo } from '@/service/login/ApiImpl';
import { getToken, setToken, removeToken } from '@/utils/auth';

const state = {
  token: getToken(),
  name: '',
  roles: []
};

const mutations = {
  SET_TOKEN: (state: any, token: any) => {
    state.token = token;
  },
  SET_NAME: (state: any, name: any) => {
    state.name = name;
  },
  SET_ROLES: (state: any, roles: any) => {
    state.roles = roles;
  }
};

const actions = {
  // user login
  login({ commit }: any, userInfo: any) {
    const { username, password } = userInfo;
    return new Promise((resolve: any, reject: any) => {
      login({ username: username.trim(), password: password })
        .then((response: any) => {
          const { token } = response;
          // 保存token到store
          commit('SET_TOKEN', token);
          // 保存token到本地
          setToken(token);
          resolve();
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  },

  // get user info
  getInfo({ commit, state }: any) {
    return new Promise((resolve, reject) => {
      findInfo(state.token)
        .then((response: any) => {
          const { roles, name } = response;
          if (!roles || roles.length <= 0) {
            reject('用户角色信息不能为空');
          }
          // 保存用户信息到store
          commit('SET_ROLES', roles);
          commit('SET_NAME', name);
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit }: any) {
    return new Promise((resolve: any) => {
      // 退出登录，删除信息
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      removeToken();
      // resetRouter()
      resolve();
    });
  },

  // remove token
  resetToken({ commit }: any) {
    return new Promise((resolve: any) => {
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      removeToken();
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
