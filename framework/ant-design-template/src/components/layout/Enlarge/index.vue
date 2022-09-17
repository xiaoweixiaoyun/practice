<template>
  <div class="enlarge" @click="clickFullscreen">
    <FullscreenExitOutlined v-if="isFullscreen" style="font-size: 1.6rem;" />
    <FullscreenOutlined v-if="!isFullscreen" style="font-size: 1.6rem;" />
  </div>
</template>
<script lang="ts">
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue';
import screenfull from 'screenfull';
import { ref } from 'vue';
export default {
  name: 'Index',
  components: {
    FullscreenOutlined,
    FullscreenExitOutlined
  },
  setup() {
    const isFullscreen = ref(false);
    function clickFullscreen() {
      if (!screenfull.isEnabled) {
        alert('不支持。谢谢！');
        return false;
      }
      isFullscreen.value = !isFullscreen.value;
      screenfull.toggle();
    }
    return { clickFullscreen, isFullscreen };
  }
};
</script>
<style lang="less" scoped>
.enlarge {
  padding: 0 15px 0 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
</style>
