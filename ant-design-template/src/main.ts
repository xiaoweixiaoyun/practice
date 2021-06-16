import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import Antd from '@/plugins/AntDesign';
import 'font-awesome/css/font-awesome.min.css';

import loading from '@/plugins/Loading/index';
import ShowTips from '@/directives/ShowTips/index';
import Permission from '@/directives/Permission/index';

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(loading)
  .directive('ShowTips', ShowTips as any)
  .directive('Permission', Permission as any)
  .mount('#app');
