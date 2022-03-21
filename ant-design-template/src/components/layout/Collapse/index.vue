<template>
  <div class="collapse-box">
    <MenuUnfoldOutlined v-show="collapsed" class="trigger" @click="toggle" />
    <MenuFoldOutlined v-show="!collapsed" class="trigger" @click="toggle" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  emits: ['toggle'],
  setup(_, { emit }) {
    const collapsed = ref(false);
    const toggle = () => {
      collapsed.value = !collapsed.value;
      emit('toggle');
    };
    return {
      collapsed,
      toggle
    };
  }
};
</script>

<style lang="less" scoped>
.trigger {
  padding: 0 15px;
  cursor: pointer;
  transition: color 0.3s;
  font-size: 1.6rem;
  &:hover {
    color: #1890ff;
  }
}
</style>
