# https://school.programmers.co.kr/learn/courses/30/lessons/86051

def solution(numbers):
    answer = 0
    arr = []
    for i in range(10):
        arr.append(i)
    
    for n in arr:
        if n not in numbers:
            answer += n
    return answer