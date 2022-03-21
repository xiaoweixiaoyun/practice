import { ref } from 'vue';

export default function importEmit() {
  const visibleImport = ref(false);
  const downloadFileNames = ref([]);
  const importShowFun = (fileNames: []) => {
    visibleImport.value = true;
    downloadFileNames.value = fileNames;
  };
  const importCloseFun = () => {
    visibleImport.value = false;
  };

  return {
    visibleImport,
    importShowFun,
    importCloseFun,
    downloadFileNames
  };
}
