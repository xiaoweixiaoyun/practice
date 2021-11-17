import { createStore } from 'vuex';
import roles from './modules/roles';
import user from './modules/user';
import app from './modules/app';
import getters from './getters';

const store = createStore({
  modules: {
    app,
    user,
    roles
  },
  getters
});

export const setupStore = (app: any) => {
  app.use(store);
};

export default store;
