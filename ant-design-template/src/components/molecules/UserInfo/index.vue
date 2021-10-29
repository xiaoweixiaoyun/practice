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
            <a href="javascript:;">
              个人中心
            </a>
          </a-menu-item>
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
export default {
  name: 'Index',
  components: {
    UserOutlined,
    CaretDownFilled
  },
  setup() {
    const router = useRouter();
    const logout = () => {
      router.push("/login");
    };
    return { logout };
  }
};
</script>
<style lang="less" scoped>
.userInfo {
  float: right;
  height: 100%;
  padding: 5px 0 5px 10px;
  border-left: 1px solid rgb(216, 216, 216);
  display: flex;
  align-items: center;
  cursor: pointer;
  i {
    color: rgb(177, 176, 175);
  }
}
</style>
