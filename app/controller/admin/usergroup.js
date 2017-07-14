/*
 * @Author: YeMiao 
 * @Date: 2017-07-14 14:46:29 
 * @Last Modified by: YeMiao
 * @Last Modified time: 2017-07-14 16:38:56
 */
module.exports = app =>{
  class UserGroupController extends app.Controller{
    async list(ctx){
      let data = await ctx.service.usergroup.get();
      await ctx.render('admin/user_group',{
        row: data
      });
    }
    async add(ctx){
      if(ctx.request.body.name != undefined){
        let data = ctx.request.body;
        let status = await ctx.service.usergroup.add(data);
        ctx.body = status;
      }else{
        await ctx.render('admin/user_group_add');
      }      
    }
    async del(ctx){
      if(ctx.request.body.id != undefined){
        let data = ctx.request.body;
        let status = await ctx.service.usergroup.del(data);
        ctx.body = status;
      }
    }
  }
  return UserGroupController;
}