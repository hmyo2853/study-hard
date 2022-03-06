drum = [
  '######',
  '>#*###',
  '####*#',
  '#<#>>#',
  '>#*#*<',
  '######'
]

def solution(drum):
  result = 0
  for i in range(len(drum)):
    count = {'*':0}
    move = [0, i]
    while move[0] < 6:
      if count['*'] == 2:
        print('-----*가 2번 나와서 종료-----')
        break
      if drum[move[0]][move[1]] == '#':
        print('# 입니다')
        move[0] += 1
      elif drum[move[0]][move[1]] == '>':
        print('> 입니다')
        move[1] += 1
      elif drum[move[0]][move[1]] == '<':
        print('< 입니다')
        move[1] -= 1
      elif drum[move[0]][move[1]] == '*':
        print('* 입니다')
        count['*'] += 1
        move[0] += 1
      if move[0] == 6:
        print('---- 종료 ----')
        result += 1
  return result

print(solution(drum))
