# https://school.programmers.co.kr/learn/courses/30/lessons/12916

def solution(s):
    s = s.lower()
    if s.count('p') == s.count('y'):
        return True
    else:
        return False