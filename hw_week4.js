const express = require('express');
const app = express();
const port = 3000;

function printlog(req) {
  console.log(`${req.method} ${req.url} ${Object.keys(req.headers).map(k => `${k}: ${req.headers[k]}`).join('\n')}`); 
  req.on('data', d => console.log(d.toString()));
};

app.get('/', (req, res) => { printlog(req); res.send(`This is main page.`); });
app.get('/board', (req, res) => { printlog(req); res.send(`This is board page.`); });

app.post('/board', (req, res) => { printlog(req); res.send(`This is board write page.`); });

app.use((req, res, next) => { printlog(req); res.status(404).send('404 Not found'); });

app.listen(port, () => console.log(`server online`));