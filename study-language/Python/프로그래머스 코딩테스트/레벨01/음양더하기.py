# https://school.programmers.co.kr/learn/courses/30/lessons/76501

def solution(absolutes, signs):
    answer = 0
    for idx in range(len(signs)):
        if signs[idx] == True:
            answer += absolutes[idx]
        else :
            answer -= absolutes[idx]
    return answer

'''
조건1. True이면 더하고 True가 아니라면 뺀다.
'''