function parseInstructions(arr) {
	return arr.map(x => { 		
		let split = x.split(" "); 
		return {
			targetRegister: split[0],
			operation: split[1],
			value: +split[2],
			conditionRegister: split[4],
			conditionOperator: split[5],
			conditionValue: split[6]
		}
	});
}

function executeInstructions(instructions) {
	var registers = {
	};
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
		
		console.log(op);
		if(op == "<") {
			if(regValue < value) {
				shouldPerformAction = true;
			}			
		}
		if(op == "<=") {
			if(regValue <= value) {
				shouldPerformAction = true;
			}	
		}		
		if(op == "==") {
			if(regValue == value) {
				shouldPerformAction = true;
			}	
		}
		if(op == ">") {
			if(regValue > value) {
				shouldPerformAction = true;
			}	
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
		}
	}
	
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