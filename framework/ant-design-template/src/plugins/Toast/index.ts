import { createVNode, render } from 'vue';
import Toast from './index.vue';

// 准备一个DOM容器
const div = document.createElement('div');
div.setAttribute('class', 'toast-wrapper');
document.body.appendChild(div);
let timer: any = null;
// 初始数据
type title = string;
interface ToastType {
  title: title;
  duration?: number;
}
type union = title | ToastType;

export default (options: union) => {
  let title, duration;
  if (typeof options === 'string') {
    title = options || '正在处理中……';
    duration = 2000;
  } else {
    title = options.title || '正在处理中……';
    duration = options.duration || 2000;
  }
  // 创建虚拟dom  (组件对象， props)
  const vnode = createVNode(Toast, { title });

  // 把虚拟dom渲染到div
  render(vnode, div);
  clearTimeout(timer);
  timer = setTimeout(() => {
    render(null, div);
  }, duration);
};
