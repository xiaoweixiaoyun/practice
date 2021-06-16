<template>
  <div class="header-bar clear-fix">
    <Indent @change-collapsed="changeCollapsed" />
    <Breadcrumb />
    <div class="header-right clear-fix">
      <Enlarge />
      <Github />
      <UserInfo />
    </div>
  </div>
</template>
<script lang="ts">
import Indent from '@/components/molecules/Indent/index.vue';
import Breadcrumb from '@/components/molecules/Breadcrumb/index.vue';
import Enlarge from '@/components/molecules/Enlarge/index.vue';
import Github from '@/components/molecules/Github/index.vue';
import UserInfo from '@/components/molecules/UserInfo/index.vue';
export default {
  name: 'Index',
  components: {
    Indent,
    Breadcrumb,
    Enlarge,
    Github,
    UserInfo
  },
  setup(props: any, context: any) {
    function changeCollapsed(val: boolean) {
      context.emit('change-collapsed', val);
    }
    return { changeCollapsed };
  }
};
</script>
<style lang="less">
.header-bar {
  padding: 10px 20px;
  .header-right {
    float: right;
    width: 170px;
  }
}
</style>
