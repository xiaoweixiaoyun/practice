<template>
  <a-menu :selected-keys="[$route.path]" mode="inline" theme="dark" :open-keys="openKeys" :inline-collapsed="!collapsedVal" @click="handelClickLink" @openChange="onOpenChange">
    <template v-for="item in menu">
      <!-- menu -->
      <a-menu-item v-if="hasOneChildren(item.children)" :key="item.path">
        <span class="anticon">
          <i :class="[item.meta.icon, 'fa-lg']"></i>
        </span>
        <span>
          {{ item.meta.title }}
        </span>
      </a-menu-item>
      <!-- submenu -->
      <a-sub-menu v-else :key="item.path">
        <template v-slot:title>
          <span class="anticon">
            <i :class="[item.meta.icon, 'fa-lg']"></i>
          </span>
          <span>
            {{ item.meta.title }}
          </span>
        </template>
        <template v-for="item2 in item.children" :key="item2.path">
          <a-menu-item>
            <span>
              {{ item2.meta.title }}
            </span>
          </a-menu-item>
        </template>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script lang="ts">
import { routes } from '@/router/index';
import { getCurrentInstance, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
  name: 'SubMenu',
  props: {
    collapsed: Boolean
  },
  setup(props: any) {
    const { proxy }: any = getCurrentInstance();
    const route = useRoute();
    const collapsedVal = ref(true);
    const openKeys = ref<string[]>([]);
    const openKeysArr = proxy.$router.currentRoute.value.path.split('/');
    openKeysArr.shift();
    openKeysArr[0] = '/' + openKeysArr[0];
    openKeysArr.forEach((item: any) => {
      openKeys.value.unshift(item);
    });
    const handelClickLink = (item: { key: any; keyPath: any }) => {
      if (item.keyPath.length === 1) {
        openKeys.value = [];
      }
      proxy.$root.$router.push(item.key);
    };
    watch(props, newProps => {
      collapsedVal.value = newProps.collapsed;
      if (!collapsedVal.value) {
        openKeys.value = [];
      }
    });

    watch(
      () => route.matched,
      () => {
        if (collapsedVal.value) {
          openKeys.value = [];
          const openKeysArr = proxy.$router.currentRoute.value.path.split('/');
          openKeysArr.shift();
          openKeysArr[0] = '/' + openKeysArr[0];
          openKeysArr.forEach((item: any) => {
            openKeys.value.unshift(item);
          });
        }
      }
    );

    const menu: any = routes[1].children;
    function hasOneChildren(item: any) {
      return !item;
    }
    function onOpenChange(a: any) {
      const latestOpenKey = a.find((key: any) => openKeys.value.indexOf(key) === -1);
      openKeys.value = latestOpenKey ? [latestOpenKey] : [];
    }
    return { handelClickLink, menu, hasOneChildren, collapsedVal, onOpenChange, openKeys };
  }
};
</script>
