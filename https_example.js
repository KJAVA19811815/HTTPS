var https = require('https');

console.log('i did it');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

var callback = function(response) {
  console.log('in response handler callabck');

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });


}
console.log('i m abt to make request');

https.request(options, callback).end();

console.log('i have made the request');