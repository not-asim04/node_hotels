// function prince(){
//     console.log("Hello, Prince!");
// }
// function add(a,b,prince){
//     var result = a + b;
//     console.log("The sum is: " + result);
//     prince();
// }

// add(3,5,prince);

var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username);
fs.appendFile('message.txt', 'Hello World!', ()=> {
    console.log('Saved!');
})