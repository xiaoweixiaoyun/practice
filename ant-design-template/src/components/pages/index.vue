<template>
  <div class="app-wrapper">
    <div :style="{ width: collapsed ? '260px' : '80px' }" class="side-container unfolded">
      <div class="logo">
        <a href="/">
          <img :src="imgSrc" alt="我的组件库" />
        </a>
      </div>
      <SubMenu :collapsed="collapsed" />
    </div>
    <div class="main-container normal" :style="{ width: collapsed ? 'calc(100% - 260px)' : 'calc(100% - 80px)' }">
      <div class="main-header">
        <HeaderBar @change-collapsed="changeCollapsed" />
        <BreadTab />
      </div>
      <div class="main-content">
        <div class="scrollBar scroll-bar">
          <transition name="container">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Logo from '@/assets/img/logo.png';
import Logo2 from '@/assets/img/logo2.png';
import HeaderBar from '@/components/organisms/HeaderBar/index.vue';
import SubMenu from '@/components/organisms/SubMenu/index.vue';
import BreadTab from '@/components/organisms/BreadTab/index.vue';
export default {
  name: 'Index',
  components: {
    HeaderBar,
    SubMenu,
    BreadTab
  },
  setup() {
    const imgSrc = ref(Logo);
    const collapsed = ref(true);
    function changeCollapsed(val: boolean) {
      collapsed.value = val;
      imgSrc.value = val ? Logo : Logo2;
    }
    return {
      imgSrc,
      collapsed,
      changeCollapsed
    };
  }
};
</script>
<style lang="less" scoped>
@import '@/assets/styles/scroll-bar';
.app-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .side-container {
    height: 100vh;
    width: 260px;
    float: left;
    transition: width 0.3s;
    background-color: #263238;
    overflow: hidden;
    &.unfolded {
      width: 100%;
      .logo {
        width: 100%;
      }
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .main-container {
    height: 100vh;
    transition: width 0.3s;
    float: left;
    .main-content {
      .scrollBar {
        height: calc(100vh - 64px - 40px);
        overflow: auto;
      }
    }
  }
}
</style>
