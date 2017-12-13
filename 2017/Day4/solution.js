function isValid(input) {
	var split = input.split(" ");
	var set = new Set(split);
	
	return split.length == set.size;
}

var arr = [];

arr.map(isValid).filter(x => x).length