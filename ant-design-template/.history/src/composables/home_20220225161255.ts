import { ref, onMounted } from 'vue';
const fs = require('fs');


function fetchCssList() {
    console.log(fs);
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
