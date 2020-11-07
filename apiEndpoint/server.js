const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
var mongo = require('mongodb');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
