import { apiGetTest } from './Api';

//测试get接口
export function getTest() {
  return new Promise(function(resolve, reject) {
    apiGetTest({})
      .then(res => {
        console.log(res);
        resolve(res);
      })
      .catch(res => {
        reject(res);
      });
  });
}
