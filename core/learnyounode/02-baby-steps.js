numbers = process.argv.splice(2,process.argv.length-1);

var sum = 0;

numbers.forEach(function(v,i){
	sum += parseInt(v);
});

//closure

console.log(sum);