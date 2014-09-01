var request = require('request');
var queryString = require('querystring');

var Simsimi = function(options){
	var defaults = {
		lc	: 	'en',
		ft	: 	'0.0',
		key	: 	'',
		text: 	'',
		api	: 	'http://sandbox.api.simsimi.com/request.p'
	};
	var extend = function(origin, dest){
		for(var key in origin){
			dest[key] = origin[key];
		}
		return dest;
	};
	this.options = extend(options, defaults);
};

Simsimi.STATUS = {
	OK					: 100,
	BAD_REQUEST	: 400,
	UNAUTHORIZED: 401,
	NOT_FOUND		: 404,
	SERVER_ERROR: 500
};

Simsimi.prototype.listen = function(text, callback){
	var params = {
		key: 	this.options.key,
		lc:		this.options.lc,
		ft: 	this.options.ft,
		text: text,
	};
	var url = this.options.api + '?' + queryString.stringify(params);	
	request(url, function(err, res, body){
		if(err) return callback(err);
		var data = JSON.parse(body);
		if(data.result == Simsimi.STATUS.OK){
			callback(err, data.response, data);
		}else{
			callback(new Error(data.msg, { code: data.result, origin: data }));
		}
	});
};

module.exports = Simsimi;
