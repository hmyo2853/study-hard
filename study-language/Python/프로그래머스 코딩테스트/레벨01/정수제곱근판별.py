# https://school.programmers.co.kr/learn/courses/30/lessons/12934

def solution(n):
    x = 1
    while x != n/x:
        x += 1
        if x > n:
            return -1
    answer = (x+1)*(x+1)
    return answer
