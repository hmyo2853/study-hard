# https://school.programmers.co.kr/learn/courses/30/lessons/12943

def solution(num):
    answer = 0
    answer += fnc(num, answer)
    return answer

def fnc(n, i):
    if i > 500:
        return -1
    if n == 1:
        return i
    if n % 2 == 0:
        n = n/2
        return fnc(n, i+1)
    else:
        n = (n*3) + 1
        return fnc(n, i+1)
        