'use strict';

var fs = require("fs"),
	path = require("path");

var filePath = path.join(__dirname, './test.js');

console.info(filePath);
fs.readFile(filePath,'utf-8', function(err,data){
	if(err){
		console.error(err);
	}else{
		console.log(data, typeof data);
		var reg = new RegExp('\\s*pf:\\s*\'.+\',','g');
		//var execObj = reg.exec(data)
		//console.log(execObj, reg.lastIndex);
		data = data.replace(reg, '');
		//console.log(data);

		fs.writeFile(filePath, data, function(err){
			if(!err){
				console.log('##### save successfully ###');
			}else{
				console.error('error:', err);
			}
		})
	}
});