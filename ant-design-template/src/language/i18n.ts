import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import messages from './index';

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'cn',
  messages
});

export default function(app: App) {
  app.use(i18n);
}