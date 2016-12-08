系统根目录
|--- bin/  程序启动项
|--- logs/  日志文件
      |--- info/
      |--- error/
      |--- warning/
|--- .pm2.config.js    pm2配置文件
|--- .babelrc              balbel编译配置文件
|--- package.json      package.json 中包含各种所需模块以及项目的配置信息（名称、版本、许可证等）meta 信息。
|--- .gitignore           git操作需要忽略的文件或者目录清单配置
|--- node_modules   npm包安装目录，除去全局安装的
|--- system               系统级目录及文件
      |--- src                ES6,7源文件
            |--- core  系统级核心代码
                  |--- controller
                        |--- basic.js  所有controller基类
                        |--- render.js  所有渲染器controller基类
                        |--- api.js  所有restful api controller基类，对于跨域的同源策略设置都在这里实现
                  |--- converter.js 数据转换器基类
                  |--- exception.js  错误处理基类
                  |--- hook.js  钩子基类
                  |--- model.js  模型基类
                  |--- router.js  路由器基类
            |---hook 系统级钩子，特别值得注意的是，我们原先的中间件概念没有了，因为中间件属于钩子里面的一种，属于路由器方法执行前的钩子
            |--- library  工具库
                  |--- benchmark.js  基准测试工具，可以让你标记点，并计算它们之间的时间差。还可以显示内存消耗。
                  |--- config.js  配置文件项解析获取工具
                  |--- loader.js  获取指定目录下的模块集合工具
                  |--- router.js   解决路由页面匹配路由的样式及脚本名称获取，以及路由页面基础模板数据的获得等问题
                  |--- urlParser.js  url解析器
                  |--- ...
            |--- service 公共服务      
      |--- dist 通过babel编译好的es5文件
|--- application  应用级目录及文件
      |--- cache  页面级缓存文件目录，如果缓存方式是文件形式的
      |--- view  应用的视图文件
      |--- static  应用的静态资源目录，根据情况决定是否需要
            |--- less
            |--- css
            |--- jssrc
            |--- js
      |--- src  es6.7 源文件
            |--- common 应用中的公共部分
                  |--- bootstrap  程序启动项
                  |--- config  整个应用配置
                        |--- app.json  基本配置，包括版本号，session及接口请求相关的timeout等
                        |--- cache.json  数据级，页面级缓存配置，包括缓存方式，缓存过期策略等
                        |--- cors.json  对外提供restful api接口的时候是否支持跨域，如果支持，白名单域名的配置
                        |--- db.json  数据库连接的配置
                        |--- hook.json  钩子配置，包含了中间件的配置
                        |--- interface.json  如果需要通过请求第三方接口获取数据，配置接口地址
                        |--- log.json  日志处理配置
                        |--- redis.json  redis配置
                        |--- static.json 静态资源引用配置
                  |--- core 应用的核心代码
                        |--- controller
                                |--- basic.js  所有controller基类，继承于/system/src/core/controller/basic.js
                                |--- render.js  所有渲染器controller基类，继承于/system/src/core/controller/render.js
                                |--- api.js  所有restful api controller基类，继承于/system/src/core/controller/api.js
                        |--- converter.js 数据转换器基类，继承于/system/src/core/converter.js
                        |--- exception.js  错误处理类，继承于/system/src/core/exception.js
                        |--- hook.js  钩子基类，继承于/system/src/core/hook.js
                        |--- model.js  模型基类，继承于/system/src/core/model.js
                  |--- hook 应用级的钩子类
                  |--- library 应用级的工具库类
                  |--- service  应用级的service类
            |--- moduleA  具体的一个模块实例                  
                  |--- controller  模块下的controller
                  |--- converter  模块下的converter
                  |--- language  模块下的语言配置文件
                  |--- model  模块下的模型文件
                  |--- router.js  当前模块的路由器
            |--- app.js 应用主文件
      |--- dist  通过babel编译好的es5文件



