/*
 * @Author: YeMiao 
 * @Date: 2017-07-14 11:06:09 
 * @Last Modified by: YeMiao
 * @Last Modified time: 2017-07-14 17:01:58
 */
'use strict';

module.exports = app => {
// admin
  // admin.js
  app.get('/admin/admin_list.html', 'admin.admin.list');
  app.post('/admin/admin_add.html', 'admin.admin.add');
  app.post('/admin/admin_edit.html', 'admin.admin.edit');
  app.post('/admin/admin_del.html', 'admin.admin.del');
  app.post('/admin/admin_updata_pass.html', 'admin.admin.updata_pass');
  app.post('/admin/admin_updata_state.html', 'admin.admin.updata_state');
  app.post('/admin/admin_updata.html', 'admin.admin.updata');
  // categrory.js
  app.get('/admin/category.html', 'admin.category.list');
  app.post('/admin/category_add.html', 'admin.category.add');
  app.post('/admin/category_del.html', 'admin.category.del');
  app.post('/admin/category_edit.html', 'admin.category.edit');
  app.post('/admin/category_updata.html', 'admin.category.updata');
  // home.js
  app.get('/admin/', 'admin.home.index');
  app.get('/admin/home.html', 'admin.home.home');
  app.post('/admin/log.html', 'admin.home.log');
  app.post('/admin/log_add.html', 'admin.home.log_add');
  app.post('/admin/log_del.html', 'admin.home.log_del');
  // login.js
  app.get('/admin/login.html', 'admin.login.index');
  app.post('/admin/login.html', 'admin.login.index');
  app.get('/admin/out.html', 'admin.login.out');
  app.post('/admin/timeout.html', 'admin.login.timeout');
  // usergroup.js
  app.get('/admin/user_group.html', 'admin.usergroup.list');
  app.post('/admin/user_group_add.html', 'admin.usergroup.add');
  app.post('/admin/user_group_del.html', 'admin.usergroup.del');
  
  
  
  

};

/**
 * author: YeMiao
 * date: 2017年7月12日17:47:09
 * msg: 22,23,24
 * data: 2017年7月13日11:29:35
 * msg: 25,26
 */
