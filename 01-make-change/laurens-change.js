//takes two inputs, the amount of money that needs to be made into change
//and an array listing the value of each coin
//will work with different values in case you need to know
//how many silver sickles, bronze knuts, or golden galleons to make change with ;)

function change(change, coins) {
    var returnedChange = 0;
    var coinCount = [];
    coins.forEach(function(coin){
        var newChange = change - returnedChange;
        var coinAmount = Math.floor(newChange / coin);
        coinCount.push(coinAmount);
        returnedChange += coinAmount * coin;
    });
    console.log(coinCount);
    return coinCount;
}