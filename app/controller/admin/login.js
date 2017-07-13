'use strict';

module.exports = app => {
  class LoginController extends app.Controller {
    async index(ctx) {
      if (ctx.request.body.user !== undefined) {
        let status = 0;
        const md5 = require('md5');
        const user = ctx.request.body.user;
        const data = await ctx.service.admin.find_user(user);
        if (data) {
          if (md5(ctx.request.body.pass) == data.password) {
            ctx.session.user = user;
            ctx.session.password = data.password;
            status = 1;
          } else {
            console.log(md5(ctx.request.body.pass));
          }
        }
        if (status) {
          await ctx.render('public/jump', {
            msg: '登录成功！',
            url: '/',
          });
        } else {
          await ctx.render('public/jump', {
            msg: '用户或密码错误！',
            url: 'login.html',
          });
        }
        return;
      }
      await ctx.render('admin/login');
    }
    async out(ctx) {
      ctx.session = null;
      await ctx.render('public/jump', {
        msg: '已安全退出！',
        url: 'login.html',
      });
    }
  }
  return LoginController;
};
