# https://school.programmers.co.kr/learn/courses/30/lessons/12901

def solution(price, money, count):
    answer = 0
    final = 0
    for times in range(1, count+1):
        final += price * times
    if money - final < 0:
        return abs(money - final)
    return answer

