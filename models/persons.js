const mongoose = require('mongoose');
//Define the menu schema
const menuSchema = new mongoose.Schema({
    itemName : {
        type : String,
        required : true
    },
    price : {
        type : Number,  
        required : true
    },
    category : {    
        type : String,  
        enum : ['starter', 'main course', 'dessert', 'beverage'],
        required : true
    }
});

//Defie the personn schema
const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
  },
   work : {
        type : String,
      enum : ['waiter', 'chef', 'manager',],
      required : true
   },
   mobile :{
    type : String,
    required : true
   },
   email:{
    type : String,
    required : true,
    unique : true
   },
   address : {
    type : String,
   },
   salary : {
    type : Number,
    required : true
   }
});

//create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
