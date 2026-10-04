function replaceEvenDigits(n) {
    let result = [];
    
    while (n > 0) {
        let digit = n % 10;
        
        if (digit % 2 === 0) {
            result.push(0);
        } else {
            result.push(digit);
        }
        
        n = Math.floor(n / 10);
    }
    
    result.reverse();
    return result;
}
