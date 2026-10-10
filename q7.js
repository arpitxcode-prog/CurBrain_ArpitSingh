function getGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findArrayGCD(arr) {
    if (arr.length === 0) return null;

    let currentGcd = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentGcd = getGCD(currentGcd, arr[i]);
        
        if (currentGcd === 1) {
            break;
        }
    }

    return currentGcd;
}
