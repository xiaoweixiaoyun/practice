<template>
  <div class="indent" @click="toggleCollapsed">
    <MenuFoldOutlined v-if="collapsed" style="font-size: 1.6rem;" />
    <MenuUnfoldOutlined v-if="!collapsed" style="font-size: 1.6rem;" />
  </div>
</template>
<script lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
export default {
  name: 'Index',
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup(props: any, context: any) {
    const collapsed = ref(true);
    function toggleCollapsed() {
      collapsed.value = !collapsed.value;
      context.emit('change-collapsed', collapsed.value);
    }
    return { toggleCollapsed, collapsed };
  }
};
</script>
<style lang="less" scoped>
.indent {
  float: left;
  height: 100%;
  padding: 5px 10px 5px 5px;
  cursor: pointer;
}
</style>
