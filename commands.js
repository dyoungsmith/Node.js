var fs = require('fs');

module.exports = {
	pwd: function(str) {
		process.stdout.write(process.cwd());
		process.stdout.write("\nprompt > ");
	},

	date: function(str) {
		process.stdout.write(Date());
		process.stdout.write("\nprompt > ");
	},

	ls: function(str) {
		fs.readdir('.', function(err, files) {
	  		if (err) throw err;
	     	files.forEach(function(file) {
	    		process.stdout.write(file.toString() + "\n");
			})
		process.stdout.write("\nprompt > ");
		})
	},

	echo: function(str){
		process.stdout.write(str.join(' '));
		process.stdout.write("\nprompt > ");
	},

	cat: function(files) {
		for (var i = 0; i < files.length; i++) {
			fs.readFile(files[i].trim(), function(err, data) {
				// console.log(files);
	  			if (err) throw err;
				process.stdout.write(data);
			})
		}
		process.stdout.write("\nprompt > ");
	},

	head: function(files) {
		fs.readFile(files[0].trim(), function(err, data) {
			if (err) throw err;
			var fileLines = data.toString().split('\n');
			for (var i = 0; i < 10; i++) {
				process.stdout.write(fileLines[i] + '\n');
			}
		})
		process.stdout.write("\nprompt > ");
	},

	tail: function(files) {
		fs.readFile(files[0].trim(), function(err, data) {
			if (err) throw err;
			var fileLines = data.toString().split('\n');
			for (var i = fileLines.length - 5; i < fileLines.length; i++) {
				process.stdout.write(fileLines[i] + '\n');
			}
		})
		process.stdout.write("\nprompt > ");
	},

	sort: function(file) {
		fs.readFile(file[0].trim(), function(err, data) {
			if (err) throw err;
			var fileLines = data.toString().split('\n');
			process.stdout.write(fileLines.sort().join('\n'));
		})
	},

	wc: function(file) {
		fs.readFile(file[0].trim(), function(err, data) {
			if (err) throw err;
			var fileLines = data.toString().split('\n');
			console.log(fileLines.length);
		})
	},

	uniq: function(file) {
		fs.readFile(file[0].trim(), function(err, data) {
			if (err) throw err;
			var fileLines = data.toString().split('\n');
			for (var i = 0; i < fileLines.length; i++) {
				if (i == 0) {
					process.stdout.write(fileLines[i] + '\n');
					continue;
				}
				if (fileLines[i - 1] != fileLines[i]) {
					process.stdout.write(fileLines[i] + '\n');
				}
			}
			
		})
	},

	curl: function(url) {
		var request = require('request');
		request(url[0], function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    console.log(body) // Show the HTML for the Google homepage.
		  }
		})
	},

 }





