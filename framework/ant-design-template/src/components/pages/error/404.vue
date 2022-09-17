<template>
  <!-- <div class="error-box"></div> -->
  <a-result status="404" title="404" sub-title="对不起, 你访问的页面不存在~">
    <template #extra>
      <a-button type="primary" @click="goHome">
        返回首页
      </a-button>
    </template>
  </a-result>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push('/');
    };
    return { goHome };
  }
};
</script>
