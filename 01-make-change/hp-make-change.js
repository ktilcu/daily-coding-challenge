function change(amount, coins) {
	result = [];
	for (let i=0; i<coins.length; i++) {
		result.push(Math.floor(amount/coins[i]));
		amount = amount%coins[i];
	}
	if (amount > 0) result[coins.length-1] += 1;
	return result;
}

console.log(change(83, [25,10,5,1])); // [ 3, 0, 1, 3 ] (83)
console.log(change(86, [25,10,5,1])); // [ 3, 1, 0, 1 ] (86)
console.log(change(83, [25,10,5])); // [ 3, 0, 2 ] (85)
console.log(change(86, [25,10,5])); // [ 3, 1, 1 ] (90)
