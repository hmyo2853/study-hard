# https://school.programmers.co.kr/learn/courses/30/lessons/12924

def solution(n):
    answer = 1
    if n == 1 or n == 2:
        return 1
    for i in range(1, (n//2)+2):
        plus = 0
        for j in range(i, (n//2)+2):
            plus += j
            if plus > n:
                break
            if plus == n:
                answer += 1
                break
    return answer



