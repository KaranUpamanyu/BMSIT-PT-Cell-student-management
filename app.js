//Import all node modules
const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

const insert = require('./queries/insert.js');

const connect_db = require('./db_connect.js');




// Establish MySQL db connection
let con = connect_db();




//routes
app.get("/",function(req,res){
  res.sendFile(__dirname+"/views/index.html");
});

app.post("/", function(req,res){
  insert(con,req);
  res.send('Check CLI!');
});



// listen
app.listen(process.env.PORT||3000,function(){
  console.log('Server connected. Available at http://localhost:3000/');
});
