function countPrimes(n) {
    if (n <= 2) return 0;

    let isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let p = 2; p * p < n; p++) {
        if (isPrime[p]) {
            for (let i = p * p; i < n; i += p) {
                isPrime[i] = false;
            }
        }
    }

    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
}
