function findMostPopularItem(sales) {
    const counts = new Map();
    for (const id of sales) {
        counts.set(id, (counts.get(id) || 0) + 1);
    }

    let winner = null;
    let maxFreq = -1;

    for (const [id, freq] of counts.entries()) {
        if (freq > maxFreq) {
            maxFreq = freq;
            winner = id;
        } else if (freq === maxFreq && id < winner) {
            winner = id;
        }
    }

    return winner;
}
