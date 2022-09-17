<template>
  <a-sub-menu :key="route.name">
    <template v-slot:title>
      <span className="anticon">
        <i :class="[route.meta.icon, 'fa-lg', 'fa-fw']"></i>
      </span>
      <span>{{ route.meta.title }}</span>
    </template>
    <template v-for="item in route.children">
      <a-menu-item v-if="!item.children || item.children.length === 0" :key="item.name">
        <template #icon>
          <span className="anticon">
            <i :class="[item.meta.icon, 'fa-lg', 'fa-fw']"></i>
          </span>
        </template>
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.name" :route="item" />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: 'SubMenu',
  props: {
    route: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
