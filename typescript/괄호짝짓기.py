for test_case in range(10):
  # 한번에 2줄을 10번씩 총 20줄을 가져온다
  leng = int(input())
  string = str(input())

  op = ['{', '[', '(', '<' ]
  cls = ['}', ']', ')', '>']

  result = 0

  for i in range(leng): # i는 0 ~ 첫줄 숫자-1 까지 카운트
    stack = []
    for s in string:
      if s in op: #열린괄호가 들어온다 (무조건 stack에 추가)
        stack.append(s)
      else: #닫힌괄호가 들어온다
        #조건 1. stack이 비어있으면 반복문 종료
        if len(stack) == 0:
          break
        #조건 2. 비어있지 않다면
        else:
          #닫힌괄호의 짝인 열린괄호가 stack에 있는지 확인한다
          if op[cls.index(s)] in stack: #있음
            stack.remove(op[cls.index(s)]) #제거
          else: #없음
            break
    
    if len(stack) == 0:
      result = 1

  print('#' + str(int(test_case) + 1) + ' ' + str(result))
