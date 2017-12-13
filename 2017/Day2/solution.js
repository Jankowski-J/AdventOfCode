function findDivisible(input) { 
	for (let first of input) { 
		for(let second of input) { 
			if( first == second || first < second) continue;   
			if(first % second == 0) return first / second; 
		} 
	} 
}
arrays.map(ar => findDivisible(ar)).reduce((prev, curr) => prev + curr, 0)