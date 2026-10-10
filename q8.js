function kthFactor(n, k) {
    let factors = [];
    
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
            
            if (i !== n / i) {
                factors.push(n / i);
            }
        }
    }
    
    factors.sort((a, b) => a - b);
    
    if (k <= factors.length) {
        return factors[k - 1];
    }
    
    return -1;
}
