function modularAddition(arr) {
    const MOD = 1000000007;
    let result = 0;
    
    for (const value of arr) {
        result = (result + value) % MOD;
    }
    
    return result;
}
