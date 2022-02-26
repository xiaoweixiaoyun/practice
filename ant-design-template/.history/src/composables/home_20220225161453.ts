import { ref, onMounted } from 'vue';
const fs = require('fs');


function fetchCssList() {
    fs.readdir('../components', function(err: any, files: any) {
        if (err) {
          return console.log('目录不存在');
        }
        console.log(files);
      });
  }

export default function useTodos() {
  const cssList = ref([]);

  onMounted(() => {
    fetchCssList();
  });

  return {
    cssList
  };
}
