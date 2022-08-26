# 파이썬 dictionary 에서 key value 가져오기

dct = {'one':1, 'two':2, 'three':3, 'four':4}

# key 가져오기

for k in dct.keys():
  print('key는 ', k, ', value는 ', dct[k])

# value 가져오기

for v in dct.values():
  print('value는', v)

# key, value 한꺼번에 가져오기

for k, v in dct.items():
  print('key는 ', k, ', value는 ', v)
  