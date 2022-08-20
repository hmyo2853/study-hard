# https://school.programmers.co.kr/learn/courses/30/lessons/12950

def solution(arr1, arr2):
    answer = [[0]*len(arr1[0]) for i in range(len(arr2))]
    for x in range(len(arr2)):
        if len(arr2[0]) != 1:
            for n in range(len(arr2[x])):
                answer[x][n] += arr1[x][n] + arr2[x][n]
        else:
            answer[x][0] += arr1[x][0] + arr2[x][0]
    return answer
    