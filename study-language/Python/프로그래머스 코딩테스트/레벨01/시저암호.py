# https://school.programmers.co.kr/learn/courses/30/lessons/12926

'''
y 121 에서 10번째는 131, 122 - 121 = 1 만큼 10에서 뺴고, 즉 65 부터 9-1번째인 72, h로 돌아간다.
'''

def solution(s, n):
    answer = ''
    for i in s:
        if ord(i) == 32: #공백
            answer += i
        elif ord(i) < 91 : #대문자
            if 91 <= ord(i) + n:
                over = 65 + ((ord(i) + n) - 91)
                answer += chr(over)
            else:
                answer += chr(ord(i) + n)
        elif ord(i) < 123 : #소문자
            if 123 <= ord(i) + n:
                over = 97 +((ord(i) + n) - 123)
                answer += chr(over)
            else:
                answer += chr(ord(i) + n)
    return answer