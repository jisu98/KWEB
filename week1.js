const http = require('http');
const calc1 = require('./calc1');
const calc2 = require('./calc2');
const calc3 = require('./calc3');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain; charset=utf-8');
	res.end(`1 + 1 = ${calc1.add(1, 1)}\n` +
  			`2 - 10 = ${calc2.sub(2, 10)}\n` + 
  			`3 * 7 = ${calc3.mul(3, 7)}`);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});