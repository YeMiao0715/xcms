/*
 * @Author: YeMiao 
 * @Date: 2017-07-13 17:12:11 
 * @Last Modified by: YeMiao
 * @Last Modified time: 2017-07-14 17:18:13
 */
'use strict';
module.exports = app => {
  class Admin extends app.Service {
    async find_id(data) {
      delete data._csrf;
      let user = await app.mysql.get('admin_user',data);
      return user;
    }
    async find_user(name) {
      let user = await app.mysql.select('admin_user', {
        where: { user: name },
      });
      return user[0];
    }
    async get_user() {
      let user = await app.mysql.select('admin_user',{
        columns: ['id','user','add_time','add_user','state','group']
      });
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
    async updata_pass(data) {
      let md5 = require('md5');
      delete data._csrf;
      data.password = md5(data.password);
      let user = await app.mysql.update('admin_user', data);
      return user.affectedRows;
    }
    async updata(data){
      delete data._csrf;
      let user = await app.mysql.update('admin_user', data);
      return user.affectedRows;
    }
    async updata_state(data){
      delete data._csrf;
      if(data.state == 0){
        data.state = 1;
      }else{
        data.state = 0;
      }
      let user = await app.mysql.update('admin_user',data);
      return user.affectedRows;
    }
  }
  return Admin;
};