function findMinimumAbsoluteValue(arr) {
    let minVal = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i]) < Math.abs(minVal)) {
            minVal = arr[i];
        }
    }
    
    return minVal;
}
