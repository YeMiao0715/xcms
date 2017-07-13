'use strict';
module.exports = app => {
  class Log extends app.Service {
    async get_log() {
      const log = await app.mysql.select('admin_log', {
        orders: [[ 'add_time', 'desc' ]],
      });
      return log;
    }
    async add_log(data) {
      delete data._csrf;
      data.user = this.ctx.session.user;
      data.add_time = await app.mysql.literals.now;
      const log = await app.mysql.insert('admin_log', data);
      return log.insertId;
    }
    async del_log_id(data) {
      delete data._csrf;
      const log = await app.mysql.delete('admin_log', data);
      return log.affectedRows;
    }
  }
  return Log;
};
