var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn

router.get('/', function(req, res, next) {
	console.log("STARTING CHILD")
    var py = spawn('python', ['python/call.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '123';
	py.stdout.on('data', function(data){
		console.log( data.toString())
	   //dataString += data.toString();
	});
	py.stdout.on('end', function(){
	  console.log("Child ENDED")
	  res.render('index', { title: 'Express' , result: dataString});
	});
	py.stdin.write(JSON.stringify(data));
	py.stdin.end();

});

module.exports = router;
