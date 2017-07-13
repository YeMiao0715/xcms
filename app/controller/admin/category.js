'use strict';

module.exports = app => {
  class CategoryController extends app.Controller {
    async list(ctx){
      let data = await ctx.service.category.get();
      await ctx.render('admin/category',{
        row: data
      });
    }
    async add(ctx){
      if(ctx.request.body.catename != undefined){
        let data = ctx.request.body;
        let status = await ctx.service.category.add(data);
        ctx.body = status;
      }else{
        let data = await ctx.service.category.get_catename();
        return await ctx.render('admin/category_add',{
          row: data
        });
      }      
    }
    async del(ctx){
      if(ctx.request.body.id != undefined){
        let data = ctx.request.body;
        let status = await ctx.service.category.del_id(data);
        ctx.body = status;
      }
    }
  }
  return CategoryController;
};
/**
 * author: YeMiao
 * date: 2017年7月12日15:00:34
 */