function encodeSearchParams(obj: any) {
  const params: string[] = [];
  Object.keys(obj).forEach(key => {
    let value = obj[key];
    // 如果值为undefined置空
    if (typeof value === 'undefined') {
      value = '';
    }
    //使用encodeURIComponent进行编码
    if (Array.isArray(obj[key])) {
      //类型为数组的时候
      value.forEach((item: string | number | boolean) => {
        params.push([key, encodeURIComponent(item)].join('='));
      });
    }
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      //类型为对象的时候
      Object.keys(obj[key]).forEach(item => {
        params.push([key, encodeURIComponent(obj[key][item])].join('='));
      });
    } else {
      params.push([key, encodeURIComponent(value)].join('='));
    }
  });
  return params.join('&');
}

export function download(url: string, obj: any) {
  const baseUrl = process.env.VUE_APP_DOWNLOAD_URL;
  const href = `${baseUrl}${url}?${encodeSearchParams(obj)}`;
  // 前端获取业务码，成功执行正常业务
  const downloadElement = document.createElement('a');
  downloadElement.href = href;
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
}
