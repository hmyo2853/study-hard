# https://school.programmers.co.kr/learn/courses/30/lessons/12899

answer = []
word = [1, 2, 4]
def solution(n):
    if ((n-1)//3) != 0:
        solution((n-1)//3)
    x = (n-1) % 3
    answer.append(str(word[x]))
    return ''.join(answer)


# 코드 리뷰 후 수정


answer = []
word = [1, 2, 4]
def solution(n):
    a, b = divmod(n-1, 3)
    if a != 0:
        solution(a)
    answer.append(str(word[b]))
    return ''.join(answer)