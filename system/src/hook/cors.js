 /**-----------------------------------------------------------------------------------------------------------------------------------------------------
   * 系统级钩子 -> 跨域处理的钩子
   * 备注：读取白名单列表，包含请求域名的或者列表中含有*的就在页面header信息里面加几个参数实现同源策略
-----------------------------------------------------------------------------------------------------------------------------------------------------**/
import corsConf from "../../../application/dist/common/config/cors.json" ;  // 载入跨域配置
let stageEnv = process.env.STAGE_ENV ;  //取得当前的阶段环境参数

class Cors {
    contructor() {

    }
    static addHeaders(req, res, next) {
        let origin = req.headers.origin ;  //获取请求的域名
        let list = corsConf[stageEnv] ;  //获取白名单列表
        if (list.indexOf(origin) !== -1 && list.indexOf("*") !== -1) {  //如果配有*或者获取到的请求的域名都认为是符合同源策略
            res.header("Access-Control-Allow-Origin", origin) ;
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token") ;
            res.header("Access-Control-Allow-Credentials", true) ;
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE") ;
        }
        next() ;
    }
}
export default Cors ;  //导出