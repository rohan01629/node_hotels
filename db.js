const mongoose = require('mongoose');
require("dotenv").config();

//define the mongodb connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGO_URL;

//setup MongoDB connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

const db = mongoose.connection;

db.on('connected',() => {
    console.log('connected to MongoDB server');
});

db.on('error',(err) => {
    console.log('MongoDB connection error',err);
});

db.on('disconnected',() => {
    console.log('MongoDB disconnected');
});

module.exports = db;