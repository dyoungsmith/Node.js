// stdin data prompt 
process.stdout.write('prompt > ');

var commands = require('./commands');


process.stdin.on('data', function (data) {
	var cmd = data.toString();
	var inputArr = cmd.split(' ');
	console.log(cmd);
	var str = inputArr.slice(1, inputArr.length);
	commands[inputArr[0]](str);
});


