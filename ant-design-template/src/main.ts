import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import './router/permission';
import { setupStore } from './store/index';
import Antd from '@/plugins/AntDesign';
import 'font-awesome/css/font-awesome.min.css';

import loading from '@/plugins/Loading/index';
import ShowTips from '@/directives/ShowTips/index';
import Permission from '@/directives/Permission/index';
import Copy from '@/directives/Copy/index';
import Resize from '@/directives/Resize/index';

const app = createApp(App);
setupRouter(app);
setupStore(app);
app.use(Antd);
app.use(loading);
app.directive('ShowTips', ShowTips as any);
app.directive('Permission', Permission as any);
app.directive('Copy', Copy as any);
app.directive('Resize', Resize as any);
app.mount('#app');
