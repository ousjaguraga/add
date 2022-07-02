// this is app.js for us


var express = require('express');
var date = new Date()
var add = require('./add')
var addplus = require('./add-plus')


var app = express()

console.log(addplus.addP(1, 2))
console.log(add.addTwoNumbers(32, 2))
console.log(add.nothing())
app.set('view emngine', 'jade');
app.set('/', function(req, res) {
    res.end('Bye')
});

server = app.listen(3000, function(){

});