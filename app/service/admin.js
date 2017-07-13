'use strict';
module.exports = app => {
  class Admin extends app.Service {
    async find_id(uid) {
      let user = await app.mysql.select('admin_user', {
        where: { id: uid },
      });
      return user[0];
    }
    async find_user(name) {
      let user = await app.mysql.select('admin_user', {
        where: { user: name },
      });
      return user[0];
    }
    async get_user() {
      let user = await app.mysql.select('admin_user');
      return user;
    }
    async add_user(data) {
      let md5 = require('md5');
      delete data._csrf;
      data.password = md5(data.password);
      data.add_time = await app.mysql.literals.now;
      data.add_user = this.ctx.session.user;
      try {
        let user = await app.mysql.insert('admin_user', data);
        return user.insertId;
      }catch(err){
        return 0;
      }
    }
    async del_user_id(data) {
      delete data._csrf;
      let user = await app.mysql.delete('admin_user', data);
      return user.affectedRows;
    }
    async update_pass(data) {
      let md5 = require('md5');
      delete data._csrf;
      data.password = md5(data.password);
      let user = await app.mysql.update('admin_user', data);
      return user.affectedRows;
    }
  }
  return Admin;
};
/**
 * author: YeMiao
 * date: 2017年7月12日15:02:25
 * msg: 后来加的！这个几天受到知乎的影响,才在代码的后面写作者。
 */