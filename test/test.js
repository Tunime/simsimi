var Simsimi = require('../index.js');

var simsimi = new Simsimi({
	key: '7f503329-9755-49dc-95d3-c586cf578914'
});

simsimi.listen('Hi', function(err, msg){
	if(err) return console.error(err);
	console.log('simsimi say: %s', msg);
});
