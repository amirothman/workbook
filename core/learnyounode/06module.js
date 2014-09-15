var fs = require('fs');
//var path = process.argv[2];

//var extension2 = process.argv[3]
//var extension = '\.'+process.argv[3]+'$';
//var pattern = new RegExp(extension);

module.exports = function (path,extension2,callback){

	fs.readdir(path, function (err,files){
		//files is an array of filenames
		if (err) return callback(err);

		extension = '\.'+extension2+'$';
		pattern = new RegExp(extension);

		filtered = []
		files.forEach(function(v,i){
			if (v.match(pattern))
				filtered.push(v);
		});
	  	
	  callback(null,filtered)
	});

}