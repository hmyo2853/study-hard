# https://school.programmers.co.kr/learn/courses/30/lessons/12933

def solution(n):
    x = list(str(n))
    x.sort(reverse=True)
    return int(''.join(x))
            