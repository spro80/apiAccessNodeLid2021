'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/admin', {useMongoClient: true} )
  .then(() => {
    console.log("Conection to Mongo DB is succesfuly");
  })
  .catch( err => console.log(err) );

module.exports = mongoose;