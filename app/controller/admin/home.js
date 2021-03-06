/*
 * @Author: YeMiao 
 * @Date: 2017-07-13 17:12:00 
 * @Last Modified by: YeMiao
 * @Last Modified time: 2017-07-14 09:47:48
 */
'use strict';
module.exports = app => {
  class HomeController extends app.Controller {
    async index(ctx) {
      if (ctx.session.user == undefined) {
        await ctx.render('public/jump', {
          msg: '请先登录！',
          url: 'login.html',
        });
        return;
      }
      await ctx.render('admin/index', {
        user: ctx.session.user,
      });
    }
    async home(ctx) {
      let data = await ctx.service.log.get_log();
      await ctx.render('admin/home', {
        row: data,
      });
    }
    async log(ctx) {
      return await ctx.render('admin/home_log');
    }
    async log_add(ctx) {
      if (ctx.request.body.log != undefined) {
        let data = ctx.request.body;
        let status = await ctx.service.log.add_log(data);
        ctx.body = status;
      }
    }
    async log_del(ctx) {
      if (ctx.request.body.id != undefined) {
        let data = ctx.request.body;
        let status = await ctx.service.log.del_log_id(data);
        ctx.body = status;
      }
    }
  }
  return HomeController;
};
