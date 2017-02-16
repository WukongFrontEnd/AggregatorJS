
export function Controller(target){
	

}

export function Action(obj){
	return function(target,name,descriptor){
		target[name].wk = obj;
	};
}


export function HttpGet(target,name,description){
	if(name){// Ù–‘
		target.prototype[name].pre = function(){
			if(this.req.method === 'GET'){
				return true;
			}
			
			this.res.end();
			return false;
		};
	}else{//¿‡
		target.pre = function(){
			if(this.req.method === 'GET'){
				return true;
			}
			
			this.res.end();
			return false;
		};
	}
}
