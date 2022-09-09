# https://school.programmers.co.kr/learn/courses/30/lessons/12909

def solution(s):
    stack = []
    for i in s:
        if len(stack) == 0:
            stack.append(i)
        else:
            if stack[-1] == '(' and i == ')':
                stack.pop()
            else:
                stack.append(i)
    if len(stack) == 0:
        return True
    return False




# 코드 리뷰 후 수정본

def solution(s):
    stack = []
    for i in s:
        if i == ')':
            if not stack or stack[-1] == ')': # list empty = False
                return False # 무조건 False
            stack.pop()
        else:
            stack.append(i)
    return True if not stack else False