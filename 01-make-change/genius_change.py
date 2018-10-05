def change(amt, coins):
  coins_dict = {c: 0 for c in coins}
  coins.sort(reverse=1)
  for coin in coins:
    holding_amt = amt
    amt = amt // coin
    coins_dict[coin] = amt
    amt = holding_amt % coin
  return list(coins_dict.values())
  
print(change (83, [25, 10, 5, 1]))  # [3,0,1,3]
print(change (83, [25, 1, 5, 10]))  # [3,3,1,0]
