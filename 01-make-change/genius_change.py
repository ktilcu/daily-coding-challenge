def change(amt, coins):
  _amt = amt
  _coins = [c for c in coins]
  coins_dict = {c: 0 for c in coins}
  coins.sort(reverse=1)
  for coin in coins:
    holding_amt = amt
    amt = amt // coin
    coins_dict[coin] = amt
    amt = holding_amt % coin
  if amt != 0:
    return change(_amt-amt+coins[-1], _coins)
  else:
    return list(coins_dict.values())
  
print(change (83, [25, 10, 5, 1]))  # [3,0,1,3]
print(change (83, [25, 1, 5, 10]))  # [3,3,1,0]
print(change (83, [25, 10, 5]))  # [3,1,0]
print(change (98, [10, 25, 5]))  # [0,4,0]
