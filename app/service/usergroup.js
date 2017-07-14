/*
 * @Author: YeMiao 
 * @Date: 2017-07-14 14:48:56 
 * @Last Modified by: YeMiao
 * @Last Modified time: 2017-07-14 16:36:41
 */
module.exports = app =>{
  class UserGroup extends app.Service{
    async get(){
      let group = await app.mysql.select('admin_user_group');
      return group;
    }
    async add(data){
      delete data._csrf;
      try {
        let group = await app.mysql.insert('admin_user_group',data);
        return group.insertId;
      }catch(err){
        return 0;
      }      
    }
    async del(data){
      delete data._csrf;
      let group = await app.mysql.delete('admin_user_group',data);
      return group.affectedRows;
    }
  }
  return UserGroup;
}