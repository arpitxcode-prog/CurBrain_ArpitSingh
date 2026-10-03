function hasEvenDigits(n) {
    if (n === 0) {
        return false;
    }
    let tempNum = Math.abs(n);
    let digitCount = 0;

    while (tempNum > 0) {
        digitCount++;

        tempNum = Math.floor(tempNum / 10);
    }


    if (digitCount % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(hasEvenDigits(1234));     // Output: true
