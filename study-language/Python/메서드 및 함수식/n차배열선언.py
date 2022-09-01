# 1차 2차 3차... n차 배열 선언하기

# 요소가 10개인 1차 배열
arr1 = [0] * 10
print(arr1)

# 깊이가 3, 요소가 5인 2차원 배열
arr2 = [[0 for x in range(5)] for y in range(3)]
print(arr2)
arr2[2][2] = 1
print(arr2)
