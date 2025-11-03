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

//Define the menu schema
const menu = mongoose.model('Menu', menuSchema);
module.exports = menu;