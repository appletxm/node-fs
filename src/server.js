'use strict';

var http = require("http"),
	newServer;
	//exec = require("child_process").exec;

exports.create = function (address, port, serverHandler) {
	var newServer;
	address = address ? address : '127.0.0.1';
	serverHandler = serverHandler && (typeof serverHandler).toLowerCase() === 'function' ? serverHandler : function () {};
	newServer = http.createServer(serverHandler).listen(port, address);

	console.log('Server running at http://' + address + ':' + port);
};
