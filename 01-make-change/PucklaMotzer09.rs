fn change(mut money : u32, coins : &Vec<u32>) -> Vec<u32> {
    // Stores all the amounts of the coins
    let mut coin_amounts : Vec<u32> = Vec::new();
    for c in coins.iter() {
        // If the current coin value is greater than the remaining money
        // don't give anything of it
        if *c > money {
            coin_amounts.push(0);
        } else {
            // If the current coin value is smaller or equal to the remaining money
            // subract it from the remaining money until it is bigger and
            // add one to the coin amount for every iteration
            let mut amount : u32 = 0;
            while *c <= money {
                money -= *c;
                amount+=1;
            }
            coin_amounts.push(amount);
        }
    }
    
    // If there is still money left
    if money != 0 {
        // just give one coin more 
        let last = coin_amounts.last().unwrap();
        let length = coin_amounts.len();
        coin_amounts[length-1] = last + 1;
    }

    coin_amounts
}

fn main() {
    let mut coins : Vec<u32> = Vec::new();
    // All the values are meant to be Euro cents
    coins.push(50000);
    coins.push(20000);
    coins.push(10000);
    coins.push(5000);
    coins.push(2000);
    coins.push(1000);
    coins.push(500);
    coins.push(200);
    coins.push(100);
    coins.push(50);
    coins.push(20);
    coins.push(10);
    coins.push(5);
    coins.push(2);
    coins.push(1);
    // 345.79 €
    let money = 34579;
    let coin_amounts = change(money,&coins);
    let mut change_money = 0;
    for ca in 0..coin_amounts.len() {
        println!("{} * {}",coin_amounts[ca],coins[ca]);
        change_money += coin_amounts[ca] * coins[ca];
    }
    println!("\nChange Money: {}",change_money);
    println!("Original Money: {}", money);
}