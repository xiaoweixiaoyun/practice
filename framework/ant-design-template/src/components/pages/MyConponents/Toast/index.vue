<template>
  <div class="content">
    <div class="jieshao">
      <p class="title">
        <i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
        自定义Toast组件
      </p>
      <div class="text">
        <h3>1、引入组件</h3>
        <div>import Toast from '@/plugins/Toast/index';</div>
        <br />
        <h3>2、使用</h3>
        <div>Toast({ title: '加入成功', duration: 2000 });</div>
        <div>Toast( '加入成功' );</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Toast from '@/plugins/Toast/index';
export default {
  name: 'Index',
  setup() {
    Toast('');
  }
};
</script>
