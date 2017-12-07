var sum = 0; 
for (let arr of arrays) { 
	var min = Math.min.apply(null, arr); 
	var max = Math.max.apply(null, arr); 
	var diff = max - min; 
	sum+=diff;
}