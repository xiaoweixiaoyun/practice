<template>
  <div class="github" @click="hrefGit">
    <GithubOutlined style="font-size: 1.6rem;" />
  </div>
</template>
<script lang="ts">
import { GithubOutlined } from '@ant-design/icons-vue';
export default {
  name: 'Index',
  components: {
    GithubOutlined
  },
  setup() {
    function hrefGit() {
      window.open('https://xiaoweixiaoyun.github.io/');
    }
    return { hrefGit };
  }
};
</script>
<style lang="less" scoped>
.github {
  float: left;
  height: 100%;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
