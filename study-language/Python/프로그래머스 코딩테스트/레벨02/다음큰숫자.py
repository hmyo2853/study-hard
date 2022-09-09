# https://school.programmers.co.kr/learn/courses/30/lessons/12911

def solution(n):
    one = binary(n).count('1')
    i = 1
    while True:
        if binary(n + i).count('1') == one:
            return n + i
        i += 1

def binary(x):
    b_num = ''
    while x // 2 != 0:
        b_num += str(x % 2)
        x = x // 2
    b_num += str(x % 2)
    return b_num[::-1]




# 코드 리뷰 후 수정본

def solution(n):
    one = bin(n).replace('0b','').count('1')
    i = 1
    while True:
        if bin(n+i).replace('0b','').count('1') == one:
            return n + i
        i += 1


