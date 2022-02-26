import { ref, onMounted } from 'vue';
const fs = require('fs');

export default function useTodos() {
  const cssList = ref([]);

  const fetchCssList = () => {
    fs.readdir('../components', function(err: any, files: any) {
      if (err) {
        return console.log('目录不存在');
      }
      console.log(files);
    });
  };
  onMounted(() => {
    fetchCssList();
  });

  return {
    cssList
  };
}
