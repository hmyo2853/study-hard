# 리스트의 형태를 string으로 변환한다
# for문으로 요소를 하나씩 가져와서 합칠 필요 없음

x = ['A','B','C','D','E','F','G']
y = ''.join(x)
print(y)


a = ['12','ac','3450','입니다.']
b = ''.join(a)
print(b)

c = ['12','34','56']
d = ''.join(c)
e = int(''.join(c))
print(d, '의 타입 :', type(d))
print(e, '의 타입 :', type(e))
