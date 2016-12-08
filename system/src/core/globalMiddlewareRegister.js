 /**-----------------------------------------------------------------------------------------------------------------------------------------------------
   * 模块：系统核心 -> 全局中间件注册
   * 备注：
   * 作者：赵华刚(zhaohuagang@lifang.com)
-----------------------------------------------------------------------------------------------------------------------------------------------------**/
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

class GMR {
    constructor() {

    }
    static register(app) {
        /**
         * desc:bodyParser是Connect內建的middleware，下面先加载这个中间件
         * 设置此处可以将client提交过来的post请求放入request.body中。
         */
        app.use(bodyParser.json()) ;
        app.use(bodyParser.urlencoded({ extended : false })) ;
        /**
         * desc:将请求的cookie都解析出来
         */
        app.use(cookieParser()) ;

        /**
         * desc:我们现在都有固定的静态资源域名，所以这里给注释掉了
         */
        //app.use(express.static(path.join(__dirname, 'public'))) ;
    }
}