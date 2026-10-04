function solve(n) {
    if (n === 0) {
        return 0;
    }
    
    const isNeg = n < 0;
    let temp = Math.abs(n);
    let rev = 0;
    
    while (temp > 0) {
        rev = (rev * 10) + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    
    if (isNeg) {
        rev = -rev;
        return n + rev;
    }
    
    if (n === rev) {
        return n;
    }
    return n + rev;
}

console.log(solve(121));

