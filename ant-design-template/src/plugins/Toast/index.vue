<template>
  <div class="toast-wrap">
    <div class="toast">
      {{ title }}
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Toast',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.toast-wrap {
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toast {
  max-width: 12rem;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
}
</style>
