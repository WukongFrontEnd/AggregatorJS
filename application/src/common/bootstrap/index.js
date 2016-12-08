 /**-----------------------------------------------------------------------------------------------------------------------------------------------------
   * 模块：应用核心 -> bootstrap启动项聚合器
   * 备注：
   * 作者：赵华刚(zhaohuagang@lifang.com)
-----------------------------------------------------------------------------------------------------------------------------------------------------**/
import viewEnginee from "../../../../system/dist/core/viewEnginee" ;
import gmr from "../../../../system/dist/core/globalMiddlewareRegister" ;

export default function (app) {
    viewEnginee.config(app) ;  //模板引擎配置
    //日志处理
    //session处理
    gmr.register(app) ;  //全局中间件注册
    //路由器注册
}