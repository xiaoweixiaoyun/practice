<template>
  <div class="bread-crumb">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in list" :key="index" :to="{ path: item.path }">
        <i :class="item.meta.icon" style="margin-right: 5px;"></i>
        <span>
          {{ item.meta.title }}
        </span>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script lang="ts">
import { watch, onMounted, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
export default {
  name: 'Index',
  setup() {
    const route = useRoute();
    const state = reactive({
      list: []
    });
    onMounted(() => {
      const matched = route.matched as any;
      state.list = matched.filter((item: { path: string }) => item.path !== '/');
    });
    watch(
      () => route.matched,
      newVal => {
        const matched = newVal as any;
        state.list = matched.filter((item: { path: string }) => item.path !== '/');
      }
    );
    return toRefs(state);
  }
};
</script>

<style lang="less" scoped>
.bread-crumb {
  float: left;
  height: 100%;
  padding: 10px;
  cursor: pointer;
}
</style>
