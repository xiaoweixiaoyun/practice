<template>
  <div class="content">
    <div class="jieshao">
      <p class="title">
        <i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
        自定义Excel上传组件
      </p>
      <div class="text">
        <h3>1、引入组件</h3>
        <div>import ImportExcle from '@/components/molecules/ImportExcle/index.vue';</div>
        <div>import importEmit from '@/components/molecules/ImportExcle/importEmit';</div>
        <div>components: { ImportExcle }</div>
        <br />
        <h3>2、使用</h3>
        <div>&lt;ImportExcle :visible="visibleImport" @import="importFun" @close="importCloseFun"/&gt;</div>
        <div>const { visibleImport, importShowFun, importCloseFun } = importEmit();</div>
        <div>const importFun = (params: any) => { console.log(params); };</div>
      </div>
    </div>
    <br />
    <a-button type="primary" size="large" @click="importShowFun">
      Excel上传
    </a-button>
    <ImportExcle :visible="visibleImport" @import="importFun" @close="importCloseFun" />
  </div>
</template>
<script lang="ts">
import ImportExcle from '@/components/molecules/ImportExcle/index.vue';
import importEmit from '@/components/molecules/ImportExcle/importEmit';
export default {
  name: 'Index',
  components: {
    ImportExcle
  },
  setup() {
    const importFun = (params: any) => {
      alert(params);
    };
    const { visibleImport, importShowFun, importCloseFun } = importEmit();
    return { importFun, visibleImport, importShowFun, importCloseFun };
  }
};
</script>
