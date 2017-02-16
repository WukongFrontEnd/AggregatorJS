import path from 'path';

export default class View{
	constructor(app){
		this.app = app;
	}
	configure(option){
		if(option.views){
			this.app.set('views',option.views);			
		}
		if(option['view engine']){
			this.app.set('view engine',option['view engine']);
		}
		
		//.....¸ü¶àÅäÖÃ¾´ÇëÆÚ´ý
	}
}