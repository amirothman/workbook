var fs = require('fs');
var path = process.argv[2];
var extension = '\.'+process.argv[3]+'$';
var pattern = new RegExp(extension);


fs.readdir(path, function (err,files){
	//files is an array of filenames
	
	if (err) return console.log(err)

	filtered = []
	files.forEach(function(v,i){
		if (v.match(pattern))
			filtered.push(v);
	});
  	
  filtered.forEach(function(v,i){
  	console.log(v);
  })

});