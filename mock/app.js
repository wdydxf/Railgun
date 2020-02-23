/**
 * Mock Server 入口
 * */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Mock Server Running');
});

app.listen(8080, () => {
  console.log('Mock Server Running at http://localhost:8080')
});
