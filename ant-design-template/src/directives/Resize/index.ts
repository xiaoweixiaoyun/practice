export default {
  beforeMount(el: any, binding: any) {
    let width = '',
      height = '';
    function isReize() {
      const style = document.defaultView?.getComputedStyle(el) as any;
      if (width !== style.width || height !== style.height) {
        binding.value(); // 执行传入的方法
      }
      width = style.width;
      height = style.height;
    }
    el.__timer__ = setInterval(isReize, 300); // 周期性监听元素是否改变
  },
  unmounted(el: any) {
    clearInterval(el.__timer__);
  }
};
