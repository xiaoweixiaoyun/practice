<template>
  <div class="userInfo">
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        <UserOutlined style="font-size: 1.6rem; margin-right: 10px;" />
        <CaretDownFilled />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;" @click.prevent="logout">
              退出登录
            </a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script>
import { CaretDownFilled, UserOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  name: 'Index',
  components: {
    UserOutlined,
    CaretDownFilled
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const logout = () => {
      store.dispatch('user/logout').then(() => {
        router.push({ name: 'Login' });
      });
    };
    return { logout };
  }
};
</script>
<style lang="less" scoped>
.userInfo {
  height: 100%;
  padding-left: 10px;
  border-left: 1px solid rgb(228, 226, 226);
  display: flex;
  align-items: center;
  cursor: pointer;
  i {
    color: rgb(177, 176, 175);
  }
}
.ant-dropdown-trigger {
  display: flex;
  align-items: center;
}
</style>
