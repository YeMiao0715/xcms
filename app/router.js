'use strict';

module.exports = app => {
// admin
  // home.js
  app.get('/', 'admin.home.index');
  app.get('/home.html', 'admin.home.home');
  app.post('/log.html', 'admin.home.log');
  app.post('/log_add.html', 'admin.home.log_add');
  app.post('/log_del.html', 'admin.home.log_del');
  // login.js
  app.get('/login.html', 'admin.login.index');
  app.post('/login.html', 'admin.login.index');
  app.get('/out.html', 'admin.login.out');
  // admin.js
  app.get('/admin_list.html', 'admin.admin.list');
  app.post('/admin_add.html', 'admin.admin.add');
  app.post('/admin_edit.html', 'admin.admin.edit');
  app.post('/admin_del.html', 'admin.admin.del');
  app.post('/admin_updata_pass.html', 'admin.admin.updata_pass');
  // categrory.js
  app.get('/category.html', 'admin.category.list');
  app.post('/category_add.html', 'admin.category.add');
  app.post('/category_del.html', 'admin.category.del');
};

/**
 * author: YeMiao
 * date: 2017年7月12日17:47:09
 * msg: 路由: 22,23,24
 */
