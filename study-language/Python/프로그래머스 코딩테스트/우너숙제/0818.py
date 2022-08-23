array = [
[1, 0, 0, 0],
[0, 1, 0, 0],
[0, 0, 0, 1]]
check = [False, False, False, False] # 1 check
i = 0

def solution(array, check, i):
  while i < len(check):
    arr = array[i]
    if check[i] == False:
      arr[i] = 1
      check[i] = True
      # 함수 = 2차열 array에 접근하는 index는 0,1,2 / 1을 찍는 순서는 2,1,0 이 될수도 있다.
      # for문은 초기화가 되므로 함수에 들어갔을때 초기화될 것을 생각해서 함수를 짜기
      # 맨마지막 동작에서 index 오류가 없게끔하기
      solution(array, check, i+1)
      arr[i] = 0
      check[i] = False
      
solution(array, check, i)

'''
2차원 배열의 값 0을 한개씩 찍는 재귀함수 만들어보기

[[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]

[[1, 0, 0], T,F,F
[0, 1, 0], F,T,F
[0, 0, 1]] f,F,T
error


[[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
'''