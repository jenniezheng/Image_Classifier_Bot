var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn

router.get('/', function(req, res, next) {
    /*
    var py = spawn('python', ['python/call.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '';

	py.stdout.on('data', function(data){
	  dataString += data.toString();
	});
	py.stdout.on('end', function(){
	  res.render('index', { title: 'Express' , result: dataString});
	});
	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
	*/
	res.render('index', { title: 'Express' , result: 123});
});

module.exports = router;
