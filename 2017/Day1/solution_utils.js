function pairwise(arr, func){
    for(var i=0;i<arr.length-1;i++){
        func(arr[i], arr[i+1])
    }
}
let nums = [];
var sum = 0;
pairwise(nums, (a, b) => a == b ? sum = sum + (+a) : 0)