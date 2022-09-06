# 해시로 임의의 int 키를 만들어서 값을 저장할수있다.

from re import A


dic = {}
for i in range(65, 70):
  a = chr(i) # 숫자를 글자로 변환
  dic[hash(a)] = a

print(dic)
