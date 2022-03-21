export default {
  beforeMount(el: any, binding: any) {
    // 双击触发复制
    if (binding.modifiers.dblclick) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      el.addEventListener('dblclick', () => handleClick(el.innerText));
      el.style.cursor = 'copy';
    }
    // 点击icon触发复制
    else if (binding.modifiers.icon) {
      if (el.hasIcon) {
        return;
      }
      const iconElement = document.createElement('i');
      iconElement.setAttribute('class', 'fa fa-clone');
      iconElement.setAttribute('style', 'margin-left:5px');
      el.appendChild(iconElement);
      el.hasIcon = true;
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      iconElement.addEventListener('click', () => handleClick(el.innerText));
      iconElement.style.cursor = 'copy';
    }
    // 单击触发复制
    else {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      el.addEventListener('click', () => handleClick(el.innerText));
      el.style.cursor = 'copy';
    }
  }
};

function handleClick(text: any) {
  // 创建元素
  if (!document.getElementById('copyTarget')) {
    const copyTarget = document.createElement('input');
    copyTarget.setAttribute('style', 'position:fixed;top:0;left:0;opacity:0;z-index:-1000;');
    copyTarget.setAttribute('id', 'copyTarget');
    document.body.appendChild(copyTarget);
  }

  // 复制内容
  const input = document.getElementById('copyTarget') as any;
  input.value = text;
  input.select();
  document.execCommand('copy');
  // alert('复制成功')
}
