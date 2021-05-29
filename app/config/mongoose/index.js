'use strict';

const config = require('../../config/index');
const mongoose = require('mongoose');

//const mongoConnection = `mongodb://localhost:27017/admin`;
const mongoConnection = `mongodb://${config.mongoDB.ip}:${config.mongoDB.port}/${config.mongoDB.db}`;  

mongoose.Promise = global.Promise;

mongoose.connect(mongoConnection, {useMongoClient: true} )
  .then(() => {
    console.log("Conection to Mongo DB is succesfuly");
  })
  .catch( err => console.log(err) );

module.exports = mongoose;