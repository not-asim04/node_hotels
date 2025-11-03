const mongoose = require('mongoose');

//define the mongodb url connection string
const mongoURL = 'mongodb://localhost:27017/hotels'; //Replace "hotels" with your database name

//Set up mongodb connection
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => {console.log('Error in connecting to MongoDB');});
db.on('connected', () => {console.log('Connected to MongoDB');});
db.on('disconnected', () => {console.log('Disconnected from MongoDB');});

module.exports = db;