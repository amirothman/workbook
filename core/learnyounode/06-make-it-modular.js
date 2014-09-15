var mymodule = require('./06module.js')
var fs = require('fs');
var path = process.argv[2];

var extension = process.argv[3]

mymodule(path,extension,function (err, files) {
	if (err) {
		process.exit(1);
	}
	files.forEach(function (file) {
		console.log(file);
	});
});