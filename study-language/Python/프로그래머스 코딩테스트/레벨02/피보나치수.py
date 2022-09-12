# https://school.programmers.co.kr/learn/courses/30/lessons/12945

def solution(n):
    answer = [0]*n
    for i in range(1, n+1):
        if i == 1 or i == 2:
            answer[i-1] = 1
        else:
            answer[i-1] = answer[i-2] + answer[i-3]

    return answer[n-1] % 1234567


# 코드 리뷰 후 수정본

def solution(n):
    answer = [0]*(n+1)
    answer[1] = 1
    for i in range(2, n+1):
        answer[i] = answer[i-1] + answer[i-2]
    return answer[n] % 1234567

