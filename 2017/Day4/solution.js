function isValid(input) {
	var split = input.split(" ");
	var set = new Set(split);
	
	return split.length == set.size;
}

var arr = [];

arr.map(isValid).filter(x => x).length

function isMoreSecure(input) {
	var split = input.split(" ");
	var sorted = split.map(x => x.split("").sort());
	var sets = sorted.map(x => new Set(x));
	
	return isValid(input) && !sets.some(x => sets.filter(s => s !== x).some(s => s.values == x.values));
}