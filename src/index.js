

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('../src/controllers/fileController')(app);

app.listen(3000, function () {
    console.log('O servidor está rodando na porta 3000!');
  });