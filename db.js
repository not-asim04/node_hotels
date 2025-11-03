const mongoose = require('mongoose');
require('dotenv').config();
//define the mongodb url connection string
//const mongoURL = process.env.DB_URL_LOCAL; //Replace "hotels" with your database name
const mongoURL = process.env.DB_URL;

//Set up mongodb connection
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => {console.log('Error in connecting to MongoDB');});
db.on('connected', () => {console.log('Connected to MongoDB');});
db.on('disconnected', () => {console.log('Disconnected from MongoDB');});

module.exports = db;