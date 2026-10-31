function reverseSubSegment(arr, start, end) {
    let left = start;
    let right = end;
    
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        left++;
        right--;
    }
    
    return arr;
}
