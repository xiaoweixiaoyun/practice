<template>
  <div class="logo">
    <img :src="logo" />
    <span v-show="!collapsed">
      {{ name }}
    </span>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore();
    return {
      logo: require('@/assets/img/' + store.state.app.logo),
      name: store.state.app.name
    };
  }
};
</script>
<style lang="less" scoped>
.logo {
  height: 60px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
