import { apiLogin, apiFindInfo } from './Api';

export function login(params: any) {
  return new Promise(function(resolve, reject) {
    apiLogin(params)
      .then(res => {
        resolve(res);
      })
      .catch(res => {
        reject(res);
      });
  });
}

export function findInfo(params: any) {
  return new Promise(function(resolve, reject) {
    apiFindInfo(params)
      .then(res => {
        resolve(res);
      })
      .catch(res => {
        reject(res);
      });
  });
}
