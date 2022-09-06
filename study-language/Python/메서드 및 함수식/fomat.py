# 변수를 fomatting 하여 값을 바로 출력한다.

x = ['a', 'b', 'c', 'd']
for i in range(len(x)):
  if x[i] == 'c':
    print("x 배열 안 인덱스 {0}에 {en}가 있다.".format(i, en='c'))