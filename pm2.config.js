 /**-----------------------------------------------------------------------------------------------------------------------------------------------------
   * 应用配置
   * 参考文档：http://pm2.keymetrics.io/docs/usage/application-declaration/
  -----------------------------------------------------------------------------------------------------------------------------------------------------**/
module.exports = { 
  apps : [
    {
      name : "AggregatorJS_dev" ,  //应用名称
      script : "./bin/www" ,  //启动文件路径
      env : {
        STAGE_ENV : "dev" ,  //阶段环境配置
        PORT : 3000  //端口配置
      } ,
      cwd : "." ,
      instances : "max" ,  //启动的应用实例数，如果是max就是服务器有几核就启动多少个
      watch : true ,  //如果在目录中有文件改变，是否启用应用的监视、重启功能，true | false 默认为true
      exec_mode : "cluster"  //启动应用的模式，cluster | fork ，默认为 fork
    } ,
    {
      name : "AggregatorJS_test" ,
      script : "bin/www" ,
      env : {
        STAGE_ENV : "test" ,
        PORT : 3000
      } ,
      cwd : "." ,
      instances : "max" ,
      watch : true ,
      exec_mode : "cluster"
    } ,
    {
      name : "AggregatorJS_sim" ,
      script : "bin/www" ,
      env : {
        STAGE_ENV : "sim" ,
        PORT : 3000
      } ,
      cwd : "." ,
      instances : "max" ,
      watch : true ,
      exec_mode : "cluster"
    } ,
    {
      name : "AggregatorJS_prod" ,
      script : "bin/www" ,
      env : {
        STAGE_ENV : "prod" ,
        PORT : 3000
      } ,
      cwd : "." ,
      instances : "max" ,
      watch : true ,
      exec_mode : "cluster"
    }
  ]
}