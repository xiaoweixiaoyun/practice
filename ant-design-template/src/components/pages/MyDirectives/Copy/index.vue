<template>
  <div class="content">
    <div class="jieshao">
      <p class="title">
        <i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
        文本内容复制指令
      </p>
      <p class="text">
        自定义组件就是实现Vue提供的钩子函数，在Vue 3中钩子函数的生命周期和组件的生命周期类似：
        <br />
        created: 元素创建后，但是属性和事件还没有生效时调用。
        <br />
        beforeMount(bind): 仅调用一次，当指令第一次绑定元素的时候。
        <br />
        mounted(inserted): 元素被插入父元素时调用。
        <br />
        beforeUpdate(updated): 在元素自己更新之前调用。
        <br />
        updated(componentUpdated): 元素或者子元素更新之后调用。
        <br />
        beforeUnmount: 元素卸载前调用。
        <br />
        unmounted(unbind): 当指令卸载后调用，仅调用一次。
        <br />
        <br />
        使用该指令可以复制元素的文本内容（指令支持单击复制 v-copy、双击复制 v-copy.dblclick、点击icon复制 v-copy.icon
        三种模式），不传参数时，默认使用单击复制。
        <br />
        使用方法：v-copy、v-copy.dblclick、v-copy.icon
      </p>
    </div>
    <br />
    <div v-copy style="font-size: 1.4rem;">
      <span>单击复制</span>
    </div>
    <div v-copy.dblclick style="font-size: 1.4rem;">
      <span>双击复制</span>
    </div>
    <div v-copy.icon style="font-size: 1.4rem;">
      <span>icon复制</span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Index'
};
</script>
