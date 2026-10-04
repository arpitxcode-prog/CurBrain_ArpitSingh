function subtractProductAndSum(n) {
    let digitProduct = 1;
    let digitSum = 0;

    while (n > 0) {
        let digit = n % 10;

        digitProduct *= digit;
        digitSum += digit;

        n = Math.floor(n / 10);
    }

    return digitProduct - digitSum;
}

console.log(subtractProductAndSum(234)); 
console.log(subtractProductAndSum(123));
