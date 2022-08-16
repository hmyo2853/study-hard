# https://school.programmers.co.kr/learn/courses/30/lessons/12906

def solution(arr):
    num = len(arr)
    answer = []
    for idx in range(num):
        if idx > 0:
            if arr[idx-1] != arr[idx]:
                answer.append(arr[idx])
        else:
            answer.append(arr[idx])
    return answer

'''
조건1. idx가 0이 아닐경우 앞과 뒤를 비교해서 넣는다
조건2. -1 idx와 현재 idx가 같지 않다면 answer에 추가
조건3. 0 idx는 무조건 넣는다
'''