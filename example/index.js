const simsimi = require('..')({
  key: 'f05ba03a-c5c5-4e52-ac73-e3be6e2557f3'
});

// var simsimi = new Simsimi({
//   key: 'f05ba03a-c5c5-4e52-ac73-e3be6e2557f3'
// });

simsimi.listen('Hello', function(err, response){
  console.log(err, response);
});