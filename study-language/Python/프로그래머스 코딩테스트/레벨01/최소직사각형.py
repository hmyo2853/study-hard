# https://school.programmers.co.kr/learn/courses/30/lessons/86491

def solution(sizes):
    wallet_s = [0, 0] # w, h를 넣는다.
    
    for s in sizes:
        if s[0] < s[1]: # 세로형
            s.sort(reverse=True);
            print('***가로형으로 바꾼 세로형 ', s)
        
        for i in range(2):
            if s[i] > wallet_s[i]:
                wallet_s[i] = s[i]
    
    answer = wallet_s[0] * wallet_s[1]
    return answer


def solution(sizes):
    wallet_s = [0, 0] # w, h를 넣는다.
    
    for s in sizes:
        s.sort()
        wallet_s[0] = max(wallet_s[0], s[0])
        wallet_s[1] = max(wallet_s[1], s[1])
    
    return wallet_s[0] * wallet_s[1]