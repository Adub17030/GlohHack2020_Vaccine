const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
var mongo = require('mongodb');
require('dotenv').config();

//MiddleWares
app.use(cors());
app.use(express.json());

//MongoDb Methods
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_DB_URL;

//Particle connection
var Particle = require('particle-api-js');
var particle = new Particle();
var token = process.env.PARTICLE_TOKEN;

function MongoDbUpdate(Data) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('HackVaccDb');
        var myquery = { _id: 1 };
        var newvalues = { $set: { _id: 1, PhotonData: Data } };
        console.log(Data);
        dbo.collection('appData').updateOne(myquery, newvalues, function (
            err,
            res
        ) {
            if (err) throw err;
            console.log('1 document updated');
            db.close();
        });
    });
}

function MongoDbQuery() {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('HackVaccDb');
        var myquery = { _id: 1 };
        dbo.collection('appData')
            .find(myquery)
            .toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                db.close();
            });
    });
}

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/get', function (req, res) {
    MongoDbQuery();
    res.send('Hello World!');
});
app.get('/photon', function (req, res) {
    particle
        .login({ username: 'sushant.raj@uconn.edu', password: 'SushantPhoton' })
        .then(
            function (data) {},
            function (err) {
                console.log('Could not log in.', err);
            }
        );
    particle
        .getVariable({
            deviceId: '2c0034000f47363333343437',
            name: 'temp',
            auth: token,
        })
        .then(
            function (data) {
                MongoDbUpdate(data);
                res.send(data);
                console.log('Device variable retrieved successfully:', data);
            },
            function (err) {
                console.log('An error occurred while getting attrs:', err);
            }
        );
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
