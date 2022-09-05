# https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=python3

def solution(arr, divisor):
    answer = []
    for num in arr:
        if num % divisor == 0:
            answer.append(num)
    if len(answer) == 0:
        return [-1]
    return sorted(answer)
