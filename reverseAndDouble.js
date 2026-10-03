function reverseAndDouble(n) {
    const isNegative = n < 0;
    let num = Math.abs(n);
    let reversedNum = 0;
    
    while (num > 0) {
        reversedNum = (reversedNum * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    
    if (isNegative) {
        reversedNum = -reversedNum;
    }
    
    return 2 * reversedNum;
}
