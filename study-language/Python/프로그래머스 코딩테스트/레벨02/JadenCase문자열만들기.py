# https://school.programmers.co.kr/learn/courses/30/lessons/12951

def solution(s):
    answer = ""
    for i in range(len(s)):
        if s[i].isdigit() == False: # 숫자가 아니다
            if s[i-1] == " " or i == 0: # 앞이 공백이거나 첫 문자라면 대문자로
                answer += s[i].upper()
            else:
                answer += s[i].lower() # 그게 아니라면 소문자로
        else:
            answer += s[i]
    return answer

