<template>
  <div class="login-wrapper" :style="'background-image:url(' + Background + ')'">
    <div class="form-box">
      <div class="form-title">
        <img :src="Logo" alt="icon" height="100" />
        <p>{{ $t('login.title') }}</p>
      </div>
      <a-form
        ref="formRef"
        name="custom-validation"
        :model="formState"
        :rules="rules"
        v-bind="layout"
        @finish="handleFinish"
      >
        <a-form-item has-feedback label="" name="username">
          <a-input v-model:value="formState.username" type="username" autocomplete="off">
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25);" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item has-feedback label="" name="password">
          <a-input v-model:value="formState.password" type="password" autocomplete="off">
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.25);" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block>
            {{ $t('login.butoon') }}
          </a-button>
        </a-form-item>
      </a-form>
      <div class="foot-sub">
        <span>{{ name }} {{ $t('login.text') }}</span>
        <span class="foot-sub-r">
          {{ version }}
        </span>
      </div>
      <div class="language">
        <a-dropdown>
          <template #overlay>
            <a-menu @click="handleMenuClick">
              <a-menu-item key="1">
                {{ $t('login.stringCn') }}
              </a-menu-item>
              <a-menu-item key="2">
                {{ $t('login.stringEn') }}
              </a-menu-item>
            </a-menu>
          </template>
          <a-button>
            <GlobalOutlined style="color: rgba(0, 0, 0, 0.25);" />
          </a-button>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
interface FormState {
  username: string;
  password: string;
}
import Background from '@/assets/img/login-background.jpg';
import Logo from '@/assets/img/logo.png';
import { RuleObject } from 'ant-design-vue/es/form/interface';
import { defineComponent, reactive, ref, UnwrapRef } from 'vue';
import { UserOutlined, LockOutlined, GlobalOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'Login',
  components: {
    UserOutlined,
    LockOutlined,
    GlobalOutlined
  },
  setup() {
    const { locale, t } = useI18n();
    const formRef = ref();
    const router = useRouter();
    const store = useStore();
    const formState: UnwrapRef<FormState> = reactive({
      username: 'admin',
      password: '123456'
    });
    const validateUsername = async (_rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject(t('login.message'));
      }
      return Promise.resolve();
    };
    const validatePassword = async (_rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject(t('login.message2'));
      }
      return Promise.resolve();
    };
    const rules = {
      username: [{ validator: validateUsername, trigger: 'change' }],
      password: [{ validator: validatePassword, trigger: 'change' }]
    };
    const layout = {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 }
    };
    const handleFinish = () => {
      store.dispatch('user/login', formState).then(() => {
        router.push('/home');
      });
    };
    const handleMenuClick = (e: any) => {
      if (e.key === '1') {
        locale.value = 'cn';
        localStorage.setItem('lang', 'cn');
      }else if(e.key === '2'){
        locale.value = 'en';
        localStorage.setItem('lang', 'en');
      }
    };
    return {
      Logo,
      Background,
      formState,
      formRef,
      rules,
      layout,
      handleFinish,
      name: store.state.app.name,
      version: store.state.app.version,
      handleMenuClick
    };
  }
});
</script>
<style lang="less" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  .form-box {
    width: 320px;
    padding: 15px 30px 20px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 1, 0.1);
    position: relative;
    .form-title {
      margin: 0 auto 20px;
      text-align: center;
      color: #707070;
      font-size: 18px;
      letter-spacing: 2px;
    }
    .language {
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }
  .foot-sub {
    font-size: 14px;
    color: rgb(194, 194, 194);
    .foot-sub-r {
      float: right;
    }
  }
}
</style>
