/*
 * @Author: YeMiao 
 * @Date: 2017-07-13 17:10:33 
 * @Last Modified by: YeMiao
 * @Last Modified time: 2017-07-14 16:59:54
 */
'use strict';

module.exports = app => {
  class AdminController extends app.Controller {
    async list(ctx) {
      let data = await ctx.service.admin.get_user();
      let group = await ctx.service.usergroup.get();
      await ctx.render('admin/admin_list', {
        row: data,
        group: group
      });
    }
    async add(ctx) {
      if (ctx.request.body.user != undefined) {
        let data = ctx.request.body;
        let status = await ctx.service.admin.add_user(data);
        return ctx.body = status;
      }
      let data = await ctx.service.usergroup.get();
      await ctx.render('admin/admin_add',{
        row: data
      });
    }
    async edit(ctx) {
      if (ctx.request.body.id > 0) {
        let data = ctx.request.body;
        let status = await ctx.service.admin.find_id(data);        
        if (status == undefined) {
          ctx.body = status;
        } else {
          let group = await ctx.service.usergroup.get();
          return await ctx.render('admin/admin_edit', {
            row: status,
            group: group
          });
        }
      }
    }
    async del(ctx) {
      if (ctx.request.body.id > 0) {
        let data = ctx.request.body;
        let status = await ctx.service.admin.del_user_id(data);
        ctx.body = status;
      }
    }
    async updata_pass(ctx) {
      if (ctx.request.body.id > 0) {
        let data = ctx.request.body;
        let status = await ctx.service.admin.updata_pass(data);
        ctx.body = status;
      }
    }
    async updata(ctx){
      if (ctx.request.body.id > 0) {
        let data = ctx.request.body;
        let status = await ctx.service.admin.updata(data);
        ctx.body = status;
      }
    }
    async updata_state(ctx) {
      if(ctx.request.body.id > 0) {
        let data = ctx.request.body;
        let status = await ctx.service.admin.updata_state(data);
        ctx.body = status;
      }
    }
  }
  return AdminController;
};
