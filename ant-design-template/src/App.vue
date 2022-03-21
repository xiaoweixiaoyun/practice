<template>
  <div style="height: 100%;">
    <a-config-provider :locale="locale">
      <div id="app">
        <router-view />
      </div>
    </a-config-provider>
  </div>
</template>
<script lang="ts">
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
// import jaJP from "ant-design-vue/lib/locale-provider/ja_JP";
export default {
  name: 'App',
  data() {
    return {
      locale: zhCN
    };
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
