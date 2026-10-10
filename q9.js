function isPrime(x) {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

function nextPrime(n) {
    if (n < 2) return 2;
    
    let candidate = n + 1;
    while (!isPrime(candidate)) {
        candidate++;
    }
    
    return candidate;
}
