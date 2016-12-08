/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 文件名：app.js，整个应用的核心
作者：zhaohuagang@lifang.com
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import viewEnginee from "../../system/dist/core/viewEnginee" ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
加载express核心模块并创建express应用程序
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
var express = require("express") ;
var app = express() ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
对搜索引擎的设置处理，包括如下任务：
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
viewEnginee.config(app) ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
bodyParser是Connect內建的middleware，下面先加载这个中间件
设置此处可以将client提交过来的post请求放入request.body中。
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
var bodyParser = require("body-parser") ;
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended : false })) ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
日志处理
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
require("./libs/utils/logger.js")(app) ;
/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 将请求的cookie都解析出来
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
var cookieParser = require("cookie-parser") ;
app.use(cookieParser()) ;
/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 对session的处理
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
require("./libs/utils/session.js")(app) ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 我们现在都有固定的静态资源域名，所以这里给注释掉了
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
//app.use(express.static(path.join(__dirname, 'public'))) ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
对于路由规则的处理，通过routers/index.js里面的方法进行循环引加载
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
require('./libs/utils/routerLoader.js')(app) ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 一个请求过来后的处理任务 7 ：
设置收藏夹图标
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
var favicon = require("serve-favicon") ;
//app.use(favicon(__dirname + '/public/favicon.ico')) ;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found') ;
  err.status = 404 ;
  next(err) ;
}) ;

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500) ;
    res.render('error', {
      message : err.message ,
      error : err
    }) ;
  }) ;
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500) ;
  res.render('error', {
    message : err.message ,
    error : {}
  }) ;
}) ;

/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
最后将整个应用核心当做模块暴露出去
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
module.exports = app ;
