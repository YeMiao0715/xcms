'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = {
    view: {
      defaultViewEngine: 'nunjucks',
      defaultExtension: '.html',
      mapping: {
        '.html': 'nunjucks',
      },
      root: [
        path.join(appInfo.baseDir, 'app/view'),
        path.join(appInfo.baseDir, 'path/to/another'),
      ].join(',')
    },
    mysql:{
      client:{
        // host
        host: '127.0.0.1',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'root',
        // 数据库名
        database: 'xcms',
      },
      app: true,
      agent: false,
    }
  };

  // should change to your own
  config.keys = appInfo.name + '_1498698638289_4758';

  // add your config here

  return config;
};

