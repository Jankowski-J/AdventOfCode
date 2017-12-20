function parseInstructions(arr) {
	
	var toOperation = x => {
		return {
			targetRegister: x[0],
			operation: x[1],
			value: +x[2],
			conditionRegister: x[4],
			conditionOperator: x[5],
			conditionValue: x[6]
		}
	};
	return arr.map(x => { 		
		let split = x.split(" "); 
		return toOperation(split);
	});
}

function executeInstructions(instructions) {
	var registers = {
	};
	var maxValue = 0;
	for (let instruction of instructions) {
		var reg = instruction.targetRegister;
		
		if(!(reg in registers)) {
			registers[reg] = 0;
		}
		
		var conditionReg = instruction.conditionRegister;
		
		if(!(conditionReg in registers)) {
			registers[conditionReg] = 0;
		}
		
		var regValue = registers[conditionReg];
		
		var op = instruction.conditionOperator;
		var value = instruction.conditionValue;
		var shouldPerformAction = false;
		
		if(op == "<" && regValue < value) {
			shouldPerformAction = true;		
		}
		if(op == "<=" && regValue <= value) {
			shouldPerformAction = true;
		}		
		if(op == "==" && regValue == value) {
			shouldPerformAction = true;
		}
		if(op == ">" && regValue > value) {
			shouldPerformAction = true;
		}
		
		if(op == ">=" && regValue >= value) {
			shouldPerformAction = true;
		}
		
		if(op == "!=" && regValue != value) {
			shouldPerformAction = true;
		}
		
		if(shouldPerformAction) {
			var shouldIncrease = (instruction.operation == "inc");
			
			if(shouldIncrease) {
				registers[reg] = registers[reg] + instruction.value;
			}
			else {
				registers[reg] = registers[reg] - instruction.value;
			}

			var currentValue = registers[reg];
			if(currentValue > maxValue) {
				maxValue = currentValue;
			}
		}
	}
	
	console.log(maxValue);
	return registers;
}

function getMax(dict) {
	var values = Object.values(dict);
	
	return Math.max.apply(null, values);
}

function solve(arr) {
	let instructions = parseInstructions(arr);
	let values = executeInstructions(instructions);
	let max = getMax(values);
	return max
}