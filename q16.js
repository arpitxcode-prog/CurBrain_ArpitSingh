function findSecondHighest(scores) {
    let first = null;
    let second = null;

    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];

        if (first === null) {
            first = score;
        } else if (score > first) {
            second = first;
            first = score;
        } else if (score < first) {
            if (second === null || score > second) {
                second = score;
            }
        }
    }

    return second !== null ? second : -1;
}
