// require the library

const mongoose = require('mongoose');

//connect to the database

mongoose.connect('mongodb://localhost/Contact_list_db');

//acquire the connection (to cheack if it is successfull)
const db=mongoose.connection;

//error
db.once('error', console.error.bind(console, 'error connecting to db'));

//up and running then print the massage

db.once('open', function(){
    console.log('successfully connected to the database');
});