const express = require('express');
const app = express();
const port = 3000;

const patch = require('path');
const cal = require('.cal');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));
app.get('/calculator', (req, res) => res.render('cal', { x = cal.add(1, 2), y: cal.mod(19247, 423), E: cal.getE() }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));