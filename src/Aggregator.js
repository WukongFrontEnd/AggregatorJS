import Express from 'express';
import Action from './core';
import Router from './route';
import View from './view';



var configs = require('./config');


export class Aggregator {
	constructor(){
		//this.option = option;//暂时先不处理
		this.app = new Express();
		this.view = new View(this.app);
		this.router = new Router(this.app);
		
		this.configureView(/*this.option*/configs.views);
		this.loadRoutes(/*this.option*/configs.routes);
	}
	
	configureView(option){
		this.view.configure(option);
	}
	
	loadRoutes(option){
		this.router.load(option);
	}
	
	listen(port){
		this.app.listen(port);
	}
}
