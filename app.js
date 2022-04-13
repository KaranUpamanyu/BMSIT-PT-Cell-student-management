//Import all node modules
const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

const insert = require('./queries/insert.js');
const select = require('./queries/select.js');
const update = require('./queries/update.js');

const connect_db = require('./db_connect.js');




// Establish MySQL db connection
let con = connect_db();




//routes
app.get("/",function(req,res){
  // res.sendFile(__dirname+"/views/registration_form.html");
  res.render('registration_form');
});

app.post("/", function(req,res){
  insert(con,req,res);
  // res.send('Check CLI!');
});


app.get("/admin", function(req,res){
  select(con,req,res);
});

app.post("/admin", function(req,res){
  update(con,req,res);
});



// listen
app.listen(process.env.PORT||3000,function(){
  console.log('Server connected. Available at http://localhost:3000/');
});
