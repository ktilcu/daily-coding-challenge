// Run with node 8 or above
// node recursive-es6.js
const change = (amount, [coin, ...coins] = [25, 10, 5, 1]) => {
  if (amount === 0) return [];

  const num = Math.floor(amount / coin);
  return [num, ...change(amount - num * coin, coins)];
};

cosnole.log('Change for .83: ', change(83));
cosnole.log('Change for .44: ', change(44));
