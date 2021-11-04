import { createStore } from 'vuex';
import permission from './modules/permission';
import user from './modules/user';
import app from './modules/app';
import getters from './getters';

const store = createStore({
  modules: {
    app,
    user,
    permission
  },
  getters
});

export const setupStore = (app: any) => {
  app.use(store);
};

export default store;
