var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' , result: "nothing yet"});
    var py = spawn('python', ['python/classify_image.py']),
    data='';
    dataString = '';
	py.stdout.on('data', function(data){
		console.log(data.toString());
	   dataString += data.toString();
	});
	py.stderr.on('data', (data) => {
	  console.log(`stderr: ${data}`);
	});
	py.on('error', (err) => {
	  console.log('Failed to start subprocess.');
	});

	py.stdout.on('end', function(){

	});
	py.stdin.write(JSON.stringify(data));
	py.stdin.end();

});

module.exports = router;
