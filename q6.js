function digitFrequencyDifference(n, a, b) {
    let countA = 0;
    let countB = 0;

    if (n === 0) {
        if (a === 0) countA++;
        if (b === 0) countB++;
        return Math.abs(countA - countB);
    }

    while (n > 0) {
        let digit = n % 10;
        
        if (digit === a) {
            countA++;
        }
        if (digit === b) {
            countB++;
        }
        
        n = Math.floor(n / 10);
    }

    return Math.abs(countA - countB);
}
