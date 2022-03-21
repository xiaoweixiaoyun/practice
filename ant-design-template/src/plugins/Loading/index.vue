<template>
  <div v-show="setShow" class="page">
    <div class="loading">
      <img src="@/assets/img/loading3.gif" style="transform: rotateY(180deg); " width="100" alt="" />
      <span>{{ msg }}</span>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'Index',
  setup() {
    const setShow = ref(false);
    const msg = ref('');
    const show = value => {
      setShow.value = true;
      msg.value = value;
    };
    const hide = () => {
      setShow.value = false;
    };

    return {
      setShow,
      show,
      hide,
      msg
    };
  }
};
</script>
<style scoped lang="less">
.page {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.1);
  .loading {
    display: flex;
    padding: 0 25px 0 0;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: rgb(255, 255, 255);
    span {
      text-shadow: 0 -1px 0 rgb(234, 235, 236), 0 1px 2px #444444;
      color: #444444;
      font-size: 1rem;
      margin-left: -10px;
    }
  }
}
</style>
