var process = require('process');
var path = require('path');
var fs = require('fs');

function loadConfigs(){
	var root = process.cwd();
	var configs = {};
	var files = fs.readdirSync(path.resolve(root,'dist','configs'));
	if(files){
		files.forEach(function(file){
			if(file.endsWith('.js')){
				Object.assign(configs,require(path.resolve(root,'dist','configs',file)));
			}
		});
	}
	
	return configs;
}

module.exports = loadConfigs();