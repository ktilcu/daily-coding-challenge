def missing_number(num_list):
  pos_num_list = [item for item in num_list if item > 0]
  pos_num_list.sort()
  positive_list = [x for x in range(1, pos_num_list[-1]+2)]
  pos_num_list = set(pos_num_list)
  for e in pos_num_list ^ set(positive_list):
    break
  return e
  
print(missing_number([3,3,-1,1]))  # 2
print(missing_number([1,2,0,-1]))  # 3
