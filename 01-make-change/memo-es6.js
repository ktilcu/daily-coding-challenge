const memo = new Map();

function changeBag(amount, coins, maxDepth = 100) {
    if (amount < 0) {
        // Should never happen.
        throw new Error('amount must be >= 0');
    }

    if (amount === 0) {
        // If there's no change left to make, return no change.
        return [];
    }

    if (maxDepth <= 0) {
        // Can't make change for nonzero amount with no coins.
        return null;
    }

    const memoKey = JSON.stringify([amount, coins, maxDepth]);

    if (memo.has(memoKey)) {
        return memo.get(memoKey);
    }

    let minResult = null;

    for (const coin of coins) {
        const nextAmount = amount - coin;

        if (nextAmount < 0) {
            continue;
        }

        const nextMaxDepth = maxDepth - 1;

        const subresult = changeBag(nextAmount, coins, nextMaxDepth);

        if (subresult === null) {
            continue;
        }

        const candidate = [coin, ...subresult];

        if (minResult === null || minResult.length > candidate.length) {
            minResult = candidate;
        }
    }

    memo.set(memoKey, minResult);

    return minResult;
}

function change(amount, coins) {
    const bag = changeBag(amount, coins);
    const counts = new Map();

    for (const coin of bag) {
        counts.set(coin, (counts.get(coin) || 0) + 1);
    }

    return coins.map(coin => counts.get(coin) || 0);
}

console.log('Change for .83: ', change(83, [25, 10, 5, 1]));
console.log('Change for .44: ', change(44, [25, 10, 5, 1]));
console.log('Change for 0.60 in weird currency: ', change(60, [40, 30, 10, 5, 1]));
