function normalizeArray(arr) {
	return arr.map(x => +x);
}

function countStepsToOut(arr) {
	arr = normalizeArray(arr);
	var startIndex = 0;

	var currentIndex = startIndex;

	var isProcessing = true;
	var steps = 0;

	while(isProcessing) {
		if(currentIndex < 0 || currentIndex >= arr.length) {
			isProcessing = false;
			break;
		}
		steps++;
		var num = arr[currentIndex];		
	
		arr[currentIndex]++;
		
		currentIndex += num;
	}
	
	return steps;
}

function countStepsToOut2(arr) {
	arr = normalizeArray(arr);
	var startIndex = 0;

	var currentIndex = startIndex;

	var isProcessing = true;
	var steps = 0;

	while(isProcessing) {
		if(currentIndex < 0 || currentIndex >= arr.length) {
			isProcessing = false;
			break;
		}
		steps++;
		var num = arr[currentIndex];		
	
	
		if(num > 2) {
				arr[currentIndex]--;
		} else {
				arr[currentIndex]++;
		}	
		
		currentIndex += num;
	}
	
	return steps;
}

