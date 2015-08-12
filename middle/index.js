/*
 *	Dependencies
 */
var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

/*
 *	Where the binding is happening
 */
var routes = require('../config/routes');
var keys = Object.keys(routes);
for (var i = 0; i < keys.length; i++) {
	var key = keys[i];
	var pos = key.indexOf(" ");
	
	var method = (pos!=-1)? key.substring(0, pos): "all";
	method = method.toLowerCase();
	
	var route = key.substring(++pos);

	var value = routes[key];
	pos = value.indexOf(".");
	
	var controller = value.substring(0, pos);
	var action = value.substring(++pos);
	
	var ctrl = require('../controllers/'+controller)[action];
	router[method](route, ctrl);
};

/*
 * 	Services binding to global var
 */

exec("ls services", function(er, out){
	var services = out.split("\n");
	for (var i = 0; i < services.length; i++) {
		var service = services[i];
		if(service!=""){
			var name = service.substring(0, service.indexOf('.js'));
			global[name] = require('../services/'+name);
		}
	};
})




module.exports = router;
