function runningSuffixSum(arr) {
    let suffixSum = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = suffixSum;
        suffixSum += temp;
    }

    return arr;
}
