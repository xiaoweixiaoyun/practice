<template>
  <div>
    <a-form layout="inline">
      <a-form-item>
        <a-input placeholder="Username">
          <template #prefix>
            <IssuesCloseOutlined style="color: rgb(82, 166, 235);" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input type="password" placeholder="Password">
          <template #prefix>
            <RightOutlined style="color: rgb(82, 166, 235);" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          Log in
        </a-button>
      </a-form-item>
    </a-form>
    <a-table :columns="columns" :data-source="data">
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #customTitle>
        <span>
          <smile-outlined />
          Name
        </span>
      </template>
      <template #tags="{ text: tags }">
        <span>
          <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template #action="{ record }">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link">
            More actions
            <down-outlined />
          </a>
        </span>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
import { RightOutlined, IssuesCloseOutlined } from '@ant-design/icons-vue';
import { getTest } from '@/service/myDemo/ApiImpl';
import { ref } from 'vue';
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name'
  }
];
export default {
  name: 'Index',
  components: {
    RightOutlined,
    IssuesCloseOutlined
  },
  setup() {
    const data = ref();
    getTest().then(function(r) {
      console.log(r);
      data.value = r;
    });
    return {
      data,
      columns
    };
  }
};
</script>
