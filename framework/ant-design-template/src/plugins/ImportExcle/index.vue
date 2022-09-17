<template>
  <div>
    <a-modal v-model:visible="show" title="上传" centered :keyboard="false" :mask-closable="false" @cancel="emitClose">
      <a-upload-dragger
        v-model:fileList="fileList"
        name="file"
        :multiple="true"
        :remove="handleRemove"
        :before-upload="beforeUpload"
        accept="application/vnd.ms-excel, 
            application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      >
        <p class="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p class="ant-upload-text">
          点击或者拖拽文件进行上传
        </p>
        <p class="ant-upload-hint">
          支持多文件上传。严禁上传公司数据或其他波段文件。
        </p>
      </a-upload-dragger>
      <template #footer>
        <a-button @click="emitClose">
          取消
        </a-button>
        <a-button type="primary" :disabled="fileList.length === 0" @click="emitImport">
          导入
        </a-button>
      </template>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import { ref, watch } from 'vue';
interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  preview?: string;
  originFileObj?: any;
  file: string | Blob;
}
export default {
  name: 'ImportExcle',
  components: {
    InboxOutlined
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props: any, context: any) {
    const show = ref(props.visible);
    const fileList = ref<FileItem[]>([]);
    const handleRemove = (file: FileItem) => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
    };

    const beforeUpload = (file: FileItem) => {
      fileList.value = [...fileList.value, file];
      return false;
    };

    const emitClose = () => {
      fileList.value = [];
      context.emit('close');
    };
    const emitImport = () => {
      const formData = new FormData();
      fileList.value.forEach((file: FileItem) => {
        formData.append('files[]', file.originFileObj as any);
      });
      emitClose();
      context.emit('import', formData);
    };
    watch(
      () => props.visible,
      (visible: any) => {
        show.value = visible;
      }
    );
    return {
      emitImport,
      emitClose,
      show,
      handleRemove,
      beforeUpload,
      fileList
    };
  }
};
</script>
