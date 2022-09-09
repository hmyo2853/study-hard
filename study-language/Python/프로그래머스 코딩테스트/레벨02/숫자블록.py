# https://school.programmers.co.kr/learn/courses/30/lessons/12923

def solution(begin, end):
    answer = [0]*(end - begin + 1)
    for i in range(begin, end + 1):
        for j in range(1, (end // 2) + 1):
            if i != j and i % j == 0:
                answer[i - begin] = j
    return answer

