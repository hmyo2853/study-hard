# https://school.programmers.co.kr/learn/courses/30/lessons/12935

def solution(arr):
    if len(arr) == 1 or arr[0] == arr[-1]:
        return [-1]
    minnum = arr[0]
    for i in range(1, len(arr)):
        if minnum > arr[i]:
            minnum = arr[i]
    while minnum in arr:
        arr.remove(minnum)
    return arr
