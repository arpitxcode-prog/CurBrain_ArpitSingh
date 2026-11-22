function deleteByValue(arr, target) {
    let idx = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            idx = i;
            break;
        }
    }

    if (idx !== -1) {
        for (let i = idx; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length = arr.length - 1;
    }

    return arr;
}
