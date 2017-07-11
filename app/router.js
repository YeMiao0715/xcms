'use strict';

module.exports = app => {
  // home.js
  app.get('/', 'admin.home.index');
  app.get('/home.html', 'admin.home.home'); 
  app.post('/log.html', 'admin.home.log');
  app.post('/log_add.html', 'admin.home.log_add');
  app.post('/log_del.html', 'admin.home.log_del');
  // login.js
  app.get('/login.html','admin.login.index');
  app.post('/login.html','admin.login.index');
  app.get('/out.html', 'admin.login.out');
  // admin.js
  app.get('/admin_list.html', 'admin.admin.list');
  app.post('/admin_add.html', 'admin.admin.add');
  app.post('/admin_edit.html', 'admin.admin.edit');
  app.post('/admin_del.html', 'admin.admin.del');
  app.post('/admin_updata_pass.html', 'admin.admin.updata_pass');
};
