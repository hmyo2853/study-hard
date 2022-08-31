# https://school.programmers.co.kr/learn/courses/30/lessons/12940

def solution(n, m):
    answer = [0,0]
    answer[0] = maxnum(m, n)
    # 최소공배수 계산
    answer[1] = n*m/answer[0]
    return answer

def maxnum(a, b): # 최대공약수 구하기
    if a % b == 0:
        return b
    else:
        return maxnum(b, a % b)
