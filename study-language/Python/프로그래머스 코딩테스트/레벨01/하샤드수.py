# https://school.programmers.co.kr/learn/courses/30/lessons/12947

def solution(x):
    sum = 0
    for i in range(len(str(x))):
        sum += int(str(x)[i])
    return True if x % sum == 0 else False
