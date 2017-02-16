import fs from 'fs';
import Express from 'express';
import path2 from 'path';

export function Controller(target){
	

}

export function Action(obj){
	return function(target,name,descriptor){
		target[name].wk = obj;
	};
}

function resolveController(filePath,app){
	var controller = require(filePath).default;
	
	var actionNames = Object.getOwnPropertyNames(controller.prototype);
	actionNames.forEach(actionName=>{
		if(controller.prototype[actionName].wk){
			resolveAction(controller,actionName,app);
		}
	});
}

function resolveAction(controller,actionName,app){
	var controllerName = removeSuffix(controller.name,"Controller");
	var action = controller.prototype[actionName];	
	var path = action.wk.path ||  '/' + controllerName+'/'+actionName;
	var method = action.wk.verb || 'use';
	
	if(app[method]){
		app[method](path,generateRouteHandler(controller,actionName));
		console.log("register "+method+" "+path);
	}else{
		throw "verb of " + actionName + " in " + controller.name + " is not invalid.";
	}		
}


function generateRouteHandler(Controller,actionName){
	return function(req,res,next){
		var controller = new Controller();
		controller.req = req;
		controller.res = res;
		controller.next = next;
		
		controller[actionName]();
	}
}

//删除字符串str的后缀suffix
//大小写敏感
function removeSuffix(str,suffix){
	if(str.endsWith(suffix)){
		return str.substring(0,str.length - suffix.length);
	}
	
	return str;	
}

const OPTIONS = {
	path:"./dist/controllers"	
}

//路由
export default class Router{
	constructor(app){
		this.app = app;
	}
	
	load(option){
		var that = this;
		if(this.isLoaded){
			throw "不能重复调用路由加载...";
		}
		
		let newOption = Object.assign({},OPTIONS,option);
		
		//读取controllers目录下的所有xxxController.js文件
		var path = newOption.path;
		fs.readdir(path,function(err,files){
			
			if(err){
				throw "注册路由失败" + err;
			}
			
			//读取每个文件中的所有方法，为其注册路由
			files.forEach(function(file){
				if(file.endsWith('Controller.js')){
					resolveController(path2.resolve(path,file),that.app);
				}
			});
		});	
	}
}