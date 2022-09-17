<template>
  <div class="bread-tab">
    <div class="left">
      <div @click="tabsPrev">
        <LeftOutlined style="color: rgb(82, 166, 235);" />
      </div>
    </div>
    <div id="tabsNav" class="content-scroll">
      <ul id="tabsNavList" class="scroll">
        <li v-for="(item, index) in tagsList" :key="index" href="javascript:;" @click="openTags(item.path)">
          <span class="tag-item-dot" :class="{ active: isActive(item.path) }"></span>
          {{ item.title }}
          <i v-if="item.path === '/home' ? false : true" class="fa fa-remove" @click.stop="closeTags(index)"></i>
        </li>
      </ul>
    </div>
    <div class="right">
      <div @click="tabsNext">
        <RightOutlined style="color: rgb(82, 166, 235);" />
      </div>
    </div>
    <div class="remove">
      <div @click="closeAll">
        <CloseCircleOutlined style="color: rgb(82, 166, 235);" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { getCurrentInstance, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { RightOutlined, LeftOutlined, CloseCircleOutlined } from '@ant-design/icons-vue';
export default {
  name: 'Index',
  components: {
    RightOutlined,
    LeftOutlined,
    CloseCircleOutlined
  },
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const route = useRoute();
    const tagsList: any = ref([
      {
        title: '首页',
        path: '/home',
        name: '首页'
      }
    ]);
    let counter: any = '0';
    function setTags(route: any) {
      const isExist = tagsList.value.some((item: { path: any }) => {
        return item.path === route.fullPath;
      });
      !isExist &&
        tagsList.value.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[0].components.default.name
        });
    }
    function isActive(path: any) {
      return path === proxy.$root.$route.fullPath;
    }
    function closeTags(index: number) {
      const delItem = tagsList.value.splice(index, 1)[0];
      const item = tagsList.value[index] ? tagsList.value[index] : tagsList.value[index - 1];
      if (item) {
        delItem.path === proxy.$root.$route.fullPath && proxy.$root.$router.push(item.path);
      } else {
        proxy.$root.$router.push('/home');
      }
    }
    function openTags(path: any) {
      proxy.$root.$router.push(path);
    }
    function tabsPrev() {
      const tabNav: any = document.getElementById('tabsNav');
      const tabNavList: any = document.getElementById('tabsNavList');
      const tabNavW = tabNav.clientWidth;
      if (tabNavW <= counter + tabNavW - 210) {
        counter = parseInt(counter) - parseInt(tabNavW) + 10;
        tabNavList.style.transform = 'translateX(' + '-' + counter + 'px)';
      } else if (counter !== 0) {
        counter = 0;
        tabNavList.style.transform = 'translateX(' + '0' + 'px)';
      }
    }
    function tabsNext() {
      const tabNav: any = document.getElementById('tabsNav');
      const tabNavList: any = document.getElementById('tabsNavList');
      const tabNavW = tabNav.clientWidth;
      const tabNavListW = tabNavList.clientWidth;
      if (tabNavW < tabNavListW && counter + tabNavW - 10 < tabNavListW) {
        counter = parseInt(counter) + parseInt(tabNavW) - 10;
        tabNavList.style.transform = 'translateX(' + '-' + counter + 'px)';
      }
    }
    function closeAll() {
      tagsList.value = [
        {
          title: '首页',
          path: '/home',
          name: '首页'
        }
      ];
      proxy.$root.$router.push('/home');
    }
    watch(
      () => route.matched,
      () => {
        setTags(proxy.$root.$route);
      }
    );
    setTags(proxy.$root.$route);
    return { tagsList, isActive, closeTags, openTags, tabsPrev, tabsNext, closeAll };
  }
};
</script>
<style lang="less" scoped>
::-webkit-scrollbar {
  display: none;
}
.bread-tab {
  width: 100%;
  height: 40px;
  display: flex;
  background: rgb(245, 244, 244);
  .left,
  .right,
  .remove {
    width: 30px;
    height: 40px;
    padding: 1px 0;
    cursor: pointer;
    div {
      height: 38px;
      line-height: 38px;
      text-align: center;
      background: #fff;
    }
  }
  .remove {
    width: 45px;
    border-left: 1px solid rgb(199, 197, 197);
  }
  .content-scroll {
    flex: 1;
    padding: 5px;
    overflow-x: scroll;
    box-shadow: 0 0 5px rgb(199, 197, 197) inset;
    .scroll {
      margin: 0;
      padding: 0;
      float: left;
      list-style: none;
      display: block;
      white-space: nowrap;
      overflow-x: scroll;
      li {
        display: inline-block;
        background: #fff;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        margin: 0 5px;
        border-radius: 3px;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;
        -webkit-transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
        .tag-item-dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 4px;
          background: #e8eaec;
        }
        a {
          padding: 0 5px;
        }
        .fa-remove {
          margin-left: 2px;
          color: rgb(82, 166, 235);
          cursor: pointer;
        }
        .fa-remove:hover {
          color: rgb(241, 64, 52);
        }
        .active {
          background: rgb(82, 166, 235);
        }
      }
    }
  }
}
</style>
