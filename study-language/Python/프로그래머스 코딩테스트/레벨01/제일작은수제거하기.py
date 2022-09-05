# https://school.programmers.co.kr/learn/courses/30/lessons/12935

def solution(arr):
    if len(arr) == 1:
        return [-1]
    minnum = arr[0]
    for i in range(1, len(arr)):
        if minnum > arr[i]:
            minnum = arr[i]
    arr.remove(minnum)
    return arr

# 코드 리뷰 후 수정본

def solution(arr):
    if len(arr) == 1:
        return [-1]
    arr.remove(min(arr))
    return arr
