import { Interceptors } from '@/service/Interceptors';
import { message } from 'ant-design-vue'; // 弹出吐司

export class HttpService {
  public axios: any;

  constructor() {
    // 获取axios实例
    this.axios = new Interceptors().getInterceptors();
  }

  /**
   * get请求.
   * 如果服务端将参数作为java对象来封装接受
   * @param params  参数
   * @param jwt   是否token校验
   * @param url     接口url
   */
  public get(url: string, params: object, jwt = false) {
    return new Promise((resolve, reject) => {
      this.axios
        .get(url, {
          data: params,
          headers: { isJwt: jwt }
        })
        .then((res: any) => {
          this.resultHandle(res, resolve);
        })
        .catch((err: any) => {
          reject(err.message);
        });
    });
  }
  /**
   * get请求
   * 如果服务端将参数作为url参数来接受
   * @param params  参数
   * @param jwt   是否token校验
   * @param url     接口url
   */
  public getStr(url: string, params: object, jwt = false) {
    return new Promise((resolve, reject) => {
      this.axios
        .get(url, {
          params: params,
          headers: { isJwt: jwt }
        })
        .then((res: any) => {
          this.resultHandle(res, resolve);
        })
        .catch((err: any) => {
          reject(err.message);
        });
    });
  }
  /**
   * post请求
   * @param params  参数
   * @param jwt   是否token校验
   * @param url     接口url
   */
  public post(url: string, params: object, jwt = false) {
    return new Promise((resolve, reject) => {
      this.axios
        .post(url, params, {
          headers: { isJwt: jwt }
        })
        .then((res: any) => {
          this.resultHandle(res, resolve);
        })
        .catch((err: any) => {
          reject(err.message);
        });
    });
  }

  /**
   * 如果服务端将参数作为java对象来封装接受
   * delete请求
   * @param params  参数
   * @param jwt   是否token校验
   * @param url     接口url
   */
  public delete(url: string, params: object, jwt = false) {
    return new Promise((resolve, reject) => {
      this.axios
        .delete(url, {
          data: params,
          headers: { isJwt: jwt }
        })
        .then((res: any) => {
          this.resultHandle(res, resolve);
        })
        .catch((err: any) => {
          reject(err.message);
        });
    });
  }

  /**
   * 如果服务端将参数作为url参数来接受
   * delete请求
   * @param params  参数
   * @param jwt   是否token校验
   * @param url     接口url
   */
  public deleteStr(url: string, params: object, jwt = false) {
    return new Promise((resolve, reject) => {
      this.axios
        .delete(url, {
          params: params,
          headers: { isJwt: jwt }
        })
        .then((res: any) => {
          this.resultHandle(res, resolve);
        })
        .catch((err: any) => {
          reject(err.message);
        });
    });
  }

  /**
   * put请求
   * @param params  参数
   * @param jwt   是否token校验
   * @param url     接口url
   */
  public put(url: string, params: object, jwt = false) {
    return new Promise((resolve, reject) => {
      this.axios
        .put(url, params, {
          headers: { isJwt: jwt }
        })
        .then((res: any) => {
          this.resultHandle(res, resolve);
        })
        .catch((err: any) => {
          reject(err.message);
        });
    });
  }

  /**
   * patch请求
   * @param params  参数
   * @param jwt   是否token校验
   * @param url     接口url
   */
  public patch(url: string, params: object, jwt = false) {
    return new Promise((resolve, reject) => {
      this.axios
        .patch(url, params, {
          headers: { isJwt: jwt }
        })
        .then((res: any) => {
          this.resultHandle(res, resolve);
        })
        .catch((err: any) => {
          reject(err.message);
        });
    });
  }

  /**
   *
   * @param res
   * @param resolve
   */
  public resultHandle(res: any, resolve: any) {
    if (res.status > 0) {
      resolve(res.data);
    } else {
      this.errorHandle(res);
    }
  }

  /**
   * 服务端状态处理,例如中断性异常,退出异常等等(与拦截器http握手状态注意区分,一般都能分清楚吧)
   * @param res
   */
  public errorHandle(res: any) {
    message.warn(res.msg); // 统一谈服务端提示,我们提示统一由服务端提供
    // 状态码判断
    switch (res.status) {
      case -102:
        console.log(-102);
        break;
      case -152:
        console.log(-152);
        break;
      case -153:
        console.log(-153);
        break;
      case -154:
        console.log(-154);
        break;
      default:
        console.log(200);
    }
  }
}
