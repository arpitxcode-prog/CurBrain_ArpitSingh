function moduloPower(base, power, mod) {
    let result = 1 % mod;
    
    for (let i = 0; i < power; i++) {
        result = (result * base) % mod;
    }
    
    return result;
}
