const Mock = require('mockjs');
const fs = require('fs');
const path = require('path');

// 用于被index.js进行调用
function getJsonFile(filePath) {
  // 读取指定的json文件
  const json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
  // 解析并返回
  return JSON.parse(json);
}

module.exports = function(app) {
  if (process.env.MOCK) {
    app.post('/api/login', (rep, res) => {
      res.json(Mock.mock(getJsonFile('./user.json')));
    });

    app.get('/api/find-info', (rep, res) => {
      res.json(Mock.mock(getJsonFile('./userInfo.json')));
    });
  }
};
