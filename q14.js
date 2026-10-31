function thresholdFilter(sales, threshold) {
    const result = [];
    for (let i = 0; i < sales.length; i++) {
        if (sales[i] >= threshold) {
            result.push(sales[i]);
        }
    }
    return result;
}
