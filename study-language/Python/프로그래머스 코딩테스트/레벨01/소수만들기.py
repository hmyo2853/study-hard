'''
https://school.programmers.co.kr/learn/courses/30/lessons/12977
모든 경우의 수를 구한다.

조건 1.
[1,2,3,4] 일 경우 3개를 뽑아 최고 높게 나오는 합의 수는 가장 높은 수부터 3개인 4+3+2 = 10 이다.
그러므로 소수는 10 이하에서 생성된다. 7, 5, 3, 2 소수는 총 4개

조건 2.
7, 5, 3, 2 의 소수에서 만들 수 있는 소수를 찾는다.
4를 뽑는다. 3을 뽑는다. 이때 다음수를 뽑으면 7이 넘어가므로 처음으로 다시 돌아간다. 4를 뽑는다. 3이 아닌 2를 뽑는다. 1를 뽑는다. 7이므로 카운트 1을 한다. 4를 뽑는다. 1을 뽑는다. 다음수가 없으므로 처음으로 돌아간다.
3을 뽑는다. 2를 뽑는다. 1를 뽑는다. 7이 되지 않았고 뽑을 수 있는 수가 없으므로 종료한다.


조건 1.
[1,2,7,6,4] 일 경우 3개를 뽑아 최고 높게 나오는 합의 수는 7+6+4 = 17 이다.
그러므로 소수는 17이하에서 생성된다. 17 13 11 7 5 3 2 소수는 총 7개

조건 2.
만들 수 있는 소수를 찾는다. 스택으로 맞는 조건일 경우 카운트 1, 다음 숫자로 넘어간다.
7 6 4 = 17, 소수이므로 카운트1
7 6 3 = 16, 7 6 2 = 15, 7 6 1 = 14,
7 4 2 = 13 소수이므로 카운트1
7 4 1 = 12, 7 2 1 = 10
6 4 2 = 12, 6 4 1 = 11 소수이므로 카운트1
6 2 1 = 9
4 2 1 = 7 소수이므로 카운트1
'''



