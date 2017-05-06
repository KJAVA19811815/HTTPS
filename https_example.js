var https = require('https');

console.log('i did it');

var options = {
  host: 'www.example.org',
  path: '/'
};

var callback = function() {
  console.log('in response handler callabck');

}
console.log('i m abt to make request');

https.request(options, callback).end();

console.log('i have made the request');