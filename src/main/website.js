var express = require("express");
var http = require("http").Server(app);
var fs =require('fs')
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var path = require('path')


router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(__dirname + "/views/index.html");
  console.log('Showing Index')
});

// router.get("/about",function(req,res){
//   res.sendFile(path + "about.html");
// });
//
// router.get("/contact",function(req,res){
//   res.sendFile(path + "contact.html");
// });
//
app.use("/",router);
// app.use('/public', express.static("/" + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(3000,function(){
  console.log("Live at Port 3000");
});


// var http = require('http');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);
