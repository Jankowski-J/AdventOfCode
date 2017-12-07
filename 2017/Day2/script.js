var sum = 0; 
for (let arr of arrays) { 
	var min = Math.min.apply(null, arr); 
	var max = Math.max.apply(null, arr); 
	var diff = max - min; 
	sum+=diff;
}

// PART 2

function findDivisible(input) { 
	for (let first of input) { 
		for(let second of input) { 
			if( first == second || first < second) continue;   
			if(first % second == 0) return first / second; 
		} 
	} 
}
arrays.map(ar => findDivisible(ar)).reduce((prev, curr) => prev + curr, 0)