module.exports = app =>{
  class Category extends app.Service{
    async get(){
      let cate = await app.mysql.select('category');
      return cate;
    }
    async get_catename(){
      let cate = await app.mysql.select('category',{
        columns: ['id','fid','catename'],
        orders: [['id','desc']]
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
      let cate = await app.mysql.delete('category',data);
      return cate.affectedRows;
    }
  }
  return Category;
}
/**
 * author: YeMiao
 * date: 2017年7月12日14:42:38
 */