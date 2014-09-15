var fs = require('fs');

var filename = process.argv[2];

var buffer = fs.readFileSync(filename);

var number_lines = buffer.toString().split("\n").length-1;

console.log(number_lines)