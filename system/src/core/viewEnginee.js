 /**-----------------------------------------------------------------------------------------------------------------------------------------------------
   * 模块：系统核心 -> 模板引擎设置
   * 备注：支持ejs | handlebars | jade等
   * 作者：赵华刚(zhaohuagang@lifang.com)
-----------------------------------------------------------------------------------------------------------------------------------------------------**/
import path from "path" ;
import appConf from "../../../../application/config/app.json" ;  //获取应用配置

class ViewEnginee {
    constructor() {

    }
    static config(app) {
        app.set("views", path.join(__dirname, "..", "..","..", ".." , "application" , "view")) ;  //模板的位置是固定不能动的，这就是规范
        app.set("view engine", appConf.viewEngine) ;  //设置模板引擎类型
    }
}
export default ViewEnginee ;