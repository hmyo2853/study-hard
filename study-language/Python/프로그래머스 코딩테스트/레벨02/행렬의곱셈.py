# https://school.programmers.co.kr/learn/courses/30/lessons/12949

import numpy as np

def solution(arr1, arr2):
    a1 = np.array(arr1)
    a2 = np.array(arr2)
    answer = a1 @ a2
    return answer.tolist()


# for문으로 하드 코딩

def solution(arr1, arr2):
    answer = []
    for x in range(len(arr1)):
        arr = []
        for y in range(len(arr2[0])):
            plus = 0
            for z in range(len(arr2)):
                plus += (arr1[x][z] * arr2[z][y])
            arr.append(plus)
        answer.append(arr)
    return answer

