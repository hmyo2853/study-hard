# https://school.programmers.co.kr/learn/courses/30/lessons/12939

def solution(s):
    slist = []
    for i in s.split(sep=" "):
        slist.append(int(i))
    slist.sort()
    return str(slist[0]) +' '+ str(slist[-1])
