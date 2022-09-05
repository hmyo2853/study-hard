# https://school.programmers.co.kr/learn/courses/30/lessons/12921

def solution(n):
    answer = 0
    if n == 2:
        return 1
    for i in range(2, n+1):
        if sosu(i) == True:
            answer += 1
    return answer

def sosu(x):
    for i in range(2, int(x**0.5)+1):
        if x % i == 0: # 소수 아님
            return False
    return True