/*
 * @Author: YeMiao 
 * @Date: 2017-07-13 17:12:16 
 * @Last Modified by:   YeMiao 
 * @Last Modified time: 2017-07-13 17:12:16 
 */
module.exports = app =>{
  class Category extends app.Service{
    async get(){
      let cate = await app.mysql.select('category',{
        orders: [['order','']]
      });
      return cate;
    }
    async get_catename(){
      let cate = await app.mysql.select('category',{
        columns: ['id','fid','catename']
      });
      return cate;
    }
    async add(data){
      delete data._csrf;    
      try{
        let cate = await app.mysql.insert('category',data);
        return cate.insertId;
      }catch(err){
        return 0;
      }      
    }
    async del_id(data){
      delete data._csrf;
      let fid = await app.mysql.select('category',{
        where: {id: data.id},
        columns: ['fid']
      });
      if(fid[0].fid == 0){
        app.mysql.delete('category',{
          fid: data.id
        });
      }
      let cate = await app.mysql.delete('category',data);
      return cate.affectedRows;
    }
    async find_id(data){
      delete data._csrf;
      let cate = await app.mysql.get('category',data);
      return cate;
    }
    async updata(data){
      delete data._csrf;
      let cate = await app.mysql.update('category',data);
      return cate.affectedRows;
    }
  }
  return Category;
}
/**
 * author: YeMiao
 * date: 2017年7月12日14:42:38
 */