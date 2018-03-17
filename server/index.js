const elasticsearch = require('elasticsearch');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes'));

app.listen(3001, () => {
    console.log('Listening on port 3001');
})
