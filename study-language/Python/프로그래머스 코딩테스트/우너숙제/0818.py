array = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]
check = [False, False, False] # 1 check
i = 0

def solution(array, check, i):
  while False in check:
    arr = array[i]
    if check[i] == False:
      arr[i] = 1
      check[i] = True
      print(arr, check, i)
      solution(array, check, i+1)

solution(array, check, i)

'''
2차원 배열의 값 0을 한개씩 찍는 재귀함수 만들어보기

[[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]

[[1, 0, 0],
[0, 1, 0],
[0, 0, 1]]

[[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
'''