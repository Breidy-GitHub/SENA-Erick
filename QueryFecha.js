const http = require('http');

const server = http.createServer((req, res) => {
  const currentDate = new Date();
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`year=${currentDate.getFullYear()}<br>month=${currentDate.getMonth() + 1}<br>day=${currentDate.getDate()}`);
  res.end();
}).listen(8080)