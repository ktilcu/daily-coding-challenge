const isPalindrome = s => s.toString() === s .toString() .split('') .reverse() .join('');
const ariseMyBase = (predicate, base) => num =>
  predicate(num.toString(base)) || base >= 36
    ? base
    : ariseMyBase(predicate, ++base, num);

const palindromeBase = ariseMyBase(isPalindrome, 2);

console.log(palindromeBase(11)) // 20
