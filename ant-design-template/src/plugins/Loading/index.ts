import { createVNode, render } from 'vue';
import LoadingComponent from './index.vue';
let $data: any;

export default {
  install: (app: any) => {
    if (!$data) {
      $data = createVNode(
        LoadingComponent,
        {},
        {
          default: () => createVNode
        }
      );
      $data.appContext = app._context;
      render($data, document.body);
    }
    $data.component.ctx.setShow = false;

    const loading = {
      show(val = '加载中……') {
        $data.component.ctx.show(val);
      },
      hide() {
        $data.component.ctx.hide();
      }
    };

    if (!app.$loading) {
      app.$loading = loading;
    }

    app.config.globalProperties.$loading = app.$loading;
  }
};
