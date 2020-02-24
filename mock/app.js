/**
 * Mock Server 入口
 * */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Mock Server Running');
});

app.post('/api/login', require('./api/login'));

app.listen(8080, () => {
  console.log('Mock Server Running at http://localhost:8080');
});
