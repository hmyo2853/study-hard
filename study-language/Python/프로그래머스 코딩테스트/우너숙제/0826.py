'''
array에 들어있는 숫자 중 3개를 선택하는 경우의 수는 총 몇 개일까? 단, 중복된 경우는 제외
재귀 함수 짜보기 2
'''

stack = []

def solution(array, answer):
    if len(stack) == 3:
        answer += 1
        print(stack, answer)
    else:
        for num in array:
            if num not in stack:
                stack.append(num)       # 먼저 넣는다.
                answer = solution(array, answer)
                stack.pop()             # 제거
    
    return answer
    
print(solution([1, 2, 3, 4], answer=0))

'''
재귀 탈출 조건 3개 뽑으면 리턴


1)
함수0 실행
for a=1 if 1 없으므로 1 넣음 [1]
함수1 호출

함수1 실행
for a=1 if 1 패스 for a=2 if 2 없으므로 2 넣음 [1,2]
함수2 호출

함수2 실행
for a=1 if 1 패스 for a=2 if 2 패스 for a=3 if 3 없으므로 3 넣음 [1,2,3]
함수3 호출

함수3 실행
if stack 길이 3이므로 count + 1, return count=1
함수3 종료

다시 함수2 동작 [1,2,3]
3 제거 [1,2]
for a=4 if 4없으므로 4 넣음 [1,2,4]

함수3 실행
if stack 길이 3이므로 count + 1, return count=1
함수3 종료

다시 함수2 동작 [1,2,4]
4 제거 [1,2] for 종료
함수2 종료

다시 함수1 동작 [1,2]
2 제거 [1]
for a=3 if 3없으므로 3 넣음 [1,3]

함수2 호출
for a=1 if 1 패스 for a=2 if 2 없으므로 2 넣음 [1,3,2]
함수3 호출







'''
