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
  height: 100%;
  padding: 0 15px 0 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
</style>
