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
      const data = await ctx.service.log.get_log();
      await ctx.render('admin/home', {
        row: data,
      });
    }
    async log(ctx) {
      return await ctx.render('admin/home_log');
    }
    async log_add(ctx) {
      if (ctx.request.body.log != undefined) {
        const data = ctx.request.body;
        const status = await ctx.service.log.add_log(data);
        ctx.body = status;
      }
    }
    async log_del(ctx) {
      if (ctx.request.body.id != undefined) {
        const data = ctx.request.body;
        const status = await ctx.service.log.del_log_id(data);
        ctx.body = status;
      }
    }
  }
  return HomeController;
};
