# API数据请求封装

## 1 介绍：

### 1.1 目录构成
* service：HTTP请求总目录
* Http.ts：HTTP数据请求方式
* Interceptors.ts：HTTP请求拦截器
* example：示例文件夹
* Api.ts：API管理文件
* ApiImpl.ts：API实现
* Download.ts：文件流下载（参数1：地址 参数2：文件流）
* README.md：介绍

### 1.2 具体文件详解
> 前提思想：模块化管理API  
在service创建模块文件夹例如：user模块、notice模块……
#### 1.2.1 Http.ts
提供五种请求方式：
- get：服务端将参数作为java对象来封装接受
- getStr：服务端将参数作为url参数来接受
- post
- delete：如果服务端将参数作为java对象来封装接受
- deleteStr：如果服务端将参数作为url参数来接受
- put
- patch
  
参数介绍：
```javascript
/**
* patch请求
* @param url     接口url
* @param params  参数
* @param jwt   	 是否token校验
*/
```
>注意：jwt：是header参数（key是`isJwt`）

服务器异常捕获：
>方法resultHandle：如果返回code不是200则捕获异常返回。  
方法errorHandle：服务器异常处理，提示错误信息。

#### 1.2.2 Interceptors.ts
>拦截器的使用加入了JAVA基盘TOKEN认证  
共通的HTTP握手错误


## 2 使用方式：

### 2.1 引入api

`import { getApi } from '@/service/example/ApiImpl';`

### 2.2 get请求
```javascript
getApi()
.then(function(res: any) {
	console.log(res);
})
.catch(function(error: any) {
	console.log(error);
});
```


## 3 跨域

### 3.1 开发环境配置 vue.config.js
```javascript
module.exports = {
  devServer: {
    open: true, 							//是否自动打开 不需要操作
    host: '0.0.0.0',						//本地IP 不需要操作
    port: 4433,								//开发端口
    https: false,							//是否开启
    hotOnly: false,							//是否开启 热更新问题
    proxy: {
      '/api/hbauthority': {					//本地api地址
        target: 'http://study.trechina.cn', //代理转发域名
        changeOrigin: true,					//Host虚拟化
        secure: false,						//接受HTTPS
        // ws: true, // proxy websockets	//保持通讯
        pathRewrite: {						//重写API地址
          '^/api/hbauthority': '/HBManagement/api/hbauthority'
        }
      }
    }
};

```

### 3.2 测试环境和本番环境
* .env.development：开发环境
* .env.test：测试环境  
* .env.prod：本番环境  
* NODE_ENV：环境划分，不建议修改  
* VUE_APP_URL：访问域名配置  

文件定义变量必须使用`VUE_APP_`开头

##  问题合集
### post遇到form提交方式
```
import qs from 'qs';
export const apiLogin = (p: any) => new HttpService().post(url, qs.stringify(p) as any);
```