// const http = require('http');
// const serve = http.createServer((request, response) => {
//   if(request.url === '/'){
//     response.write('Hello world form node');
//     response.end()
//   } else {
//     response.write('using some other domain');
//     response.end();
//   }
// })

// serve.listen('3000');

const http = require('http');
const fs = require('fs');

const serve = http.createServer((request, response) => {
  // changement du type de fichier a lire
  const readStream = fs.createReadStream('./static/index.html');
  response.writeHead(200, {'Content-type': 'text/html'});
  readStream.pipe(response);
});

serve.listen('3000');