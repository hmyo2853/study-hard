# https://school.programmers.co.kr/learn/courses/30/lessons/12912

def solution(a, b):
    if a == b:
        return a
    if a < b:
        return sum(i for i in range(a, b+1))
    else:
        return sum(i for i in range(b, a+1))