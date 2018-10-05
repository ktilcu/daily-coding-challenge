def palindrome_base(number):
  base = 2
  nb = str_base(number, base)
  while nb != nb[::-1]:
    base +=1
    nb = str_base(number, base)
  return base


def digit2chr(digit):
  if digit < 10:
    return chr(ord('0') + digit)
  else:
    return chr(ord('a') - 10 + digit)


def str_base(number, base):
  (d, m) = divmod(number, base)
  if d:
    return str_base(d, base) + digit2chr(m)
  else:
    return digit2chr(m)

print(palindrome_base(0))  # 2
print(palindrome_base(2))  # 3
print(palindrome_base(11))  #10
