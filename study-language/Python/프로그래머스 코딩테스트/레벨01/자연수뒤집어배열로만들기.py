# https://school.programmers.co.kr/learn/courses/30/lessons/12932

def solution(n):
    x = str(n)
    arr = [0] * len(x)
    for i in range(len(x)):
        arr[len(x)-i-1] = int(x[i])
    return arr
