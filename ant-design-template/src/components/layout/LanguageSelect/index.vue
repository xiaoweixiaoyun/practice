<template>
  <div class="github">
    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            {{ $t('login.string_cn') }}
          </a-menu-item>
          <a-menu-item key="2">
            {{ $t('login.string_en') }}
          </a-menu-item>
        </a-menu>
      </template>
      <span>
        <GlobalOutlined style="font-size: 1.6rem;" />
      </span>
    </a-dropdown>
  </div>
</template>
<script lang="ts">
import { GlobalOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';
export default {
  name: 'Index',
  components: {
    GlobalOutlined
  },
  setup() {
    const { locale } = useI18n();
    const handleMenuClick = (e: any) => {
      if (e.key === '1') {
        locale.value = 'cn';
        localStorage.setItem('lang', 'cn');
      } else if (e.key === '2') {
        locale.value = 'en';
        localStorage.setItem('lang', 'en');
      }
    };
    return { handleMenuClick };
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
.ant-dropdown-trigger {
  display: flex;
  align-items: center;
}
.ant-dropdown-menu {
  margin-top: 17px;
}
</style>
