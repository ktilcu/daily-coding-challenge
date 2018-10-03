function change(n){
		// coinValues set to [quarters, dimes, nickels, pennies]
	const coinValues = [25,10,5,1];
		//amount of [quarters, dimes, nickels, pennies] pushed into array
	let coins = [];

	for(let i = 0; i < coinValues.length; i++){
		if(n >= coinValues[i]){
			coins[i] = Math.floor(n / coinValues[i]);
			n %= coinValues[i];
		} else {
			coins[i] = 0;
		}
	}
	return coins;
}
