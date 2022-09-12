# https://school.programmers.co.kr/learn/courses/30/lessons/12939

def solution(s):
    slist = []
    for i in s.split(sep=" "):
        slist.append(int(i))
    slist.sort()
    return str(slist[0]) +' '+ str(slist[-1])



# 코드 리뷰 후 수정본

def solution(s):
    slist = list(map(int, s.split()))
    slist.sort()
    return str(slist[0]) +' '+ str(slist[-1])

