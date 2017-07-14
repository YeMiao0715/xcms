/*
 * @Author: YeMiao 
 * @Date: 2017-07-13 17:12:06 
 * @Last Modified by: YeMiao
 * @Last Modified time: 2017-07-14 15:22:04
 */
'use strict';

module.exports = app => {
  class LoginController extends app.Controller {
    async index(ctx) {
      if (ctx.request.body.user !== undefined) {
        let status = 0;
        let md5 = require('md5');
        let user = ctx.request.body.user;
        let data = await ctx.service.admin.find_user(user);
        if (data) {
          if (md5(ctx.request.body.pass) == data.password && data.state == 1 && data.group == 0) {
            ctx.session.user = user;
            ctx.session.password = data.password;
            await ctx.render('/public/jump', {
              msg: '登录成功！',
              url: '/admin/',
            });
          } else {
            await ctx.render('/public/jump', {
              msg: '用户或密码错误！请与管理员联系！',
              url: '/admin/login.html',
            });
          }
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
    async timeout(ctx) {
      ctx.session = null;
      ctx.body = 1;
    }
  }
  return LoginController;
};
