import { createApp } from 'vue';
import App from '../App.vue';
import Antd from 'ant-design-vue';
import '@/assets/styles/ant-design-theme.less';

createApp(App).use(Antd);

export default Antd;
