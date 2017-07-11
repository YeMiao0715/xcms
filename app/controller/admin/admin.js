'use strict';

module.exports = app => {
  class AdminController extends app.Controller {
    async list(ctx) {
      let data = await ctx.service.admin.get_user();
      await ctx.render('admin/admin_list',{
        row: data
      });
    }
    async add(ctx){
      if(ctx.request.body.user != undefined){
        let data = ctx.request.body;        
        let status = await ctx.service.admin.add_user(data);
        return ctx.body = status;
      }else{
        await ctx.render('admin/admin_add');
      }
    }
    async edit(ctx){
      if(ctx.request.body.id > 0){
        let data = ctx.request.body;
        let status = await ctx.service.admin.find_id(data.id);        
        if (status == undefined){
          ctx.body = status;
        }else{
          return await ctx.render('admin/admin_edit',{
            row: status
          }); 
        }
      }
    }
    async del(ctx){
      if(ctx.request.body.id > 0){
        let data = ctx.request.body;
        let status = await ctx.service.admin.del_user_id(data);
        ctx.body = status;
      }
    }
    async updata_pass(ctx){
      if(ctx.request.body.id > 0){
        let data = ctx.request.body;
        let status = await ctx.service.admin.update_pass(data);
        ctx.body = status;
      }
    }
  }
  return AdminController;
};