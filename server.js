const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from inside the very basic Node app!</h1>
    <h1>Docker dzia czy nie dzia</h1>
  `);
})

app.listen(3000);