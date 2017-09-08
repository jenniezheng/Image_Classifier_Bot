var express = require('express');

var app = express();
app.set('view engine', 'ejs');


app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , result: 23});
});

app.listen(process.env.PORT, process.env.IP,function(){
  console.log("App started on localhost:"+3000);
});
